import React, { useState } from 'react';
import { Search, AlertCircle, User, Users } from 'lucide-react';

interface SearchInputProps {
  onSearch: (url: string, description: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [targetAccount, setTargetAccount] = useState<TargetAccount | null>(null);

  interface TargetAccount {
    username: string;
    profilePicture: string;
    followers: string;
    following: string;
  }

  const validateInstagramUrl = (url: string) => {
    const regex = /^https?:\/\/(?:www\.)?instagram\.com\/([a-zA-Z0-9._]+)\/?$/;
    return regex.test(url);
  };

  const fetchAccountInfo = async (url: string) => {
    // Simulated API call - replace with actual API integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    const username = url.split('/').filter(Boolean).pop() || '';
    
    setTargetAccount({
      username,
      profilePicture: `https://source.unsplash.com/100x100/?portrait&${username}`,
      followers: '10.5K',
      following: '892'
    });
  };

  const handleUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setError('');
    setTargetAccount(null);

    if (validateInstagramUrl(newUrl)) {
      await fetchAccountInfo(newUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter an Instagram profile URL');
      return;
    }

    if (!validateInstagramUrl(url)) {
      setError('Please enter a valid Instagram profile URL');
      return;
    }

    if (!description.trim()) {
      setError('Please describe the type of accounts you are looking for');
      return;
    }

    setError('');
    onSearch(url, description);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Instagram Profile URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="url"
              value={url}
              onChange={handleUrlChange}
              placeholder="https://instagram.com/username"
              className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>

        {targetAccount && (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-6">
              <img
                src={targetAccount.profilePicture}
                alt={targetAccount.username}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">@{targetAccount.username}</h3>
                <div className="flex space-x-6 mt-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{targetAccount.followers} followers</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{targetAccount.following} following</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Describe the type of accounts you're looking for
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Creative designers who post regularly and engage with their community"
            rows={3}
            className="block w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full btn btn-primary"
          disabled={!targetAccount}
        >
          Find Prospects
        </button>
      </form>
    </div>
  );
}