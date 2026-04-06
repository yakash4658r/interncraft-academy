export default function ProgramDetails() {
  return (
    <section id="program-details" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Program Details</h2>
          <p className="mt-3 text-slate-600">
            A beginner-friendly internship structure designed for student growth.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Internship Structure
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A guided learning format with practical sessions, structured modules,
              and step-by-step support for students.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Learning Outcomes
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Students will gain exposure to modern tools, practical concepts,
              project experience, and confidence to build their profile.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Beginner Friendly
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Even if students are starting from zero, the program is designed in a
              simple and approachable way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}