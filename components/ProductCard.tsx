"use client";

import Image from "next/image";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= Math.round(rating);
        return (
          <Star
            key={star}
            className={filled ? "w-3.5 h-3.5 text-amber-400 fill-amber-400" : "w-3.5 h-3.5 text-slate-300 fill-slate-300"}
          />
        );
      })}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const badgeClass = product.badge === "Sale"
    ? "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500 text-white"
    : "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400 text-slate-900";

  const badgeLabel = product.badge === "Sale" && discount
    ? "-" + discount + "%"
    : product.badge;

  const btnClass = added
    ? "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-emerald-500 text-white"
    : "w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-md";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span className={badgeClass}>{badgeLabel}</span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button onClick={handleAddToCart} className={btnClass}>
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
