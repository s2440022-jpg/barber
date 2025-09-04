// FIX: Import React types to resolve "Cannot find namespace 'React'" error.
import type * as React from 'react';

export type TabID = 'education' | 'community' | 'ec' | 'appointments' | 'recruitment' | 'settings';

export interface Tool {
  id: string;
  name: string;
  description: string;
  productId: string;
}

export interface Salon {
  id:string;
  name: string;
  address: string;
  bio: string;
  recruiting: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  toolsUsed: Tool[];
  featuredSalon: Salon;
}

export interface Course {
  id: string;
  level: '初級' | '中級' | '上級';
  title: string;
  description: string;
  videos: Video[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface Job {
  id: string;
  salon: Salon;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time';
  description: string;
}

export interface Barber {
  id: string;
  user: User;
  salon: Salon;
  specialty: string;
}

export interface Tab {
  id: TabID;
  label: string;
  icon: React.FC<{ className?: string }>;
}