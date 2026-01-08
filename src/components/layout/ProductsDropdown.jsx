'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith('/products');

  const products = [
    { name: 'Sơn Jotun', href: '/products?category=jotun' },
    { name: 'Sơn ALKAZA', href: '/products?category=alkaza' },
    { name: 'Sơn đường dẻo nhiệt', href: '/products?category=duong-deo-nhiet' }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Products Link */}
      <Link 
        href="/products"
        className="relative text-sm font-medium text-gray-700 transition-all duration-300 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-white flex items-center gap-1"
      >
        Sản phẩm
        {/* Dropdown arrow */}
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {/* Animated underline for active tab */}
        <span 
          className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-700 dark:bg-cyan-400 transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0'
          }`}
        />
      </Link>

      {/* Dropdown Menu */}
      <div 
        className={`absolute top-full left-0 mt-2 w-56 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-200 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
            >
              {product.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
