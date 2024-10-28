import React from 'react';
import { ArrowLeft, Shield, Bell, CreditCard, Instagram, Mail, Key, Download, Trash2 } from 'lucide-react';
import { ProfileSection } from './ProfileSection';
import { APISection } from './APISection';
import { NotificationSection } from './NotificationSection';
import { PrivacySection } from './PrivacySection';
import { BillingSection } from './BillingSection';

interface SettingsPageProps {
  onBack: () => void;
}

export function SettingsPage({ onBack }: SettingsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Settings</h1>
          <p className="mt-2 text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-8 pb-16">
          <ProfileSection />
          <APISection />
          <NotificationSection />
          <PrivacySection />
          <BillingSection />
        </div>
      </div>
    </div>
  );
}