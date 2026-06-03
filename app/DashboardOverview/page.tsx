
// "use client"

// import React, { useState } from "react"
// import {
//   Users,
//   PiggyBank,
//   HandCoins,
//   Wallet,
//   BadgeCent,
//   ChevronLeft,
//   ChevronRight,
//   Clock,
// } from "lucide-react"

// const DashboardOverview = () => {
//   // ================= SAVINGS MINI CHART =================
//   const savingsTrend = [
//     { height: "h-4" },
//     { height: "h-6" },
//     { height: "h-5" },
//     { height: "h-8" },
//     { height: "h-12" },
//     { height: "h-16" },
//   ]

//   // ================= DYNAMIC CALENDAR =================
//   const [currentDate, setCurrentDate] = useState(new Date())

//   // Bengali Month Names
//   const monthNames = [
//     "জানুয়ারি",
//     "ফেব্রুয়ারি",
//     "মার্চ",
//     "এপ্রিল",
//     "মে",
//     "জুন",
//     "জুলাই",
//     "আগস্ট",
//     "সেপ্টেম্বর",
//     "অক্টোবর",
//     "নভেম্বর",
//     "ডিসেম্বর",
//   ]

//   // Bengali Week Days
//   const weekDays = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"]

//   // Current Month & Year
//   const month = currentDate.getMonth()
//   const year = currentDate.getFullYear()

//   // First Day
//   const firstDay = new Date(year, month, 1).getDay()

//   // Total Days
//   const totalDays = new Date(year, month + 1, 0).getDate()

//   // Previous Month Total Days
//   const prevMonthDays = new Date(year, month, 0).getDate()

//   // Today's Date
//   const today = new Date()

//   // Dynamic Calendar Array
//   const calendarDays = []

//   // Previous Month Fill
//   for (let i = firstDay - 1; i >= 0; i--) {
//     calendarDays.push({
//       day: prevMonthDays - i,
//       isCurrentMonth: false,
//     })
//   }

//   // Current Month Days
//   for (let i = 1; i <= totalDays; i++) {
//     const isToday =
//       i === today.getDate() &&
//       month === today.getMonth() &&
//       year === today.getFullYear()

//     calendarDays.push({
//       day: i,
//       isCurrentMonth: true,
//       isToday,
//     })
//   }

//   // Fill Remaining Grid
//   while (calendarDays.length < 42) {
//     calendarDays.push({
//       day: calendarDays.length - totalDays - firstDay + 1,
//       isCurrentMonth: false,
//     })
//   }

//   // Previous Month
//   const handlePrevMonth = () => {
//     setCurrentDate(new Date(year, month - 1, 1))
//   }

//   // Next Month
//   const handleNextMonth = () => {
//     setCurrentDate(new Date(year, month + 1, 1))
//   }

//   // ================= UPCOMING MEETINGS =================
//   const branchMeetings = [
//     {
//       date: "১২",
//       month: "জুন",
//       title: "মিরপুর শাখা অডিট",
//       time: "১০:০০ AM",
//       color: "bg-[#0c2483]",
//     },
//     {
//       date: "১৫",
//       month: "জুন",
//       title: "বাজেট পরিকল্পনা সভা",
//       time: "০২:৩০ PM",
//       color: "bg-[#10b981]",
//     },
//     {
//       date: "১৮",
//       month: "জুন",
//       title: "মাঠ কর্মীদের কর্মশালা",
//       time: "০৯:০০ AM",
//       color: "bg-[#f97316]",
//     },
//   ]

//   // ================= INCOME VS EXPENSE =================
//   const incomeExpenseData = [
//     { month: "জানু", income: 45, expense: 35 },
//     { month: "ফেব্রু", income: 60, expense: 40 },
//     { month: "মার্চ", income: 55, expense: 48 },
//     { month: "এপ্রিল", income: 75, expense: 50 },
//     { month: "মে", income: 90, expense: 55 },
//     { month: "জুন", income: 80, expense: 65 },
//   ]

//   return (
//     <div className="min-h-screen bg-secondary p-6 font-sans text-slate-800">
//       {/* ================= HEADER ================= */}
//       <div className="mb-8">
//         <h1 className="mb-1 text-3xl font-bold text-slate-900">
//           ড্যাশবোর্ড ওভারভিউ
//         </h1>

//         <p className="text-sm text-slate-500">
//           স্বাগতম, আজকের কাজের সারসংক্ষেপ এখানে দেখুন।
//         </p>
//       </div>

