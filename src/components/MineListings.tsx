import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Search, Filter } from 'lucide-react';
import type { Mine } from '../types/database';

export default function MineListings() {
  const [mines, setMines] = useState<Mine[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  useEffect(() => {
    fetchMines();
  }, []);

  const fetchMines = async () => {
    try {
      const { data, error } = await supabase
        .from('mines')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setMines(data);
    } catch (error) {
      console.error('Error fetching mines:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredMines = mines.filter(mine => {
    const matchesSearch = mine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mine.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mine.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || mine.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">معادن فعال</h2>
          <p className="text-gray-600">جدیدترین فرصت‌های سرمایه‌گذاری در معادن ایران</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="جستجو در معادن..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div className="relative">
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full md:w-48 pl-4 pr-10 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
            >
              <option value="all">همه معادن</option>
              <option value="active">فعال</option>
              <option value="pending">در حال مذاکره</option>
              <option value="sold">فروخته شده</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Skeleton height={200} />
                <div className="p-6">
                  <Skeleton count={3} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMines.map((mine) => (
              <div
                key={mine.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={mine.image_url || 'https://images.unsplash.com/photo-1582584116621-6f8583e9e686?auto=format&fit=crop&q=80'} 
                    alt={mine.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mine.status === 'active' ? 'bg-green-100 text-green-800' :
                      mine.status === 'sold' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {mine.status === 'active' ? 'فعال' :
                       mine.status === 'sold' ? 'فروخته شده' :
                       'در حال مذاکره'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{mine.name}</h3>
                    <span className="text-blue-600 font-bold">
                      {mine.price?.toLocaleString()} تومان
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{mine.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{mine.location}</span>
                    <span className="text-sm font-medium text-gray-600">{mine.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredMines.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">معدنی با این مشخصات یافت نشد</p>
          </div>
        )}
      </div>
    </section>
  );
}