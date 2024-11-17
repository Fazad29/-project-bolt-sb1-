import React from 'react';
import { Search, HandshakeIcon, BarChart3, Shield } from 'lucide-react';

const services = [
  'جستجوی معادن',
  'تحلیل بازار',
  'مشاوره تخصصی',
  'معدن نما در شبکه‌های اجتماعی'
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات ما</h2>
          <p className="text-gray-600">راهکارهای جامع برای خرید و فروش معدن</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}