"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "@/components/common/PageWrapper";
import Loader from "@/components/common/Loader";

export default function ThankYouPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPaymentAccess = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });

        const data = await res.json();

        if (!data.success) {
          router.push("/login");
          return;
        }

        if (!data.user.profileCompleted) {
          router.push("/complete-profile");
          return;
        }

        if (data.user.paymentStatus !== "paid") {
          router.push("/checkout");
          return;
        }
      } catch (error) {
        router.push("/login");
        return;
      } finally {
        setLoading(false);
      }
    };

    checkPaymentAccess();
  }, [router]);

  if (loading) {
  return (
    <PageWrapper>
      <Loader text="Loading your enrollment details..." />
    </PageWrapper>
  );
}

  return (
    <PageWrapper>
      <div className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm md:p-10">
        <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
          Enrollment Confirmed
        </span>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
          Welcome to InternCraft Academy 🎉
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Thank you for enrolling. Your payment has been received successfully and
          your internship onboarding is complete.
        </p>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-left">
          <h2 className="text-lg font-semibold text-slate-900">Next Steps</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600">
            <li>Join the official WhatsApp group</li>
            <li>Wait for your program start announcement</li>
            <li>Meeting links and recorded resources will be shared there</li>
            <li>Keep checking your email and WhatsApp for updates</li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Join WhatsApp Group
          </a>
          <a
            href="/"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}