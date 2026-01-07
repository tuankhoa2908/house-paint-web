import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/next.svg"
                alt="House Paint Store"
                width={120}
                height={24}
                className="dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600 dark:text-gray-400">
              Cung cấp các sản phẩm sơn chất lượng cao cho ngôi nhà của bạn. 
              Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến 
              giải pháp tốt nhất cho khách hàng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              Liên kết
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/products" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <span className="block">Hotline: 1900-xxxx</span>
              </li>
              <li>
                <span className="block">Email: info@housepaint.com</span>
              </li>
              <li>
                <span className="block">
                  Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} House Paint Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
