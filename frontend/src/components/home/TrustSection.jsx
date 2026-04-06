import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function TrustSection() {
  const items = [
    "Beginner-Friendly Structure",
    "Premium Live Learning",
    "Recorded Access Included",
    "Project-Based Exposure",
    "Certificate on Completion",
    "Student Support Community",
  ];

  return (
    <section className="bg-white py-16">
      <Container>
        <SectionTitle
          title="Why Students Trust InternCraft Academy"
          subtitle="Built to offer clarity, quality learning, and a professional internship experience."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}