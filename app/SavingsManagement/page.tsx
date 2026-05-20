import React from 'react';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Info, 
  TrendingDown, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  MapPin 
} from 'lucide-react';

const SavingsManagement = () => {
  // Mock Data for Recent Withdrawals
  const recentWithdrawals = [
    { id: '#২৪৫০', name: 'আবু বকর সিদ্দিক', project: 'দৈনিক সঞ্চয়', date: '১৪ মে, ২০২৪', amount: '৫,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#২৬১২', name: 'মরিয়ম বেগম', project: 'মাসিক সঞ্চয়', date: '১৩ মে, ২০২৪', amount: '১২,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#২৯০৩', name: 'কবির হোসেন', project: 'সাপ্তাহিক সঞ্চয়', date: '১২ মে, ২০২৪', amount: '২,৫০০.০০', status: 'অপেক্ষমান', statusType: 'pending' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#0c2483] mb-1">
            সঞ্চয় ব্যবস্থাপনা (Savings Management)
          </h1>
          <p className="text-slate-500 text-sm">
            আপনার এনজিওর সকল আমানত এবং সঞ্চয় প্রকল্প এক নজরে দেখুন
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#002bb8] hover:bg-[#002294] text-white px-5 py-3 rounded-xl font-medium transition-all shadow-sm">
          <Plus size={20} />
          <span>নতুন সঞ্চয় প্রকল্প</span>
        </button>
      </div>

      {/* ================= STATS CARDS SECTION ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        
        {/* Card 1: Total Savings */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">মোট সঞ্চয় আমানত</p>
            <h3 className="text-2xl font-bold text-[#0c2483]">৳ ১২,৪৫,৬০০.০০</h3>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-4">
            <TrendingUp size={14} />
            <span>+৪.৫% গত মাস</span>
          </div>
        </div>

        {/* Card 2: Active Members */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">মোট সক্রিয় সদস্য</p>
            <h3 className="text-2xl font-bold text-[#0c2483]">১,২৫০ জন</h3>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-4">
            <Users size={14} />
            <span>১২ জন নতুন যুক্ত</span>
          </div>
        </div>

        {/* Card 3: Avg Interest Rate */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">গড় সুদের হার</p>
            <h3 className="text-2xl font-bold text-red-700">৭.২৫%</h3>
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-xs mt-4">
            <Info size={14} />
            <span>বার্ষিক হিসাব</span>
          </div>
        </div>

        {/* Card 4: This Month Withdrawal */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">এই মাসে উত্তোলন</p>
            <h3 className="text-2xl font-bold text-red-600">৳ ৮৫,২০০.০০</h3>
          </div>
          <div className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-4">
            <TrendingDown size={14} />
            <span>-২.১% গত মাস</span>
          </div>
        </div>

      </div>

      {/* ================= SAVINGS PROJECTS SECTION ================= */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-5">সঞ্চয় প্রকল্পসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Project 1: Daily Savings */}
          <div className="bg-white p-6 rounded-2xl border-l-4 border-l-[#0c2483] border border-slate-100 shadow-sm flex justify-between items-start">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">দৈনিক সঞ্চয় (Daily)</h4>
                <p className="text-slate-400 text-xs mt-0.5">ক্ষুদ্র ব্যবসায়ীদের জন্য</p>
              </div>
              <div className="mt-6 text-xs text-slate-500 space-y-1">
                <p>সুদের হার: <span className="font-semibold text-slate-700">৬%</span></p>
                <p>আমানত: <span className="font-semibold text-slate-700">৳ ৩,২০,৫০০</span></p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
              <span className="bg-indigo-50 text-[#0c2483] text-xs font-medium px-3 py-1 rounded-full">সক্রিয়</span>
              <div className="w-8 h-8 bg-emerald-50 rounded flex items-center justify-center text-emerald-600">
                <TrendingUp size={18} />
              </div>
            </div>
          </div>

          {/* Project 2: Weekly Savings */}
          <div className="bg-white p-6 rounded-2xl border-l-4 border-l-emerald-600 border border-slate-100 shadow-sm flex justify-between items-start">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">সাপ্তাহিক সঞ্চয় (Weekly)</h4>
                <p className="text-slate-400 text-xs mt-0.5">কৃষক ও শ্রমিকদের জন্য</p>
              </div>
              <div className="mt-6 text-xs text-slate-500 space-y-1">
                <p>সুদের হার: <span className="font-semibold text-slate-700">৮%</span></p>
                <p>আমানত: <span className="font-semibold text-slate-700">৳ ৫,৫০,০০০</span></p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
              <span className="bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1 rounded-full">সক্রিয়</span>
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-400">
                <div className="flex items-end gap-[2px] h-4">
                  <div className="w-[3px] h-2 bg-slate-300 rounded-sm"></div>
                  <div className="w-[3px] h-3 bg-slate-400 rounded-sm"></div>
                  <div className="w-[3px] h-4 bg-slate-500 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Monthly DPS */}
          <div className="bg-white p-6 rounded-2xl border-l-4 border-l-amber-700 border border-slate-100 shadow-sm flex justify-between items-start">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-lg">মাসিক ডিপিএস (Monthly)</h4>
                <p className="text-slate-400 text-xs mt-0.5">দীর্ঘমেয়াদী সঞ্চয়</p>
              </div>
              <div className="mt-6 text-xs text-slate-500 space-y-1">
                <p>সুদের হার: <span className="font-semibold text-slate-700">১০.৫%</span></p>
                <p>আমানত: <span className="font-semibold text-slate-700">৳ ৩,৭৫,১০০</span></p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
              <span className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">সীমিত</span>
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-orange-400 text-xs font-bold">📈</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= LOWER SECTION (TABLE & SIDEBAR) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Part: Recent Withdrawals Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">সাম্প্রতিক সঞ্চয় উত্তোলন</h3>
            <button className="text-[#002bb8] hover:text-[#002294] text-xs font-semibold flex items-center gap-1 transition-all">
              <span>সব দেখুন</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-semibold rounded-lg">
                  <th className="p-4 rounded-l-xl">সদস্য</th>
                  <th className="p-4">প্রকল্প</th>
                  <th className="p-4">তারিখ</th>
                  <th className="p-4 text-right">পরিমাণ</th>
                  <th className="p-4 text-center rounded-r-xl">অবস্থা</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {recentWithdrawals.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                        {item.name.split(' ').slice(0,2).map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{item.name}</p>
                        <p className="text-xs text-slate-400">ID: {item.id}</p>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 font-medium">{item.project}</td>
                    <td className="p-4 text-slate-500 text-xs">{item.date}</td>
                    <td className="p-4 text-right font-bold text-red-500">-৳ {item.amount}</td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.statusType === 'approved' 
                          ? 'bg-emerald-50 text-emerald-600' 
                          : 'bg-red-50 text-red-500'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Part: Sidebar Controls */}
        <div className="space-y-6">
          
          {/* Card: Interest & Dividend */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">সুদ ও লভ্যাংশ</h3>
            
            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 mb-6">
              <p className="text-slate-500 text-xs font-medium mb-1">আগামী বণ্টন তারিখ</p>
              <h4 className="text-xl font-bold text-[#0c2483] mb-3">০১ জুন, ২০২৪</h4>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-[#0c2483] h-full w-[65%] rounded-full"></div>
              </div>
              <p className="text-slate-400 text-xs">অপেক্ষা করুন আরও ১৬ দিন</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">দ্রুত একশন</p>
              
              <button className="w-full flex items-center justify-center gap-2 border border-[#0c2483] text-[#0c2483] hover:bg-indigo-50/50 py-3 rounded-xl font-semibold text-sm transition-all">
                <FileText size={16} />
                <span>রিপোর্ট জেনারেট করুন</span>
              </button>

              <button className="w-full flex items-center justify-center gap-2 bg-[#006837] hover:bg-[#00522b] text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-sm">
                <DollarSign size={16} />
                <span>লভ্যাংশ বণ্টন করুন</span>
              </button>
            </div>
          </div>

          {/* Card: Savings Depositor Map */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-500 mb-3">সঞ্চয় আমানতকারীর ম্যাপ</h3>
            
            {/* Visual Map Placeholder mimicking Figma */}
            <div className="bg-slate-100 rounded-xl h-36 flex items-center justify-center relative overflow-hidden border border-slate-200">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full z-10 border border-slate-100 animate-bounce">
                <MapPin size={16} className="text-sky-500 fill-sky-100" />
                <span className="text-xs font-bold text-slate-700">ঢাকা সদর শাখা</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SavingsManagement;