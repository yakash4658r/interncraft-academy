"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "@/components/common/PageWrapper";
import Loader from "@/components/common/Loader";

export default function CheckoutPage() {
  const router = useRouter();

  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [pricing, setPricing] = useState({
    originalAmount: 999,
    discountAmount: 0,
    finalAmount: 999,
  });
  const [loading, setLoading] = useState(false);
  const [paying, setPaying] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const userRes = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        const userData = await userRes.json();

        if (!userData.success) {
          router.push("/login");
          return;
        }

        if (!userData.user.profileCompleted) {
          router.push("/complete-profile");
          return;
        }

        if (userData.user.paymentStatus === "paid") {
          router.push("/thank-you");
          return;
        }
      } catch (error) {
        router.push("/login");
        return;
      } finally {
        setPageLoading(false);
      }
    };

    checkAccess();
  }, [router]);

  const handleApplyCoupon = async () => {
    if (!coupon.trim()) {
      setMessage("Please enter a coupon code");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/coupons/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ code: coupon }),
      });

      const data = await res.json();

      if (data.success) {
        setPricing(data.pricing);
        setMessage(data.message);
      } else {
        setMessage(data.message || "Invalid coupon");
      }
    } catch (error) {
      setMessage("Failed to apply coupon");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      setPaying(true);
      setMessage("");

      const res = await fetch("http://localhost:5000/api/payments/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          couponCode: coupon,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message || "Failed to create payment");
        setPaying(false);
        return;
      }

      const cashfree = window.Cashfree({
        mode: "sandbox",
      });

      await cashfree.checkout({
        paymentSessionId: data.paymentSessionId,
        redirectTarget: "_self",
      });

      const verifyRes = await fetch("http://localhost:5000/api/payments/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          orderId: data.orderId,
        }),
      });

      const verifyData = await verifyRes.json();

      if (verifyData.success && verifyData.paymentStatus === "success") {
        router.push("/thank-you");
      } else {
        setMessage(verifyData.message || "Payment verification failed");
      }
    } catch (error) {
      setMessage("Payment failed or cancelled");
    } finally {
      setPaying(false);
    }
  };

  if (pageLoading) {
  return (
    <PageWrapper>
      <Loader text="Loading checkout..." />
    </PageWrapper>
  );
}

  return (
    <PageWrapper>
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
          <p className="mt-2 text-slate-600">
            Review your enrollment and proceed securely to payment.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Program</p>
              <p className="mt-1 font-semibold text-slate-900">
                InternCraft Academy Internship Program
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Learning Mode</p>
              <p className="mt-1 font-semibold text-slate-900">
                Live + Recorded
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">Included</p>
              <p className="mt-1 font-semibold text-slate-900">
                Classes, Projects, Certificate, Support
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Program Fee</span>
              <span className="font-medium text-slate-900">
                ₹{pricing.originalAmount}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Discount</span>
              <span className="font-medium text-green-600">
                - ₹{pricing.discountAmount}
              </span>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Coupon / Referral Code
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter code"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none"
                />
                <button
                  onClick={handleApplyCoupon}
                  disabled={loading}
                  className="rounded-xl bg-slate-200 px-4 py-3 text-sm font-medium text-slate-900"
                >
                  {loading ? "Applying..." : "Apply"}
                </button>
              </div>
            </div>

            {message && <p className="text-sm text-slate-600">{message}</p>}

            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="text-xl font-bold text-slate-900">
                  ₹{pricing.finalAmount}
                </span>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={paying}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-50"
            >
              {paying ? "Processing..." : "Proceed to Pay"}
            </button>

            <p className="text-center text-xs text-slate-500">
              Secure payment powered by Cashfree.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}