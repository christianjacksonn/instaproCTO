import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

interface SearchPageProps {
  onBack: () => void;
}

export function SearchPage({ onBack }: SearchPageProps) {
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (url: string, description: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSearchPerformed(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-12">
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
          <h1 className="text-3xl font-bold text-gray-900 mt-4">New Search</h1>
          <p className="mt-2 text-gray-600">
            Enter an Instagram profile URL to find potential prospects
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <SearchInput onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        {(searchPerformed || loading) && (
          <div className="mt-8">
            <SearchResults loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
}