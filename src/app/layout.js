import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sơn Bình Minh",
  description: "Cung cấp các sản phẩm sơn chất lượng cao cho ngôi nhà của bạn.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-[#fafaf8]`}
      >
        <Header />
        <main className="flex-1 bg-[#fafaf8]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
