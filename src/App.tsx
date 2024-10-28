import React, { useState } from 'react';
import { Search, Users, ListFilter, Instagram } from 'lucide-react';
import { SearchPage } from './components/SearchPage/SearchPage';
import { SavedPage } from './components/SavedPage/SavedPage';
import { RecentActivityPage } from './components/RecentActivity/RecentActivityPage';
import { SettingsPage } from './components/Settings/SettingsPage';
import { UserMenu } from './components/Navigation/UserMenu';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'search' | 'saved' | 'recent' | 'settings'>('home');

  if (currentPage === 'search') {
    return <SearchPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'saved') {
    return <SavedPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'recent') {
    return <RecentActivityPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'settings') {
    return <SettingsPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Instagram className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">InstaPro</span>
            </div>
            <div className="flex items-center">
              <UserMenu onSettingsClick={() => setCurrentPage('settings')} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, User</h1>
          <p className="mt-2 text-gray-600">Start prospecting or view your saved lists</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickActionCard
            icon={<Search className="h-6 w-6" />}
            title="New Search"
            description="Find potential prospects"
            action="Start Search"
            onClick={() => setCurrentPage('search')}
          />
          <QuickActionCard
            icon={<Users className="h-6 w-6" />}
            title="Saved Prospects"
            description="View your prospect lists"
            action="View Lists"
            onClick={() => setCurrentPage('saved')}
          />
          <QuickActionCard
            icon={<ListFilter className="h-6 w-6" />}
            title="Recent Activity"
            description="Check your recent searches"
            action="View History"
            onClick={() => setCurrentPage('recent')}
          />
        </div>

        {/* Saved Searches Preview */}
        <section className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Saved Searches</h2>
            <button 
              onClick={() => setCurrentPage('recent')}
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              View All →
            </button>
          </div>
          <div className="space-y-4">
            {recentSearches.slice(0, 3).map((search, index) => (
              <RecentSearchCard key={index} {...search} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

interface QuickActionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  onClick?: () => void;
}

function QuickActionCard({ icon, title, description, action, onClick }: QuickActionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button 
        className="text-pink-600 font-medium hover:text-pink-700"
        onClick={onClick}
      >
        {action} →
      </button>
    </div>
  );
}

interface RecentSearch {
  username: string;
  date: string;
  results: number;
  saved: number;
}

const recentSearches: RecentSearch[] = [
  {
    username: "@designerflow",
    date: "2 hours ago",
    results: 156,
    saved: 23,
  },
  {
    username: "@creativestudio",
    date: "Yesterday",
    results: 89,
    saved: 12,
  },
  {
    username: "@artdaily",
    date: "3 days ago",
    results: 234,
    saved: 45,
  },
];

function RecentSearchCard({ username, date, results, saved }: RecentSearch) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div>
        <h4 className="text-gray-900 font-medium">{username}</h4>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="flex items-center space-x-6">
        <div>
          <p className="text-sm text-gray-500">Results</p>
          <p className="text-gray-900 font-medium">{results}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Saved</p>
          <p className="text-gray-900 font-medium">{saved}</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          View
        </button>
      </div>
    </div>
  );
}

export default App;