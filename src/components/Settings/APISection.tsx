import React from 'react';
import { Instagram, AlertCircle, CheckCircle2 } from 'lucide-react';

export function APISection() {
  const isConnected = true; // Replace with actual connection status

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">API Integration</h2>
      
      <div className="space-y-6">
        {/* Connection Status */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center">
              <Instagram className="h-5 w-5 text-pink-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Instagram Account</h3>
              <p className="text-sm text-gray-500">@username</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isConnected ? (
              <>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-green-500">Connected</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-yellow-500">Disconnected</span>
              </>
            )}
          </div>
        </div>

        {/* API Settings */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Default Search Filters
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Only include accounts with business/creator profiles
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Filter out accounts with less than 1000 followers
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rate Limit Notifications
            </label>
            <div className="mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Notify me when approaching API rate limits
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button className="btn btn-secondary">
            Disconnect Account
          </button>
          <button className="btn btn-primary">
            Reconnect Account
          </button>
        </div>
      </div>
    </section>
  );
}