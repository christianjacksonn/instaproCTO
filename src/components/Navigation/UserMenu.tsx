import React, { useState, useRef, useEffect } from 'react';
import { Settings, LogOut, CreditCard } from 'lucide-react';

interface UserMenuProps {
  onSettingsClick: () => void;
}

export function UserMenu({ onSettingsClick }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
        <span className="text-sm font-medium text-gray-700">John Doe</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>

          <div className="py-1">
            <button
              onClick={() => {
                setIsOpen(false);
                onSettingsClick();
              }}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full"
            >
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </button>
            <button
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full"
            >
              <CreditCard className="h-4 w-4 mr-3" />
              Billing
            </button>
            <button
              className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}