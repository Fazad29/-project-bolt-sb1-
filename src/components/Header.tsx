import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">معدن نمای ایران</div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-blue-600">صفحه اصلی</a>
            <a href="#services" className="hover:text-blue-600">خدمات</a>
            <a href="#bot" className="hover:text-blue-600">ربات تلگرام</a>
            <a href="#contact" className="hover:text-blue-600">تماس با ما</a>
            <a href="tel:+989154447554" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Phone size={18} />
              تماس مستقیم
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block hover:text-blue-600">صفحه اصلی</a>
            <a href="#services" className="block hover:text-blue-600">خدمات</a>
            <a href="#bot" className="block hover:text-blue-600">ربات تلگرام</a>
            <a href="#contact" className="block hover:text-blue-600">تماس با ما</a>
          </div>
        )}
      </nav>
    </header>
  );
}