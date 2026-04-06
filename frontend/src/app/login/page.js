import PageWrapper from "@/components/common/PageWrapper";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <PageWrapper>
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Student Access Portal
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Continue with Google to Start Your Enrollment
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Sign in securely using your Google account. After login, you will
            complete your student profile and continue to payment.
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-600">
            <p>✔ Secure Google Sign-In</p>
            <p>✔ Quick Student Onboarding</p>
            <p>✔ Smooth Payment & Enrollment Flow</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Login</h2>
          <p className="mt-2 text-slate-600">
            Use your Google account to continue.
          </p>

          <button
            onClick={handleGoogleLogin}
            className="mt-8 flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}