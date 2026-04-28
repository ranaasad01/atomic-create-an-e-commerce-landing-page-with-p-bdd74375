"use client";

import { categories } from "@/lib/data";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        const base = "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border";
        const activeClass = base + " bg-indigo-600 text-white border-indigo-600 shadow-sm";
        const inactiveClass = base + " bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600";
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={isActive ? activeClass : inactiveClass}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