//       {/* ================= TOP STATS ================= */}
//       <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
//         {/* Members */}
//         <div className="flex h-40 items-start justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex h-full flex-col justify-between">
//             <div>
//               <p className="mb-2 text-xs font-semibold text-slate-400">
//                 মোট সদস্য
//               </p>

//               <h2 className="text-3xl font-bold text-[#0c2483]">১২,৪৫০</h2>
//             </div>

//             <p className="flex items-center gap-1 text-xs font-bold text-emerald-600">
//               📈 +৪.৫% গত মাস
//             </p>
//           </div>

//           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-[#0c2483]">
//             <Users size={24} />
//           </div>
//         </div>

//         {/* Savings */}
//         <div className="flex h-40 items-end justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex h-full w-full flex-col justify-between">
//             <div>
//               <p className="mb-2 text-xs font-semibold text-slate-400">
//                 মোট সঞ্চয়
//               </p>

//               <h2 className="text-3xl font-bold text-[#0c2483]">৳ ৮৫,৪৫,০০০</h2>
//             </div>

//             {/* Mini Chart */}
//             <div className="flex h-16 items-end gap-1 pt-4">
//               {savingsTrend.map((bar, i) => (
//                 <div
//                   key={i}
//                   className={`flex-1 ${bar.height} rounded-t-sm transition-all duration-300 ${
//                     i === savingsTrend.length - 1
//                       ? "bg-emerald-700"
//                       : "bg-emerald-700/40"
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-xl bg-emerald-50 text-emerald-500">
//             <PiggyBank size={24} />
//           </div>
//         </div>

//         {/* Loan */}
//         <div className="flex h-40 items-start justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex h-full flex-col justify-between">
//             <div>
//               <p className="mb-2 text-xs font-semibold text-slate-400">
//                 ঋণ বিতরণ
//               </p>

//               <h2 className="text-3xl font-bold text-[#0c2483]">৳ ৪৫,৩০,০০০</h2>
//             </div>

//             <p className="text-xs text-slate-500">
//               আজকে ২০ জন সদস্যকে ঋণ প্রদান করা হয়েছে
//             </p>
//           </div>

//           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
//             <HandCoins size={24} />
//           </div>
//         </div>
//       </div>

//       {/* ================= SECOND ROW ================= */}
//       <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
//         {/* Outstanding */}
//         <div className="flex h-36 flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div>
//               <p className="mb-1 text-xs font-semibold text-slate-400">
//                 বকেয়া ঋণ (Outstanding)
//               </p>

//               <h2 className="text-3xl font-bold text-[#0c2483]">
//                 ৳ ২,১৫,০০,০০০
//               </h2>
//             </div>

//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
//               <Wallet size={24} />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
//               <div className="h-full w-[75%] rounded-full bg-[#0c2483]"></div>
//             </div>

//             <p className="text-xs font-medium text-slate-500">
//               লক্ষ্যমাত্রা: ৭৫% অর্জিত
//             </p>
//           </div>
//         </div>

//         {/* Collection */}
//         <div className="flex h-36 items-start justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div className="flex h-full flex-col justify-between">
//             <div>
//               <p className="mb-1 text-xs font-semibold text-slate-400">
//                 আজকের আদায়
//               </p>

//               <h2 className="text-3xl font-bold text-emerald-700">
//                 ৳ ৩,৪৫,০০০
//               </h2>
//             </div>

//             <p className="text-xs text-slate-400">সকাল ৯:০০ - বিকেল ৪:৩০</p>
//           </div>

//           <div className="flex h-full flex-col items-end justify-between">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//               <BadgeCent size={24} />
//             </div>

