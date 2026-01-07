import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="House Paint Store"
              width={120}
              height={24}
              priority
              className="dark:invert"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Trang chủ
          </Link>
          <Link 
            href="/products" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Sản phẩm
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Về chúng tôi
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Liên hệ
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Nhận tư vấn
          </Link>
        </div>
      </nav>
    </header>
  );
}
