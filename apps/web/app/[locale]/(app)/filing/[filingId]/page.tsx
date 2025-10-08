interface Props {
  params: { filingId: string };
}

const checklist = [
  'Complete municipal application',
  'Upload required documents',
  'Schedule inspection window',
  'Collect payment receipt',
];

export default function FilingPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">Guided Filing</h1>
      <p className="mt-2 text-sm text-slate-400">
        Step-by-step guidance for filing {params.filingId}. Uploads are virus-scanned and stored with
        signed URLs.
      </p>
      <ul className="mt-6 space-y-4">
        {checklist.map((item) => (
          <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald text-xs font-bold text-white">
              ✓
            </span>
            <div>
              <p className="text-sm text-white">{item}</p>
              <p className="text-xs text-slate-500">Attach receipts and notes to keep lenders aligned.</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
