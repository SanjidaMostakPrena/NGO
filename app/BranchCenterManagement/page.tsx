import React from 'react';
import { 
  Plus, 
  Building2, 
  Network, 
  Users, 
  Calendar, 
  MapPin, 
  ChevronRight,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

const BranchCenterManagement = () => {
  // Mock Data for Top Stats
  const stats = [
    { label: 'মোট শাখা', count: '২৪টি', growth: '+২.৫%', icon: <Building2 size={20} />, iconBg: 'bg-indigo-50 text-[#0c2483]' },
    { label: 'সক্রিয় কেন্দ্র', count: '১৫৬টি', growth: '+৫.০%', icon: <Network size={20} />, iconBg: 'bg-orange-50 text-orange-600' },
    { label: 'মোট সদস্য', count: '১২,৫৪০ জন', growth: '+১.৮%', icon: <Users size={20} />, iconBg: 'bg-emerald-50 text-emerald-600' },
    { label: 'মিটিং শিডিউল', count: '১৮টি', tag: 'আজকের সভা', icon: <Calendar size={20} />, iconBg: 'bg-red-50 text-red-500' },
  ];

  // Mock Data for Upcoming Meetings
  const upcomingMeetings = [
    { date: '২৪', month: 'MAY', title: 'সাপ্তাহিক কিস্তি আদায় সভা', location: 'মিরপুর শাখা-কেন্দ্র ০১', time: 'সকাল ১০:৩০', members: '১৫ জন', dateBg: 'bg-[#002bb8]' },
    { date: '২৬', month: 'MAY', title: 'নতুন ঋণ বিতরণ আলোচনা', location: 'উত্তরা শাখা-কেন্দ্র ০৫', time: 'দুপুর ০২:১৫', members: '০৮ জন', dateBg: 'bg-amber-950' },
    { date: '২৭', month: 'MAY', title: 'মাসিক সঞ্চয় রিভিউ', location: 'বাড্ডা শাখা-কেন্দ্র ১৩', time: 'সকাল ০৯:০০', members: '২৫ জন', dateBg: 'bg-emerald-800' },
  ];

  // Mock Data for Centers List
  const centersList = [
    { name: 'শাপলা কেন্দ্র - ০১', id: 'CEN-001', branch: 'মিরপুর শাখা', members: '৪৫', status: 'সক্রিয়', statusType: 'active' },
    { name: 'জুঁই কেন্দ্র - ০৫', id: 'CEN-024', branch: 'উত্তরা শাখা', members: '৩২', status: 'সক্রিয়', statusType: 'active' },
    { name: 'গোলাপ কেন্দ্র - ১২', id: 'CEN-089', branch: 'সাভার শাখা', members: '৫০', status: 'বিশ্রাম', statusType: 'inactive' },
  ];

  // Mock Data for Member Growth Trends (Heights in %)
  const growthTrends = [
    { month: 'জানু', height: '40%', active: false },
    { month: 'ফেব্রু', height: '55%', active: false },
    { month: 'মার্চ', height: '50%', active: false },
    { month: 'এপ্রিল', height: '75%', active: true },
    { month: 'মে', height: '90%', active: true },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#0c2483] mb-1">
            শাখা ও কেন্দ্র ব্যবস্থাপনা
          </h1>
          <p className="text-slate-500 text-sm">
            আঞ্চলিক কার্যালয় সমূহের বিস্তারিত তথ্য ও কেন্দ্র সমন্বয় প্যানেল
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#002bb8] hover:bg-[#002294] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-sm shrink-0">
          <Plus size={16} />
          <span>নতুন শাখা যোগ করুন</span>
        </button>
      </div>

      {/* ================= TOP STATS CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                {item.icon}
              </div>
              {item.growth && <span className="text-slate-400 text-xs font-semibold">{item.growth}</span>}
              {item.tag && <span className="text-slate-400 text-xs font-medium">{item.tag}</span>}
            </div>
            <div className="mt-4">
              <p className="text-slate-400 text-xs font-medium mb-1">{item.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{item.count}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Geographic Map Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900">ভৌগোলিক তথ্য মানচিত্র</h3>
            <div className="flex gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
              <button className="text-xs font-medium px-2.5 py-1 rounded bg-white text-slate-700 shadow-xs">শাখা</button>
              <button className="text-xs font-medium px-2.5 py-1 rounded text-slate-500 hover:text-slate-700">কেন্দ্র</button>
            </div>
          </div>

          {/* Bangladesh Blue Map Visual Simulator */}
          <div className="bg-black rounded-2xl h-80 flex items-center justify-center relative overflow-hidden border border-slate-900 shadow-inner">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
            
            {/* Soft Glowing Map Shape Representation */}
            <div className="w-56 h-72 bg-gradient-to-b from-sky-500/20 via-cyan-400/10 to-indigo-600/30 rounded-full blur-3xl absolute"></div>
            
            {/* Map Custom Pointers resembling Figma */}
            <div className="absolute top-1/4 left-1/3 text-sky-400 animate-pulse"><MapPin size={18} fill="currentColor" fillOpacity={0.2} /></div>
            <div className="absolute top-1/3 right-1/3 text-sky-400"><MapPin size={16} fill="currentColor" fillOpacity={0.2} /></div>
            <div className="absolute top-1/2 left-1/2 text-sky-400 animate-ping"><MapPin size={22} fill="currentColor" fillOpacity={0.4} /></div>
            <div className="absolute top-1/2 left-1/2 text-sky-400"><MapPin size={22} fill="currentColor" fillOpacity={0.4} /></div>
            <div className="absolute bottom-1/4 right-1/4 text-sky-400"><MapPin size={16} fill="currentColor" fillOpacity={0.2} /></div>
            <div className="absolute bottom-1/3 left-1/4 text-sky-400"><MapPin size={18} fill="currentColor" fillOpacity={0.2} /></div>

            {/* Density Overlay Box */}
            <div className="absolute top-6 right-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 max-w-[200px]">
              <p className="text-[11px] font-bold text-[#0c2483] mb-1">সর্বোচ্চ সদস্য ঘনত্ব</p>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0c2483]"></span>
                <span className="text-xs font-bold text-slate-700">ঢাকা উত্তর শাখা</span>
              </div>
              <div className="w-32 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#0c2483] h-full w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Meeting Schedule Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-5">আসন্ন মিটিং শিডিউল</h3>
            
            <div className="space-y-3">
              {upcomingMeetings.map((meeting, idx) => (
                <div key={idx} className="flex gap-4 border border-slate-100 rounded-xl p-3 hover:bg-slate-50/50 transition-colors">
                  <div className={`${meeting.dateBg} text-white w-12 h-14 rounded-lg flex flex-col items-center justify-center shrink-0 shadow-xs`}>
                    <span className="text-lg font-bold leading-none">{meeting.date}</span>
                    <span className="text-[9px] font-medium tracking-wider mt-0.5">{meeting.month}</span>
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <h4 className="font-bold text-slate-800 text-sm truncate">{meeting.title}</h4>
                    <p className="text-xs text-slate-400 truncate">{meeting.location}</p>
                    <div className="flex gap-3 text-[11px] text-slate-500 pt-1">
                      <span>🕒 {meeting.time}</span>
                      <span>👤 {meeting.members}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-50/50 border-t border-slate-100 text-center py-3.5">
            <button className="text-[#002bb8] hover:text-[#002294] text-sm font-semibold transition-all">
              সম্পূর্ণ শিডিউল দেখুন
            </button>
          </div>
        </div>

      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Center List & Member Count Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-bold text-slate-900">কেন্দ্রের তালিকা ও সদস্য সংখ্যা</h3>
            <button className="text-[#002bb8] hover:text-[#002294] text-xs font-semibold flex items-center gap-0.5 transition-all">
              <span>বিস্তারিত দেখুন</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-semibold">
                  <th className="p-4 rounded-l-xl">কেন্দ্রের নাম</th>
                  <th className="p-4">শাখা</th>
                  <th className="p-4">সদস্য</th>
                  <th className="p-4 text-center rounded-r-xl">অবস্থা</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {centersList.map((center, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                    <td className="p-4">
                      <p className="font-semibold text-slate-800">{center.name}</p>
                      <p className="text-xs text-slate-400">ID: {center.id}</p>
                    </td>
                    <td className="p-4 text-slate-600 font-medium">{center.branch}</td>
                    <td className="p-4 font-bold text-[#002bb8]">{center.members}</td>
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border inline-block ${
                        center.statusType === 'active'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-100'
                          : 'bg-orange-50 text-orange-600 border-orange-100'
                      }`}>
                        {center.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Member Growth Trend Chart Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
          
          {/* Floating Absolute Action Pin */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0c2483] text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#002294] transition-colors">
            <ArrowUpRight size={18} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 pr-10">সদস্য বৃদ্ধির প্রবণতা</h3>
            
            {/* Custom Tailwind Bar Chart */}
            <div className="h-36 flex items-end justify-between px-2 pt-4 border-b border-slate-100">
              {growthTrends.map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 group">
                  <div className="w-full flex justify-center items-end h-28">
                    <div 
                      className={`w-8 rounded-t-xs transition-all duration-500 ${
                        bar.active ? 'bg-[#0c2483]' : 'bg-indigo-200/70 group-hover:bg-indigo-200'
                      }`}
                      style={{ height: bar.height }}
                    ></div>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 font-medium">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold mt-4">
            <TrendingUp size={14} />
            <span>পোর্টফোলিও উন্নতি +১২%</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default BranchCenterManagement;