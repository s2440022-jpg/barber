
import React, { useState, useMemo } from 'react';
import type { TabID, Video, Product, Tool, Salon } from './types';
import { TABS, COURSES, PRODUCTS, POSTS, JOBS, BARBERS } from './constants';

// --- Helper Icon Components ---
const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);


// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>('education');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSalon, setSelectedSalon] = useState<Salon | null>(null);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
    setActiveTab('education');
  };
  
  const handleSelectTool = (tool: Tool) => {
    const product = PRODUCTS.find(p => p.id === tool.productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const clearSelections = () => {
    setSelectedVideo(null);
    setSelectedProduct(null);
    setSelectedSalon(null);
  };
  
  const renderContent = () => {
    if (selectedVideo) {
      return <VideoDetailPage video={selectedVideo} onBack={clearSelections} onSelectTool={handleSelectTool} onSelectSalon={setSelectedSalon} />;
    }

    switch (activeTab) {
      case 'education':
        return <EducationPage onVideoSelect={handleSelectVideo} />;
      case 'community':
        return <CommunityPage />;
      case 'ec':
        return <ECPage onProductSelect={setSelectedProduct} />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'recruitment':
        return <RecruitmentPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <EducationPage onVideoSelect={handleSelectVideo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <div className="max-w-md mx-auto h-screen flex flex-col shadow-2xl shadow-black/50">
        <main className="flex-grow overflow-y-auto pb-24">
          {renderContent()}
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} onTabChange={clearSelections} />

        {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
        {selectedSalon && <SalonModal salon={selectedSalon} onClose={() => setSelectedSalon(null)} />}
      </div>
    </div>
  );
}


// --- Navigation Component ---
interface BottomNavProps {
  activeTab: TabID;
  setActiveTab: (tabId: TabID) => void;
  onTabChange: () => void;
}
const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, onTabChange }) => {
  const handleTabClick = (tabId: TabID) => {
    onTabChange();
    setActiveTab(tabId);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950/80 backdrop-blur-sm border-t border-slate-700">
      <div className="flex justify-around items-center h-20">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
              activeTab === tab.id ? 'text-amber-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <tab.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const PageHeader: React.FC<{ title: string; onBack?: () => void }> = ({ title, onBack }) => (
    <header className="sticky top-0 z-10 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 h-16">
        {onBack && (
            <button onClick={onBack} className="absolute left-4 p-2 rounded-full text-slate-300 hover:bg-slate-700">
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
        )}
        <h1 className="text-lg font-bold text-slate-100">{title}</h1>
    </header>
);

// --- Page Components ---
const EducationPage: React.FC<{ onVideoSelect: (video: Video) => void }> = ({ onVideoSelect }) => (
  <div>
    <PageHeader title="教育" />
    <div className="p-4 space-y-8">
      {COURSES.map((course) => (
        <section key={course.id}>
          <div className="mb-4">
            <span className="inline-block bg-amber-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full mb-1">{course.level}</span>
            <h2 className="text-2xl font-bold text-slate-100">{course.title}</h2>
            <p className="text-slate-400">{course.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {course.videos.map((video) => (
              <div key={video.id} onClick={() => onVideoSelect(video)} className="bg-slate-800 rounded-lg overflow-hidden cursor-pointer group hover:bg-slate-700 transition-colors">
                <img src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} alt={video.title} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-slate-100 group-hover:text-amber-400">{video.title}</h3>
                  <p className="text-sm text-slate-400 truncate">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <div className="mt-8 p-4 bg-slate-800 rounded-lg text-center">
        <h3 className="font-bold text-lg text-slate-100">サロン・メーカー様へ</h3>
        <p className="text-sm text-slate-400 mt-2 mb-4">広告掲載や教材動画の提供に興味のある方は、こちらからお問い合わせください。</p>
        <button className="bg-amber-500 text-slate-900 font-bold py-2 px-5 rounded-lg text-sm hover:bg-amber-400 transition-colors">お問い合わせ</button>
      </div>
    </div>
  </div>
);

const VideoDetailPage: React.FC<{ video: Video; onBack: () => void; onSelectTool: (tool: Tool) => void; onSelectSalon: (salon: Salon) => void; }> = ({ video, onBack, onSelectTool, onSelectSalon }) => (
    <div>
        <PageHeader title={video.title} onBack={onBack} />
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
        </div>
        <div className="p-4 space-y-6">
            <div>
                <h2 className="text-xl font-bold text-slate-100">{video.title}</h2>
                <p className="text-slate-400 mt-2">{video.description}</p>
            </div>

            {video.toolsUsed.length > 0 && (
                <div className="bg-slate-800 p-4 rounded-lg">
                    <h3 className="font-bold text-slate-200 mb-3">使用されている道具</h3>
                    <div className="space-y-3">
                        {video.toolsUsed.map(tool => (
                            <button key={tool.id} onClick={() => onSelectTool(tool)} className="w-full flex items-center justify-between text-left p-3 bg-slate-700 rounded-md hover:bg-slate-600 transition-colors">
                                <div>
                                    <p className="font-semibold text-slate-100">{tool.name}</p>
                                    <p className="text-sm text-slate-400">{tool.description}</p>
                                </div>
                                <ExternalLinkIcon className="w-5 h-5 text-amber-400 flex-shrink-0 ml-4" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-bold text-slate-200 mb-3"> FEATURED SALON </h3>
                <button onClick={() => onSelectSalon(video.featuredSalon)} className="w-full flex items-start text-left p-3 bg-slate-700 rounded-md hover:bg-slate-600 transition-colors">
                    <img src={`https://picsum.photos/seed/${video.featuredSalon.id}/100/100`} alt={video.featuredSalon.name} className="w-16 h-16 rounded-md object-cover mr-4" />
                    <div>
                        <p className="font-semibold text-slate-100 text-lg">{video.featuredSalon.name}</p>
                        <p className="text-sm text-slate-400">{video.featuredSalon.address}</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
);

const CommunityPage: React.FC = () => (
    <div>
      <PageHeader title="コミュニティ" />
      <div className="p-4 space-y-4">
        {POSTS.map(post => (
          <div key={post.id} className="bg-slate-800 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <img src={post.author.avatarUrl} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <p className="font-bold text-slate-100">{post.author.name}</p>
                <p className="text-xs text-slate-400">{post.timestamp}</p>
              </div>
            </div>
            <p className="text-slate-300 whitespace-pre-wrap mb-3">{post.content}</p>
            <div className="flex text-slate-400 text-sm border-t border-slate-700 pt-2">
              <button className="hover:text-amber-400 transition-colors pr-4">いいね ({post.likes})</button>
              <button className="hover:text-amber-400 transition-colors">コメント ({post.comments})</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
const ECPage: React.FC<{ onProductSelect: (product: Product) => void }> = ({ onProductSelect }) => (
    <div>
        <PageHeader title="EC" />
        <div className="p-4 grid grid-cols-2 gap-4">
            {PRODUCTS.map(product => (
                <div key={product.id} onClick={() => onProductSelect(product)} className="bg-slate-800 rounded-lg overflow-hidden cursor-pointer group">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover" />
                    <div className="p-3">
                        <h3 className="font-semibold text-slate-200 text-sm truncate">{product.name}</h3>
                        <p className="text-xs text-slate-400">{product.brand}</p>
                        <p className="text-amber-400 font-bold mt-1">¥{product.price.toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
  
const AppointmentsPage: React.FC = () => (
  <div>
    <PageHeader title="アポイントメント" />
    <div className="p-4 space-y-4">
      <div className="bg-slate-800 p-4 rounded-lg text-center">
        <p className="text-slate-300">バーバーやサロンを検索して予約できます。</p>
        <input type="text" placeholder="名前、地域などで検索" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 mt-2 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400" />
      </div>
      {BARBERS.map(barber => (
        <div key={barber.id} className="bg-slate-800 p-3 rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <img src={barber.user.avatarUrl} alt={barber.user.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-slate-100">{barber.user.name}</p>
              <p className="text-sm text-slate-400">{barber.salon.name}</p>
            </div>
          </div>
          <button className="bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg text-sm hover:bg-amber-400 transition-colors">予約</button>
        </div>
      ))}
    </div>
  </div>
);

const RecruitmentPage: React.FC = () => (
  <div>
    <PageHeader title="リクルート" />
    <div className="p-4 space-y-4">
        {JOBS.map(job => (
            <div key={job.id} className="bg-slate-800 p-4 rounded-lg border-l-4 border-amber-400">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg text-slate-100">{job.title}</h3>
                        <p className="text-md text-slate-300">{job.salon.name}</p>
                        <p className="text-sm text-slate-400">{job.location}</p>
                    </div>
                    <span className="bg-slate-700 text-amber-400 text-xs font-semibold px-2 py-1 rounded-full">{job.type}</span>
                </div>
                <p className="text-slate-300 mt-3 border-t border-slate-700 pt-3">{job.description}</p>
                 <button className="w-full bg-amber-500 text-slate-900 font-bold py-2 px-4 rounded-lg text-sm hover:bg-amber-400 transition-colors mt-4">詳細を見て応募する</button>
            </div>
        ))}
    </div>
  </div>
);

const SettingsPage: React.FC = () => {
    const settingsItems = ['プロフィール編集', '通知設定', 'プライバシーポリシー', '利用規約', 'お問い合わせ', 'ログアウト'];
    return (
        <div>
            <PageHeader title="設定" />
            <div className="p-4">
                <ul className="bg-slate-800 rounded-lg overflow-hidden divide-y divide-slate-700">
                    {settingsItems.map(item => (
                        <li key={item} className="flex justify-between items-center p-4 text-slate-200 hover:bg-slate-700 cursor-pointer transition-colors">
                            <span>{item}</span>
                            <ChevronLeftIcon className="w-5 h-5 text-slate-500 transform -rotate-180" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


// --- Modal Components ---
const ProductModal: React.FC<{ product: Product, onClose: () => void }> = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative max-w-md w-full bg-slate-800 rounded-xl overflow-hidden shadow-lg" onClick={(e) => e.stopPropagation()}>
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                    <p className="text-sm text-slate-400">{product.brand}</p>
                    <h2 className="text-2xl font-bold text-slate-100 mt-1">{product.name}</h2>
                    <p className="text-amber-400 font-bold text-xl mt-2">¥{product.price.toLocaleString()}</p>
                    <p className="text-slate-300 mt-4 h-24 overflow-y-auto">{product.description}</p>
                    <button className="w-full bg-amber-500 text-slate-900 font-bold py-3 mt-4 rounded-lg hover:bg-amber-400 transition-colors">購入する</button>
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 text-slate-200 hover:bg-slate-900">
                    <XIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const SalonModal: React.FC<{ salon: Salon, onClose: () => void }> = ({ salon, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative max-w-md w-full bg-slate-800 rounded-xl overflow-hidden shadow-lg" onClick={(e) => e.stopPropagation()}>
                <img src={`https://picsum.photos/seed/${salon.id}/600/300`} alt={salon.name} className="w-full h-40 object-cover" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-100">{salon.name}</h2>
                    <p className="text-slate-400 mt-1">{salon.address}</p>
                    <p className="text-slate-300 mt-4 h-20 overflow-y-auto">{salon.bio}</p>
                    <div className="flex space-x-2 mt-4">
                        <button className="w-full bg-slate-600 text-slate-100 font-bold py-3 rounded-lg hover:bg-slate-500 transition-colors">DMを送る</button>
                        <button className="w-full bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors">予約する</button>
                    </div>
                     {salon.recruiting && (
                        <button className="w-full bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-2.5 mt-2 rounded-lg hover:bg-amber-400/10 transition-colors">求人情報を見る</button>
                    )}
                </div>
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 text-slate-200 hover:bg-slate-900">
                    <XIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
