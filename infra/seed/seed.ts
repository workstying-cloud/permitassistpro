import { PrismaClient, Plan } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const org = await prisma.org.upsert({
    where: { id: 'seed-org' },
    update: {},
    create: {
      id: 'seed-org',
      name: 'Demo Org',
      owner: {
        create: {
          email: 'owner@demo.permitassist.pro',
          name: 'Demo Owner',
        },
      },
      members: {
        create: {
          role: 'OWNER',
          user: {
            connect: {
              email: 'owner@demo.permitassist.pro',
            },
          },
        },
      },
    },
  });

  await prisma.rule.createMany({
    data: [
      {
        id: 'rule-food-vending',
        city: 'Toronto',
        sector: 'Restaurants',
        name: 'Mobile Food Vending Permit',
        description:
          'Required for mobile food vendors operating in Toronto. Includes health and zoning checks.',
        estFee: 575,
        dependencies: ['Business License', 'Food Handler Certificate'],
        docChecklist: ['Application Form', 'Vehicle Inspection Report'],
      },
      {
        id: 'rule-public-health',
        city: 'Toronto',
        sector: 'Restaurants',
        name: 'Public Health Inspection',
        description: 'Toronto Public Health inspection required prior to serving food.',
        estFee: 310,
        dependencies: ['Prep Area Plan'],
        docChecklist: ['Inspection Request Form'],
      },
    ],
    skipDuplicates: true,
  });

  await prisma.location.createMany({
    data: [
      {
        id: 'seed-location',
        orgId: org.id,
        city: 'Toronto',
        province: 'Ontario',
        country: 'Canada',
        sector: 'Restaurants',
        plan: Plan.MONITOR,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seed data applied.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
