import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">معدن نمای ایران</h3>
            <p className="text-gray-400">
              بزرگترین پلتفرم خرید و فروش معدن در ایران
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white">صفحه اصلی</a></li>
              <li><a href="#services" className="hover:text-white">خدمات</a></li>
              <li><a href="#bot" className="hover:text-white">ربات تلگرام</a></li>
              <li><a href="#contact" className="hover:text-white">تماس با ما</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">ساعات کاری</h4>
            <p className="text-gray-400">شنبه تا چهارشنبه: ۹ صبح تا ۵ عصر</p>
            <p className="text-gray-400">پنجشنبه: ۹ صبح تا ۱ بعد از ظهر</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} معدن نمای ایران - تمامی حقوق محفوظ است</p>
        </div>
      </div>
    </footer>
  );
}

export const contactInfo = [
  {
    name: 'رئوفی نژاد',
    phone: '09154447554',
    direction: 'ltr'
  },
  {
    name: 'مهندس زارعی',
    phone: '09158071000',
    direction: 'ltr'
  }
];
