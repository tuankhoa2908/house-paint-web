import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FaCheckCircle, FaMoneyBillWave, FaTools, FaClipboardCheck, FaTimesCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';
import { warrantyProcessPolicy } from '@/constants/policy'; 

export const metadata = {
  title: 'Chính sách bảo hành | Sơn Bình Minh',
  description: 'Chính sách bảo hành sản phẩm sơn tại Sơn Bình Minh',
};

export default function WarrantyPage() {
  return (
    <div className="bg-gradient-to-br from-[#fafaf8] to-[#f5f5f0] py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Chính sách bảo hành</span>
        </nav>

        {/* Header Card */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-4xl font-bold text-gray-900">
                Chính sách bảo hành
              </CardTitle>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                Cập nhật 2026
              </Badge>
            </div>
            <CardDescription className="text-lg mt-4">
              Sơn Bình Minh cam kết mang đến cho khách hàng những sản phẩm sơn chất lượng cao nhất 
              cùng với chính sách bảo hành rõ ràng và uy tín.
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
                  1. Thời gian bảo hành
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Sơn nội thất</span>
                        <Badge>3 năm</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Sơn ngoại thất</span>
                        <Badge className="bg-green-600">5 năm</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Sơn chống thấm</span>
                        <Badge className="bg-purple-600">7 năm</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50 border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">Sơn đặc biệt</span>
                        <Badge variant="outline">Theo NSX</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <Separator />

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Điều kiện bảo hành
                </h2>
                <p className="text-gray-700 mb-4">
                  Sản phẩm được bảo hành khi đáp ứng các điều kiện sau:
                </p>
                <div className="grid gap-3">
                  {[
                    'Còn trong thời hạn bảo hành',
                    'Có đầy đủ hóa đơn, chứng từ mua hàng hợp lệ',
                    'Sản phẩm chưa qua sửa chữa hoặc can thiệp bởi bên thứ ba',
                    'Lỗi do nhà sản xuất, không phải do người sử dụng',
                    'Thi công đúng quy trình kỹ thuật của nhà sản xuất'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Trường hợp không được bảo hành
                </h2>
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500 shrink-0" /> Hết thời hạn bảo hành
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500 shrink-0" /> Không có hóa đơn, chứng từ hợp lệ
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500 shrink-0" /> Thi công không đúng quy trình kỹ thuật
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500 shrink-0" /> Bảo quản không đúng cách
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500 shrink-0" /> Hư hỏng do thiên tai, hỏa hoạn, va chạm mạnh
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTimesCircle className="text-red-500 shrink-0" /> Sản phẩm đã qua sửa chữa bởi bên thứ ba
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>

              <Separator />

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Quy trình bảo hành
                </h2>
                <div className="space-y-4">
                  {warrantyProcessPolicy.map((item) => (
                    <div key={item.step} className="flex gap-4 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-shadow">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
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

              {/* Contact Section */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <FaShieldAlt /> Liên hệ bảo hành
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 text-gray-800">
                    <div className="flex gap-2">
                      <strong className="min-w-24">Hotline:</strong>
                      <span>0123.456.789 (8:00 - 18:00, từ thứ 2 - thứ 6)</span>
                    </div>
                    <div className="flex gap-2">
                      <strong className="min-w-24">Email:</strong>
                      <span>sonbinhminh2014@gmail.com</span>
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
