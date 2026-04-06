import { PROGRAM_DETAILS } from "@/lib/constants";

export default function ProgramOverview() {
  const items = [
    { label: "Duration", value: PROGRAM_DETAILS.duration },
    { label: "Total Classes", value: PROGRAM_DETAILS.totalClasses },
    { label: "Mode", value: PROGRAM_DETAILS.mode },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Program Overview</h2>
          <p className="mt-3 text-slate-600">
            Everything students need to know before getting started.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}