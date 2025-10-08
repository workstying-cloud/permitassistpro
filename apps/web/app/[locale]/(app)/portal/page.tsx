import Link from 'next/link';

export default function PortalPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
        <h1 className="text-2xl font-semibold text-white">Secure Portal</h1>
        <p className="mt-2 text-sm text-slate-400">
          Sign in with a magic link to access your compliance workspace. Multi-factor support is
          coming soon.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm text-slate-300">
              Work email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
              placeholder="you@company.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald px-4 py-2 text-sm font-semibold text-white"
          >
            Email me a magic link
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500">
          Need help? <Link href="mailto:support@permitassist.pro">Contact support</Link>
        </p>
      </div>
    </div>
  );
}
