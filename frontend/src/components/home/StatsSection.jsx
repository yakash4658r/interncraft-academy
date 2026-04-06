import Container from "@/components/common/Container";

export default function StatsSection() {
  const stats = [
    { label: "Learning Mode", value: "Live + Recorded" },
    { label: "Support", value: "WhatsApp Community" },
    { label: "Outcome", value: "Skills + Certificate" },
  ];

  return (
    <section className="py-8">
      <Container>
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}