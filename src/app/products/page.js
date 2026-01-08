import ProductTabs from "@/components/products/ProductTabs";

const categoryMetadata = {
  jotun: {
    title: "Sơn Jotun - Sơn Bình Minh",
    description: "Khám phá các dòng sơn Jotun chất lượng cao, bền màu và thân thiện với môi trường. Sản phẩm chính hãng, giá tốt nhất.",
  },
  alkaza: {
    title: "Sơn Alkaza - Sơn Bình Minh",
    description: "Sơn Alkaza cao cấp với độ bền vượt trội, chống thấm tốt và giá cả phải chăng. Đa dạng màu sắc cho mọi công trình.",
  },
  "duong-deo-nhiet": {
    title: "Sơn Đường Dẻo Nhiệt - Sơn Bình Minh",
    description: "Sơn đường dẻo nhiệt chuyên dụng, chịu nhiệt cao, độ bám dính tốt. Giải pháp hoàn hảo cho mọi loại mặt đường.",
  },
};

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "jotun";
  
  return categoryMetadata[category] || {
    title: "Sản phẩm - Sơn Bình Minh",
    description: "Khám phá các dòng sản phẩm sơn chất lượng cao: Jotun, Alkaza, Dẻo nhựa đường...",
  };
}

export default function ProductsPage() {
	return (
		<main className="mx-auto px-4 py-3">
            <ProductTabs />
		</main>
	);
}