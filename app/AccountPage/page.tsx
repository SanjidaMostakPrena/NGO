'use client';

import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Shield, 
  Lock, 
  Key, 
  CheckCircle, 
  Activity, 
  Smartphone, 
  MapPin, 
  Briefcase,
  AlertCircle,
  Save
} from 'lucide-react';

interface ActivityLog {
  id: string;
  action: string;
  time: string;
  ip: string;
  device: string;
}

const AccountPage = () => {
  // Notification Toast State
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Profile Information States
  const [profile, setProfile] = useState({
    name: 'আরিফ রহমান',
    email: 'arif.ngo.official@gmail.com',
    phone: '০১৭৮৯-৪৫৫৬১২',
    role: 'সিনিয়র ক্রেডিট অফিসার (Admin)',
    branch: 'মিরপুর শাখা (০৫)',
    employeeId: 'EMP-২০২৬-৮৮',
    address: 'হাউজ নং: ১২, রোড নং: ০৪, মিরপুর-১০, ঢাকা',
  });

  // Password Update States
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Mock Data: System Security Access Logs for this User
  const [activities, setActivities] = useState<ActivityLog[]>([
    { id: 'LOG-৯১', action: 'নতুন মেম্বার (MB-৯৯০১) এর ফাইল ও NID আপলোড করেছেন', time: 'আজ, ০৭:২০ PM', ip: '১০৩.২৩০.১০৪.১২', device: 'Chrome / Windows 11' },
    { id: 'LOG-৮২', action: 'জেনারেল ভাউচার (V-৮৮২১) এন্ট্রি পোস্ট করেছেন', time: 'আজ, ০৪:১৫ PM', ip: '১০৩.২৩০.১০৪.১২', device: 'Chrome / Windows 11' },
    { id: 'LOG-৭৫', action: 'মাসিক ঋণ বিতরণ ও আদায় প্রতিবেদন তৈরি করেছেন', time: 'গতকাল, ১১:৩০ AM', ip: '১০৩.২৩০.১০৫.৮', device: 'Chrome / Windows 11' },
    { id: 'LOG-৬০', action: 'অ্যাকাউন্টে নতুন সিকিউরিটি পিন পরিবর্তন সফল', time: '২৮ মে, ২০২৬', ip: '১৮০.২৩৪.৮৯.৫৪', device: 'Mobile App / Android' },
  ]);

  // Handler to update Profile General Info Dynamically
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('আপনার অ্যাকাউন্ট প্রোফাইল তথ্য সফলভাবে আপডেট করা হয়েছে!');
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  // Handler to update Password Security with real-time matching verification
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwords.newPassword !== passwords.confirmPassword) {
      setErrorMessage('নতুন পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না!');
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }

    setSuccessMessage('আপনার অ্যাকাউন্টের নিরাপত্তা পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে।');
    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
    
    // Add dynamic log on password change
    const newLog: ActivityLog = {
      id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
      action: 'অ্যাকাউন্ট সিকিউরিটি পাসওয়ার্ড পরিবর্তন করা হয়েছে',
      time: 'এইমাত্র',
      ip: '১০৩.২৩০.১০৪.১২',
      device: 'Chrome / Windows 11'
    };
    setActivities([newLog, ...activities]);

    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div className="space-y-6">
      
      {/* ================= HEADER SECTION ================= */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-1">মাই অ্যাকাউন্ট ও সিকিউরিটি (Profile Settings)</h1>
        <p className="text-slate-500 text-sm">আপনার এনজিও ড্যাশবোর্ড আইডি প্রোফাইল, সিস্টেম পারমিশন লেভেল পরিবর্তন এবং সিকিউরিটি লগ ট্র্যাকিং প্যানেল।</p>
      </div>

      {/* ================= ALERT NOTIFICATIONS ================= */}
      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-2 text-xs font-bold animate-in fade-in duration-200">
          <CheckCircle size={16} />
          <span>{successMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2 text-xs font-bold animate-in fade-in duration-200">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* ================= PROFILES TOP SECTION LAYOUT ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col sm:flex-row items-center gap-6">
        {/* Creative Avatar Frame */}
        <div className="w-24 h-24 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#0c2483] relative group shrink-0">
          <User size={44} />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" title="অনলাইন"></span>
        </div>
        
        <div className="text-center sm:text-left space-y-1.5 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">{profile.name}</h2>
              <p className="text-xs text-slate-500 font-bold flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                <Briefcase size={12} className="text-slate-400" />
                {profile.role}
              </p>
            </div>
            <span className="mx-auto sm:mx-0 px-3 py-1 bg-indigo-50 text-[#0c2483] font-bold text-[10px] rounded-full uppercase tracking-wider border border-indigo-100/50">
              ID: {profile.employeeId}
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-1 gap-x-4 pt-2 text-xs text-slate-500 font-medium border-t border-slate-50">
            <p className="flex items-center justify-center sm:justify-start gap-1.5"><Mail size={13} className="text-slate-400" /> {profile.email}</p>
            <p className="flex items-center justify-center sm:justify-start gap-1.5"><Phone size={13} className="text-slate-400" /> {profile.phone}</p>
            <p className="flex items-center justify-center sm:justify-start gap-1.5"><MapPin size={13} className="text-slate-400" /> {profile.branch}</p>
          </div>
        </div>
      </div>

      {/* ================= TWO COLUMN INTERACTIVE FORMS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Edit Profile Info */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-50">
            <User size={16} className="text-[#0c2483]" />
            <h3 className="text-sm font-extrabold text-slate-900">ব্যক্তিগত তথ্য পরিবর্তন</h3>
          </div>

          <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
            <div>
              <label className="block text-slate-500 mb-1">পূর্ণ নাম *</label>
              <input 
                type="text" 
                required
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1">অফিসিয়াল ইমেইল এড্রেস *</label>
              <input 
                type="email" 
                required
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1">মোবাইল নম্বর *</label>
              <input 
                type="text" 
                required
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1">বর্তমান কর্মস্থল শাখা</label>
              <input 
                type="text" 
                disabled
                value={profile.branch}
                className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 font-medium text-slate-400 cursor-not-allowed"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-slate-500 mb-1">যোগাযোগের ঠিকানা</label>
              <input 
                type="text" 
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white transition-all"
              />
            </div>
            <div className="sm:col-span-2 pt-2">
              <button 
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-xs"
              >
                <Save size={14} />
                <span>প্রোফাইল সংরক্ষণ করুন</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right 1 Column: Security & Passwords */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-50">
            <Lock size={16} className="text-red-500" />
            <h3 className="text-sm font-extrabold text-slate-900">নিরাপত্তা ও পাসওয়ার্ড</h3>
          </div>

          <form onSubmit={handleUpdatePassword} className="space-y-3 text-xs font-semibold">
            <div>
              <label className="block text-slate-500 mb-1">বর্তমান পাসওয়ার্ড *</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={passwords.currentPassword}
                onChange={(e) => setPasswords({...passwords, currentPassword: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-red-500 focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1">নতুন পাসওয়ার্ড *</label>
              <input 
                type="password" 
                required
                placeholder="নতুন পাসওয়ার্ড দিন"
                value={passwords.newPassword}
                onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1">নতুন পাসওয়ার্ড নিশ্চিত করুন *</label>
              <input 
                type="password" 
                required
                placeholder="পুনরায় টাইপ করুন"
                value={passwords.confirmPassword}
                onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white transition-all"
              />
            </div>
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl font-bold transition-all shadow-xs"
              >
                <Key size={14} />
                <span>পাসওয়ার্ড আপডেট করুন</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* ================= RECENT SYSTEM ACCESS SECURITY LOGS ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-50">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-amber-500" />
            <h3 className="text-sm font-extrabold text-slate-900">অ্যাকাউন্ট অ্যাক্টিভিটি হিস্ট্রি (Audit Trail)</h3>
          </div>
          <span className="text-[10px] bg-slate-100 text-slate-500 font-bold px-2.5 py-0.5 rounded-full">
            নিরাপত্তা নজরদারি সেশন
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold border-b border-slate-100">
                <th className="p-3 rounded-l-xl">সম্পাদিত অ্যাকশন</th>
                <th className="p-3">সময়কাল</th>
                <th className="p-3">আইপি এড্রেস (IP)</th>
                <th className="p-3 rounded-r-xl">ডিভাইস ও ব্রাউজার</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50 font-medium text-slate-600">
              {activities.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-3 font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                    {log.action}
                  </td>
                  <td className="p-3 text-slate-500">{log.time}</td>
                  <td className="p-3 font-mono text-slate-500">{log.ip}</td>
                  <td className="p-3 text-slate-400 flex items-center gap-1.5">
                    <Smartphone size={12} />
                    {log.device}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AccountPage;