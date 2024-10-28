import React from 'react';
import { Sliders, Users, Calendar } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

const filterOptions: FilterOption[] = [
  {
    id: 'followerRange',
    label: 'Follower Range',
    options: ['Any', '1k-10k', '10k-50k', '50k-100k', '100k+']
  },
  {
    id: 'accountType',
    label: 'Account Type',
    options: ['Any', 'Personal', 'Business', 'Creator']
  },
  {
    id: 'activity',
    label: 'Activity',
    options: ['Any', 'Daily', 'Weekly', 'Monthly']
  }
];

export function SearchFilters() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sliders className="h-5 w-5 text-gray-500" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="space-y-6">
        {filterOptions.map((filter) => (
          <div key={filter.id} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {filter.label}
            </label>
            <select className="block w-full rounded-md border-gray-200 focus:border-pink-500 focus:ring-pink-500">
              {filter.options.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        
        <div className="pt-4">
          <button className="w-full btn btn-secondary">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}