'use client';

import { FormEvent, useState } from 'react';

interface Props {
  locale: string;
}

export default function RequestDemoForm({ locale }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': locale,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit lead');
      }

      setStatus('success');
      setMessage('Thanks! Our team will reach out under NDA within one business day.');
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong. Please email support@permitassist.pro.');
    }
  }

  return (
    <form
      id="demo"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100/20 bg-slate-950/80 p-6 shadow-xl"
    >
      <h2 className="text-lg font-semibold text-white">Request a confidential demo</h2>
      <p className="mt-2 text-xs text-slate-400">
        Every walkthrough is NDA-protected and tailored to your municipality.
      </p>
      <div className="mt-4 space-y-3">
        <input
          name="email"
          type="email"
          required
          placeholder="Work email"
          className="w-full rounded-xl border border-slate-700 bg-midnight px-3 py-2 text-sm text-white"
        />
        <input
          name="name"
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border border-slate-700 bg-midnight px-3 py-2 text-sm text-white"
        />
        <input
          name="orgName"
          type="text"
          placeholder="Organization"
          className="w-full rounded-xl border border-slate-700 bg-midnight px-3 py-2 text-sm text-white"
        />
        <input
          name="city"
          type="text"
          placeholder="Primary city"
          className="w-full rounded-xl border border-slate-700 bg-midnight px-3 py-2 text-sm text-white"
        />
        <select
          name="sector"
          className="w-full rounded-xl border border-slate-700 bg-midnight px-3 py-2 text-sm text-white"
        >
          <option value="">Select sector</option>
          <option>Agriculture</option>
          <option>Construction</option>
          <option>Healthcare</option>
          <option>Restaurants</option>
          <option>Retail</option>
          <option>Logistics</option>
          <option>Salon</option>
          <option>Tech</option>
        </select>
        <textarea
          name="message"
          placeholder="What would you like to automate?"
          className="h-20 w-full rounded-xl border border-slate-700 bg-midnight px-3 py-2 text-sm text-white"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-4 w-full rounded-xl bg-emerald px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
      >
        {status === 'loading' ? 'Sending…' : 'Request Demo'}
      </button>
      {status !== 'idle' && (
        <p className="mt-3 text-xs text-slate-300" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
