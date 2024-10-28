import React from 'react';
import { CreditCard, Star, Zap } from 'lucide-react';

export function BillingSection() {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing & Subscription</h2>
      
      <div className="space-y-6">
        {/* Current Plan */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Pro Plan</h3>
              <p className="text-sm text-gray-500">$29/month • Renews on Feb 1, 2024</p>
            </div>
            <button className="btn btn-primary flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>Upgrade Plan</span>
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500</div>
              <div className="text-sm text-gray-500">Searches/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10k</div>
              <div className="text-sm text-gray-500">Results/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-500">Team members</div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">•••• 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
            </div>
            <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
              Update
            </button>
          </div>
        </div>

        {/* Billing History */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Billing History</h3>
          <div className="space-y-3">
            {[
              { date: 'Jan 1, 2024', amount: '$29.00', status: 'Paid' },
              { date: 'Dec 1, 2023', amount: '$29.00', status: 'Paid' },
              { date: 'Nov 1, 2023', amount: '$29.00', status: 'Paid' }
            ].map((invoice) => (
              <div key={invoice.date} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{invoice.date}</p>
                  <p className="text-sm text-gray-500">{invoice.amount}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-green-600 font-medium">{invoice.status}</span>
                  <button className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}