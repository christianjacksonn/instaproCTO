import React from 'react';
import { Edit3, Trash2, ExternalLink, MoreVertical, MessageCircle } from 'lucide-react';

interface SavedAccount {
  id: string;
  username: string;
  profilePicture: string;
  dateSaved: string;
  followers: string;
  engagement: string;
  bio: string;
  folder: string | null;
  tags: string[];
}

interface SavedSearchListProps {
  searchQuery: string;
  selectedFolder: string | null;
  selectedAccounts: string[];
  onAccountSelect: (accountId: string) => void;
}

const mockSavedAccounts: SavedAccount[] = [
  {
    id: '1',
    username: 'designerflow',
    profilePicture: 'https://source.unsplash.com/100x100/?portrait&1',
    dateSaved: '2 days ago',
    followers: '12.5K',
    engagement: '4.2%',
    bio: 'UI/UX Designer | Creating user-centered digital experiences | Available for freelance',
    folder: 'designers',
    tags: ['ui-design', 'freelancer']
  },
  {
    id: '2',
    username: 'techstartup',
    profilePicture: 'https://source.unsplash.com/100x100/?portrait&2',
    dateSaved: '1 week ago',
    followers: '25.8K',
    engagement: '3.8%',
    bio: 'Founder @techcompany | Building the future of AI | Angel investor',
    folder: 'tech',
    tags: ['startup', 'investor']
  },
  {
    id: '3',
    username: 'artdaily',
    profilePicture: 'https://source.unsplash.com/100x100/?portrait&3',
    dateSaved: '2 weeks ago',
    followers: '45.2K',
    engagement: '5.1%',
    bio: 'Digital Artist | NFT Creator | Commissions open',
    folder: 'artists',
    tags: ['digital-art', 'nft']
  }
];

export function SavedSearchList({ searchQuery, selectedFolder, selectedAccounts, onAccountSelect }: SavedSearchListProps) {
  const filteredAccounts = mockSavedAccounts
    .filter(account => 
      (searchQuery === '' || 
        account.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        account.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        account.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (selectedFolder === null || account.folder === selectedFolder)
    );

  if (filteredAccounts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <p className="text-gray-600">No saved accounts found in this folder</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredAccounts.map((account) => (
        <div
          key={account.id}
          className={`bg-white rounded-lg shadow-sm p-6 transition-colors ${
            selectedAccounts.includes(account.id) ? 'ring-2 ring-pink-500' : ''
          }`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <input
                type="checkbox"
                checked={selectedAccounts.includes(account.id)}
                onChange={() => onAccountSelect(account.id)}
                className="h-5 w-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={account.profilePicture}
                    alt={account.username}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      @{account.username}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {account.followers} followers • {account.engagement} engagement
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="btn btn-secondary flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>Message</span>
                  </button>
                  <button className="btn btn-primary flex items-center space-x-1">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Profile</span>
                  </button>
                  <div className="relative">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-600">{account.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {account.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Saved {account.dateSaved}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}