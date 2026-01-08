'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, className = '' }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link 
      href={href}
      className={`relative text-sm font-medium text-gray-700 transition-all duration-300 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-white ${className}`}
    >
      {children}
      {/* Animated underline for active tab */}
      <span 
        className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-700 dark:bg-cyan-400 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0'
        }`}
      />
    </Link>
  );
}
