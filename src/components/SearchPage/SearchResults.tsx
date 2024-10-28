import React from 'react';
import { Loader2, UserPlus, ExternalLink } from 'lucide-react';

interface SearchResultsProps {
  loading: boolean;
}

export function SearchResults({ loading }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 text-pink-600 animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Analyzing followers and following...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Potential Prospects</h2>
      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={`https://source.unsplash.com/100x100/?portrait&${index}`}
                  alt={`Profile ${index + 1}`}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    @username_{index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Creative Designer • 10.{index}k followers
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="btn btn-secondary flex items-center space-x-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>View Profile</span>
                </button>
                <button className="btn btn-primary flex items-center space-x-1">
                  <UserPlus className="h-4 w-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">
                Digital artist and designer creating unique experiences. Available for freelance work.
              </p>
              <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                <span>Posts: 245</span>
                <span>Following: 892</span>
                <span>Engagement: 3.2%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}