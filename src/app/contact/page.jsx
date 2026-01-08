'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { infoStore } from '@/constants/info_store';

export default function ContactPage() {
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		address: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Handle form submission
		console.log('Form submitted:', formData);
	};

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative py-32 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/contact/contact-hero.png"
						alt="Paint Store Contact"
						fill
						priority
						className="object-cover"
						sizes="100vw"
					/>
					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/50" />
				</div>

				{/* Content */}
				<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-lg">
							Liên hệ với chúng tôi
						</h1>
						<p className="mt-4 text-lg text-white drop-shadow-md">
							Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
						</p>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-16 bg-gray-50 dark:bg-gray-900">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white">
							Địa chỉ cửa hàng
						</h2>
						<p className="mt-2 text-gray-600 dark:text-gray-400">
							Ghé thăm showroom của chúng tôi để trải nghiệm sản phẩm trực tiếp
						</p>
					</div>
					<div className="flex justify-center rounded-2xl overflow-hidden shadow-lg">
						<iframe
							title="Địa chỉ trên Google Maps"
							src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d103.19413547876603!2d106.01160469507346!3d20.327032534399315!2m2!1f0!2f3.471997108775368!3m2!1i1024!2i768!4f54.572586703060935!3m3!1m2!1s0x313677cc1cdab76d%3A0xa27b6bd5a85541bb!2zU8ahbiBCw6xuaCBNaW5o!5e1!3m2!1svi!2s!4v1767840175122!5m2!1svi!2s"
							className="w-full h-[450px]"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</section>

			{/* Contact Form & Store Info Section */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
						{/* Contact Form */}
						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
								Gửi thông tin liên hệ
							</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Full Name */}
								<div>
									<label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Họ và tên <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										required
										value={formData.fullName}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
										placeholder="Nhập họ và tên của bạn"
									/>
								</div>

								{/* Phone */}
								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Số điện thoại <span className="text-red-500">*</span>
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										required
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
										placeholder="Nhập số điện thoại"
									/>
								</div>

								{/* Email */}
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Email <span className="text-red-500">*</span>
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
										placeholder="Nhập địa chỉ email"
									/>
								</div>

								{/* Address */}
								<div>
									<label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Địa chỉ <span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										id="address"
										name="address"
										required
										value={formData.address}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
										placeholder="Nhập địa chỉ của bạn"
									/>
								</div>

								{/* Message */}
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Lời nhắn
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										value={formData.message}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
										placeholder="Nhập lời nhắn của bạn (không bắt buộc)"
									></textarea>
								</div>

								{/* Submit Button */}
								<Button type="submit" className="w-full" size="lg">
									Gửi thông tin
								</Button>
							</form>
						</div>

						{/* Store Information */}
						<div>
							<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
								Thông tin cửa hàng
							</h2>
							<div className="space-y-6">
								{/* Address */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
											<svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Địa chỉ
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											{infoStore.ADDRESS}
										</p>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
											<svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
											</svg>
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Số điện thoại
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											<a href="tel:0123456789" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
												0123 456 789
											</a>
										</p>
										<p className="text-gray-600 dark:text-gray-400">
											<a href="tel:0987654321" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
												0987 654 321
											</a>
										</p>
									</div>
								</div>

								{/* Working Hours */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
											<svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Thời gian làm việc
										</h3>
										<div className="space-y-1 text-gray-600 dark:text-gray-400">
											<p>Thứ 2 - Thứ 6: 8:00 - 18:00</p>
											<p>Thứ 7: 8:00 - 17:00</p>
										</div>
									</div>
								</div>

								{/* Email */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
											<svg className="h-6 w-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
											</svg>
										</div>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
											Email
										</h3>
										<p className="text-gray-600 dark:text-gray-400">
											<a href="mailto:contact@sonbinhminh.vn" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
												{infoStore.EMAIL}
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Partnership Section */}
			<section className="py-20 relative overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/contact/partnership-bg.png"
						alt="Partnership Background"
						fill
						className="object-cover"
						sizes="100vw"
					/>
					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-indigo-900/80" />
				</div>

				<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Bạn muốn đồng hành cùng chúng tôi?
						</h2>
						<p className="text-lg text-blue-100 max-w-2xl mx-auto">
							Chúng tôi luôn chào đón các đối tác tiềm năng. Hãy để lại thông tin của bạn và chúng tôi sẽ liên hệ sớm nhất!
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						{/* Benefit 1 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-transform hover:scale-105 hover:bg-white/15">
							<div className="flex justify-center mb-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
									<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
								</div>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">
								Đối tác uy tín
							</h3>
							<p className="text-blue-100">
								Hợp tác với thương hiệu sơn hàng đầu Việt Nam
							</p>
						</div>

						{/* Benefit 2 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-transform hover:scale-105 hover:bg-white/15">
							<div className="flex justify-center mb-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
									<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">
								Lợi nhuận hấp dẫn
							</h3>
							<p className="text-blue-100">
								Chính sách hoa hồng và ưu đãi đặc biệt
							</p>
						</div>

						{/* Benefit 3 */}
						<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-transform hover:scale-105 hover:bg-white/15">
							<div className="flex justify-center mb-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
									<svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</div>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">
								Hỗ trợ toàn diện
							</h3>
							<p className="text-blue-100">
								Đào tạo, marketing và tư vấn chuyên nghiệp
							</p>
						</div>
					</div>

					{/* CTA Button */}
					<div className="text-center">
						<Button 
							size="lg" 
							className="bg-white hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
							onClick={() => {
								const formSection = document.querySelector('form');
								if (formSection) {
									formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
									// Focus on the first input field
									setTimeout(() => {
										const firstInput = formSection.querySelector('input');
										if (firstInput) firstInput.focus();
									}, 500);
								}
							}}
						>
							<span className="flex items-center gap-2">
								Để lại thông tin ngay
								<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</Button>
						<p className="mt-4 text-blue-100 text-sm">
							Điền thông tin tại phần &ldquo;Gửi thông tin liên hệ&rdquo; phía trên và chúng tôi sẽ sắp xếp lịch tư vấn cho bạn
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
