"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowLeft, CreditCard, Shield, Clock } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-28 pb-20">
        <div className="container-premium max-w-4xl">
          <FadeIn>
            <Link 
              href="/internships" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue browsing
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Complete your enrollment
              </h1>
              <p className="text-slate-600">
                You&apos;re one step away from starting your internship journey.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Details</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Card Information
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Card number"
                          className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full btn-primary py-4 text-lg"
                    >
                      Complete Payment
                    </button>
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Instant access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Internship Fee</span>
                      <span className="font-medium text-slate-900">₹4,999</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Platform Fee</span>
                      <span className="font-medium text-slate-900">₹0</span>
                    </div>
                    <div className="border-t border-slate-200 pt-4 flex justify-between">
                      <span className="font-semibold text-slate-900">Total</span>
                      <span className="font-bold text-xl text-slate-900">₹4,999</span>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-700">
                      <span className="font-semibold">14-day money-back guarantee.</span> 
                      Not satisfied? Get a full refund, no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
