import RulesScanForm from '@/components/dashboard/rules-scan-form';

interface Props {
  params: { locale: string };
}

export default function ScanPage({ params }: Props) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-white">Rules Scan</h1>
      <p className="mt-2 text-sm text-slate-400">
        Select a location and sector to preview permits, dependencies, and estimated fees.
      </p>
      <RulesScanForm locale={params.locale} />
    </div>
  );
}
