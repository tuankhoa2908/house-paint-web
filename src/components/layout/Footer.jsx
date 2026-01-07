import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/next.svg"
                alt="Sơn Bình Minh"
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
            <div className='flex gap-4 mt-4'>
                <FaFacebook className='text-2xl'/>
                <FaInstagram className='text-2xl'/>
                <FaYoutube className='text-2xl'/>
                <FaTiktok className='text-2xl'/>
            </div>
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

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
              Chính sách
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/policy/warranty" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Chính sách bảo hành
                </Link>
              </li>
              <li>
                <Link 
                  href="/policy/shipping" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Chính sách giao hàng
                </Link>
              </li>
              <li>
                <Link 
                  href="/policy/legal" 
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Chính sách pháp lý
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
                <span className="block">Email: sonbinhminh2014@gmail.com</span>
              </li>
              <li>
                <span className="block">
                  Địa chỉ: Đường Trần Hưng Đạo, Xã Ý Yên, TP.Ninh Bình
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 pb-0 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Sơn Bình Minh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
