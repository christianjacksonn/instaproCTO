import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';

export function NotificationSection() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
      
      <div className="space-y-6">
        {/* Email Notifications */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            Email Notifications
          </h3>
          <div className="space-y-3">
            {['Search completed', 'New features available', 'System updates', 'Weekly activity summary'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-gray-700">{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* In-App Notifications */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            In-App Notifications
          </h3>
          <div className="space-y-3">
            {['Real-time search updates', 'Connection requests', 'Account activity alerts'].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-gray-700">{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button className="btn btn-primary">
            Save Preferences
          </button>
        </div>
      </div>
    </section>
  );
}