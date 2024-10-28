import React, { useState } from 'react';
import { ArrowLeft, Search, FolderPlus, Trash2, Tags } from 'lucide-react';
import { SavedSearchList } from './SavedSearchList';
import { FolderSidebar } from './FolderSidebar';

interface SavedPageProps {
  onBack: () => void;
}

export function SavedPage({ onBack }: SavedPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFolderSelect = (folderId: string | null) => {
    setSelectedFolder(folderId);
    setSelectedAccounts([]);
  };

  const handleAccountSelect = (accountId: string) => {
    setSelectedAccounts(prev => 
      prev.includes(accountId) 
        ? prev.filter(id => id !== accountId)
        : [...prev, accountId]
    );
  };

  const handleBulkDelete = () => {
    setSelectedAccounts([]);
  };

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
              <h1 className="text-3xl font-bold text-gray-900">Saved Accounts</h1>
              <p className="mt-2 text-gray-600">
                Manage and organize your saved Instagram accounts
              </p>
            </div>
            <button className="btn btn-primary flex items-center space-x-2">
              <Tags className="h-4 w-4" />
              <span>Manage Tags</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <FolderSidebar
              selectedFolder={selectedFolder}
              onFolderSelect={handleFolderSelect}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 pb-12">
            {/* Search and Actions Bar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by username, bio, or tags..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  {selectedAccounts.length > 0 && (
                    <>
                      <button
                        onClick={handleBulkDelete}
                        className="btn btn-secondary flex items-center space-x-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Remove {selectedAccounts.length} Selected</span>
                      </button>
                      <button className="btn btn-secondary flex items-center space-x-2">
                        <FolderPlus className="h-4 w-4" />
                        <span>Move to Folder</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Saved Accounts List */}
            <SavedSearchList
              searchQuery={searchQuery}
              selectedFolder={selectedFolder}
              selectedAccounts={selectedAccounts}
              onAccountSelect={handleAccountSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}