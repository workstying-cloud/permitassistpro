interface Props {
  params: { locationId: string };
}

export default function ProofPackPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">Proof-Pack</h1>
      <p className="mt-2 text-sm text-slate-400">
        Download compliance artifacts, receipts, and inspection evidence for location {params.locationId}.
      </p>
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="text-sm text-slate-200">
          Proof-Pack generation is mocked in this MVP. Production systems deliver signed PDFs and
          shareable links.
        </p>
        <button className="mt-4 rounded-xl bg-emerald px-4 py-2 text-sm font-semibold text-white">
          Generate Proof-Pack
        </button>
      </div>
    </div>
  );
}
