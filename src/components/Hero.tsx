import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80',
    title: 'بازار خرید و فروش معدن در ایران',
    subtitle: 'معتبرترین پلتفرم خرید، فروش و سرمایه‌گذاری در معادن ایران'
  },
  {
    image: 'https://images.unsplash.com/photo-1582584116621-6f8583e9e686?auto=format&fit=crop&q=80',
    title: 'فرصت‌های سرمایه‌گذاری در معادن',
    subtitle: 'دسترسی به بهترین فرصت‌های سرمایه‌گذاری در صنعت معدن'
  },
  {
    image: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80',
    title: 'مشاوره تخصصی معدن',
    subtitle: 'ارائه خدمات مشاوره توسط متخصصین با تجربه صنعت معدن'
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <img 
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              بازار خرید و فروش معدن در ایران
            </h1>
            <p className="text-xl text-gray-200">
              معتبرترین پلتفرم خرید، فروش و سرمایه‌گذاری در معادن ایران
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2">
                شروع کنید
                <ArrowLeft size={20} />
              </a>
              <a href="#bot" className="bg-white/10 text-white border border-white/30 backdrop-blur px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors">
                ربات تلگرام
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}