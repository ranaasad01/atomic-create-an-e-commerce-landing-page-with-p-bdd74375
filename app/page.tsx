"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import CartPage from "@/components/CartItem";

function PageContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  if (view === "cart") {
    return <CartPage />;
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" /></div>}>
      <PageContent />
    </Suspense>
  );
}