//             <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
//               চলমান
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ================= LOWER SECTION ================= */}
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {/* Left Chart */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
//           <div>
//             <div className="mb-8 flex items-center justify-between">
//               <h3 className="text-lg font-bold text-slate-900">
//                 মাসিক আয় বনাম ব্যয়
//               </h3>

//               <div className="flex items-center gap-4 text-xs font-semibold">
//                 <div className="flex items-center gap-1.5">
//                   <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0c2483]"></span>
//                   <span className="text-slate-500">আয়</span>
//                 </div>

//                 <div className="flex items-center gap-1.5">
//                   <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-600"></span>
//                   <span className="text-slate-500">ব্যয়</span>
//                 </div>
//               </div>
//             </div>

//             {/* Bar Chart */}
//             <div className="flex h-64 items-end justify-between border-b border-slate-100 px-4 pt-4">
//               {incomeExpenseData.map((data, idx) => (
//                 <div
//                   key={idx}
//                   className="group flex max-w-[80px] flex-1 flex-col items-center"
//                 >
//                   <div className="flex h-48 w-full items-end justify-center gap-1">
//                     <div
//                       className="w-3.5 rounded-t-xs bg-[#0c2483]"
//                       style={{ height: `${data.income}%` }}
//                     ></div>

//                     <div
//                       className="w-3.5 rounded-t-xs bg-red-600"
//                       style={{ height: `${data.expense}%` }}
//                     ></div>
//                   </div>

//                   <span className="mt-3 text-xs font-medium text-slate-400">
//                     {data.month}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-6">
//           {/* Calendar */}
//           <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//             <div className="mb-4 flex items-center justify-between">
//               <div>
//                 <h3 className="text-base font-bold text-slate-900">
//                   ক্যালেন্ডার
//                 </h3>

//                 <p className="mt-1 text-xs text-slate-400">
//                   {monthNames[month]} {year}
//                 </p>
//               </div>

//               <div className="flex gap-2 text-slate-400">
//                 <button
//                   onClick={handlePrevMonth}
//                   className="rounded-lg p-2 transition hover:bg-slate-50 hover:text-slate-600"
//                 >
//                   <ChevronLeft size={16} />
//                 </button>

//                 <button
//                   onClick={handleNextMonth}
//                   className="rounded-lg p-2 transition hover:bg-slate-50 hover:text-slate-600"
//                 >
//                   <ChevronRight size={16} />
//                 </button>
//               </div>
//             </div>

//             {/* Week Days */}
//             <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400">
//               {weekDays.map((day, idx) => (
//                 <span key={idx} className={idx === 5 ? "text-red-500" : ""}>
//                   {day}
//                 </span>
//               ))}
//             </div>

//             {/* Calendar Grid */}
//             <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
//               {calendarDays.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className={`flex cursor-pointer items-center justify-center rounded-lg py-2 transition-colors ${
//                     !item.isCurrentMonth
//                       ? "text-slate-200"
//                       : "text-slate-600 hover:bg-slate-50"
//                   } ${
//                     item.isToday
//                       ? "bg-[#0c2483] font-bold text-white shadow-sm hover:bg-[#0c2483]"
//                       : ""
//                   } `}
//                 >
//                   {item.day}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Meetings */}
//           <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//             <div>
//               <h3 className="mb-4 text-base font-bold text-slate-900">
//                 আসন্ন শাখা সভা
//               </h3>

//               <div className="space-y-3">
//                 {branchMeetings.map((meeting, idx) => (
//                   <div
//                     key={idx}
//                     className="flex gap-4 rounded-xl border border-slate-50 bg-slate-50/30 p-3"
//                   >
//                     <div
//                       className={`${meeting.color} flex h-12 w-11 shrink-0 flex-col items-center justify-center rounded-lg text-white`}
//                     >
//                       <span className="text-base leading-none font-bold">
//                         {meeting.date}
//                       </span>

//                       <span className="mt-0.5 text-[9px] font-medium">
//                         {meeting.month}
//                       </span>
//                     </div>

//                     <div className="space-y-0.5 overflow-hidden">
//                       <h4 className="truncate text-xs font-bold text-slate-800">
//                         {meeting.title}
//                       </h4>

//                       <div className="flex items-center gap-1 pt-0.5 text-[10px] text-slate-400">
//                         <Clock size={11} />
//                         <span>{meeting.time}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <button className="mt-4 w-full rounded-xl border border-[#0c2483] py-2 text-center text-xs font-semibold text-[#0c2483] transition-all hover:bg-indigo-50/50">
//               সবগুলো দেখুন
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashboardOverview
"use client"

import React, { useState } from "react"
import {
  Users,
  PiggyBank,
  HandCoins,
  Wallet,
  BadgeCent,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react"

const DashboardOverview = () => {
  // ================= SAVINGS MINI CHART =================
  const savingsTrend = [
    { height: "h-4" },
    { height: "h-6" },
    { height: "h-5" },
    { height: "h-8" },
    { height: "h-12" },
    { height: "h-16" },
  ]

  // ================= DYNAMIC CALENDAR =================
  const [currentDate, setCurrentDate] = useState(new Date())

  // Bengali Month Names
  const monthNames = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ]

  // Bengali Week Days
  const weekDays = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"]

  // Current Month & Year
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  // First Day
  const firstDay = new Date(year, month, 1).getDay()

  // Total Days
  const totalDays = new Date(year, month + 1, 0).getDate()

  // Previous Month Total Days
  const prevMonthDays = new Date(year, month, 0).getDate()

  // Today's Date
  const today = new Date()

  // Dynamic Calendar Array
  const calendarDays = []

  // Previous Month Fill
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
    })
  }

  // Current Month Days
  for (let i = 1; i <= totalDays; i++) {
    const isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()

    calendarDays.push({
      day: i,
      isCurrentMonth: true,
      isToday,
    })
  }

  // Fill Remaining Grid
  while (calendarDays.length < 42) {
    calendarDays.push({
      day: calendarDays.length - totalDays - firstDay + 1,
      isCurrentMonth: false,
    })
  }

  // Previous Month
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  // Next Month
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  // ================= UPCOMING MEETINGS =================
  const branchMeetings = [
    {
      date: "১২",
      month: "জুন",
      title: "মিরপুর শাখা অডিট",
      time: "১০:০০ AM",
      color: "bg-[#0c2483]",
    },
    {
      date: "১৫",
      month: "জুন",
      title: "বাজেট পরিকল্পনা সভা",
      time: "০২:৩০ PM",
      color: "bg-[#10b981]",
    },
    {
      date: "১৮",
      month: "জুন",
      title: "মাঠ কর্মীদের কর্মশালা",
      time: "০৯:০০ AM",
      color: "bg-[#f97316]",
    },
  ]

  // ================= INCOME VS EXPENSE =================
  const incomeExpenseData = [
    { month: "জানু", income: 45, expense: 35 },
    { month: "ফেব্রু", income: 60, expense: 40 },
    { month: "মার্চ", income: 55, expense: 48 },
    { month: "এপ্রিল", income: 75, expense: 50 },
    { month: "মে", income: 90, expense: 55 },
    { month: "জুন", income: 80, expense: 65 },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 lg:p-8 font-sans text-slate-800">
      
      {/* ================= HEADER ================= */}
      <div className="mb-6 sm:mb-8 max-w-[1600px] mx-auto">
        <h1 className="mb-1 text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          ড্যাশবোর্ড ওভারভিউ
        </h1>
        <p className="text-xs sm:text-sm font-medium text-slate-400">
          স্বাগতম, আজকের কাজের সারসংক্ষেপ এখানে দেখুন।
        </p>
      </div>

      {/* Main Container for Max-Width Constraint on Ultra-wide Displays */}
      <div className="max-w-[1600px] mx-auto space-y-6">
        
        {/* ================= TOP STATS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Members */}
          <div className="flex h-36 sm:h-40 items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-1 sm:mb-2 text-xs font-bold text-slate-400 tracking-wide uppercase">
                  মোট সদস্য
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c2483]">১২,৪৫০</h2>
              </div>
              <p className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50/60 px-2 py-0.5 rounded-full w-fit">
                📈 +৪.৫% গত মাস
              </p>
            </div>
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#0c2483]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          {/* Card 2: Savings */}
          <div className="flex h-36 sm:h-40 items-end justify-between rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200">
            <div className="flex h-full w-full flex-col justify-between">
              <div>
                <p className="mb-1 sm:mb-2 text-xs font-bold text-slate-400 tracking-wide uppercase">
                  মোট সঞ্চয়
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c2483]">৳ ৮৫,৪৫,০০০</h2>
              </div>
              {/* Mini Chart */}
              <div className="flex h-12 sm:h-16 items-end gap-1.5 pt-2">
                {savingsTrend.map((bar, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${bar.height} rounded-t-xs transition-all duration-300 ${
                      i === savingsTrend.length - 1
                        ? "bg-emerald-600"
                        : "bg-emerald-600/30"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center self-start rounded-xl bg-emerald-50 text-emerald-600">
              <PiggyBank className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          {/* Card 3: Loan */}
          <div className="flex h-36 sm:h-40 items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-1 sm:mb-2 text-xs font-bold text-slate-400 tracking-wide uppercase">
                  ঋণ বিতরণ
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c2483]">৳ ৪৫,৩০,০০০</h2>
              </div>
              <p className="text-xs font-medium text-slate-400 truncate max-w-[220px] sm:max-w-none">
                আজকে ২০ জন সদস্যকে ঋণ প্রদান করা হয়েছে
              </p>
            </div>
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <HandCoins className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>

        {/* ================= SECOND ROW ================= */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          
          {/* Card 4: Outstanding */}
          <div className="flex h-36 flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="mb-1 text-xs font-bold text-slate-400 tracking-wide uppercase">
                  বকেয়া ঋণ (Outstanding)
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0c2483]">
                  ৳ ২,১৫,০০,০০০
                </h2>
              </div>
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <Wallet className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[75%] rounded-full bg-[#0c2483]"></div>
              </div>
              <p className="text-xs font-bold text-slate-500">
                লক্ষ্যমাত্রা: <span className="text-[#0c2483]">৭৫% অর্জিত</span>
              </p>
            </div>
          </div>

          {/* Card 5: Collection */}
          <div className="flex h-36 items-start justify-between rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-200">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-1 text-xs font-bold text-slate-400 tracking-wide uppercase">
                  আজকের আদায়
                </p>
                <h2 className="text-2xl sm:text-3xl font-black text-emerald-700">
                  ৳ ৩,৪৫,০০০
                </h2>
              </div>
              <p className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md w-fit">
                সকাল ৯:০০ - বিকেল ৪:৩০
              </p>
            </div>
            <div className="flex h-full flex-col items-end justify-between shrink-0">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <BadgeCent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-600 animate-pulse">
                চলমান
              </span>
            </div>
          </div>
        </div>

        {/* ================= LOWER SECTION ================= */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
          
          {/* Left Block: Chart */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-xs lg:col-span-2 overflow-hidden">
            <div>
              <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  মাসিক আয় বনাম ব্যয়
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0c2483]"></span>
                    <span className="text-slate-500">আয়</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-600"></span>
                    <span className="text-slate-500">ব্যয়</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart Wrap with Responsive X-Overflow on small mobile screens */}
              <div className="overflow-x-auto pb-2 scrollbar-none">
                <div className="flex h-60 sm:h-64 items-end justify-between border-b border-slate-100 min-w-[450px] px-2 pt-4">
                  {incomeExpenseData.map((data, idx) => (
                    <div
                      key={idx}
                      className="group flex max-w-[80px] flex-1 flex-col items-center"
                    >
                      <div className="flex h-44 sm:h-48 w-full items-end justify-center gap-1.5 sm:gap-2">
                        <div
                          className="w-3 sm:w-4 rounded-t-xs bg-[#0c2483] transition-all duration-300 group-hover:opacity-90 shadow-xs"
                          style={{ height: `${data.income}%` }}
                        ></div>
                        <div
                          className="w-3 sm:w-4 rounded-t-xs bg-red-600 transition-all duration-300 group-hover:opacity-90 shadow-xs"
                          style={{ height: `${data.expense}%` }}
                        ></div>
                      </div>
                      <span className="mt-3 text-xs font-bold text-slate-400">
                        {data.month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Calendar & Meetings */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Calendar Widget */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-900">
                    ক্যালেন্ডার
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-slate-400">
                    {monthNames[month]} {year}
                  </p>
                </div>
                <div className="flex gap-1 text-slate-400">
                  <button
                    onClick={handlePrevMonth}
                    className="rounded-lg p-1.5 transition hover:bg-slate-50 hover:text-slate-600"
                    aria-label="Previous Month"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="rounded-lg p-1.5 transition hover:bg-slate-50 hover:text-slate-600"
                    aria-label="Next Month"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Week Days */}
              <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400">
                {weekDays.map((day, idx) => (
                  <span key={idx} className={idx === 5 ? "text-red-500" : ""}>
                    {day}
                  </span>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold">
                {calendarDays.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex aspect-square items-center justify-center rounded-lg text-[11px] sm:text-xs transition-colors cursor-pointer ${
                      !item.isCurrentMonth
                        ? "text-slate-200"
                        : "text-slate-600 hover:bg-slate-50"
                    } ${
                      item.isToday
                        ? "bg-[#0c2483] font-black text-white shadow-sm hover:bg-[#0c2483]"
                        : ""
                    } `}
                  >
                    {item.day}
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Meetings Widget */}
            <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
              <div>
                <h3 className="mb-4 text-sm sm:text-base font-black text-slate-900">
                  আসন্ন শাখা সভা
                </h3>
                <div className="space-y-3">
                  {branchMeetings.map((meeting, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 sm:gap-4 rounded-xl border border-slate-50 bg-slate-50/30 p-3 items-center"
                    >
                      <div
                        className={`${meeting.color} flex h-11 w-11 sm:h-12 sm:w-11 shrink-0 flex-col items-center justify-center rounded-lg text-white`}
                      >
                        <span className="text-sm sm:text-base leading-none font-black">
                          {meeting.date}
                        </span>
                        <span className="mt-0.5 text-[9px] font-bold">
                          {meeting.month}
                        </span>
                      </div>

                      <div className="space-y-0.5 overflow-hidden flex-1">
                        <h4 className="truncate text-xs font-black text-slate-700">
                          {meeting.title}
                        </h4>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                          <Clock size={11} className="shrink-0" />
                          <span>{meeting.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl border border-[#0c2483] py-2.5 text-center text-xs font-bold text-[#0c2483] transition-all hover:bg-indigo-50/40 focus:outline-hidden">
                সবগুলো দেখুন
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardOverview