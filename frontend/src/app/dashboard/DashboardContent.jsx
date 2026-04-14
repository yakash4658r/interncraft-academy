"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PageWrapper from "@/components/common/PageWrapper";
import Loader from "@/components/common/Loader";
import { Copy, Share2, Wallet, Users, Gift } from "lucide-react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://learnmythos.app/api";

export default function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [booting, setBooting] = useState(true);
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [showWaModal, setShowWaModal] = useState(false);
  
  // Referral state
  const [referralStats, setReferralStats] = useState(null);
  const [referralLoading, setReferralLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const openWhatsapp = useCallback(() => {
    if (!course?.whatsappUrl) return;
    window.open(course.whatsappUrl, "_blank", "noopener,noreferrer");
  }, [course]);

  // Load referral stats
  useEffect(() => {
    async function loadReferralStats() {
      try {
        const res = await fetch(`${apiUrl}/referral/stats`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setReferralStats(data.stats);
        }
      } catch (error) {
        console.error("Failed to load referral stats:", error);
      } finally {
        setReferralLoading(false);
      }
    }
    
    if (!booting) {
      loadReferralStats();
    }
  }, [booting]);

  // Copy referral code
  const copyReferralCode = async () => {
    if (!referralStats?.referralCode) return;
    
    const referralLink = `${window.location.origin}?ref=${referralStats.referralCode}`;
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Share on WhatsApp
  const shareOnWhatsApp = () => {
    if (!referralStats?.referralCode) return;
    
    const referralLink = `${window.location.origin}?ref=${referralStats.referralCode}`;
    const message = encodeURIComponent(
      `Hey! Join Learn Mythos internship program and get 20% OFF using my referral code: ${referralStats.referralCode}\n\n${referralLink}\n\nLimited spots available! 🔥`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoadError("");
      try {
        const meRes = await fetch(`${apiUrl}/auth/me`, { credentials: "include" });
        const me = await meRes.json();

        if (!me.success || !me.user) {
          router.push("/login");
          return;
        }

        if (!me.user.profileCompleted) {
          router.push("/complete-profile");
          return;
        }

        const orderId = searchParams.get("order_id");
        if (orderId) {
          const verifyRes = await fetch(`${apiUrl}/payments/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ orderId }),
          });
          const verifyData = await verifyRes.json();
          if (!cancelled && verifyData.success && verifyData.paymentStatus === "success") {
            try {
              sessionStorage.setItem("interncraft_open_wa_prompt", "1");
            } catch {
              /* ignore */
            }
            router.replace("/dashboard");
            return;
          }
          if (!cancelled) {
            setLoadError(
              verifyData.message ||
                "Payment is not confirmed yet. Wait a minute and open Dashboard from the menu, or contact support."
            );
          }
          return;
        }

        const mePaid = await fetch(`${apiUrl}/auth/me`, { credentials: "include" });
        const paidJson = await mePaid.json();
        if (!paidJson.success || paidJson.user?.paymentStatus !== "paid") {
          router.push("/checkout");
          return;
        }

        const enRes = await fetch(`${apiUrl}/users/enrollment`, {
          credentials: "include",
        });
        const en = await enRes.json();

        if (!enRes.ok || !en.success) {
          if (!cancelled) {
            setLoadError(en.message || "Could not load your dashboard.");
          }
          return;
        }

        if (!cancelled) {
          setUser(en.user);
          setCourse(en.course);
        }

        let prompt = false;
        try {
          prompt = sessionStorage.getItem("interncraft_open_wa_prompt") === "1";
          if (prompt) sessionStorage.removeItem("interncraft_open_wa_prompt");
        } catch {
          /* ignore */
        }

        if (!cancelled && prompt) {
          setShowWaModal(true);
        }
      } catch {
        if (!cancelled) setLoadError("Something went wrong. Try again.");
      } finally {
        if (!cancelled) setBooting(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [router, searchParams]);

  if (booting) {
    return (
      <PageWrapper>
        <Loader text="Opening your dashboard…" />
      </PageWrapper>
    );
  }

  if (loadError) {
    return (
      <PageWrapper>
        <div className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <p className="text-red-700">{loadError}</p>
          <button
            type="button"
            onClick={() => router.push("/profile")}
            className="mt-6 rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white"
          >
            Back to profile
          </button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Student dashboard</h1>
          <p className="mt-2 text-slate-600">
            Your enrollment details and cohort access.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Your details</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-slate-500">Name</dt>
                <dd className="font-medium text-slate-900">{user?.fullName}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd className="font-medium text-slate-900">{user?.email}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Phone</dt>
                <dd className="font-medium text-slate-900">{user?.phone || "—"}</dd>
              </div>
              <div>
                <dt className="text-slate-500">College</dt>
                <dd className="font-medium text-slate-900">
                  {user?.collegeName || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Course / Degree</dt>
                <dd className="font-medium text-slate-900">
                  {user?.courseDegree || "—"}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Year</dt>
                <dd className="font-medium text-slate-900">{user?.year || "—"}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Payment</dt>
                <dd className="font-medium text-green-700">Paid</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Your track</h2>
            {course ? (
              <div className="mt-4">
                <p className="text-xl font-bold text-slate-900">{course.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {course.whatsappUrl ? (
                    <button
                      type="button"
                      onClick={openWhatsapp}
                      className="rounded-full bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-green-700"
                    >
                      Join WhatsApp cohort
                    </button>
                  ) : (
                    <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
                      Your WhatsApp invite link is not configured yet. Check your
                      email or contact support — you can still use this dashboard.
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Back to home
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-sm text-slate-600">
                No course track is linked to this payment. Please contact support
                with your payment receipt.
              </p>
            )}
          </div>
        </div>

        {/* Referral Section */}
        {!referralLoading && referralStats && (
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Gift className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Refer & Earn</h2>
                <p className="text-sm text-slate-600">Invite friends and earn ₹150 per successful referral</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 text-center">
                <Wallet className="h-5 w-5 text-green-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-slate-900">₹{referralStats.walletBalance || 0}</p>
                <p className="text-xs text-slate-500">Wallet Balance</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <Users className="h-5 w-5 text-indigo-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-slate-900">{referralStats.successfulReferrals || 0}</p>
                <p className="text-xs text-slate-500">Successful</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <Gift className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-slate-900">₹{referralStats.totalEarnings || 0}</p>
                <p className="text-xs text-slate-500">Total Earned</p>
              </div>
            </div>

            {/* Referral Code */}
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-2">Your Referral Code</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-100 rounded-lg px-4 py-3">
                  <p className="font-mono text-lg font-bold text-slate-900 tracking-wider">
                    {referralStats.referralCode}
                  </p>
                </div>
                <button
                  onClick={copyReferralCode}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Copy referral link"
                >
                  <Copy className="h-4 w-4" />
                  <span className="text-sm font-medium">{copied ? "Copied!" : "Copy"}</span>
                </button>
                <button
                  onClick={shareOnWhatsApp}
                  className="flex items-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  title="Share on WhatsApp"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Share this code with friends. They get 20% OFF and you earn ₹150 when they complete payment!
              </p>
            </div>
          </div>
        )}
      </div>

      {showWaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            className="max-w-md rounded-2xl bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-title"
          >
            <h2 id="wa-title" className="text-xl font-bold text-slate-900">
              Join your batch on WhatsApp
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {course
                ? `You enrolled in ${course.name}. Accept to open WhatsApp and join the official group for this track.`
                : "Your cohort link will appear here once configured."}
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowWaModal(false)}
                className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Later
              </button>
              <button
                type="button"
                onClick={() => {
                  openWhatsapp();
                  setShowWaModal(false);
                }}
                disabled={!course?.whatsappUrl}
                className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Accept & open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
