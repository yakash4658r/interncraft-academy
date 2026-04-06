import { PROGRAM_DETAILS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Structured • Practical • Student-Focused
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Launch Your Career with a Trusted Internship Program
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            InternCraft Academy helps students gain practical exposure through live
            classes, recorded sessions, guided projects, and completion certificates.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/login"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Join Now
            </a>
            <a
              href="#program-details"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View Program Details
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>✔ Beginner Friendly</span>
            <span>✔ Live + Recorded</span>
            <span>✔ Certificate Included</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-900">Program Snapshot</h3>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Enrollment Open
            </span>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Duration</p>
              <p className="mt-1 font-semibold text-slate-900">
                {PROGRAM_DETAILS.duration}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Total Classes</p>
              <p className="mt-1 font-semibold text-slate-900">
                {PROGRAM_DETAILS.totalClasses}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Mode</p>
              <p className="mt-1 font-semibold text-slate-900">
                {PROGRAM_DETAILS.mode}
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="text-sm text-blue-700">Internship Categories</p>
              <p className="mt-1 font-semibold text-slate-900">
                AI • Digital Marketing • Editing • Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}