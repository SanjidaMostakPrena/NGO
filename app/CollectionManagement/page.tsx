import React from 'react';
import { 
  Download, 
  Plus, 
  MoreVertical, 
  Phone, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  CreditCard,
  Calendar,
  MessageSquare
} from 'lucide-react';

const CollectionManagement = () => {
  // Mock Data for Daily Collection
  const dailyCollections = [
    { name: 'রাশেদ আহমেদ', id: '#M-8892', initial: 'রা', installment: '১২/২৪', amount: '২,৫০০', time: '১০:৪৫ AM', status: 'পাঠানো হয়েছে', statusType: 'sent' },
    { name: 'সুমাইয়া আক্তার', id: '#M-7712', initial: 'সু', installment: '০৫/৫২', amount: '৪,০০০', time: '১১:১৫ AM', status: 'প্রসেসিং', statusType: 'processing' },
    { name: 'আব্দুল করিম', id: '#M-9921', initial: 'আ', installment: '০৮/৪৮', amount: '১,২০০', time: '১১:৩০ AM', status: 'পাঠানো হয়েছে', statusType: 'sent' },
  ];

  // Mock Data for Due Installments
  const dueInstallments = [
    { name: 'মো: হাসান আলী', id: '#M-১০৫২', dueAmount: '৩,৫০০', days: '৭ দিন বকেয়া' },
    { name: 'জান্নাতুল ফেরদৌস', id: '#M-৮৮২১', dueAmount: '১,২০০', days: '৩ দিন বকেয়া' },
    { name: 'শফিক উদ্দিন', id: '#M-১৯৫৬', dueAmount: '৬,০০০', days: '১২ দিন বকেয়া' },
  ];

  // Mock Data for Field Officer Report
  const officerReports = [
    { name: 'তানভীর হোসেন (জোন এ)', collected: 42000, target: 50000, color: 'bg-emerald-700' },
    { name: 'নাসরিন সুলতানা (জোন বি)', collected: 35500, target: 40000, color: 'bg-emerald-700' },
    { name: 'জাকির হাসান (জোন সি)', collected: 50000, target: 60000, color: 'bg-indigo-900' },
  ];

  // Mock Data for Weekly Trends (Chart Heights in %)
  const weeklyTrends = [
    { day: 'শনি', target: 90, collected: 80 },
    { day: 'রবি', target: 85, collected: 65 },
    { day: 'সোম', target: 92, collected: 92 },
    { day: 'মঙ্গল', target: 75, collected: 60 },
    { day: 'বুধ', target: 88, collected: 82 },
    { day: 'বৃহস্পতি', target: 85, collected: 70 },
    { day: 'শুক্র', target: 40, collected: 30 },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#0c2483] mb-1">
            সংগ্রহ/কিস্তি সিস্টেম (Collections)
          </h1>
          <p className="text-slate-500 text-sm">
            ফিল্ড কালেকশন এবং বকেয়া কিস্তির রিয়েল-টাইম ড্যাশবোর্ড
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-slate-50 transition-all">
            <Download size={16} />
            <span>এক্সপোর্ট রিপোর্ট</span>
          </button>
          <button className="flex items-center gap-2 bg-[#002bb8] hover:bg-[#002294] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm">
            <Plus size={16} />
            <span>নতুন কালেকশন</span>
          </button>
        </div>
      </div>

      {/* ================= TOP STATS CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        
        {/* Card 1: Today's Target */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between relative">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-[#0c2483]">
              <CreditCard size={20} />
            </div>
            <span className="text-emerald-600 text-xs font-bold flex items-center gap-0.5">+১২% 📈</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-medium mb-1">আজকের লক্ষ্যমাত্রা</p>
            <h3 className="text-2xl font-bold text-slate-900">৳ ১,৫০,০০০</h3>
          </div>
        </div>

        {/* Card 2: Total Collected */}
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-emerald-600 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-emerald-600 text-xs font-medium">৮৫% অর্জিত</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-medium mb-1">মোট সংগৃহীত</p>
            <h3 className="text-2xl font-bold text-emerald-700">৳ ১,২৭,৫০০</h3>
          </div>
        </div>

        {/* Card 3: Due Installment */}
        <div className="bg-white p-5 rounded-2xl border-l-4 border-l-red-600 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
              <Calendar size={20} />
            </div>
            <span className="text-red-500 text-xs font-medium">১৮ জন সদস্য</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-medium mb-1">বকেয়া কিস্তি</p>
            <h3 className="text-2xl font-bold text-red-600">৳ ২২,৫০০</h3>
          </div>
        </div>

        {/* Card 4: SMS Confirmation */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
              <MessageSquare size={20} />
            </div>
            <span className="text-slate-500 text-xs font-medium">সফলতা ৯২%</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-medium mb-1">এসএমএস কনফার্মেশন</p>
            <h3 className="text-2xl font-bold text-slate-900">১১২/১২০</h3>
          </div>
        </div>

      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Left Side: Daily Installment Collection List */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900">দৈনিক কিস্তি সংগ্রহের তালিকা</h3>
              <button className="bg-slate-50 text-slate-500 text-xs px-3 py-1.5 rounded-lg font-medium border border-slate-100">
                সকল কেন্দ্র
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs font-semibold">
                    <th className="p-4 rounded-l-xl">সদস্যের নাম ও আইডি</th>
                    <th className="p-4">কিস্তি নং</th>
                    <th className="p-4">পরিমাণ</th>
                    <th className="p-4">সময়</th>
                    <th className="p-4 text-center">এসএমএস স্ট্যাটাস</th>
                    <th className="p-4 text-center rounded-r-xl">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  {dailyCollections.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-xs font-bold text-[#0c2483]">
                          {item.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{item.name}</p>
                          <p className="text-xs text-slate-400">ID: {item.id}</p>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 font-medium">{item.installment}</td>
                      <td className="p-4 text-emerald-600 font-bold">৳ {item.amount}</td>
                      <td className="p-4 text-slate-500 text-xs">{item.time}</td>
                      <td className="p-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${
                          item.statusType === 'sent' 
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                            : 'bg-orange-50 text-orange-600 border border-orange-100'
                        }`}>
                          {item.statusType === 'sent' ? '✓ ' : '🕒 '}{item.status}
                        </span>
                      </td>
                      <td className="p-4 text-center text-slate-400">
                        <button className="hover:text-slate-600 p-1">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center pt-4 border-t border-slate-100 mt-4">
            <button className="text-[#002bb8] hover:text-[#002294] text-sm font-semibold transition-all">
              সকল লেনদেন দেখুন
            </button>
          </div>
        </div>

        {/* Right Side: Due Installments Info */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-5 text-red-600">
              <AlertCircle size={18} />
              <h3 className="text-lg font-bold text-slate-900">বকেয়া কিস্তির তথ্য</h3>
            </div>

            <div className="space-y-3">
              {dueInstallments.map((member, idx) => (
                <div key={idx} className="border border-red-100 rounded-xl p-4 bg-red-50/20 flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-800 text-sm">{member.name}</h4>
                      <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-medium border border-red-100">
                        {member.days}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">সদস্য আইডি: {member.id}</p>
                    <p className="text-sm font-bold text-slate-700 mt-2">বকেয়া: <span className="text-red-600">৳ {member.dueAmount}</span></p>
                  </div>
                  <button className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm">
                    <Phone size={14} fill="currentColor" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-5 border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-semibold text-sm transition-all text-center">
            বকেয়া সদস্যদের তালিকা
          </button>
        </div>

      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Field Officer Collection Report */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">ফিল্ড অফিসার কালেকশন রিপোর্ট</h3>
            <span className="text-slate-400 text-xs">আপডেট: ২ মিনিট আগে</span>
          </div>

          <div className="space-y-5">
            {officerReports.map((officer, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-800">{officer.name}</span>
                  <span className="text-slate-500">
                    ৳ {officer.collected.toLocaleString()} / <span className="text-slate-400">{officer.target.toLocaleString()}</span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`${officer.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${(officer.collected / officer.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Cards (Social Impact & SMS Feed) */}
        <div className="space-y-6">
          
          {/* Card: Social Impact */}
          <div className="bg-[#0c2483] text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
            {/* Background Pattern Shape */}
            <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-white/5 rounded-full pointer-events-none"></div>
            
            <h3 className="text-lg font-bold mb-2">সামাজিক প্রভাব</h3>
            <p className="text-indigo-200 text-xs leading-relaxed mb-5">
              আপনার সংগৃহীত অর্থ আজ ৫টি নতুন ক্ষুদ্র উদ্যোগে অর্থায়ন করতে সক্ষম হয়েছে।
            </p>
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-[#0c2483] overflow-hidden flex items-center justify-center text-[10px] font-bold text-slate-700">👤</div>
                <div className="w-7 h-7 rounded-full bg-slate-400 border-2 border-[#0c2483] overflow-hidden flex items-center justify-center text-[10px] font-bold text-slate-700">👤</div>
                <div className="w-7 h-7 rounded-full bg-slate-500 border-2 border-[#0c2483] overflow-hidden flex items-center justify-center text-[10px] font-bold text-slate-700">👤</div>
              </div>
              <span className="text-xs font-medium text-indigo-100">+১২ নতুন উদ্যোক্তা</span>
            </div>
          </div>

          {/* Card: SMS Feed */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">এসএমএস ফিড</p>
            
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <p>কিস্তি নিশ্চিতকরণ এসএমএস পাঠানো হয়েছে সদস্য <span className="font-bold text-slate-800">#M-৮৮৯২</span> কে।</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <p>সাফল্যের সাথে ৫০০ টাকা জমার এসএমএস পেয়েছে <span className="font-bold text-slate-800">#M-৭৭১২</span>।</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                <p>সদস্য <span className="font-bold text-slate-800">#M-৯৯২১</span> এর এসএমএস ডেলিভারি ব্যর্থ।</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ================= WEEKLY TRENDS BAR CHART ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mt-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-slate-900">সাপ্তাহিক সংগ্রহের প্রবণতা (Collection Trends)</h3>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-200 inline-block"></span>
              <span className="text-slate-500">টার্গেট</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 inline-block"></span>
              <span className="text-slate-500">সংগ্রহ</span>
            </div>
          </div>
        </div>

        {/* Custom Pure Tailwind Bar Chart Layout */}
        <div className="h-48 flex items-end justify-between px-2 sm:px-6 pt-4 border-b border-slate-100">
          {weeklyTrends.map((bar, idx) => (
            <div key={idx} className="flex flex-col items-center flex-1 group max-w-[60px]">
              <div className="flex items-end justify-center gap-1.5 w-full h-36">
                {/* Target Bar */}
                <div 
                  className="w-4 bg-indigo-100 rounded-t-sm transition-all duration-500 group-hover:bg-indigo-200"
                  style={{ height: `${bar.target}%` }}
                ></div>
                {/* Collected Bar */}
                <div 
                  className="w-4 bg-emerald-700 rounded-t-sm transition-all duration-500 group-hover:bg-emerald-800"
                  style={{ height: `${bar.collected}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-500 mt-2 font-medium">{bar.day}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CollectionManagement;