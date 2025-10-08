export default function AdminPage() {
  const features = [
    'Manage rules catalog updates',
    'Review NDA demo requests',
    'Export leads to CSV',
    'Toggle feature flags per organization',
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">Admin Console</h1>
      <p className="mt-2 text-sm text-slate-400">
        Internal administrators manage catalog updates, demos, and feature flags here.
      </p>
      <ul className="mt-6 space-y-3 text-sm text-slate-200">
        {features.map((feature) => (
          <li key={feature} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
