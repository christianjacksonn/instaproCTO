import React, { useState } from 'react';
import { Folder, FolderPlus, Hash, Archive, Users } from 'lucide-react';

interface Folder {
  id: string;
  name: string;
  count: number;
  icon?: React.ReactNode;
}

interface FolderSidebarProps {
  selectedFolder: string | null;
  onFolderSelect: (folderId: string | null) => void;
}

const mockFolders: Folder[] = [
  { id: 'designers', name: 'Designers', count: 12, icon: <Users className="h-5 w-5 mr-3" /> },
  { id: 'tech', name: 'Tech Startups', count: 8, icon: <Users className="h-5 w-5 mr-3" /> },
  { id: 'artists', name: 'Artists', count: 15, icon: <Users className="h-5 w-5 mr-3" /> }
];

export function FolderSidebar({ selectedFolder, onFolderSelect }: FolderSidebarProps) {
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateFolder = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFolderName.trim()) {
      // Implement folder creation logic
      setNewFolderName('');
      setShowNewFolder(false);
    }
  };

  const totalAccounts = mockFolders.reduce((acc, folder) => acc + folder.count, 0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Folders</h2>
        <button
          onClick={() => setShowNewFolder(true)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FolderPlus className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {showNewFolder && (
        <form onSubmit={handleCreateFolder} className="mb-4">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="New folder name"
            className="block w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-2"
            autoFocus
          />
          <div className="flex space-x-2">
            <button type="submit" className="btn btn-primary text-sm flex-1">
              Create
            </button>
            <button
              type="button"
              onClick={() => setShowNewFolder(false)}
              className="btn btn-secondary text-sm flex-1"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-1">
        <button
          onClick={() => onFolderSelect(null)}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            selectedFolder === null
              ? 'bg-pink-50 text-pink-600'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center">
            <Hash className="h-5 w-5 mr-3" />
            <span>All Accounts</span>
          </div>
          <span className="text-sm text-gray-500">{totalAccounts}</span>
        </button>

        {mockFolders.map((folder) => (
          <button
            key={folder.id}
            onClick={() => onFolderSelect(folder.id)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
              selectedFolder === folder.id
                ? 'bg-pink-50 text-pink-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              {folder.icon || <Folder className="h-5 w-5 mr-3" />}
              <span>{folder.name}</span>
            </div>
            <span className="text-sm text-gray-500">{folder.count}</span>
          </button>
        ))}

        <button
          onClick={() => onFolderSelect('archive')}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
            selectedFolder === 'archive'
              ? 'bg-pink-50 text-pink-600'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center">
            <Archive className="h-5 w-5 mr-3" />
            <span>Archive</span>
          </div>
          <span className="text-sm text-gray-500">2</span>
        </button>
      </div>
    </div>
  );
}