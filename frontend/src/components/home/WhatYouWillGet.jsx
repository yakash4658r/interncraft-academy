export default function WhatYouWillGet() {
  const benefits = [
    "Live interactive classes",
    "Recorded session access",
    "Internship certificate",
    "Project-based learning",
    "Practical exposure",
    "Community support",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">What You Will Get</h2>
          <p className="mt-3 text-slate-600">
            Designed to provide clarity, confidence, and real value.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-medium text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}