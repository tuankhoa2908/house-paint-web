import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* Features Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Tại sao chọn chúng tôi?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Chúng tôi cung cấp giải pháp sơn tốt nhất cho mọi nhu cầu
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Feature 1 */}
                <div className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-800">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Chất lượng đảm bảo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Sản phẩm chính hãng, được kiểm tra kỹ lưỡng trước khi đến tay khách hàng
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-800">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Giá cả hợp lý
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cam kết giá tốt nhất thị trường với nhiều chương trình ưu đãi hấp dẫn
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="rounded-2xl border border-gray-200 p-8 transition-shadow hover:shadow-lg dark:border-gray-800">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Tư vấn chuyên nghiệp
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Đội ngũ tư vấn giàu kinh nghiệm, hỗ trợ 24/7 mọi thắc mắc của bạn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
