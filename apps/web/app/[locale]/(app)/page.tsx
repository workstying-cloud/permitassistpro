import Link from 'next/link';

interface Props {
  params: { locale: string };
}

export default function AppLanding({ params }: Props) {
  const links = [
    { href: 'dashboard', title: 'Dashboard overview' },
    { href: 'scan', title: 'Rules scanner' },
    { href: 'filing/sample', title: 'Guided filing' },
    { href: 'proof-pack/sample-location', title: 'Proof-Pack download' },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">PermitAssist Workspace</h1>
      <p className="mt-2 text-sm text-slate-400">
        Choose a module to manage rules, filings, Proof-Packs, and renewals.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={`/${params.locale}/${link.href}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
