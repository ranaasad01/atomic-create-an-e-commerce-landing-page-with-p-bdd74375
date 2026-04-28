"use client";

import Link from "next/link";
import { ShoppingCart, Sparkles, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-700 transition-colors">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Lumière
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Shop
            </Link>
            <a href="/#newsletter" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Deals
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/?view=cart"
              className="relative p-2 rounded-full hover:bg-slate-100 transition-colors group"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700 group-hover:text-indigo-600 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 animate-bounce-once">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <a
            href="/#newsletter"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Deals
          </a>
          <Link
            href="/cart"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({totalItems})
          </Link>
        </div>
      )}
    </header>
  );
}
