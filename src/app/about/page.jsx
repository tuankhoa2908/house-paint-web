import Image from "next/image";
import { SectionHeader } from "@/components/about/SectionHeader";
import { ProjectCard } from "@/components/about/ProjectCard";
import { StatsCard } from "@/components/about/StatsCard";
import { ValueCard } from "@/components/about/ValueCard";
import { OUTSTANDING_PROJECTS } from "@/constants/outstanding_projects";
import { 
    Building2, 
    Users, 
    ClipboardCheck, 
    Award,
    Target,
    Shield,
    Heart,
    Sparkles,
    TrendingUp,
    CheckCircle2,
    Clock
} from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/about-hero-bg.jpg"
                        alt="Professional Paint Store"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                </div>

                <div className="relative z-10 container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg mb-6">
                            Về Chúng Tôi
                        </h1>
                        <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto leading-relaxed">
                            Đối tác tin cậy trong mỗi công trình, mang đến giải pháp sơn hoàn hảo cho ngôi nhà của bạn
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: Company Capabilities */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeader
                        title="Năng Lực Của Chúng Tôi"
                        subtitle="Hơn 10 năm kinh nghiệm trong lĩnh vực sơn nhà, chúng tôi tự hào là đối tác tin cậy của hàng nghìn gia đình và doanh nghiệp"
                    />
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <Building2 className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Kinh nghiệm 10+ năm
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Đã hoàn thành hơn 500+ công trình lớn nhỏ trên khắp TP.HCM, từ nhà phố, biệt thự đến văn phòng và showroom.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Đội ngũ chuyên nghiệp
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        20+ thợ sơn có tay nghề cao, được đào tạo bài bản, luôn cập nhật xu hướng và kỹ thuật mới nhất.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Chất lượng hàng đầu
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Sử dụng sơn chính hãng từ các thương hiệu uy tín: Jotun, Nippon, Dulux, đảm bảo chất lượng và độ bền cao.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                                <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-900 p-8 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                            10+
                                        </div>
                                        <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                            Năm kinh nghiệm
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400">
                                            Phục vụ tận tâm từ 2014
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Outstanding Projects */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeader
                        title="Công Trình Nổi Bật"
                        subtitle="Những dự án tiêu biểu mà chúng tôi đã hoàn thành với chất lượng xuất sắc"
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {OUTSTANDING_PROJECTS.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Process */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeader
                        title="Quy Trình Làm Việc"
                        subtitle="4 bước đơn giản để mang đến kết quả hoàn hảo cho công trình của bạn"
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Tư vấn & Khảo sát",
                                description: "Gặp gỡ, tư vấn miễn phí và khảo sát thực tế tại công trình",
                                gradient: "from-blue-600 to-cyan-600"
                            },
                            {
                                step: "02",
                                title: "Báo giá & Lên kế hoạch",
                                description: "Cung cấp báo giá chi tiết và lên kế hoạch thi công cụ thể",
                                gradient: "from-purple-600 to-pink-600"
                            },
                            {
                                step: "03",
                                title: "Thi công chuyên nghiệp",
                                description: "Đội ngũ thợ lành nghề thực hiện theo đúng tiêu chuẩn kỹ thuật",
                                gradient: "from-orange-600 to-red-600"
                            },
                            {
                                step: "04",
                                title: "Nghiệm thu & Bảo hành",
                                description: "Nghiệm thu công trình và cam kết bảo hành dài hạn",
                                gradient: "from-green-600 to-emerald-600"
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                                    
                                    <div className={`text-6xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4 opacity-20`}>
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Core Values */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeader
                        title="Giá Trị Cốt Lõi"
                        subtitle="Những nguyên tắc mà chúng tôi luôn kiên định và phát triển"
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={Target}
                            title="Tận tâm"
                            description="Đặt lợi ích khách hàng lên hàng đầu, tư vấn chân thành và minh bạch trong mọi giao dịch."
                            gradient="from-blue-600 to-cyan-600"
                        />
                        <ValueCard
                            icon={Shield}
                            title="Chất lượng"
                            description="Cam kết chất lượng cao nhất trong từng công trình, sử dụng vật liệu chính hãng uy tín."
                            gradient="from-purple-600 to-pink-600"
                        />
                        <ValueCard
                            icon={Heart}
                            title="Uy tín"
                            description="Xây dựng niềm tin qua từng dự án, đúng hạn, đúng chất lượng, đúng cam kết."
                            gradient="from-orange-600 to-red-600"
                        />
                        <ValueCard
                            icon={Sparkles}
                            title="Sáng tạo"
                            description="Không ngừng học hỏi và áp dụng xu hướng mới, tạo điểm nhấn độc đáo cho mỗi công trình."
                            gradient="from-green-600 to-emerald-600"
                        />
                    </div>
                </div>
            </section>

            {/* Section 5: Stats */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeader
                        title="Những Con Số Ấn Tượng"
                        subtitle="Minh chứng cho sự phát triển và niềm tin từ khách hàng"
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <StatsCard
                            value="500+"
                            label="Công trình hoàn thành"
                            icon={Building2}
                            gradient="from-blue-600 to-purple-600"
                        />
                        <StatsCard
                            value="1000+"
                            label="Khách hàng hài lòng"
                            icon={Users}
                            gradient="from-purple-600 to-pink-600"
                        />
                        <StatsCard
                            value="20+"
                            label="Thợ chuyên nghiệp"
                            icon={ClipboardCheck}
                            gradient="from-orange-600 to-red-600"
                        />
                        <StatsCard
                            value="10+"
                            label="Năm kinh nghiệm"
                            icon={TrendingUp}
                            gradient="from-green-600 to-emerald-600"
                        />
                    </div>
                </div>
            </section>

            {/* Section 6: Commitment */}
            <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto max-w-7xl">
                    <SectionHeader
                        title="Cam Kết Của Chúng Tôi"
                        subtitle="Những đảm bảo mà bạn sẽ nhận được khi chọn chúng tôi"
                    />
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: CheckCircle2,
                                title: "Bảo hành dài hạn",
                                description: "Cam kết bảo hành từ 2-5 năm tùy theo loại sơn và phạm vi công trình, miễn phí sửa chữa trong thời gian bảo hành.",
                                gradient: "from-blue-600 to-purple-600"
                            },
                            {
                                icon: Clock,
                                title: "Đúng tiến độ",
                                description: "Tuân thủ nghiêm ngặt tiến độ đã cam kết, có phương án dự phòng để đảm bảo giao công trình đúng hạn.",
                                gradient: "from-purple-600 to-pink-600"
                            },
                            {
                                icon: Award,
                                title: "Giá cả hợp lý",
                                description: "Báo giá minh bạch, không phát sinh chi phí, cam kết giá tốt nhất thị trường với chất lượng tương xứng.",
                                gradient: "from-orange-600 to-red-600"
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                                
                                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 h-full">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
                                    
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-2xl animate-pulse" />
                        <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-12 text-center">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Sẵn sàng bắt đầu dự án của bạn?
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                                Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Liên hệ ngay
                                </a>
                                <a
                                    href="/products"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Xem sản phẩm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}