import Link from "next/link";
import { Sparkles, Twitter, Github, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lumière</span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Premium products curated for modern living. Quality you can trust, prices you&apos;ll love.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" aria-label="Github" className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a href="#" aria-label="Email" className="w-9 h-9 bg-slate-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#products" className="hover:text-indigo-400 transition-colors">All Products</a></li>
              <li><a href="#products" className="hover:text-indigo-400 transition-colors">Electronics</a></li>
              <li><a href="#products" className="hover:text-indigo-400 transition-colors">Accessories</a></li>
              <li><a href="#products" className="hover:text-indigo-400 transition-colors">Footwear</a></li>
              <li><a href="#newsletter" className="hover:text-indigo-400 transition-colors">Sale Items</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2024 Lumière. All rights reserved.</p>
          <p className="text-slate-500">
            Free shipping on orders over $75 · 30-day returns · Secure checkout
          </p>
        </div>
      </div>
    </footer>
  );
}
