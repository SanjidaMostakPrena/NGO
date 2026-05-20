import React from 'react';
import { 
  UserPlus, 
  Users, 
  UserCheck, 
  TrendingUp, 
  UserX, 
  SlidersHorizontal, 
  Download, 
  ShieldCheck, 
  Edit3, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Award,
  Calendar
} from 'lucide-react';

const StaffManagement = () => {
  // Top Stats Data
  const topStats = [
    { label: 'মোট কর্মী', count: '৪৫', desc: 'গত মাসে ৩ জন যুক্ত হয়েছে', icon: <Users size={20} />, iconBg: 'bg-indigo-50 text-[#0c2483]' },
    { label: 'ফিল্ড অফিসার', count: '৩২', hasProgress: true, progressVal: 'w-[70%]', icon: <UserCheck size={20} />, iconBg: 'bg-emerald-50 text-emerald-600' },
    { label: 'গড় পারফরম্যান্স', count: '৮৮%', desc: '✓ লক্ষ্যমাত্রা অনুযায়ী সঠিক', icon: <TrendingUp size={20} />, iconBg: 'bg-teal-50 text-teal-600' },
    { label: 'অনুপস্থিত (আজ)', count: '০২', desc: 'ছুটিতে আছেন ১ জন', icon: <UserX size={20} />, iconBg: 'bg-red-50 text-red-500' },
  ];

  // Staff Table Data
  const staffList = [
    { name: 'আরিফ রহমান', id: 'NGO-10024', role: 'Admin', roleBg: 'bg-indigo-50 text-indigo-600', access: 'পূর্ণ নিয়ন্ত্রণ (Full)', accessIcon: true, performance: 'w-[95%]', perfColor: 'bg-emerald-600', perfText: '৯৫%', status: 'সক্রিয়', statusColor: 'text-emerald-600' },
    { name: 'সাদিয়া ইসলাম', id: 'NGO-10089', role: 'Field Officer', roleBg: 'bg-emerald-50 text-emerald-600', access: 'সীমিত (Collection)', accessIcon: true, performance: 'w-[82%]', perfColor: 'bg-emerald-600', perfText: '৮২%', status: 'সক্রিয়', statusColor: 'text-emerald-600' },
    { name: 'কামাল হোসেন', id: 'NGO-10055', role: 'Accountant', roleBg: 'bg-orange-50 text-orange-600', access: 'শুধুমাত্র পড়া (Read)', accessIcon: false, performance: 'w-[65%]', perfColor: 'bg-orange-500', perfText: '৬৫%', status: 'অফলাইন', statusColor: 'text-slate-400' },
  ];

  // RBAC Access Control List
  const rbacRoles = [
    { name: 'এডমিন (Admin)', count: '০৩ জন', desc: 'সিস্টেমের সব মডিউলে পূর্ণ নিয়ন্ত্রণ এবং সেটিংস পরিবর্তনের ক্ষমতা।' },
    { name: 'ফিল্ড অফিসার (Field Officer)', count: '৩২ জন', desc: 'শুধুমাত্র মেম্বার ডাটা, লোন সংগ্রহ এবং রিপোর্ট দেখার সুবিধা।' },
    { name: 'অডিটর (Auditor)', count: '০২ জন', desc: 'শুধুমাত্র ট্রানজেকশন রিপোর্ট এবং হিসেব দেখার সুবিধা।' },
  ];

  // Performance Chart Data (Pure CSS Bar Heights matching Figma)
  const chartBars = [
    { branch: 'শাখা ১', height: 'h-[80%]' },
    { branch: 'শাখা ২', height: 'h-[85%]' },
    { branch: 'শাখা ৩', height: 'h-[0%]' }, // Empty representation from figma
    { branch: 'শাখা ৪', height: 'h-[55%]' },
    { branch: 'শাখা ৫', height: 'h-[90%]' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">স্টাফ ম্যানেজমেন্ট (Staff Management)</h1>
          <p className="text-slate-500 text-sm">আপনার এনজিওর সকল কর্মীবাহিনীর তথ্য এবং কর্মক্ষমতা এখানে পরিচালনা করুন।</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm shrink-0">
          <UserPlus size={16} />
          <span>নতুন স্টাফ যোগ করুন</span>
        </button>
      </div>

      {/* ================= TOP STATS CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {topStats.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-36">
            <div className="flex justify-between items-start">
              <h3 className="text-3xl font-bold text-[#0c2483]">{item.count}</h3>
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center`}>
                {item.icon}
              </div>
            </div>
            <div className="mt-2">
              <p className="text-slate-400 text-xs font-semibold mb-1">{item.label}</p>
              {item.desc && <p className={`text-xs font-medium ${idx === 2 ? 'text-teal-600' : idx === 3 ? 'text-red-500' : 'text-slate-500'}`}>{item.desc}</p>}
              {item.hasProgress && (
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2">
                  <div className="bg-[#0c2483] h-full rounded-full w-[70%]"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= MIDDLE SECTION: STAFF TABLE ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
          <h3 className="text-lg font-bold text-slate-900">কর্মী তালিকা ও ভূমিকা</h3>
          <div className="flex items-center gap-2 self-end sm:self-center">
            <button className="flex items-center gap-1.5 border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 px-4 py-2 rounded-xl text-xs font-semibold transition-all">
              <SlidersHorizontal size={14} />
              <span>ফিল্টার</span>
            </button>
            <button className="flex items-center gap-1.5 border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 px-4 py-2 rounded-xl text-xs font-semibold transition-all">
              <Download size={14} />
              <span>रिपोर्ट ডাউনলোড</span>
            </button>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-semibold border-b border-slate-100">
                <th className="p-4 rounded-l-xl">নাম ও আইডি</th>
                <th className="p-4">ভূমিকা (Role)</th>
                <th className="p-4">অ্যাক্সেস লেভেল</th>
                <th className="p-4">পারফরম্যান্স</th>
                <th className="p-4">অবস্থা</th>
                <th className="p-4 text-center rounded-r-xl">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-50">
              {staffList.map((staff, idx) => (
                <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0c2483] text-white flex items-center justify-center font-bold text-xs">
                      {staff.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{staff.name}</p>
                      <p className="text-xs text-slate-400">ID: {staff.id}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${staff.roleBg}`}>
                      {staff.role}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      {staff.accessIcon ? <ShieldCheck size={14} className="text-slate-400" /> : <span className="w-3.5 h-3.5 border border-slate-300 rounded-full inline-block"></span>}
                      <span>{staff.access}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 w-32">
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className={`${staff.perfColor} h-full rounded-full ${staff.performance}`}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600">{staff.perfText}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${staff.status === 'সক্রিয়' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      <span className={`font-semibold text-xs ${staff.statusColor}`}>{staff.status}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2.5 text-slate-400">
                      <button className="hover:text-slate-700 transition-colors"><Edit3 size={15} /></button>
                      <button className="hover:text-red-500 transition-colors"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination footer matching figma exactly */}
        <div className="flex justify-between items-center border-t border-slate-100 pt-4 mt-2 text-xs text-slate-400 font-medium">
          <span>৪৪ জন কর্মীর মধ্যে ১-১০ দেখানো হচ্ছে</span>
          <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl">
            <button className="p-1.5 rounded-lg text-slate-400 hover:bg-white"><ChevronLeft size={14} /></button>
            <button className="w-6 h-6 rounded-lg bg-[#0c2483] text-white font-bold flex items-center justify-center shadow-xs">১</button>
            <button className="w-6 h-6 rounded-lg text-slate-500 hover:bg-white flex items-center justify-center">২</button>
            <button className="w-6 h-6 rounded-lg text-slate-500 hover:bg-white flex items-center justify-center">৩</button>
            <button className="p-1.5 rounded-lg text-slate-400 hover:bg-white"><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>

      {/* ================= LOWER ROW: RBAC & PERFORMANCE INSIGHTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: RBAC Control Box */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="text-[#0c2483]" size={18} />
              <h3 className="text-base font-bold text-slate-900">অ্যাক্সেস কন্ট্রোল (RBAC)</h3>
            </div>

            <div className="space-y-3">
              {rbacRoles.map((role, idx) => (
                <div key={idx} className="border border-slate-100 rounded-xl p-3.5 bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-[#0c2483] text-sm">{role.name}</h4>
                    <span className="text-xs text-slate-400 font-bold">{role.count}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-5 border border-indigo-100 text-[#0c2483] hover:bg-indigo-50/50 py-2.5 rounded-xl font-bold text-xs transition-all text-center">
            নতুন রোল তৈরি করুন
          </button>
        </div>

        {/* Right Side: Performance Tracking Insights with Custom Floating Button */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between relative overflow-hidden">
          
          {/* Floating Action Circle blue button on top right */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0c2483] text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-[#0a1e6e] transition-colors z-10">
            <Plus size={18} />
          </div>

          <div>
            <div className="mb-6 pr-10">
              <h3 className="text-base font-bold text-slate-900">পারফরম্যান্স ট্র্যাকিং ইনসাইটস</h3>
              <p className="text-slate-400 text-xs mt-0.5">লোন রিকভারি রেট এবং নতুন মেম্বার এনরোলমেন্টের ভিত্তিতে কর্মীদের তুলনা।</p>
            </div>

            {/* Target vs Collection Legend */}
            <div className="flex justify-end gap-4 text-xs font-bold mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-200 inline-block"></span>
                <span className="text-slate-500">লক্ষ্যমাত্রা</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0c2483] inline-block"></span>
                <span className="text-slate-500">সংগ্রহ</span>
              </div>
            </div>

            {/* Custom Bar Chart from Figma layout */}
            <div className="h-44 flex items-end justify-between px-2 pt-2 border-b border-slate-100 mb-6">
              {chartBars.map((bar, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 group">
                  <div className="w-10 bg-slate-100 rounded-t-xs h-32 flex flex-col justify-end overflow-hidden relative">
                    {/* Shadow Target/Limit Placeholder background layer */}
                    <div className="absolute inset-0 bg-indigo-100/60"></div>
                    {/* Active Collection Solid Fill Bar */}
                    <div className={`w-full bg-[#0c2483] transition-all duration-500 ${bar.height} relative z-10`}></div>
                  </div>
                  <span className="text-xs text-slate-500 mt-2 font-medium">{bar.branch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row Information Widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Top Staff Card Container */}
            <div className="bg-emerald-50/40 border border-emerald-100/50 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-950 flex items-center justify-center text-white shrink-0 shadow-inner">
                <Award size={16} className="text-emerald-400 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-700">সেরা কর্মী (মাসিক)</p>
                <p className="text-xs font-bold text-slate-800">নাসরিন আক্তার</p>
                <p className="text-[11px] text-slate-500">শাখা ৩ - ৯৪% রিকভারি</p>
              </div>
            </div>

            {/* Upcoming Session Widget */}
            <div className="bg-indigo-50/40 border border-indigo-100/40 rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-[#0c2483] flex items-center justify-center shrink-0">
                <Calendar size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-indigo-700">আসন্ন ট্রেনিং সেশন</p>
                <p className="text-xs font-bold text-slate-800">ডিজিটাল কালেকশন</p>
                <p className="text-[11px] text-slate-500">২৫ মে, ২০২৪ - ফিল্ড অফিসারদের জন্য</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default StaffManagement;