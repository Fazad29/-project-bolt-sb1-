-- Create mines table
CREATE TABLE mines (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    status TEXT NOT NULL CHECK (status IN ('active', 'sold', 'pending')),
    price BIGINT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create contacts table
CREATE TABLE contacts (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create users table for admin authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    encrypted_password TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Insert sample mines
INSERT INTO mines (name, type, location, description, image_url, status, price) VALUES
('معدن آلاباستر بزنگان', 'آلاباستر', 'خراسان رضوی - بزنگان', 'معدن آلاباستر با کیفیت عالی و دسترسی مناسب به جاده اصلی', 'https://images.unsplash.com/photo-1582584116621-6f8583e9e686?auto=format&fit=crop&q=80', 'active', 2500000000),
('معدن مس جوغتای', 'مس', 'خراسان رضوی - جوغتای', 'معدن مس فعال با ظرفیت تولید بالا و تجهیزات کامل', 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80', 'active', 8900000000),
('معدن سنگ آهن سنگان', 'سنگ آهن', 'خراسان رضوی - سنگان', 'معدن سنگ آهن با عیار بالا و ذخیره قطعی', 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80', 'pending', 12000000000);