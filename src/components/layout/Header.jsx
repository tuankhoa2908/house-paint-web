"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink";
import ProductsDropdown from "./ProductsDropdown";
import { useEffect, useState } from "react";

export default function Header() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		try {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setUser(JSON.parse(localStorage.getItem("user")));
		} catch (error) {
			return null;
		}
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-black/80">
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/next.svg"
							alt="Sơn Bình Minh"
							width={120}
							height={24}
							priority
							className="dark:invert"
						/>
					</Link>
				</div>

				{/* Navigation Links */}
				<div className="hidden items-center gap-8 md:flex">
					<NavLink href="/">Trang chủ</NavLink>
					<ProductsDropdown />
					<NavLink href="/about">Về chúng tôi</NavLink>
					<NavLink href="/contact">Liên hệ</NavLink>
				</div>

				{/* CTA Button */}
				<div className="flex items-center gap-4">
					<Button asChild>
						<Link href="/contact">Nhận tư vấn</Link>
					</Button>
					<Button asChild>
						<Link href={user ? "/profile" : "/login"}>
							{user ? "Tài khoản" : "Đăng nhập"}
						</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
}
