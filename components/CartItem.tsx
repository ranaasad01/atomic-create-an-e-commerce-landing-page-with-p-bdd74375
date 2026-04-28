"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft, ArrowRight, Lock, ShoppingCart, Package } from "lucide-react";
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItemProps {
  item: CartItemType;
}

export function CartItemRow({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-0.5">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-slate-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
        {product.originalPrice && (
          <p className="text-xs text-slate-400 line-through">
            ${(product.originalPrice * quantity).toFixed(2)}
          </p>
        )}
      </div>

      <div className="flex flex-col items-end justify-between gap-2">
        <button
          onClick={() => removeFromCart(product.id)}
          className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1 border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-1.5 hover:bg-slate-100 transition-colors text-slate-600"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-semibold text-slate-900">
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-1.5 hover:bg-slate-100 transition-colors text-slate-600"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function OrderSummary() {
  const { subtotal, totalItems, clearCart } = useCart();
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm text-slate-600">
          <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-emerald-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm text-slate-600">
          <span>Estimated Tax</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
        {shipping > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
            Add <strong>${(75 - subtotal).toFixed(2)}</strong> more to get free shipping!
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 pt-4 mb-6">
        <div className="flex justify-between font-bold text-slate-900">
          <span>Total</span>
          <span className="text-xl">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mb-3">
        <Lock className="w-4 h-4" />
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <button
        onClick={clearCart}
        className="w-full text-sm text-slate-400 hover:text-rose-500 transition-colors py-2"
      >
        Clear Cart
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
        <Lock className="w-3 h-3" />
        <span>Secure SSL encrypted checkout</span>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items } = useCart();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-indigo-600" />
            Your Cart
            {items.length > 0 && (
              <span className="text-lg font-medium text-slate-400">
                ({items.length} {items.length === 1 ? "item" : "items"})
              </span>
            )}
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-sm">
              Looks like you haven&apos;t added anything yet. Browse our collection and find something you love!
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-2">Cart Items</h2>
                <div>
                  {items.map((item) => (
                    <CartItemRow key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: "🚚", title: "Free Shipping", desc: "On orders over $75" },
                  { icon: "↩️", title: "Easy Returns", desc: "30-day return policy" },
                  { icon: "🔒", title: "Secure Payment", desc: "SSL encrypted checkout" },
                ].map((badge) => (
                  <div key={badge.title} className="bg-white rounded-xl border border-slate-100 p-4 flex items-center gap-3">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{badge.title}</p>
                      <p className="text-xs text-slate-500">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
