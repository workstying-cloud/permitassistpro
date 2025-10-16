import type { Adapter, AdapterSession, AdapterUser, VerificationToken } from 'next-auth/adapters';
import type { Prisma, PrismaClient } from '@prisma/client';

type DefaultPrismaClient = PrismaClient | Prisma.TransactionClient;

type PrismaVerificationToken = Prisma.VerificationTokenGetPayload<{ select: typeof verificationTokenSelect }>;

type AdapterVerificationToken = VerificationToken & { id?: string };

const verificationTokenSelect = {
  identifier: true,
  token: true,
  expires: true,
} satisfies Record<keyof VerificationToken, true>;

export function PrismaAdapter(prisma: DefaultPrismaClient): Adapter {
  return {
    createUser: async (data) =>
      prisma.user.create({ data }) as unknown as Promise<AdapterUser>,

    getUser: (id) =>
      prisma.user.findUnique({ where: { id } }) as unknown as Promise<AdapterUser | null>,

    getUserByEmail: (email) =>
      prisma.user.findUnique({ where: { email } }) as unknown as Promise<AdapterUser | null>,

    async getUserByAccount({ provider, providerAccountId }) {
      const account = await prisma.account.findUnique({
        where: { provider_providerAccountId: { provider, providerAccountId } },
        select: { user: true },
      });

      return (account?.user ?? null) as unknown as AdapterUser | null;
    },

    updateUser: (data) =>
      prisma.user.update({
        where: { id: data.id ?? undefined },
        data,
      }) as unknown as Promise<AdapterUser>,

    deleteUser: (id) =>
      prisma.user.delete({ where: { id } }) as unknown as Promise<AdapterUser | null>,

    linkAccount: (data) =>
      prisma.account.create({ data }) as unknown as Promise<void>,

    unlinkAccount: ({ provider, providerAccountId }) =>
      prisma.account.delete({
        where: { provider_providerAccountId: { provider, providerAccountId } },
      }) as unknown as Promise<void>,

    createSession: (data) =>
      prisma.session.create({ data }) as unknown as Promise<AdapterSession>,

    getSessionAndUser: (sessionToken) =>
      prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      }) as unknown as Promise<{ session: AdapterSession; user: AdapterUser } | null>,

    updateSession: (data) =>
      prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      }) as unknown as Promise<AdapterSession | null>,

    deleteSession: (sessionToken) =>
      prisma.session.delete({ where: { sessionToken } }) as unknown as Promise<AdapterSession | null>,

    createVerificationToken: async (data) =>
      mapVerificationToken(
        await prisma.verificationToken.create({ data, select: verificationTokenSelect })
      ),

    async useVerificationToken(identifierToken) {
      try {
        const verificationToken = await prisma.verificationToken.delete({
          where: {
            identifier_token: {
              identifier: identifierToken.identifier,
              token: identifierToken.token,
            },
          },
          select: verificationTokenSelect,
        });

        return mapVerificationToken(verificationToken);
      } catch (error) {
        if (isNotFoundError(error)) {
          return null;
        }
        throw error;
      }
    },
  };
}

function mapVerificationToken(token: PrismaVerificationToken): AdapterVerificationToken {
  return {
    identifier: token.identifier,
    token: token.token,
    expires: token.expires,
  } satisfies AdapterVerificationToken;
}

function isNotFoundError(error: unknown): error is { code: string } {
  return Boolean(error) && typeof error === 'object' && 'code' in error && (error as { code: string }).code === 'P2025';
}
