import { PROGRAM_DETAILS } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            {PROGRAM_DETAILS.brandName}
          </h1>
          <p className="text-xs text-slate-500">Premium Internship Platform</p>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#program-details" className="text-sm text-slate-600 hover:text-slate-900">
            Program
          </a>
          <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">
            Features
          </a>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">
            Pricing
          </a>
        </nav>

        <a
          href="/login"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Join Now
        </a>
      </div>
    </header>
  );
}