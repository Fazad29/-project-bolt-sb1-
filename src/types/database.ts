export interface Mine {
  id: number;
  name: string;
  type: string;
  location: string;
  description: string;
  image_url: string;
  status: 'active' | 'sold' | 'pending';
  price: number;
  created_at: string;
}

export interface Contact {
  id: number;
  name: string;
  phone: string;
  message: string;
  created_at: string;
  status: 'new' | 'read' | 'replied';
}