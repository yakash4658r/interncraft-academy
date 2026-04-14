import { Suspense } from "react";
import CheckoutFlow from "@/components/checkout/CheckoutFlow";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading checkout...</div>}>
      <CheckoutFlow />
    </Suspense>
  );
}
