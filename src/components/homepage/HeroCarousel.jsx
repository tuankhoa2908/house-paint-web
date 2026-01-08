'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { listTextBannerHomePage } from '@/constants/info_store';

const slides = [
  {
    id: 1,
    image: '/hero-1.png',
    alt: 'Modern blue house with landscaping'
  },
  {
    id: 2,
    image: '/hero-2.png',
    alt: 'Contemporary beige home at sunset'
  },
  {
    id: 3,
    image: '/hero-3.png',
    alt: 'Traditional white house with flowers'
  },
  {
    id: 4,
    image: '/hero-4.png',
    alt: 'Colonial yellow house with columns'
  },
  {
    id: 5,
    image: '/hero-5.png',
    alt: 'Modern minimalist grey house'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
            
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto max-w-7xl min-w-4xl md:min-w-xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Sơn Bình Minh
            </h1>
            
            {/* Dynamic text that changes with each slide */}
            <div className="relative mt-6 h-24 overflow-hidden">
              {listTextBannerHomePage.map((text, index) => (
                <p
                  key={index}
                  className={`absolute inset-0 text-lg leading-8 text-gray-100 drop-shadow-md transition-all duration-700 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <Button variant="glass" size="lg" asChild>
                <Link href="/products">
                  Xem sản phẩm
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/contact">
                  Liên hệ ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
