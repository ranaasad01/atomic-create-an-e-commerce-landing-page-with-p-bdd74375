"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-indigo-600 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Get Exclusive Deals
        </h2>
        <p className="text-indigo-200 text-lg mb-8">
          Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/20 border border-white/30 rounded-2xl px-8 py-4 text-white font-semibold text-lg">
            <Check className="w-6 h-6 text-amber-400" />
            You&apos;re on the list! Check your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl transition-all duration-200 text-sm whitespace-nowrap shadow-lg hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-4 text-indigo-300 text-xs">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
