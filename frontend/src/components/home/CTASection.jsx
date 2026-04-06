export default function CTASection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-white shadow-lg">
          <h2 className="text-3xl font-bold">
            Ready to start your internship journey?
          </h2>
          <p className="mt-4 text-blue-100">
            Join InternCraft Academy and build practical skills with expert-led
            learning, guided projects, and professional support.
          </p>
          <a
            href="/login"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Enroll Now
          </a>

          <p className="mt-4 text-xs text-blue-100">
            Need help? Use the chatbot or official support channels for quick answers.
          </p>
        </div>
      </div>
    </section>
  );
}