import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: 'Chính sách pháp lý | Sơn Bình Minh',
  description: 'Điều khoản sử dụng và chính sách pháp lý của Sơn Bình Minh',
};

export default function LegalPage() {
  return (
    <div className="bg-gradient-to-br from-[#fafaf8] to-[#f5f5f0] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Chính sách pháp lý</span>
        </nav>

        {/* Header Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <CardTitle className="text-4xl font-bold text-gray-900">
                Chính sách pháp lý
              </CardTitle>
              <Badge variant="outline" className="text-purple-600 border-purple-600">
                Hiệu lực: 01/01/2026
              </Badge>
            </div>
            <CardDescription className="text-lg mt-4">
              Điều khoản sử dụng và chính sách pháp lý khi sử dụng dịch vụ tại Sơn Bình Minh. 
              Vui lòng đọc kỹ trước khi sử dụng sản phẩm và dịch vụ của chúng tôi.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Content Card */}
        <Card>
          <CardContent className="p-8 lg:p-12">
            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Điều khoản chung
                </h2>
                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      Khi truy cập và sử dụng website housepaint.com, bạn đồng ý tuân thủ các điều khoản và 
                      điều kiện sử dụng được quy định dưới đây:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Các thông tin trên website chỉ mang tính chất tham khảo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Sơn Bình Minh có quyền thay đổi nội dung mà không cần thông báo trước</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Nghiêm cấm sao chép, sử dụng nội dung website cho mục đích thương mại</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-1">•</span>
                        <span>Người dùng chịu trách nhiệm về mọi hành vi khi sử dụng website</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Quyền sở hữu trí tuệ
                </h2>
                <p className="text-gray-700 mb-4">
                  Toàn bộ nội dung trên website thuộc quyền sở hữu của Sơn Bình Minh:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { icon: '🎨', title: 'Logo, nhãn hiệu', desc: 'Hình ảnh sản phẩm' },
                    { icon: '📝', title: 'Nội dung bài viết', desc: 'Mô tả sản phẩm' },
                    { icon: '💻', title: 'Thiết kế giao diện', desc: 'Website' },
                    { icon: '🗄️', title: 'Cơ sở dữ liệu', desc: 'Thông tin khách hàng' }
                  ].map((item, index) => (
                    <Card key={index} className="border-purple-200 bg-purple-50/30">
                      <CardContent className="p-4">
                        <div className="flex gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="mt-4 bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <p className="text-gray-700 flex items-start gap-2">
                      <span className="text-red-500 text-xl">⚠️</span>
                      <span>
                        Mọi hành vi sao chép, sử dụng mà không có sự đồng ý bằng văn bản từ Sơn Bình Minh 
                        đều bị coi là vi phạm pháp luật về quyền sở hữu trí tuệ.
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Chính sách bảo mật thông tin
                </h2>
                <p className="text-gray-700 mb-6">
                  Sơn Bình Minh cam kết bảo mật thông tin cá nhân của khách hàng:
                </p>

                <div className="space-y-6">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-blue-600">📊</span>
                        3.1. Thu thập thông tin
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Chúng tôi thu thập các thông tin cần thiết để phục vụ quá trình mua hàng:
                      </p>
                      <div className="grid gap-2 md:grid-cols-2">
                        <Badge variant="outline">Họ tên, SĐT, Email</Badge>
                        <Badge variant="outline">Địa chỉ giao hàng</Badge>
                        <Badge variant="outline">Thông tin thanh toán</Badge>
                        <Badge variant="outline">Lịch sử mua hàng</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-green-600">📌</span>
                        3.2. Sử dụng thông tin
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-3">
                        Thông tin của bạn chỉ được sử dụng cho các mục đích:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        {[
                          'Xử lý và giao hàng cho đơn hàng',
                          'Hỗ trợ khách hàng và giải đáp thắc mắc',
                          'Gửi thông tin khuyến mãi (nếu khách hàng đồng ý)',
                          'Cải thiện chất lượng dịch vụ'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-500">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-purple-600">🔒</span>
                        3.3. Bảo vệ thông tin
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {[
                          'Sử dụng mã hóa SSL để bảo vệ thông tin thanh toán',
                          'Lưu trữ thông tin trên server an toàn',
                          'Không chia sẻ thông tin cho bên thứ ba khi chưa có sự đồng ý',
                          'Chỉ nhân viên được ủy quyền mới có quyền truy cập thông tin'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                            <span className="text-purple-600">🛡️</span>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Giới hạn trách nhiệm
                </h2>
                <Card className="bg-orange-50 border-orange-200">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-gray-700">
                      {[
                        'Sơn Bình Minh không chịu trách nhiệm về các thiệt hại do lỗi kỹ thuật, gián đoạn dịch vụ',
                        'Không chịu trách nhiệm về nội dung từ các website liên kết bên ngoài',
                        'Không chịu trách nhiệm về thiệt hại do sử dụng sai mục đích sản phẩm',
                        'Không chịu trách nhiệm về thiệt hại do thi công không đúng quy trình'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-orange-500 text-xl shrink-0">⚠</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Điều khoản thanh toán
                </h2>
                <p className="text-gray-700 mb-4">
                  Chúng tôi chấp nhận các hình thức thanh toán sau:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💵 COD (Thanh toán khi nhận hàng)</h4>
                      <p className="text-sm text-gray-600">Áp dụng cho đơn hàng dưới 10.000.000đ</p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">🏦 Chuyển khoản ngân hàng</h4>
                      <p className="text-sm text-gray-600">Giảm 2% cho đơn hàng trên 5.000.000đ</p>
                    </CardContent>
                  </Card>
                  <Card className="border-purple-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💳 Thẻ tín dụng</h4>
                      <p className="text-sm text-gray-600">Visa, Mastercard, JCB</p>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📱 Ví điện tử</h4>
                      <p className="text-sm text-gray-600">MoMo, ZaloPay, VNPay</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Giải quyết tranh chấp
                </h2>
                <p className="text-gray-700 mb-4">
                  Mọi tranh chấp phát sinh sẽ được giải quyết theo quy trình sau:
                </p>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Liên hệ chăm sóc khách hàng', desc: 'Để thương lượng' },
                    { step: 2, title: 'Thảo luận và hòa giải', desc: 'Hai bên cùng tìm giải pháp' },
                    { step: 3, title: 'Đưa ra cơ quan có thẩm quyền', desc: 'Nếu không thỏa thuận được' }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Important Notice */}
              <Card className="border-l-4 border-blue-500 bg-blue-50">
                <CardContent className="p-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-900">📌 Lưu ý:</strong> Chính sách này có hiệu lực 
                    từ ngày 01/01/2026 và có thể được cập nhật mà không cần thông báo trước. Phiên bản mới nhất 
                    luôn được đăng tải tại website housepaint.com.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <span>⚖️</span> Liên hệ về vấn đề pháp lý
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 text-gray-800">
                    <div className="flex gap-2">
                      <strong className="min-w-32">Hotline:</strong>
                      <span>1900-xxxx</span>
                    </div>
                    <div className="flex gap-2">
                      <strong className="min-w-32">Email:</strong>
                      <span>legal@housepaint.com</span>
                    </div>
                    <div className="flex gap-2">
                      <strong className="min-w-32">Thời gian:</strong>
                      <span>8:00 - 17:00 (Thứ 2 - Thứ 6)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
