import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FaTruck, FaBox, FaBoxOpen, FaCheckCircle, FaShippingFast, FaPhone } from 'react-icons/fa';

export const metadata = {
  title: 'Chính sách giao hàng | Sơn Bình Minh',
  description: 'Chính sách giao hàng và vận chuyển sản phẩm sơn tại Sơn Bình Minh',
};

export default function ShippingPage() {
  return (
    <div className="bg-gradient-to-br from-[#fafaf8] to-[#f5f5f0] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Chính sách giao hàng</span>
        </nav>

        {/* Header Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-4xl font-bold text-gray-900">
                Chính sách giao hàng
              </CardTitle>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Giao hàng toàn quốc
              </Badge>
            </div>
            <CardDescription className="text-lg mt-4">
              Sơn Bình Minh cung cấp dịch vụ giao hàng nhanh chóng, an toàn và uy tín 
              đến tận tay khách hàng trên toàn quốc.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Content Card */}
        <Card>
          <CardContent className="p-8 lg:p-12">
            <div className="space-y-8">
              {/* Section 1 - Phạm vi */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Phạm vi giao hàng
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Nội thành TP.HCM</span>
                        <Badge className="bg-green-600">Trong ngày</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Tỉnh thành lớn</span>
                        <Badge className="bg-blue-600">2-3 ngày</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Khu vực khác</span>
                        <Badge className="bg-purple-600">3-5 ngày</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Vùng sâu, vùng xa</span>
                        <Badge className="bg-orange-600">5-7 ngày</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Section 2 - Phí vận chuyển */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Phí vận chuyển
                </h2>
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Khu vực
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Giá trị đơn hàng
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                          Phí vận chuyển
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">Nội thành TP.HCM</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Từ 1.000.000đ</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-600">Miễn phí</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">Nội thành TP.HCM</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Dưới 1.000.000đ</td>
                        <td className="px-6 py-4 text-sm text-gray-600">30.000đ</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">Tỉnh thành khác</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Từ 2.000.000đ</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-600">Miễn phí</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">Tỉnh thành khác</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Dưới 2.000.000đ</td>
                        <td className="px-6 py-4 text-sm text-gray-600">50.000đ - 100.000đ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <Separator />

              {/* Section 3 - Quy trình */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Quy trình giao hàng
                </h2>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Xác nhận đơn hàng', desc: 'Qua điện thoại hoặc email trong vòng 2 giờ' },
                    { step: 2, title: 'Đóng gói sản phẩm', desc: 'Cẩn thận, an toàn' },
                    { step: 3, title: 'Gửi mã vận đơn', desc: 'Thông tin theo dõi cho khách hàng' },
                    { step: 4, title: 'Bàn giao vận chuyển', desc: 'Cho đơn vị vận chuyển' },
                    { step: 5, title: 'Giao hàng tận nơi', desc: 'Thu tiền (nếu thanh toán COD)' }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">
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

              {/* Section 4 - Kiểm tra hàng */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Kiểm tra hàng hóa khi nhận
                </h2>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <p className="font-medium text-gray-900 mb-4">
                      Quý khách vui lòng kiểm tra kỹ hàng hóa trước khi nhận:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span> Kiểm tra tình trạng bên ngoài của thùng hàng
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span> Đối chiếu số lượng sản phẩm với đơn hàng
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span> Kiểm tra tình trạng sản phẩm (vỡ, móp, rò rỉ...)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600">✓</span> Kiểm tra thông tin sản phẩm (mã, màu sắc, hạn sử dụng...)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Section 5 - Đổi trả */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Chính sách đổi trả hàng
                </h2>
                <div className="grid gap-3">
                  {[
                    'Hoàn toàn miễn phí đổi trả nếu sản phẩm bị lỗi do nhà sản xuất',
                    'Miễn phí đổi trả nếu giao sai sản phẩm',
                    'Đổi trả trong vòng 7 ngày kể từ ngày nhận hàng',
                    'Sản phẩm chưa qua sử dụng, còn nguyên tem mác',
                    'Có đầy đủ hóa đơn, chứng từ mua hàng'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <span className="text-green-500 text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Section 6 - Cam kết */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Cam kết của chúng tôi
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-green-200 bg-green-50/50">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <span className="text-2xl">🚚</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Giao hàng đúng hẹn</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Cam kết giao hàng đúng thời gian đã hẹn với khách hàng
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200 bg-blue-50/50">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <span className="text-2xl">📦</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Đóng gói cẩn thận</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Đóng gói chắc chắn, đảm bảo sản phẩm không bị hư hỏng
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-purple-200 bg-purple-50/50">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <span className="text-2xl">💯</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Hàng chính hãng</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            100% sản phẩm chính hãng, có tem nhãn đầy đủ
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200 bg-orange-50/50">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <span className="text-2xl">🔄</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">Đổi trả dễ dàng</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Chính sách đổi trả linh hoạt, bảo vệ quyền lợi khách hàng
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Contact Section */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <span>📞</span> Liên hệ hỗ trợ giao hàng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 text-gray-800">
                    <div className="flex gap-2">
                      <strong className="min-w-24">Hotline:</strong>
                      <span>1900-xxxx (8:00 - 20:00, tất cả các ngày)</span>
                    </div>
                    <div className="flex gap-2">
                      <strong className="min-w-24">Email:</strong>
                      <span>shipping@housepaint.com</span>
                    </div>
                    <div className="flex gap-2">
                      <strong className="min-w-24">Địa chỉ:</strong>
                      <span>123 Đường ABC, Quận XYZ, TP.HCM</span>
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
