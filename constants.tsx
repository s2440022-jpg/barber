
import React from 'react';
import type { Tab, Course, Product, User, Post, Job, Barber, Salon } from './types';

// --- Icon Components ---
const EducationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const CommunityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const ECIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
);
const AppointmentsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
);
const RecruitmentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);
const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

export const TABS: Tab[] = [
  { id: 'education', label: '教育', icon: EducationIcon },
  { id: 'community', label: 'コミュニティ', icon: CommunityIcon },
  { id: 'ec', label: 'EC', icon: ECIcon },
  { id: 'appointments', label: 'アポイント', icon: AppointmentsIcon },
  { id: 'recruitment', label: 'リクルート', icon: RecruitmentIcon },
  { id: 'settings', label: '設定', icon: SettingsIcon },
];

// --- Mock Data ---

export const PRODUCTS: Product[] = [
  { id: 'prod-001', name: 'クラシックシェービングレザー', brand: 'Feather', price: 15000, description: 'プロフェッショナル向けの高品質な日本製レザー。最高の剃り心地を提供します。', imageUrl: 'https://picsum.photos/seed/razor/400/400' },
  { id: 'prod-002', name: 'バーバー専用シザー 6.0インチ', brand: 'Mizutani', price: 80000, description: '精密なカットを実現する、熟練の職人による手作りシザー。', imageUrl: 'https://picsum.photos/seed/scissors/400/400' },
  { id: 'prod-003', name: 'プロフェッショナル バリカン EX', brand: 'Panasonic', price: 25000, description: 'パワフルなリニアモーターを搭載し、スムーズな刈り心地を実現。', imageUrl: 'https://picsum.photos/seed/clippers/400/400' },
  { id: 'prod-004', name: 'ウッドハンドルシェービングブラシ', brand: 'Heritage', price: 7500, description: '最高級のアナグマ毛を使用した、リッチな泡立ちのブラシ。', imageUrl: 'https://picsum.photos/seed/brush/400/400' },
  { id: 'prod-005', name: 'ストロングホールドポマード', brand: 'Suavecito', price: 2800, description: 'クラシックスタイルを一日中キープする水性ポマード。', imageUrl: 'https://picsum.photos/seed/pomade/400/400' },
  { id: 'prod-006', name: 'アフターシェーブローション No.7', brand: 'Barber Pro', price: 3200, description: '肌を落ち着かせ、潤いを与えるクラシックな香りのローション。', imageUrl: 'https://picsum.photos/seed/lotion/400/400' }
];

export const SALONS: Salon[] = [
    { id: 'salon-01', name: 'THE BARBER TOKYO', address: '東京都中央区銀座', bio: '伝統的な技術と現代的なスタイルを融合させた、最高級の理容室。紳士のための隠れ家です。', recruiting: true },
    { id: 'salon-02', name: 'MR.BROTHERS CUT CLUB', address: '東京都渋谷区神宮前', bio: 'アメリカンバーバースタイルを追求する先駆者。国内外から注目を集めるカルチャー発信地。', recruiting: false },
    { id: 'salon-03', name: 'Local Barber HIRAKAWA', address: '福岡県福岡市中央区', bio: '地域に根ざしたアットホームなバーバー。丁寧な仕事で、お客様一人ひとりに向き合います。', recruiting: true },
];

