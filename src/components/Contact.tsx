import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            ...formData,
            status: 'new'
          }
        ]);

      if (error) throw error;

      toast.success('پیام شما با موفقیت ارسال شد');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      toast.error('خطا در ارسال پیام');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">تماس با ما</h2>
          <p className="text-gray-600">در تمام مراحل همراه شما هستیم</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">تماس مستقیم</h3>
                <div className="space-y-1">
                  <p className="text-gray-600 ltr">رئوفی نژاد: +98 915 444 7554</p>
                  <p className="text-gray-600 ltr">مهندس زارعی: +98 915 802 7100</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">آدرس</h3>
                <p className="text-gray-600">خراسان رضوی، مشهد، کوثر ۱، شرکت اکتشاف سپهر پارس</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com/madan_nama_iran" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200">
                <Instagram className="text-blue-600" />
              </a>
              <a href="https://t.me/madan_nam_iran" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200">
                <Send className="text-blue-600" />
              </a>
              <a href="https://chat.whatsapp.com/KRYiZWSu7R5C7qZpyNXQE3" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200">
                <MessageCircle className="text-blue-600" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">شماره تماس</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none ltr"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">پیام شما</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'در حال ارسال...' : 'ارسال پیام'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}