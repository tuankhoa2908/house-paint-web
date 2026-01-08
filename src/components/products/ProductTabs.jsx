"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { CATEGORY_PRODUCT } from "@/constants/common";
import JotunProducts from "./JotunProducts/JotunProducts";

export default function ProductTabs() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const categoryParam = searchParams.get("category");

	const [activeTab, setActiveTab] = useState(categoryParam || "jotun");
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
	const tabsRef = useRef({});
	const containerRef = useRef(null);

	useEffect(() => {
		if (categoryParam) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setActiveTab(categoryParam);
		}
	}, [categoryParam]);

	useEffect(() => {
		const activeButton = tabsRef.current[activeTab];
		const container = containerRef.current;

		if (activeButton && container) {
			const containerRect = container.getBoundingClientRect();
			const buttonRect = activeButton.getBoundingClientRect();

			setIndicatorStyle({
				left: buttonRect.left - containerRect.left,
				width: buttonRect.width,
			});
		}
	}, [activeTab]);

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
		router.push(`/products?category=${tabId}`, { scroll: false });
	};

	return (
		<div className="w-full space-y-8">
			<div className="flex flex-col items-center justify-center">
				<div
					ref={containerRef}
					className="relative inline-flex items-center gap-8 p-1"
				>
					{CATEGORY_PRODUCT.map((tab) => (
						<button
							key={tab.type}
							ref={(el) => (tabsRef.current[tab.type] = el)}
							onClick={() => handleTabClick(tab.type)}
							className={cn(
								"relative px-4 py-2 text-sm font-medium transition-colors duration-300",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2",
								activeTab === tab.type
									? "text-cyan-600 dark:text-cyan-400"
									: "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
							)}
						>
							{tab.name}
						</button>
					))}

					{/* Animated sliding indicator */}
					<span
						className="absolute bottom-0 h-0.5 bg-cyan-500 transition-all duration-500 ease-out"
						style={{
							left: `${indicatorStyle.left}px`,
							width: `${indicatorStyle.width}px`,
							boxShadow:
								"0 0 10px rgba(6, 182, 212, 0.8), 0 -4px 20px rgba(6, 182, 212, 0.4)",
						}}
					/>
				</div>
			</div>

			<Separator />

			<div className="min-h-[400px] w-full">
				{activeTab === "jotun" && <JotunProducts />}
				{activeTab === "alkaza" && (
					<div>
						<h3 className="text-2xl font-bold text-foreground">Sơn Alkaza</h3>
						<p>Danh sách sản phẩm Alkaza sẽ được hiển thị ở đây</p>
					</div>
				)}
				{activeTab === "duong-deo-nhiet" && (
					<div>
						<h3 className="text-2xl font-bold text-foreground">
							Sơn Đường Dẻo Nhiệt
						</h3>
						<p>Danh sách sản phẩm Đường Dẻo Nhiệt sẽ được hiển thị ở đây</p>
					</div>
				)}
			</div>
		</div>
	);
}
