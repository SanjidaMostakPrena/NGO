"use client";

import { useState } from 'react';
import { 
  Bell, 
  AlertTriangle, 
  CheckCircle2, 
  Banknote, 
  Info, 
  Sliders, 
  HelpCircle, 
  Check
} from 'lucide-react';

const NotificationsManagement = () => {
  // State for Filter Tabs
  const [activeTab, setActiveTab] = useState('All');

  // Preferences Toggles State
  const [preferences, setPreferences] = useState({
    push: true,
    email: true,
    sms: false,
  });

  // Mock Data for Notifications List
  const notifications = [
    {
      id: 1,
      type: 'urgent',
      icon: <AlertTriangle className="text-red-600" size={20} />,
      iconBg: 'bg-red-100',
      borderLeft: 'border-l-4 border-l-red-600',
      title: 'System Downtime Scheduled',
      time: '2 mins ago',
      description:
        'Critical maintenance is scheduled for Sunday, Oct 24, from 02:00 AM to 04:00 AM. Access to the loan portal will be restricted.',
      hasButtons: true,
    },
    {
      id: 2,
      type: 'approvals',
      icon: <CheckCircle2 className="text-[#0c2483]" size={20} />,
      iconBg: 'bg-indigo-50',
      title: 'Loan Approved: Maria Gonzalez',
      time: '45 mins ago',
      description:
        'Micro-loan #8829 for $1,200.00 has been successfully approved by the board. Ready for disbursement.',
      memberCard: {
        name: 'Maria Gonzalez',
        id: '#1029',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop',
      },
    },
    {
      id: 3,
      type: 'payments',
      icon: <Banknote className="text-indigo-600" size={20} />,
      iconBg: 'bg-indigo-50',
      title: 'Bulk Repayment Received',
      time: '3 hours ago',
      description:
        'Sector 4 group has completed their monthly collective repayment of $4,500.00.',
      showProgress: true,
    },
    {
      id: 4,
      type: 'all',
      icon: <Info className="text-slate-500" size={20} />,
      iconBg: 'bg-slate-100',
      title: 'New Feature: Mobile Savings',
      time: 'Yesterday',
      description:
        'Members can now link their mobile wallets for automatic savings contributions.',
    },
  ];

  // Toggle Handler
  const togglePreference = (key: 'push' | 'email' | 'sms') => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Filter Logic
  const filteredNotifications = notifications.filter((item) => {
    if (activeTab === 'All') return true;
    return item.type === activeTab.toLowerCase();
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">
            Notifications Management
          </h1>

          <p className="text-slate-500 text-sm">
            Stay updated with critical alerts and system changes across the
            branch.
          </p>
        </div>

        <button className="flex items-center gap-1 text-[#002bb8] hover:text-[#002294] font-semibold text-sm transition-all">
          <Check size={16} />
          <span>Mark all as read</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-100 pb-4 mb-6 overflow-x-auto">
        {['All', 'Urgent', 'Approvals', 'Payments'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab
                ? 'bg-[#0c2483] text-white'
                : 'bg-white border border-slate-100 text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-4">
          {filteredNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-all ${
                notif.borderLeft || ''
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full ${notif.iconBg} flex items-center justify-center shrink-0`}
              >
                {notif.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">
                    {notif.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {notif.time}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {notif.description}
                </p>

                {/* Buttons */}
                {notif.hasButtons && (
                  <div className="flex gap-3 pt-4">
                    <button className="bg-[#0c2483] text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-[#0a1e6e]">
                      View Details
                    </button>

                    <button className="text-slate-500 text-xs font-bold px-4 py-2 hover:text-slate-800">
                      Dismiss
                    </button>
                  </div>
                )}

                {/* Member Card */}
                {notif.memberCard && (
                  <div className="flex items-center justify-between border border-slate-100 bg-slate-50 rounded-xl p-3 mt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={notif.memberCard.avatar}
                        alt="Member"
                        className="w-8 h-8 rounded-full object-cover"
                      />

                      <span className="text-xs font-bold text-slate-700">
                        {notif.memberCard.name} • Member{' '}
                        {notif.memberCard.id}
                      </span>
                    </div>

                    <button className="text-[#0c2483] text-xs font-bold hover:text-[#002294]">
                      Process Funds
                    </button>
                  </div>
                )}

                {/* Progress */}
                {notif.showProgress && (
                  <div className="space-y-2 pt-4">
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#0c2483] h-full w-full rounded-full"></div>
                    </div>

                    <div className="flex justify-end">
                      <span className="text-[11px] font-bold text-[#0c2483]">
                        Paid
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Preferences */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sliders size={18} className="text-[#0c2483]" />

              <h3 className="text-base font-bold text-slate-900">
                Preferences
              </h3>
            </div>

            <div className="space-y-5">
              {[
                {
                  key: 'push',
                  title: 'Push Notifications',
                  desc: 'Receive alerts on desktop',
                },
                {
                  key: 'email',
                  title: 'Email Updates',
                  desc: 'Daily digest at 8:00 AM',
                },
                {
                  key: 'sms',
                  title: 'SMS Alerts',
                  desc: 'Only for urgent warnings',
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-800">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      togglePreference(
                        item.key as 'push' | 'email' | 'sms'
                      )
                    }
                    className={`w-11 h-6 rounded-full relative transition-colors ${
                      preferences[
                        item.key as 'push' | 'email' | 'sms'
                      ]
                        ? 'bg-[#0c2483]'
                        : 'bg-slate-200'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${
                        preferences[
                          item.key as 'push' | 'email' | 'sms'
                        ]
                          ? 'right-1'
                          : 'left-1'
                      }`}
                    ></span>
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 border border-[#0c2483] text-[#0c2483] py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-50">
              Save Preferences
            </button>
          </div>

          {/* Response Health */}
          <div className="bg-[#0c2483] text-white rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute right-[-15px] bottom-[-20px] w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
              <Bell size={48} className="text-white/10" />
            </div>

            <h3 className="text-base font-bold mb-4">
              Response Health
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-xs text-indigo-200">
                  Avg. Approval Time
                </span>

                <span className="text-sm font-bold">1.2h</span>
              </div>

              <div className="flex justify-between">
                <span className="text-xs text-indigo-200">
                  Unread Critical
                </span>

                <span className="text-sm font-bold">0</span>
              </div>

              <div className="space-y-2 pt-2">
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[92%] rounded-full"></div>
                </div>

                <p className="text-[10px] text-indigo-200 italic">
                  Top 8% efficiency this month
                </p>
              </div>
            </div>
          </div>

          {/* Help Center */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden shadow-lg mb-4">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"></div>

              <HelpCircle
                size={24}
                className="text-white/80 relative z-10"
              />
            </div>

            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Not seeing an alert?
            </h4>

            <p className="text-xs text-slate-400 max-w-[180px] leading-relaxed mb-4">
              Check your filtered categories or contact the IT system
              admin.
            </p>

            <button className="text-[#0c2483] hover:text-[#002294] text-xs font-bold">
              Go to Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsManagement;