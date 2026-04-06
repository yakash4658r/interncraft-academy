import { PROGRAM_DETAILS } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-slate-200">
          Limited Enrollment Access
        </span>

        <h2 className="mt-6 text-3xl font-bold md:text-4xl">Simple Pricing</h2>
        <p className="mt-3 text-slate-300">
          Get access to a premium internship experience designed for students who want practical learning and career direction.
        </p>

        <div className="mt-10 rounded-[28px] bg-white p-8 text-slate-900 shadow-xl md:p-10">
          <p className="text-sm uppercase tracking-wide text-slate-500">
            Enrollment Fee
          </p>

          <h3 className="mt-3 text-4xl font-bold md:text-5xl">
            {PROGRAM_DETAILS.price}
          </h3>

          <p className="mt-3 text-slate-600">
            Includes live classes, recorded sessions, certificate, projects, and support access.
          </p>

          <div className="mt-8 grid gap-3 text-left text-sm text-slate-700 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4">✔ Live Interactive Sessions</div>
            <div className="rounded-2xl bg-slate-50 p-4">✔ Recorded Session Access</div>
            <div className="rounded-2xl bg-slate-50 p-4">✔ Certificate of Completion</div>
            <div className="rounded-2xl bg-slate-50 p-4">✔ WhatsApp Community Support</div>
          </div>

          <a
            href="/login"
            className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Join Now
          </a>

          <p className="mt-4 text-xs text-slate-500">
            Coupon/referral code can be applied during checkout.
          </p>
        </div>
      </div>
    </section>
  );
}