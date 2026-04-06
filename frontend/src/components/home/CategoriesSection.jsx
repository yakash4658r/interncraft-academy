import { PROGRAM_DETAILS } from "@/lib/constants";

export default function CategoriesSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Categories</h2>
          <p className="mt-3 text-slate-600">
            Explore the learning domains included in the program.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_DETAILS.categories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}