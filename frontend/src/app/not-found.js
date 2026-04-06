export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900">404</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}