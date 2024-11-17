import React from 'react';
import { MessageSquare, Bot, ArrowLeft } from 'lucide-react';

export default function TelegramBot() {
  return (
    <section id="bot" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6">
                <Bot size={24} />
                <span>ربات هوشمند تلگرام</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                دستیار هوشمند معدن نمای ایران
              </h2>
              <p className="text-gray-600 mb-8">
                با استفاده از ربات تلگرام ما، به راحتی می‌توانید:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <MessageSquare className="text-blue-600" size={20} />
                  <span>آخرین معدن‌های ثبت شده را مشاهده کنید</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="text-blue-600" size={20} />
                  <span>معدن خود را ثبت کنید</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageSquare className="text-blue-600" size={20} />
                  <span>با خریداران و فروشندگان ارتباط برقرار کنید</span>
                </li>
              </ul>
              <a 
                href="https://t.me/madan_nam_iran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-fit"
              >
                شروع گفتگو با ربات
                <ArrowLeft size={20} />
              </a>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80" 
                alt="ربات تلگرام"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}