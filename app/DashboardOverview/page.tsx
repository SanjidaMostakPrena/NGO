import React from 'react';
import { 
  Users, 
  PiggyBank, 
  HandCoins, 
  Wallet, 
  BadgeCent, 
  ChevronLeft, 
  ChevronRight,
  CalendarDays,
  Clock
} from 'lucide-react';

const DashboardOverview = () => {
  // Mock Data for "মোট সঞ্চয়" mini bar chart (Figma matched heights)
  const savingsTrend = [
    { height: 'h-4' },
    { height: 'h-6' },
    { height: 'h-5' },
    { height: 'h-8' },
    { height: 'h-12' },
    { height: 'h-16' },
  ];

  // Mock Data for Calendar Month Days (June 2026 Simulation)
  const calendarDays = [
    { day: '৩০', isCurrentMonth: false },
    { day: '১', isCurrentMonth: true, isSelected: false },
    { day: '২', isCurrentMonth: true },
    { day: '৩', isCurrentMonth: true },
    { day: '৪', isCurrentMonth: true },
    { day: '৫', isCurrentMonth: true },
    { day: '৬', isCurrentMonth: true, isHoliday: true },
    { day: '৭', isCurrentMonth: true },
    { day: '৮', isCurrentMonth: true },
    { day: '৯', isCurrentMonth: true, isToday: true }, // Highlighted Blue
    { day: '১০', isCurrentMonth: true },
    { day: '১১', isCurrentMonth: true },
    { day: '১২', isCurrentMonth: true },
    { day: '১৩', isCurrentMonth: true, isHoliday: true },
  ];

  // Mock Data for Upcoming Meetings
  const branchMeetings = [
    { date: '১২', month: 'জুন', title: 'মিরপুর শাখা অডিট', time: '১০:০০ AM', color: 'bg-[#0c2483]' },
    { date: '১৫', month: 'জুন', title: 'বাজেট পরিকল্পনা সভা', time: '০২:৩০ PM', color: 'bg-[#10b981]' },
    { date: '১৮', month: 'জুন', title: 'মাঠ কর্মীদের কর্মশালা', time: '০৯:০০ AM', color: 'bg-[#f97316]' },
  ];

  // Mock Data for "মাসিক আয় বনাম ব্যয়" Pure CSS Grouped Bar Chart
  const incomeExpenseData = [
    { month: 'জানু', income: 45, expense: 35 },
    { month: 'ফেব্রু', income: 60, expense: 40 },
    { month: 'মার্চ', income: 55, expense: 48 },
    { month: 'এপ্রিল', income: 75, expense: 50 },
    { month: 'মে', income: 90, expense: 55 },
    { month: 'জুন', income: 80, expense: 65 },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-1">ড্যাশবোর্ড ওভারভিউ</h1>
        <p className="text-slate-500 text-sm">স্বাগতম, আজকের কাজের সারসংক্ষেপ এখানে দেখুন।</p>
      </div>

      {/* ================= TOP STATS ROW ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* Card 1: Total Members */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start h-40">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-2">মোট সদস্য</p>
              <h2 className="text-3xl font-bold text-[#0c2483]">১২,৪৫০</h2>
            </div>
            <p className="text-emerald-600 text-xs font-bold flex items-center gap-1">
              📈 +৪.৫% গত মাস
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#0c2483] flex items-center justify-center">
            <Users size={24} />
          </div>
        </div>

        {/* Card 2: Total Savings with Mini Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-end h-40">
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-2">মোট সঞ্চয়</p>
              <h2 className="text-3xl font-bold text-[#0c2483]">৳ ৮৫,৪৫,০০০</h2>
            </div>
            {/* Inline Sparkline Chart from Figma */}
            <div className="flex items-end gap-1 h-16 pt-4">
              {savingsTrend.map((bar, i) => (
                <div 
                  key={i} 
                  className={`flex-1 ${bar.height} rounded-t-sm transition-all duration-300 ${
                    i === savingsTrend.length - 1 ? 'bg-emerald-700' : 'bg-emerald-700/40'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 self-start">
            <PiggyBank size={24} />
          </div>
        </div>

        {/* Card 3: Loan Disbursement */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start h-40">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-2">ঋণ বিতরণ</p>
              <h2 className="text-3xl font-bold text-[#0c2483]">৳ ৪৫,৩০,০০০</h2>
            </div>
            <p className="text-slate-500 text-xs">আজকে ২০ জন সদস্যকে ঋণ প্রদান করা হয়েছে</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
            <HandCoins size={24} />
          </div>
        </div>

      </div>

      {/* ================= SECOND STATS ROW ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Card 4: Outstanding Loans */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-1">বকেয়া ঋণ (Outstanding)</p>
              <h2 className="text-3xl font-bold text-[#0c2483]">৳ ২,১৫,০০,০০০</h2>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
              <Wallet size={24} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-[#0c2483] h-full w-[৭৫%] rounded-full"></div>
            </div>
            <p className="text-slate-500 text-xs font-medium">লক্ষ্যমাত্রা: ৭৫% অর্জিত</p>
          </div>
        </div>

        {/* Card 5: Today's Collection */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start h-36">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-1">আজকের আদায়</p>
              <h2 className="text-3xl font-bold text-emerald-700">৳ ৩,৪৫,০০০</h2>
            </div>
            <p className="text-slate-400 text-xs">সকাল ৯:০০ - বিকেল ৪:৩০</p>
          </div>
          <div className="flex flex-col items-end justify-between h-full">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <BadgeCent size={24} />
            </div>
            <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              চলমান
            </span>
          </div>
        </div>

      </div>

      {/* ================= LOWER TWO-COLUMN LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: Monthly Income vs Expense Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-slate-900">মাসিক আয় বনাম ব্যয়</h3>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0c2483] inline-block"></span>
                  <span className="text-slate-500">আয়</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
                  <span className="text-slate-500">ব্যয়</span>
                </div>
              </div>
            </div>

            {/* Custom pure Tailwind Grouped Bar Chart */}
            <div className="h-64 flex items-end justify-between px-4 pt-4 border-b border-slate-100">
              {incomeExpenseData.map((data, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 group max-w-[80px]">
                  <div className="flex items-end justify-center gap-1 w-full h-48">
                    {/* Income Bar */}
                    <div 
                      className="w-3.5 bg-[#0c2483] rounded-t-xs transition-all duration-300 group-hover:opacity-90"
                      style={{ height: `${data.income}%` }}
                    ></div>
                    {/* Expense Bar */}
                    <div 
                      className="w-3.5 bg-red-600 rounded-t-xs transition-all duration-300 group-hover:opacity-90"
                      style={{ height: `${data.expense}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-slate-400 mt-3 font-medium">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Calendar & Upcoming Meetings */}
        <div className="space-y-6">
          
          {/* Calendar Box */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-bold text-slate-900">ক্যালেন্ডার</h3>
              <div className="flex gap-2 text-slate-400">
                <button className="p-1 hover:text-slate-600 rounded hover:bg-slate-50"><ChevronLeft size={16} /></button>
                <button className="p-1 hover:text-slate-600 rounded hover:bg-slate-50"><ChevronRight size={16} /></button>
              </div>
            </div>

            {/* Weekdays Headers */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400 mb-2">
              <span>শনি</span><span>রবি</span><span>সোম</span><span>মঙ্গল</span><span>বুধ</span><span>বৃহ</span><span className="text-red-500">শুক্র</span>
            </div>

            {/* Calendar Days Simulation Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
              {calendarDays.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`py-2 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
                    !item.isCurrentMonth ? 'text-slate-200' : 'text-slate-600'
                  } ${
                    item.isToday ? 'bg-[#0c2483] text-white font-bold shadow-sm' : 'hover:bg-slate-50'
                  } ${
                    item.isHoliday && !item.isToday ? 'text-red-500' : ''
                  }`}
                >
                  {item.day}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Meetings Box */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4">আসন্ন শাখা সভা</h3>
              
              <div className="space-y-3">
                {branchMeetings.map((meeting, idx) => (
                  <div key={idx} className="flex gap-4 border border-slate-50 rounded-xl p-3 bg-slate-50/30">
                    <div className={`${meeting.color} text-white w-11 h-12 rounded-lg flex flex-col items-center justify-center shrink-0`}>
                      <span className="text-base font-bold leading-none">{meeting.date}</span>
                      <span className="text-[9px] font-medium mt-0.5">{meeting.month}</span>
                    </div>
                    <div className="space-y-0.5 overflow-hidden">
                      <h4 className="font-bold text-slate-800 text-xs truncate">{meeting.title}</h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 pt-0.5">
                        <Clock size={11} />
                        <span>{meeting.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full mt-4 border border-[#0c2483] text-[#0c2483] hover:bg-indigo-50/50 py-2 rounded-xl font-semibold text-xs transition-all text-center">
              সবগুলো দেখুন
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardOverview;