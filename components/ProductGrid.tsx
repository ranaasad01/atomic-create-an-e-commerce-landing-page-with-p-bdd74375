"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-1">
              Our Collection
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Featured Products
            </h2>
          </div>
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg font-medium">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
