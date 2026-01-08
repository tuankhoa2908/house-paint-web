import FeatureCard from './FeatureCard';

const features = [
  {
    id: 1,
    icon: "M5 13l4 4L19 7",
    iconBgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "Chất lượng đảm bảo",
    description: "Sản phẩm chính hãng, được kiểm tra kỹ lưỡng trước khi đến tay khách hàng"
  },
  {
    id: 2,
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    iconBgColor: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
    title: "Giá cả hợp lý",
    description: "Cam kết giá tốt nhất thị trường với nhiều chương trình ưu đãi hấp dẫn"
  },
  {
    id: 3,
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    iconBgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
    title: "Tư vấn chuyên nghiệp",
    description: "Đội ngũ tư vấn giàu kinh nghiệm, hỗ trợ 24/7 mọi thắc mắc của bạn"
  }
];

export default function FeaturesSection() {
  return (
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
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                iconBgColor={feature.iconBgColor}
                iconColor={feature.iconColor}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
