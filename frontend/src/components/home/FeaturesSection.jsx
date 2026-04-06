export default function FeaturesSection() {
  const features = [
    "Live Classes",
    "Recorded Sessions",
    "Certificate",
    "Projects",
    "WhatsApp Support",
  ];

  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Features</h2>
          <p className="mt-3 text-slate-600">
            Everything included to make the internship experience complete.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
            >
              <p className="font-medium text-slate-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}