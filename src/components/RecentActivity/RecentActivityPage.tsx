import React from 'react';
import { ArrowLeft, Calendar, Search, Users } from 'lucide-react';

interface RecentActivityPageProps {
  onBack: () => void;
}

interface RecentSearch {
  id: string;
  username: string;
  date: string;
  results: number;
  saved: number;
  status: 'completed' | 'in_progress';
}

const recentSearches: RecentSearch[] = [
  {
    id: '1',
    username: "@designerflow",
    date: "2 hours ago",
    results: 156,
    saved: 23,
    status: 'completed'
  },
  {
    id: '2',
    username: "@creativestudio",
    date: "Yesterday",
    results: 89,
    saved: 12,
    status: 'completed'
  },
  {
    id: '3',
    username: "@artdaily",
    date: "3 days ago",
    results: 234,
    saved: 45,
    status: 'completed'
  },
  {
    id: '4',
    username: "@techflow",
    date: "4 days ago",
    results: 167,
    saved: 28,
    status: 'completed'
  },
  {
    id: '5',
    username: "@startupworld",
    date: "1 week ago",
    results: 198,
    saved: 34,
    status: 'completed'
  }
];

export function RecentActivityPage({ onBack }: RecentActivityPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Recent Activity</h1>
              <p className="mt-2 text-gray-600">
                View your recent searches and their results
              </p>
            </div>
          </div>
        </div>

        {/* Activity List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-6">
            {recentSearches.map((search) => (
              <div 
                key={search.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Search className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {search.username}
                    </h3>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {search.date}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Search className="h-4 w-4 mr-1" />
                        {search.results} results
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {search.saved} saved
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="btn btn-secondary">
                    View Results
                  </button>
                  <button className="btn btn-primary">
                    Save More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}