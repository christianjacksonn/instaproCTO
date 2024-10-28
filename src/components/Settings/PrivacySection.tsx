import React from 'react';
import { Shield, Download, Trash2 } from 'lucide-react';

export function PrivacySection() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Privacy & Data</h2>
      
      <div className="space-y-6">
        {/* Data Usage */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Data Usage</h3>
          <p className="text-gray-600 text-sm mb-4">
            We collect and store your data to provide you with the best possible experience.
            Your data is encrypted and securely stored in accordance with GDPR regulations.
          </p>
          <div className="flex space-x-3">
            <button className="btn btn-secondary flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Data</span>
            </button>
            <button className="btn btn-secondary flex items-center space-x-2 text-red-600 hover:text-red-700">
              <Trash2 className="h-4 w-4" />
              <span>Delete Data</span>
            </button>
          </div>
        </div>

        {/* Connected Apps */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Connected Applications</h3>
          <div className="space-y-4">
            {['Instagram Business Account', 'Meta Business Suite'].map((app) => (
              <div key={app} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{app}</h4>
                  <p className="text-sm text-gray-500">Connected on Jan 15, 2024</p>
                </div>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                  Revoke Access
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Settings */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h3>
          <div className="space-y-3">
            {[
              'Allow data collection for personalization',
              'Share usage statistics anonymously',
              'Receive security alerts'
            ].map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-gray-700">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}