export const COURSES: Course[] = [
  {
    id: 'course-bgn',
    level: '初級',
    title: 'バーバーの基礎',
    description: '理美容学生やバーバーを目指す中高生向け。道具の持ち方から基本のカットまで。',
    videos: [
      { id: 'vid-bgn-01', title: 'シザーとコームの正しい持ち方', description: '全てのカットの基本となる、道具の正しいハンドリング方法を学びます。', youtubeId: '5qap5aO4i9A', toolsUsed: [{id: 'tool-01', name: '練習用シザー', description: 'カットの基本練習に適したシザー。', productId: 'prod-002'}], featuredSalon: SALONS[0] },
      { id: 'vid-bgn-02', title: '基本的なシェービング技術', description: '安全で快適なシェービングのための基礎知識とテクニック。', youtubeId: '5qap5aO4i9A', toolsUsed: [{id: 'tool-02', name: '練習用レザー', description: '安全ガード付きの初心者向けレザー。', productId: 'prod-001'}, {id: 'tool-03', name: 'シェービングブラシ', description: '泡立ての基本を学ぶためのブラシ。', productId: 'prod-004'}], featuredSalon: SALONS[0] }
    ]
  },
  {
    id: 'course-int',
    level: '中級',
    title: 'スタイリストデビューへの道',
    description: '専門学生後半からデビュー直後のスタイリスト向け。実践的なスタイル作りを学ぶ。',
    videos: [
      { id: 'vid-int-01', title: 'クラシックフェードカット', description: 'バーバースタイルの王道、フェードカットのグラデーションを完璧に作る方法。', youtubeId: '5qap5aO4i9A', toolsUsed: [{id: 'tool-04', name: 'プロ用バリカン', description: '精密なフェードを作るための必須アイテム。', productId: 'prod-003'}], featuredSalon: SALONS[1] },
      { id: 'vid-int-02', title: 'デザインパーマの基礎', description: 'メンズスタイルに動きと個性を与えるパーマ技術。', youtubeId: '5qap5aO4i9A', toolsUsed: [], featuredSalon: SALONS[1] },
      { id: 'vid-int-03', title: '顧客カウンセリング術', description: 'お客様の要望を正確に引き出し、満足度を高めるコミュニケーション方法。', youtubeId: '5qap5aO4i9A', toolsUsed: [], featuredSalon: SALONS[2] }
    ]
  },
  {
    id: 'course-adv',
    level: '上級',
    title: 'トップスタイリストの技術',
    description: 'プロ向け。海外の最新テクニックや、より高度なデザイン理論を探求する。',
    videos: [
      { id: 'vid-adv-01', title: 'ロンドン発・最新テクスチャーカット', description: '世界的コンテストで評価された、質感と動きを重視した最先端のカット技法。', youtubeId: '5qap5aO4i9A', toolsUsed: [{id: 'tool-05', name: 'スライドカット用シザー', description: 'なめらかな質感調整に適した特殊シザー。', productId: 'prod-002'}], featuredSalon: SALONS[1] },
      { id: 'vid-adv-02', title: 'スキンフェードとレザーアート', description: '高度な技術を要するスキンフェードと、カミソリを使ったデザインアート。', youtubeId: '5qap5aO4i9A', toolsUsed: [{id: 'tool-06', name: '精密バリカン', description: '0mmからの刈り上げに対応。', productId: 'prod-003'}, {id: 'tool-07', name: 'アート用レザー', description: '細かいデザインを描くための専用レザー。', productId: 'prod-001'}], featuredSalon: SALONS[0] }
    ]
  }
];

export const USERS: User[] = [
  { id: 'user-01', name: 'T. Tanaka', avatarUrl: 'https://picsum.photos/seed/user1/100/100' },
  { id: 'user-02', name: 'K. Sato', avatarUrl: 'https://picsum.photos/seed/user2/100/100' },
  { id: 'user-03', name: 'Y. Suzuki', avatarUrl: 'https://picsum.photos/seed/user3/100/100' },
];

export const POSTS: Post[] = [
  { id: 'post-01', author: USERS[0], content: '新しいシザー、Mizutaniのやつ買ってみた！切れ味最高。仕事のモチベーション上がるな。#バーバー #シザー', timestamp: '3時間前', likes: 25, comments: 4 },
  { id: 'post-02', author: USERS[1], content: '今日のラストのお客様。スキンフェード、バッチリ決まりました。', timestamp: '5時間前', likes: 42, comments: 8 },
  { id: 'post-03', author: USERS[2], content: '来月の海外研修、どこに行こうか迷う。ロンドンか、ニューヨークか…。おすすめありますか？', timestamp: '1日前', likes: 15, comments: 12 }
];

export const JOBS: Job[] = [
  { id: 'job-01', salon: SALONS[0], title: 'トップスタイリスト', location: '東京都中央区', type: 'Full-time', description: '経験者優遇。伝統と革新を重んじる当店で、あなたの技術を活かしてください。' },
  { id: 'job-02', salon: SALONS[2], title: 'アシスタントバーバー', location: '福岡県福岡市', type: 'Full-time', description: '未経験者歓迎。基礎から丁寧に指導します。地域一番店を一緒に目指しましょう。' },
];

export const BARBERS: Barber[] = [
  { id: 'barber-01', user: USERS[0], salon: SALONS[0], specialty: 'クラシックスタイル、フェード' },
  { id: 'barber-02', user: USERS[1], salon: SALONS[1], specialty: 'ストリートスタイル、パーマ' },
  { id: 'barber-03', user: USERS[2], salon: SALONS[2], specialty: 'メンズグルーミング、ヘッドスパ' },
];

