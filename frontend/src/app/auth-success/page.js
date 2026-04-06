"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";

export default function AuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
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

        if (data.user.paymentStatus === "paid") {
          router.push("/thank-you");
          return;
        }

        router.push("/checkout");
      } catch (error) {
        router.push("/login");
      }
    };

    checkUser();
  }, [router]);

  return <Loader text="Redirecting you securely..." />;
}