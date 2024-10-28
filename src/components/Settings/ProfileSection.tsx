import React, { useState } from 'react';
import { User, Camera } from 'lucide-react';

export function ProfileSection() {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
      
      <div className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <Camera className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Profile Picture</h3>
            <p className="text-sm text-gray-500 mt-1">
              Upload a new profile picture or remove the current one
            </p>
          </div>
        </div>

        {/* Profile Form */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-pink-500 focus:ring focus:ring-pink-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-pink-500 focus:ring focus:ring-pink-200"
            />
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Change Password
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={profileData.currentPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-pink-500 focus:ring focus:ring-pink-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={profileData.newPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-pink-500 focus:ring focus:ring-pink-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:border-pink-500 focus:ring focus:ring-pink-200"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}