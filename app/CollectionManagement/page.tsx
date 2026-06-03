// import React from "react"
// import {
//   Download,
//   Plus,
//   MoreVertical,
//   Phone,
//   CheckCircle,
//   AlertCircle,
//   TrendingUp,
//   CreditCard,
//   Calendar,
//   MessageSquare,
// } from "lucide-react"

// const CollectionManagement = () => {
//   // Mock Data for Daily Collection
//   const dailyCollections = [
//     {
//       name: "রাশেদ আহমেদ",
//       id: "#M-8892",
//       initial: "রা",
//       installment: "১২/২৪",
//       amount: "২,৫০০",
//       time: "১০:৪৫ AM",
//       status: "পাঠানো হয়েছে",
//       statusType: "sent",
//     },
//     {
//       name: "সুমাইয়া আক্তার",
//       id: "#M-7712",
//       initial: "সু",
//       installment: "০৫/৫২",
//       amount: "৪,০০০",
//       time: "১১:১৫ AM",
//       status: "প্রসেসিং",
//       statusType: "processing",
//     },
//     {
//       name: "আব্দুল করিম",
//       id: "#M-9921",
//       initial: "আ",
//       installment: "০৮/৪৮",
//       amount: "১,২০০",
//       time: "১১:৩০ AM",
//       status: "পাঠানো হয়েছে",
//       statusType: "sent",
//     },
//   ]

//   // Mock Data for Due Installments
//   const dueInstallments = [
//     {
//       name: "মো: হাসান আলী",
//       id: "#M-১০৫২",
//       dueAmount: "৩,৫০০",
//       days: "৭ দিন বকেয়া",
//     },
//     {
//       name: "জান্নাতুল ফেরদৌস",
//       id: "#M-৮৮২১",
//       dueAmount: "১,২০০",
//       days: "৩ দিন বকেয়া",
//     },
//     {
//       name: "শফিক উদ্দিন",
//       id: "#M-১৯৫৬",
//       dueAmount: "৬,০০০",
//       days: "১২ দিন বকেয়া",
//     },
//   ]

//   // Mock Data for Field Officer Report
//   const officerReports = [
//     {
//       name: "তানভীর হোসেন (জোন এ)",
//       collected: 42000,
//       target: 50000,
//       color: "bg-emerald-700",
//     },
//     {
//       name: "নাসরিন সুলতানা (জোন বি)",
//       collected: 35500,
//       target: 40000,
//       color: "bg-emerald-700",
//     },
//     {
//       name: "জাকির হাসান (জোন সি)",
//       collected: 50000,
//       target: 60000,
//       color: "bg-indigo-900",
//     },
//   ]

//   // Mock Data for Weekly Trends (Chart Heights in %)
//   const weeklyTrends = [
//     { day: "শনি", target: 90, collected: 80 },
//     { day: "রবি", target: 85, collected: 65 },
//     { day: "সোম", target: 92, collected: 92 },
//     { day: "মঙ্গল", target: 75, collected: 60 },
//     { day: "বুধ", target: 88, collected: 82 },
//     { day: "বৃহস্পতি", target: 85, collected: 70 },
//     { day: "শুক্র", target: 40, collected: 30 },
//   ]

//   return (
//     <div className="min-h-screen bg-secondary p-6 font-sans text-slate-800">
//       {/* ================= HEADER SECTION ================= */}
//       <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <h1 className="mb-1 text-3xl font-bold text-[#0c2483]">
//             সংগ্রহ/কিস্তি সিস্টেম (Collections)
//           </h1>
//           <p className="text-sm text-slate-500">
//             ফিল্ড কালেকশন এবং বকেয়া কিস্তির রিয়েল-টাইম ড্যাশবোর্ড
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
//             <Download size={16} />
//             <span>এক্সপোর্ট রিপোর্ট</span>
//           </button>
//           <button className="flex items-center gap-2 rounded-xl bg-[#002bb8] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#002294]">
//             <Plus size={16} />
//             <span>নতুন কালেকশন</span>
//           </button>
//         </div>
//       </div>

//       {/* ================= TOP STATS CARDS ================= */}
//       <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         {/* Card 1: Today's Target */}
//         <div className="relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#0c2483]">
//               <CreditCard size={20} />
//             </div>
//             <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-600">
//               +১২% 📈
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               আজকের লক্ষ্যমাত্রা
//             </p>
//             <h3 className="text-2xl font-bold text-slate-900">৳ ১,৫০,০০০</h3>
//           </div>
//         </div>

//         {/* Card 2: Total Collected */}
//         <div className="flex flex-col justify-between rounded-2xl border border-l-4 border-slate-100 border-l-emerald-600 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//               <TrendingUp size={20} />
//             </div>
//             <span className="text-xs font-medium text-emerald-600">
//               ৮৫% অর্জিত
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               মোট সংগৃহীত
//             </p>
//             <h3 className="text-2xl font-bold text-emerald-700">৳ ১,২৭,৫০০</h3>
//           </div>
//         </div>

//         {/* Card 3: Due Installment */}
//         <div className="flex flex-col justify-between rounded-2xl border border-l-4 border-slate-100 border-l-red-600 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
//               <Calendar size={20} />
//             </div>
//             <span className="text-xs font-medium text-red-500">
//               ১৮ জন সদস্য
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               বকেয়া কিস্তি
//             </p>
//             <h3 className="text-2xl font-bold text-red-600">৳ ২২,৫০০</h3>
//           </div>
//         </div>

//         {/* Card 4: SMS Confirmation */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
//               <MessageSquare size={20} />
//             </div>
//             <span className="text-xs font-medium text-slate-500">
//               সফলতা ৯২%
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               এসএমএস কনফার্মেশন
//             </p>
//             <h3 className="text-2xl font-bold text-slate-900">১১২/১২০</h3>
//           </div>
//         </div>
//       </div>

//       {/* ================= MIDDLE SECTION ================= */}
//       <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {/* Left Side: Daily Installment Collection List */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
//           <div>
//             <div className="mb-6 flex items-center justify-between">
//               <h3 className="text-lg font-bold text-slate-900">
//                 দৈনিক কিস্তি সংগ্রহের তালিকা
//               </h3>
//               <button className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
//                 সকল কেন্দ্র
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse text-left">
//                 <thead>
//                   <tr className="bg-slate-50 text-xs font-semibold text-slate-500">
//                     <th className="rounded-l-xl p-4">সদস্যের নাম ও আইডি</th>
//                     <th className="p-4">কিস্তি নং</th>
//                     <th className="p-4">পরিমাণ</th>
//                     <th className="p-4">সময়</th>
//                     <th className="p-4 text-center">এসএমএস স্ট্যাটাস</th>
//                     <th className="rounded-r-xl p-4 text-center">অ্যাকশন</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100 text-sm">
//                   {dailyCollections.map((item, idx) => (
//                     <tr
//                       key={idx}
//                       className="transition-colors hover:bg-slate-50/50"
//                     >
//                       <td className="flex items-center gap-3 p-4">
//                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-[#0c2483]">
//                           {item.initial}
//                         </div>
//                         <div>
//                           <p className="font-semibold text-slate-800">
//                             {item.name}
//                           </p>
//                           <p className="text-xs text-slate-400">
//                             ID: {item.id}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="p-4 font-medium text-slate-600">
//                         {item.installment}
//                       </td>
//                       <td className="p-4 font-bold text-emerald-600">
//                         ৳ {item.amount}
//                       </td>
//                       <td className="p-4 text-xs text-slate-500">
//                         {item.time}
//                       </td>
//                       <td className="p-4 text-center">
//                         <span
//                           className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
//                             item.statusType === "sent"
//                               ? "border border-emerald-100 bg-emerald-50 text-emerald-600"
//                               : "border border-orange-100 bg-orange-50 text-orange-600"
//                           }`}
//                         >
//                           {item.statusType === "sent" ? "✓ " : "🕒 "}
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="p-4 text-center text-slate-400">
//                         <button className="p-1 hover:text-slate-600">
//                           <MoreVertical size={16} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="mt-4 border-t border-slate-100 pt-4 text-center">
//             <button className="text-sm font-semibold text-[#002bb8] transition-all hover:text-[#002294]">
//               সকল লেনদেন দেখুন
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Due Installments Info */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div>
//             <div className="mb-5 flex items-center gap-2 text-red-600">
//               <AlertCircle size={18} />
//               <h3 className="text-lg font-bold text-slate-900">
//                 বকেয়া কিস্তির তথ্য
//               </h3>
//             </div>

//             <div className="space-y-3">
//               {dueInstallments.map((member, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50/20 p-4"
//                 >
//                   <div>
//                     <div className="flex items-center gap-2">
//                       <h4 className="text-sm font-bold text-slate-800">
//                         {member.name}
//                       </h4>
//                       <span className="rounded-full border border-red-100 bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-600">
//                         {member.days}
//                       </span>
//                     </div>
//                     <p className="mt-0.5 text-xs text-slate-400">
//                       সদস্য আইডি: {member.id}
//                     </p>
//                     <p className="mt-2 text-sm font-bold text-slate-700">
//                       বকেয়া:{" "}
//                       <span className="text-red-600">৳ {member.dueAmount}</span>
//                     </p>
//                   </div>
//                   <button className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm transition-colors hover:bg-red-700">
//                     <Phone size={14} fill="currentColor" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50">
//             বকেয়া সদস্যদের তালিকা
//           </button>
//         </div>
//       </div>

//       {/* ================= LOWER SECTION ================= */}
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {/* Field Officer Collection Report */}
//         <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
//           <div className="mb-6 flex items-center justify-between">
//             <h3 className="text-lg font-bold text-slate-900">
//               ফিল্ড অফিসার কালেকশন রিপোর্ট
//             </h3>
//             <span className="text-xs text-slate-400">আপডেট: ২ মিনিট আগে</span>
//           </div>

//           <div className="space-y-5">
//             {officerReports.map((officer, idx) => (
//               <div key={idx} className="space-y-1.5">
//                 <div className="flex justify-between text-xs font-semibold">
//                   <span className="text-slate-800">{officer.name}</span>
//                   <span className="text-slate-500">
//                     ৳ {officer.collected.toLocaleString()} /{" "}
//                     <span className="text-slate-400">
//                       {officer.target.toLocaleString()}
//                     </span>
//                   </span>
//                 </div>
//                 <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
//                   <div
//                     className={`${officer.color} h-full rounded-full transition-all duration-500`}
//                     style={{
//                       width: `${(officer.collected / officer.target) * 100}%`,
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side Cards (Social Impact & SMS Feed) */}
//         <div className="space-y-6">
//           {/* Card: Social Impact */}
//           <div className="relative overflow-hidden rounded-2xl bg-[#0c2483] p-6 text-white shadow-md">
//             {/* Background Pattern Shape */}
//             <div className="pointer-events-none absolute right-[-20px] bottom-[-20px] h-32 w-32 rounded-full bg-white/5"></div>

//             <h3 className="mb-2 text-lg font-bold">সামাজিক প্রভাব</h3>
//             <p className="mb-5 text-xs leading-relaxed text-indigo-200">
//               আপনার সংগৃহীত অর্থ আজ ৫টি নতুন ক্ষুদ্র উদ্যোগে অর্থায়ন করতে সক্ষম
//               হয়েছে।
//             </p>

//             <div className="flex items-center gap-3">
//               <div className="flex -space-x-2">
//                 <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-300 text-[10px] font-bold text-slate-700">
//                   👤
//                 </div>
//                 <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-400 text-[10px] font-bold text-slate-700">
//                   👤
//                 </div>
//                 <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-500 text-[10px] font-bold text-slate-700">
//                   👤
//                 </div>
//               </div>
//               <span className="text-xs font-medium text-indigo-100">
//                 +১২ নতুন উদ্যোক্তা
//               </span>
//             </div>
//           </div>

//           {/* Card: SMS Feed */}
//           <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//             <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
//               এসএমএস ফিড
//             </p>

//             <div className="space-y-3 text-xs text-slate-600">
//               <div className="flex items-start gap-2">
//                 <CheckCircle
//                   size={14}
//                   className="mt-0.5 shrink-0 text-emerald-500"
//                 />
//                 <p>
//                   কিস্তি নিশ্চিতকরণ এসএমএস পাঠানো হয়েছে সদস্য{" "}
//                   <span className="font-bold text-slate-800">#M-৮৮৯২</span> কে।
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <CheckCircle
//                   size={14}
//                   className="mt-0.5 shrink-0 text-emerald-500"
//                 />
//                 <p>
//                   সাফল্যের সাথে ৫০০ টাকা জমার এসএমএস পেয়েছে{" "}
//                   <span className="font-bold text-slate-800">#M-৭৭১২</span>।
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <AlertCircle
//                   size={14}
//                   className="mt-0.5 shrink-0 text-red-500"
//                 />
//                 <p>
//                   সদস্য{" "}
//                   <span className="font-bold text-slate-800">#M-৯৯২১</span> এর
//                   এসএমএস ডেলিভারি ব্যর্থ।
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= WEEKLY TRENDS BAR CHART ================= */}
//       <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//         <div className="mb-6 flex items-center justify-between">
//           <h3 className="text-lg font-bold text-slate-900">
//             সাপ্তাহিক সংগ্রহের প্রবণতা (Collection Trends)
//           </h3>
//           <div className="flex items-center gap-4 text-xs font-semibold">
//             <div className="flex items-center gap-1.5">
//               <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-200"></span>
//               <span className="text-slate-500">টার্গেট</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-700"></span>
//               <span className="text-slate-500">সংগ্রহ</span>
//             </div>
//           </div>
//         </div>

//         {/* Custom Pure Tailwind Bar Chart Layout */}
//         <div className="flex h-48 items-end justify-between border-b border-slate-100 px-2 pt-4 sm:px-6">
//           {weeklyTrends.map((bar, idx) => (
//             <div
//               key={idx}
//               className="group flex max-w-[60px] flex-1 flex-col items-center"
//             >
//               <div className="flex h-36 w-full items-end justify-center gap-1.5">
//                 {/* Target Bar */}
//                 <div
//                   className="w-4 rounded-t-sm bg-indigo-100 transition-all duration-500 group-hover:bg-indigo-200"
//                   style={{ height: `${bar.target}%` }}
//                 ></div>
//                 {/* Collected Bar */}
//                 <div
//                   className="w-4 rounded-t-sm bg-emerald-700 transition-all duration-500 group-hover:bg-emerald-800"
//                   style={{ height: `${bar.collected}%` }}
//                 ></div>
//               </div>
//               <span className="mt-2 text-xs font-medium text-slate-500">
//                 {bar.day}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CollectionManagement
// 'use client';

// import React, { useState } from "react"
// import {
//   Download,
//   Plus,
//   MoreVertical,
//   Phone,
//   CheckCircle,
//   AlertCircle,
//   TrendingUp,
//   CreditCard,
//   Calendar,
//   MessageSquare,
//   X,
//   Eye,
//   Trash2,
// } from "lucide-react"

// const CollectionManagement = () => {
//   // --- STATE MANAGEMENT FOR DYNAMIC BEHAVIORS ---
//   const [showAllTransactions, setShowAllTransactions] = useState(false)
//   const [showNewCollectionModal, setShowNewCollectionModal] = useState(false)
//   const [activeRowAction, setActiveRowAction] = useState(null)
  
//   // New States for requested functionalities
//   const [selectedMemberDetails, setSelectedMemberDetails] = useState(null) // Controls Details Modal
//   const [showMoreDues, setShowMoreDues] = useState(false) // Controls expanded due list

//   // Form State for New Collection
//   const [newCollection, setNewCollection] = useState({
//     name: "",
//     id: "",
//     installment: "",
//     amount: "",
//   })

//   // Initial Mock Data for Daily Collection
//   const [dailyCollections, setDailyCollections] = useState([
//     {
//       name: "রাশেদ আহমেদ",
//       id: "#M-8892",
//       initial: "রা",
//       installment: "১২/২৪",
//       amount: "২,৫০০",
//       time: "১০:৪৫ AM",
//       status: "পাঠানো হয়েছে",
//       statusType: "sent",
//     },
//     {
//       name: "সুমাইয়া আক্তার",
//       id: "#M-7712",
//       initial: "সু",
//       installment: "০৫/৫২",
//       amount: "৪,০০০",
//       time: "১১:১৫ AM",
//       status: "প্রসেসিং",
//       statusType: "processing",
//     },
//     {
//       name: "আব্দুল করিম",
//       id: "#M-9921",
//       initial: "আ",
//       installment: "০৮/৪৮",
//       amount: "১,২০০",
//       time: "১১:৩০ AM",
//       status: "পাঠানো হয়েছে",
//       statusType: "sent",
//     },
//   ])

//   // Extended Transactions Data (Shows ~10 entries when "সকল লেনদেন দেখুন" is clicked)
//   const extendedTransactions = [
//     ...dailyCollections,
//     { name: "নুরুল ইসলাম", id: "#M-4412", initial: "নু", installment: "২০/২৪", amount: "৩,০০০", time: "১১:৪৫ AM", status: "পাঠানো হয়েছে", statusType: "sent" },
//     { name: "ফাতেমা বেগম", id: "#M-3321", initial: "ফা", installment: "১১/৫২", amount: "১,৫০০", time: "১২:০০ PM", status: "প্রসেসিং", statusType: "processing" },
//     { name: "তারেক রহমান", id: "#M-5567", initial: "তা", installment: "১৫/৪৮", amount: "৫,০০০", time: "১২:১৫ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
//     { name: "মেহেদী হাসান", id: "#M-1122", initial: "মে", installment: "০২/২৪", amount: "২,০০০", time: "১২:৩০ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
//     { name: "রোকসানা আক্তার", id: "#M-9988", initial: "রো", installment: "২৫/৫২", amount: "৪,৫০০", time: "০১:০০ PM", status: "প্রসেসিং", statusType: "processing" },
//     { name: "সাইফুল ইসলাম", id: "#M-7766", initial: "সা", installment: "০৭/৪৮", amount: "১,৮০০", time: "০১:১৫ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
//     { name: "আসমার জাহান", id: "#M-6655", initial: "আ", installment: "১৮/২৪", amount: "৩,৫০০", time: "০১:৩০ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
//   ]

//   // Determine which data to render in the table
//   const displayedCollections = showAllTransactions ? extendedTransactions : dailyCollections

//   // Handle Form Submission for New Collection
//   const handleCreateCollection = (e) => {
//     e.preventDefault()
//     if (!newCollection.name || !newCollection.amount) return

//     const currentTime = new Date().toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     })

//     const updatedItem = {
//       name: newCollection.name,
//       id: newCollection.id || `#M-${Math.floor(1000 + Math.random() * 9000)}`,
//       initial: newCollection.name.charAt(0),
//       installment: newCollection.installment || "০১/২৪",
//       amount: Number(newCollection.amount).toLocaleString("bn-BD"),
//       time: currentTime,
//       status: "প্রসেসিং",
//       statusType: "processing",
//     }

//     setDailyCollections([updatedItem, ...dailyCollections])
//     setShowNewCollectionModal(false)
//     setNewCollection({ name: "", id: "", installment: "", amount: "" })
//   }

//   // NEW: Handle Delete functionality for dynamic and extended lists
//   const handleDeleteCollection = (id) => {
//     if (confirm("আপনি কি নিশ্চিতভাবে এই লেনদেনটি মুছে ফেলতে চান?")) {
//       setDailyCollections(dailyCollections.filter(item => item.id !== id))
//       setActiveRowAction(null)
//     }
//   }

//   // Mock Data for Due Installments
//   const initialDueInstallments = [
//     {
//       name: "মো: হাসান আলী",
//       id: "#M-১০৫২",
//       dueAmount: "৩,৫০০",
//       days: "৭ দিন বকেয়া",
//     },
//     {
//       name: "জান্নাতুল ফেরদৌস",
//       id: "#M-৮৮২১",
//       dueAmount: "১,২০০",
//       days: "৩ দিন বকেয়া",
//     },
//     {
//       name: "শফিক উদ্দিন",
//       id: "#M-১৯৫৬",
//       dueAmount: "৬,০০০",
//       days: "১২ দিন বকেয়া",
//     },
//   ]

//   // More dynamic data loaded when "বকেয়া সদস্যদের তালিকা" is clicked
//   const extendedDueInstallments = [
//     ...initialDueInstallments,
//     { name: "আরিফুর রহমান", id: "#M-৪৪৫২", dueAmount: "২,০০০", days: "৫ দিন বকেয়া" },
//     { name: "নাজমুন নাহার", id: "#M-৩১২১", dueAmount: "৪,৫০০", days: "৯ দিন বকেয়া" },
//     { name: "কামরুল হাসান", id: "#M-৫১১২", dueAmount: "১,৮০০", days: "২ দিন বকেয়া" },
//   ]

//   const displayedDues = showMoreDues ? extendedDueInstallments : initialDueInstallments

//   // Mock Data for Field Officer Report
//   const officerReports = [
//     {
//       name: "তানভীর হোসেন (জোন এ)",
//       collected: 42000,
//       target: 50000,
//       color: "bg-emerald-700",
//     },
//     {
//       name: "নাসরিন সুলতানা (জোন বি)",
//       collected: 35500,
//       target: 40000,
//       color: "bg-emerald-700",
//     },
//     {
//       name: "জাকির হাসান (জোন সি)",
//       collected: 50000,
//       target: 60000,
//       color: "bg-indigo-900",
//     },
//   ]

//   // Mock Data for Weekly Trends (Chart Heights in %)
//   const weeklyTrends = [
//     { day: "শনি", target: 90, collected: 80 },
//     { day: "রবি", target: 85, collected: 65 },
//     { day: "সোম", target: 92, collected: 92 },
//     { day: "মঙ্গল", target: 75, collected: 60 },
//     { day: "বুধ", target: 88, collected: 82 },
//     { day: "বৃহস্পতি", target: 85, collected: 70 },
//     { day: "শুক্র", target: 40, collected: 30 },
//   ]

//   return (
//     <div className="min-h-screen bg-secondary p-6 font-sans text-slate-800 relative">
//       {/* ================= HEADER SECTION ================= */}
//       <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <h1 className="mb-1 text-3xl font-bold text-[#0c2483]">
//             সংগ্রহ/কিস্তি সিস্টেম (Collections)
//           </h1>
//           <p className="text-sm text-slate-500">
//             ফিল্ড কালেকশন এবং বকেয়া কিস্তির রিয়েল-টাইম ড্যাশবোর্ড
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50">
//             <Download size={16} />
//             <span>এক্সপোর্ট রিপোর্ট</span>
//           </button>
          
//           <button 
//             onClick={() => setShowNewCollectionModal(true)}
//             className="flex items-center gap-2 rounded-xl bg-[#002bb8] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#002294]"
//           >
//             <Plus size={16} />
//             <span>নতুন কালেকশন</span>
//           </button>
//         </div>
//       </div>

//       {/* ================= TOP STATS CARDS ================= */}
//       <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         {/* Card 1: Today's Target */}
//         <div className="relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#0c2483]">
//               <CreditCard size={20} />
//             </div>
//             <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-600">
//               +১২% 📈
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               আজকের লক্ষ্যমাত্রা
//             </p>
//             <h3 className="text-2xl font-bold text-slate-900">৳ ১,৫০,০০০</h3>
//           </div>
//         </div>

//         {/* Card 2: Total Collected */}
//         <div className="flex flex-col justify-between rounded-2xl border border-l-4 border-slate-100 border-l-emerald-600 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//               <TrendingUp size={20} />
//             </div>
//             <span className="text-xs font-medium text-emerald-600">
//               ৮৫% অর্জিত
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               মোট সংগৃহীত
//             </p>
//             <h3 className="text-2xl font-bold text-emerald-700">৳ ১,২৭,৫০০</h3>
//           </div>
//         </div>

//         {/* Card 3: Due Installment */}
//         <div className="flex flex-col justify-between rounded-2xl border border-l-4 border-slate-100 border-l-red-600 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
//               <Calendar size={20} />
//             </div>
//             <span className="text-xs font-medium text-red-500">
//               {showMoreDues ? "২১ জন সদস্য" : "১৮ জন সদস্য"}
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               বকেয়া কিস্তি
//             </p>
//             <h3 className="text-2xl font-bold text-red-600">
//               ৳ {showMoreDues ? "৩০,৮০০" : "২২,৫০০"}
//             </h3>
//           </div>
//         </div>

//         {/* Card 4: SMS Confirmation */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//           <div className="flex items-start justify-between">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
//               <MessageSquare size={20} />
//             </div>
//             <span className="text-xs font-medium text-slate-500">
//               সফলতা ৯২%
//             </span>
//           </div>
//           <div className="mt-4">
//             <p className="mb-1 text-xs font-medium text-slate-400">
//               এসএমএস কনফার্মেশন
//             </p>
//             <h3 className="text-2xl font-bold text-slate-900">১১২/১২০</h3>
//           </div>
//         </div>
//       </div>

//       {/* ================= MIDDLE SECTION ================= */}
//       <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {/* Left Side: Daily Installment Collection List */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
//           <div>
//             <div className="mb-6 flex items-center justify-between">
//               <h3 className="text-lg font-bold text-slate-900">
//                 দৈনিক কিস্তি সংগ্রহের তালিকা {showAllTransactions && "(সকল)"}
//               </h3>
//               <button className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
//                 সকল কেন্দ্র
//               </button>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse text-left">
//                 <thead>
//                   <tr className="bg-slate-50 text-xs font-semibold text-slate-500">
//                     <th className="rounded-l-xl p-4">সদস্যের নাম ও আইডি</th>
//                     <th className="p-4">কিস্তি নং</th>
//                     <th className="p-4">পরিমাণ</th>
//                     <th className="p-4">সময়</th>
//                     <th className="p-4 text-center">এসএমএস স্ট্যাটাস</th>
//                     <th className="rounded-r-xl p-4 text-center">অ্যাকশন</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-100 text-sm">
//                   {displayedCollections.map((item, idx) => (
//                     <tr
//                       key={item.id + idx}
//                       className="transition-colors hover:bg-slate-50/50"
//                     >
//                       <td className="flex items-center gap-3 p-4">
//                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-[#0c2483]">
//                           {item.initial}
//                         </div>
//                         <div>
//                           <p className="font-semibold text-slate-800">
//                             {item.name}
//                           </p>
//                           <p className="text-xs text-slate-400">
//                             ID: {item.id}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="p-4 font-medium text-slate-600">
//                         {item.installment}
//                       </td>
//                       <td className="p-4 font-bold text-emerald-600">
//                         ৳ {item.amount}
//                       </td>
//                       <td className="p-4 text-xs text-slate-500">
//                         {item.time}
//                       </td>
//                       <td className="p-4 text-center">
//                         <span
//                           className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
//                             item.statusType === "sent"
//                               ? "border border-emerald-100 bg-emerald-50 text-emerald-600"
//                               : "border border-orange-100 bg-orange-50 text-orange-600"
//                           }`}
//                         >
//                           {item.statusType === "sent" ? "✓ " : "🕒 "}
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="p-4 text-center text-slate-400 relative">
//                         <button 
//                           onClick={() => setActiveRowAction(activeRowAction === idx ? null : idx)}
//                           className="p-1 hover:text-slate-600"
//                         >
//                           <MoreVertical size={16} />
//                         </button>
                        
//                         {activeRowAction === idx && (
//                           <div className="absolute right-4 mt-1 w-28 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-10 text-left">
//                             <button 
//                               onClick={() => {
//                                 setSelectedMemberDetails(item);
//                                 setActiveRowAction(null);
//                               }} 
//                               className="flex items-center gap-1.5 w-full px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50"
//                             >
//                               <Eye size={12} />
//                               <span>দেখুন</span>
//                             </button>
//                             <button 
//                               onClick={() => handleDeleteCollection(item.id)} 
//                               className="flex items-center gap-1.5 w-full px-3 py-1.5 text-xs text-red-600 hover:bg-slate-50"
//                             >
//                               <Trash2 size={12} />
//                               <span>মুছে ফেলুন</span>
//                             </button>
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="mt-4 border-t border-slate-100 pt-4 text-center">
//             <button 
//               onClick={() => setShowAllTransactions(!showAllTransactions)}
//               className="text-sm font-semibold text-[#002bb8] transition-all hover:text-[#002294]"
//             >
//               {showAllTransactions ? "সংক্ষিপ্ত তালিকা দেখুন" : "সকল লেনদেন দেখুন"}
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Due Installments Info */}
//         <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//           <div>
//             <div className="mb-5 flex items-center gap-2 text-red-600">
//               <AlertCircle size={18} />
//               <h3 className="text-lg font-bold text-slate-900">
//                 বকেয়া কিস্তির তথ্য
//               </h3>
//             </div>

//             <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
//               {displayedDues.map((member, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50/20 p-4"
//                 >
//                   <div>
//                     <div className="flex items-center gap-2">
//                       <h4 className="text-sm font-bold text-slate-800">
//                         {member.name}
//                       </h4>
//                       <span className="rounded-full border border-red-100 bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-600">
//                         {member.days}
//                       </span>
//                     </div>
//                     <p className="mt-0.5 text-xs text-slate-400">
//                       সদস্য আইডি: {member.id}
//                     </p>
//                     <p className="mt-2 text-sm font-bold text-slate-700">
//                       বকেয়া:{" "}
//                       <span className="text-red-600">৳ {member.dueAmount}</span>
//                     </p>
//                   </div>
//                   <button 
//                     onClick={() => alert(`${member.name} কে কল দেওয়া হচ্ছে...`)}
//                     className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm transition-colors hover:bg-red-700"
//                   >
//                     <Phone size={14} fill="currentColor" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button 
//             onClick={() => setShowMoreDues(!showMoreDues)}
//             className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50"
//           >
//             {showMoreDues ? "বকেয়া তালিকা সংক্ষিপ্ত করুন" : "বকেয়া সদস্যদের তালিকা"}
//           </button>
//         </div>
//       </div>

//       {/* ================= LOWER SECTION ================= */}
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {/* Field Officer Collection Report */}
//         <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
//           <div className="mb-6 flex items-center justify-between">
//             <h3 className="text-lg font-bold text-slate-900">
//               ফিল্ড অফিসার কালেকশন রিপোর্ট
//             </h3>
//             <span className="text-xs text-slate-400">আপডেট: ২ মিনিট আগে</span>
//           </div>

//           <div className="space-y-5">
//             {officerReports.map((officer, idx) => (
//               <div key={idx} className="space-y-1.5">
//                 <div className="flex justify-between text-xs font-semibold">
//                   <span className="text-slate-800">{officer.name}</span>
//                   <span className="text-slate-500">
//                     ৳ {officer.collected.toLocaleString()} /{" "}
//                     <span className="text-slate-400">
//                       {officer.target.toLocaleString()}
//                     </span>
//                   </span>
//                 </div>
//                 <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
//                   <div
//                     className={`${officer.color} h-full rounded-full transition-all duration-500`}
//                     style={{
//                       width: `${(officer.collected / officer.target) * 100}%`,
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side Cards (Social Impact & SMS Feed) */}
//         <div className="space-y-6">
//           {/* Card: Social Impact */}
//           <div className="relative overflow-hidden rounded-2xl bg-[#0c2483] p-6 text-white shadow-md">
//             <div className="pointer-events-none absolute right-[-20px] bottom-[-20px] h-32 w-32 rounded-full bg-white/5"></div>

//             <h3 className="mb-2 text-lg font-bold">সামাজিক প্রভাব</h3>
//             <p className="mb-5 text-xs leading-relaxed text-indigo-200">
//               আপনার সংগৃহীত অর্থ আজ ৫টি নতুন ক্ষুদ্র উদ্যোগে অর্থায়ন করতে সক্ষম
//               হয়েছে।
//             </p>

//             <div className="flex items-center gap-3">
//               <div className="flex -space-x-2">
//                 <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-300 text-[10px] font-bold text-slate-700">
//                   👤
//                 </div>
//                 <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-400 text-[10px] font-bold text-slate-700">
//                   👤
//                 </div>
//                 <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-500 text-[10px] font-bold text-slate-700">
//                   👤
//                 </div>
//               </div>
//               <span className="text-xs font-medium text-indigo-100">
//                 +১২ নতুন উদ্যোক্তা
//               </span>
//             </div>
//           </div>

//           {/* Card: SMS Feed */}
//           <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
//             <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">
//               এসএমএস ফিড
//             </p>

//             <div className="space-y-3 text-xs text-slate-600">
//               <div className="flex items-start gap-2">
//                 <CheckCircle
//                   size={14}
//                   className="mt-0.5 shrink-0 text-emerald-500"
//                 />
//                 <p>
//                   কিস্তি নিশ্চিতকরণ এসএমএস পাঠানো হয়েছে সদস্য{" "}
//                   <span className="font-bold text-slate-800">#M-৮৮৯২</span> কে।
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <CheckCircle
//                   size={14}
//                   className="mt-0.5 shrink-0 text-emerald-500"
//                 />
//                 <p>
//                   সাফল্যের সাথে ৫০০ টাকা জমার এসএমএস পেয়েছে{" "}
//                   <span className="font-bold text-slate-800">#M-৭৭১২</span>।
//                 </p>
//               </div>
//               <div className="flex items-start gap-2">
//                 <AlertCircle
//                   size={14}
//                   className="mt-0.5 shrink-0 text-red-500"
//                 />
//                 <p>
//                   সদস্য{" "}
//                   <span className="font-bold text-slate-800">#M-৯৯২১</span> এর
//                   এসএমএস ডেলিভারি ব্যর্থ।
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= WEEKLY TRENDS BAR CHART ================= */}
//       <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
//         <div className="mb-6 flex items-center justify-between">
//           <h3 className="text-lg font-bold text-slate-900">
//             সাপ্তাহিক সংগ্রহের প্রবণতা (Collection Trends)
//           </h3>
//           <div className="flex items-center gap-4 text-xs font-semibold">
//             <div className="flex items-center gap-1.5">
//               <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-200"></span>
//               <span className="text-slate-500">টার্গেট</span>
//             </div>
//             <div className="flex items-center gap-1.5">
//               <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-700"></span>
//               <span className="text-slate-500">সংগ্রহ</span>
//             </div>
//           </div>
//         </div>

//         <div className="flex h-48 items-end justify-between border-b border-slate-100 px-2 pt-4 sm:px-6">
//           {weeklyTrends.map((bar, idx) => (
//             <div
//               key={idx}
//               className="group flex max-w-[60px] flex-1 flex-col items-center"
//             >
//               <div className="flex h-36 w-full items-end justify-center gap-1.5">
//                 <div
//                   className="w-4 rounded-t-sm bg-indigo-100 transition-all duration-500 group-hover:bg-indigo-200"
//                   style={{ height: `${bar.target}%` }}
//                 ></div>
//                 <div
//                   className="w-4 rounded-t-sm bg-emerald-700 transition-all duration-500 group-hover:bg-emerald-800"
//                   style={{ height: `${bar.collected}%` }}
//                 ></div>
//               </div>
//               <span className="mt-2 text-xs font-medium text-slate-500">
//                 {bar.day}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= NEW COLLECTION MODAL CONTROLS ================= */}
//       {showNewCollectionModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-100">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-bold text-slate-900">নতুন কালেকশন যোগ করুন</h3>
//               <button onClick={() => setShowNewCollectionModal(false)} className="p-1 hover:bg-slate-50 rounded-lg text-slate-400">
//                 <X size={18} />
//               </button>
//             </div>
//             <form onSubmit={handleCreateCollection} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-semibold text-slate-500 mb-1">সদস্যের নাম *</label>
//                 <input 
//                   type="text" required
//                   value={newCollection.name}
//                   onChange={(e) => setNewCollection({...newCollection, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8]"
//                   placeholder="উদা: মো: আরিফ হোসেন"
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-3">
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-500 mb-1">আইডি (ঐচ্ছিক)</label>
//                   <input 
//                     type="text"
//                     value={newCollection.id}
//                     onChange={(e) => setNewCollection({...newCollection, id: e.target.value})}
//                     className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8]"
//                     placeholder="#M-1234"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-500 mb-1">কিস্তি নং</label>
//                   <input 
//                     type="text"
//                     value={newCollection.installment}
//                     onChange={(e) => setNewCollection({...newCollection, installment: e.target.value})}
//                     className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8]"
//                     placeholder="১০/২৪"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-slate-500 mb-1">টাকার পরিমাণ (৳) *</label>
//                 <input 
//                   type="number" required
//                   value={newCollection.amount}
//                   onChange={(e) => setNewCollection({...newCollection, amount: e.target.value})}
//                   className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8]"
//                   placeholder="2000"
//                 />
//               </div>
//               <button type="submit" className="w-full bg-[#002bb8] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#002294] transition-all">
//                 সংরক্ষণ করুন
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ================= NEW: MEMBER DETAILS MODAL ================= */}
//       {selectedMemberDetails && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl border border-slate-100 relative">
//             <button 
//               onClick={() => setSelectedMemberDetails(null)} 
//               className="absolute right-4 top-4 p-1 hover:bg-slate-50 rounded-lg text-slate-400"
//             >
//               <X size={18} />
//             </button>
            
//             <div className="text-center mt-2">
//               <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-xl font-bold text-[#0c2483] mb-3">
//                 {selectedMemberDetails.initial}
//               </div>
//               <h3 className="text-xl font-bold text-slate-900">{selectedMemberDetails.name}</h3>
//               <p className="text-xs text-slate-400 mb-4">সদস্য আইডি: {selectedMemberDetails.id}</p>
//             </div>

//             <div className="border-t border-slate-100 pt-4 space-y-3 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-slate-400">কিস্তি ট্র্যাকিং:</span>
//                 <span className="font-semibold text-slate-700">{selectedMemberDetails.installment}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-slate-400">জমাকৃত পরিমাণ:</span>
//                 <span className="font-bold text-emerald-600">৳ {selectedMemberDetails.amount}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-slate-400">সংগ্রহের সময়:</span>
//                 <span className="text-slate-600">{selectedMemberDetails.time}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-slate-400">এসএমএস স্ট্যাটাস:</span>
//                 <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
//                   selectedMemberDetails.statusType === "sent"
//                     ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
//                     : "bg-orange-50 text-orange-600 border border-orange-100"
//                 }`}>
//                   {selectedMemberDetails.status}
//                 </span>
//               </div>
//             </div>

//             <button 
//               onClick={() => setSelectedMemberDetails(null)} 
//               className="mt-6 w-full bg-slate-100 text-slate-700 py-2 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-all"
//             >
//               বন্ধ করুন
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default CollectionManagement
'use client';

import React, { useState } from "react"
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
  MessageSquare,
  X,
  Eye,
  Trash2,
} from "lucide-react"

const CollectionManagement = () => {
  // --- STATE MANAGEMENT FOR DYNAMIC BEHAVIORS ---
  const [showAllTransactions, setShowAllTransactions] = useState(false)
  const [showNewCollectionModal, setShowNewCollectionModal] = useState(false)
  const [activeRowAction, setActiveRowAction] = useState(null)
  
  // New States for requested functionalities
  const [selectedMemberDetails, setSelectedMemberDetails] = useState(null) // Controls Details Modal
  const [showMoreDues, setShowMoreDues] = useState(false) // Controls expanded due list

  // Form State for New Collection
  const [newCollection, setNewCollection] = useState({
    name: "",
    id: "",
    installment: "",
    amount: "",
  })

  // Initial Mock Data for Daily Collection
  const [dailyCollections, setDailyCollections] = useState([
    {
      name: "রাশেদ আহমেদ",
      id: "#M-8892",
      initial: "রা",
      installment: "১২/২৪",
      amount: "২,৫০০",
      time: "১০:৪৫ AM",
      status: "পাঠানো হয়েছে",
      statusType: "sent",
    },
    {
      name: "সুমাইয়া আক্তার",
      id: "#M-7712",
      initial: "সু",
      installment: "০৫/৫২",
      amount: "৪,০০০",
      time: "১১:১৫ AM",
      status: "প্রসেসিং",
      statusType: "processing",
    },
    {
      name: "আব্দুল করিম",
      id: "#M-9921",
      initial: "আ",
      installment: "০৮/৪৮",
      amount: "১,২০০",
      time: "১১:৩০ AM",
      status: "পাঠানো হয়েছে",
      statusType: "sent",
    },
  ])

  // Extended Transactions Data
  const extendedTransactions = [
    ...dailyCollections,
    { name: "নুরুল ইসলাম", id: "#M-4412", initial: "নু", installment: "২০/২৪", amount: "৩,০০০", time: "১১:৪৫ AM", status: "পাঠানো হয়েছে", statusType: "sent" },
    { name: "ফাতেমা বেগম", id: "#M-3321", initial: "ফা", installment: "১১/৫২", amount: "১,৫০০", time: "১২:০০ PM", status: "প্রসেসিং", statusType: "processing" },
    { name: "তারেক রহমান", id: "#M-5567", initial: "তা", installment: "১৫/৪৮", amount: "৫,০০০", time: "১২:১৫ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
    { name: "মেহেদী হাসান", id: "#M-1122", initial: "মে", installment: "০২/২৪", amount: "২,০০০", time: "১২:৩০ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
    { name: "রোকসানা আক্তার", id: "#M-9988", initial: "রো", installment: "২৫/৫২", amount: "৪,৫০০", time: "০১:০০ PM", status: "প্রসেসিং", statusType: "processing" },
    { name: "সাইফুল ইসলাম", id: "#M-7766", initial: "সা", installment: "০৭/৪৮", amount: "১,৮০০", time: "০১:১৫ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
    { name: "আসমার জাহান", id: "#M-6655", initial: "আ", installment: "১৮/২৪", amount: "৩,৫০০", time: "০১:৩০ PM", status: "পাঠানো হয়েছে", statusType: "sent" },
  ]

  // Determine which data to render in the table
  const displayedCollections = showAllTransactions ? extendedTransactions : dailyCollections

  // Handle Form Submission for New Collection
  const handleCreateCollection = (e) => {
    e.preventDefault()
    if (!newCollection.name || !newCollection.amount) return

    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })

    const updatedItem = {
      name: newCollection.name,
      id: newCollection.id || `#M-${Math.floor(1000 + Math.random() * 9000)}`,
      initial: newCollection.name.charAt(0),
      installment: newCollection.installment || "০১/২৪",
      amount: Number(newCollection.amount).toLocaleString("bn-BD"),
      time: currentTime,
      status: "প্রসেসিং",
      statusType: "processing",
    }

    setDailyCollections([updatedItem, ...dailyCollections])
    setShowNewCollectionModal(false)
    setNewCollection({ name: "", id: "", installment: "", amount: "" })
  }

  // Handle Delete functionality
  const handleDeleteCollection = (id) => {
    if (confirm("আপনি কি নিশ্চিতভাবে এই লেনদেনটি মুছে ফেলতে চান?")) {
      setDailyCollections(dailyCollections.filter(item => item.id !== id))
      setActiveRowAction(null)
    }
  }

  // Mock Data for Due Installments
  const initialDueInstallments = [
    { name: "মো: হাসান আলী", id: "#M-১০৫২", dueAmount: "৩,৫০০", days: "৭ দিন বকেয়া" },
    { name: "জান্নাতুল ফেরদৌস", id: "#M-৮৮২১", dueAmount: "১,২০০", days: "৩ দিন বকেয়া" },
    { name: "শফিক উদ্দিন", id: "#M-১৯৫৬", dueAmount: "৬,০০০", days: "১২ দিন বকেয়া" },
  ]

  const extendedDueInstallments = [
    ...initialDueInstallments,
    { name: "আরিফুর রহমান", id: "#M-৪৪৫২", dueAmount: "২,০০০", days: "৫ দিন বকেয়া" },
    { name: "নাজমুন নাহার", id: "#M-৩১২১", dueAmount: "৪,৫০০", days: "৯ দিন বকেয়া" },
    { name: "কামরুল হাসান", id: "#M-৫১১২", dueAmount: "১,৮০০", days: "২ দিন বকেয়া" },
  ]

  const displayedDues = showMoreDues ? extendedDueInstallments : initialDueInstallments

  // Mock Data for Field Officer Report
  const officerReports = [
    { name: "তানভীর হোসেন (জোন এ)", collected: 42000, target: 50000, color: "bg-emerald-700" },
    { name: "নাসরিন সুলতানা (জোন বি)", collected: 35500, target: 40000, color: "bg-emerald-700" },
    { name: "জাকির হাসান (জোন সি)", collected: 50000, target: 60000, color: "bg-indigo-900" },
  ]

  // Mock Data for Weekly Trends
  const weeklyTrends = [
    { day: "শনি", target: 90, collected: 80 },
    { day: "রবি", target: 85, collected: 65 },
    { day: "সোম", target: 92, collected: 92 },
    { day: "মঙ্গল", target: 75, collected: 60 },
    { day: "বুধ", target: 88, collected: 82 },
    { day: "বৃহস্পতি", target: 85, collected: 70 },
    { day: "শুক্র", target: 40, collected: 30 },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 font-sans text-slate-800 relative">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0c2483] tracking-tight">
            সংগ্রহ/কিস্তি সিস্টেম (Collections)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            ফিল্ড কালেকশন এবং বকেয়া কিস্তির রিয়েল-টাইম ড্যাশবোর্ড
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 shadow-xs">
            <Download size={16} />
            <span>এক্সপোর্ট রিপোর্ট</span>
          </button>
          
          <button 
            onClick={() => setShowNewCollectionModal(true)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-xl bg-[#002bb8] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#002294]"
          >
            <Plus size={16} />
            <span>নতুন কালেকশন</span>
          </button>
        </div>
      </div>

      {/* ================= TOP STATS CARDS ================= */}
      <div className="mb-6 lg:mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
        {/* Card 1 */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-[#0c2483]">
              <CreditCard size={20} />
            </div>
            <span className="flex items-center gap-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
              +১২% 📈
            </span>
          </div>
          <div className="mt-4">
            <p className="mb-1 text-xs font-medium text-slate-400">আজকের লক্ষ্যমাত্রা</p>
            <h3 className="text-2xl font-bold text-slate-900">৳ ১,৫০,০০০</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between rounded-2xl border border-l-4 border-slate-100 border-l-emerald-600 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
              ৮৫% অর্জিত
            </span>
          </div>
          <div className="mt-4">
            <p className="mb-1 text-xs font-medium text-slate-400">মোট সংগৃহীত</p>
            <h3 className="text-2xl font-bold text-emerald-700">৳ ১,২৭,৫০০</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between rounded-2xl border border-l-4 border-slate-100 border-l-red-600 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <Calendar size={20} />
            </div>
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-lg">
              {showMoreDues ? "২১ জন সদস্য" : "১৮ জন সদস্য"}
            </span>
          </div>
          <div className="mt-4">
            <p className="mb-1 text-xs font-medium text-slate-400">বকেয়া কিস্তি</p>
            <h3 className="text-2xl font-bold text-red-600">
              ৳ {showMoreDues ? "৩০,৮০০" : "২২,৫০০"}
            </h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
              <MessageSquare size={20} />
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">
              সফলতা ৯২%
            </span>
          </div>
          <div className="mt-4">
            <p className="mb-1 text-xs font-medium text-slate-400">এসএমএস কনফার্মেশন</p>
            <h3 className="text-2xl font-bold text-slate-900">১১২/১২০</h3>
          </div>
        </div>
      </div>

      {/* ================= MIDDLE SECTION ================= */}
      <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Daily Installment Collection List */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-xs lg:col-span-2">
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">
                দৈনিক কিস্তি সংগ্রহের তালিকা {showAllTransactions && "(সকল)"}
              </h3>
              <button className="self-start sm:self-auto rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500">
                সকল কেন্দ্র
              </button>
            </div>

            {/* Responsive Table Wrapper */}
            <div className="w-full overflow-x-auto rounded-xl border border-slate-100 vs-scrollbar">
              <table className="w-full border-collapse text-left min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold text-slate-500 border-b border-slate-100">
                    <th className="p-4">সদস্যের নাম ও আইডি</th>
                    <th className="p-4">কিস্তি নং</th>
                    <th className="p-4">পরিমাণ</th>
                    <th className="p-4">সময়</th>
                    <th className="p-4 text-center">এসএমএস স্ট্যাটাস</th>
                    <th className="p-4 text-center">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {displayedCollections.map((item, idx) => (
                    <tr key={item.id + idx} className="transition-colors hover:bg-slate-50/50">
                      <td className="p-4 flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-[#0c2483]">
                          {item.initial}
                        </div>
                        <div className="truncate">
                          <p className="font-semibold text-slate-800 truncate max-w-[140px] sm:max-w-none">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-400">ID: {item.id}</p>
                        </div>
                      </td>
                      <td className="p-4 font-medium text-slate-600">{item.installment}</td>
                      <td className="p-4 font-bold text-emerald-600">৳ {item.amount}</td>
                      <td className="p-4 text-xs text-slate-500">{item.time}</td>
                      <td className="p-4 text-center">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          item.statusType === "sent"
                            ? "border border-emerald-100 bg-emerald-50 text-emerald-600"
                            : "border border-orange-100 bg-orange-50 text-orange-600"
                        }`}>
                          <span>{item.statusType === "sent" ? "✓" : "🕒"}</span>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-center text-slate-400 relative">
                        <button 
                          onClick={() => setActiveRowAction(activeRowAction === idx ? null : idx)}
                          className="p-1 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <MoreVertical size={16} />
                        </button>
                        
                        {activeRowAction === idx && (
                          <div className="absolute right-4 mt-1 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-20 text-left">
                            <button 
                              onClick={() => {
                                setSelectedMemberDetails(item);
                                setActiveRowAction(null);
                              }} 
                              className="flex items-center gap-2 w-full px-3 py-2 text-xs text-slate-600 hover:bg-slate-50 font-medium"
                            >
                              <Eye size={14} />
                              <span>দেখুন</span>
                            </button>
                            <button 
                              onClick={() => handleDeleteCollection(item.id)} 
                              className="flex items-center gap-2 w-full px-3 py-2 text-xs text-red-600 hover:bg-red-50/50 font-medium"
                            >
                              <Trash2 size={14} />
                              <span>মুছে ফেলুন</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4 text-center">
            <button 
              onClick={() => setShowAllTransactions(!showAllTransactions)}
              className="text-sm font-semibold text-[#002bb8] transition-all hover:text-[#002294] inline-flex items-center gap-1"
            >
              {showAllTransactions ? "সংক্ষিপ্ত তালিকা দেখুন" : "সকল লেনদেন দেখুন"}
            </button>
          </div>
        </div>

        {/* Right Side: Due Installments Info */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-xs">
          <div>
            <div className="mb-5 flex items-center gap-2 text-red-600">
              <AlertCircle size={18} />
              <h3 className="text-lg font-bold text-slate-900">বকেয়া কিস্তির তথ্য</h3>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 vs-scrollbar">
              {displayedDues.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 rounded-xl border border-red-100 bg-red-50/10 p-4 transition-all hover:bg-red-50/20">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-800 truncate">{member.name}</h4>
                      <span className="rounded-full border border-red-100 bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600 whitespace-nowrap">
                        {member.days}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400">সদস্য আইডি: {member.id}</p>
                    <p className="mt-2 text-sm font-bold text-slate-700">
                      বকেয়া: <span className="text-red-600">৳ {member.dueAmount}</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => alert(`${member.name} কে কল দেওয়া হচ্ছে...`)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white shadow-sm transition-colors hover:bg-red-700"
                  >
                    <Phone size={14} fill="currentColor" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setShowMoreDues(!showMoreDues)}
            className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-600 transition-all hover:bg-slate-50 shadow-xs"
          >
            {showMoreDues ? "বকেয়া তালিকা সংক্ষিপ্ত করুন" : "বকেয়া সদস্যদের তালিকা"}
          </button>
        </div>
      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Field Officer Collection Report */}
        <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-xs lg:col-span-2">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-bold text-slate-900">ফিল্ড অফিসার কালেকশন রিপোর্ট</h3>
            <span className="text-xs text-slate-400">আপডেট: ২ মিনিট আগে</span>
          </div>

          <div className="space-y-5">
            {officerReports.map((officer, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs font-semibold">
                  <span className="text-slate-800">{officer.name}</span>
                  <span className="text-slate-500">
                    ৳ {officer.collected.toLocaleString()} /{" "}
                    <span className="text-slate-400">{officer.target.toLocaleString()}</span>
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`${officer.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${(officer.collected / officer.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="space-y-6 flex flex-col justify-between">
          {/* Card: Social Impact */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0c2483] p-5 text-white shadow-sm flex-1 flex flex-col justify-center min-h-[140px]">
            <div className="pointer-events-none absolute right-[-20px] bottom-[-20px] h-32 w-32 rounded-full bg-white/5"></div>
            <h3 className="mb-2 text-lg font-bold">সামাজিক প্রভাব</h3>
            <p className="mb-4 text-xs leading-relaxed text-indigo-200">
              আপনার সংগৃহীত অর্থ আজ ৫টি নতুন ক্ষুদ্র উদ্যোগে অর্থায়ন করতে সক্ষম হয়েছে।
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-[#0c2483] bg-slate-300 text-[10px] font-bold text-slate-700">
                    👤
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium text-indigo-100">+১২ নতুন উদ্যোক্তা</span>
            </div>
          </div>

          {/* Card: SMS Feed */}
          <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xs flex-1">
            <p className="text-xs font-bold tracking-wider text-slate-400 uppercase">এসএমএস ফিড</p>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                <p>কিস্তি নিশ্চিতকরণ এসএমএস পাঠানো হয়েছে সদস্য <span className="font-bold text-slate-800">#M-৮৮৯২</span> কে।</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                <p>সাফল্যের সাথে ৫০০ টাকা জমার এসএমএস পেয়েছে <span className="font-bold text-slate-800">#M-৭৭১২</span>।</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle size={14} className="mt-0.5 shrink-0 text-red-500" />
                <p>সদস্য <span className="font-bold text-slate-800">#M-৯৯২১</span> এর এসএমএস ডেলিভারি ব্যর্থ।</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= WEEKLY TRENDS BAR CHART ================= */}
      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-xs">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h3 className="text-lg font-bold text-slate-900">সাপ্তাহিক সংগ্রহের প্রবণতা (Collection Trends)</h3>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-indigo-200"></span>
              <span className="text-slate-500">টার্গেট</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-700"></span>
              <span className="text-slate-500">সংগ্রহ</span>
            </div>
          </div>
        </div>

        {/* Chart Container - Scrollable on very small screens */}
        <div className="w-full overflow-x-auto vs-scrollbar pt-4">
          <div className="flex h-48 items-end justify-between border-b border-slate-100 px-2 min-w-[480px]">
            {weeklyTrends.map((bar, idx) => (
              <div key={idx} className="group flex flex-col items-center flex-1 max-w-[60px]">
                <div className="flex h-36 w-full items-end justify-center gap-1.5 sm:gap-2">
                  <div
                    className="w-3.5 sm:w-4 rounded-t-xs bg-indigo-100 transition-all duration-500 group-hover:bg-indigo-200"
                    style={{ height: `${bar.target}%` }}
                  ></div>
                  <div
                    className="w-3.5 sm:w-4 rounded-t-xs bg-emerald-700 transition-all duration-500 group-hover:bg-emerald-800"
                    style={{ height: `${bar.collected}%` }}
                  ></div>
                </div>
                <span className="mt-2 text-xs font-medium text-slate-500">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MODALS CONTROLS ================= */}
      
      {/* 1. NEW COLLECTION MODAL */}
      {showNewCollectionModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-5 sm:p-6 w-full max-w-md shadow-2xl border border-slate-100 transition-all">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-bold text-slate-900">নতুন কালেকশন যোগ করুন</h3>
              <button onClick={() => setShowNewCollectionModal(false)} className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleCreateCollection} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">সদস্যের নাম *</label>
                <input 
                  type="text" required
                  value={newCollection.name}
                  onChange={(e) => setNewCollection({...newCollection, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8] bg-slate-50/50"
                  placeholder="উদা: মো: আরিফ হোসেন"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">আইডি (ঐচ্ছিক)</label>
                  <input 
                    type="text"
                    value={newCollection.id}
                    onChange={(e) => setNewCollection({...newCollection, id: e.target.value})}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8] bg-slate-50/50"
                    placeholder="#M-1234"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">কিস্তি নং</label>
                  <input 
                    type="text"
                    value={newCollection.installment}
                    onChange={(e) => setNewCollection({...newCollection, installment: e.target.value})}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8] bg-slate-50/50"
                    placeholder="১০/২৪"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">টাকার পরিমাণ (৳) *</label>
                <input 
                  type="number" required
                  value={newCollection.amount}
                  onChange={(e) => setNewCollection({...newCollection, amount: e.target.value})}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-[#002bb8] bg-slate-50/50"
                  placeholder="2000"
                />
              </div>
              <button type="submit" className="w-full bg-[#002bb8] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#002294] transition-all shadow-sm mt-2">
                সংরক্ষণ করুন
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. MEMBER DETAILS MODAL */}
      {selectedMemberDetails && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-slate-100 relative">
            <button 
              onClick={() => setSelectedMemberDetails(null)} 
              className="absolute right-4 top-4 p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
            >
              <X size={18} />
            </button>
            
            <div className="text-center mt-2">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-xl font-bold text-[#0c2483] mb-3">
                {selectedMemberDetails.initial}
              </div>
              <h3 className="text-xl font-bold text-slate-900 truncate px-4">{selectedMemberDetails.name}</h3>
              <p className="text-xs text-slate-400 mb-4">সদস্য আইডি: {selectedMemberDetails.id}</p>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">কিস্তি ট্র্যাকিং:</span>
                <span className="font-semibold text-slate-700">{selectedMemberDetails.installment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">জমাকৃত পরিমাণ:</span>
                <span className="font-bold text-emerald-600">৳ {selectedMemberDetails.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">সংগ্রহের সময়:</span>
                <span className="text-slate-600">{selectedMemberDetails.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">এসএমএস স্ট্যাটাস:</span>
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  selectedMemberDetails.statusType === "sent"
                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    : "bg-orange-50 text-orange-600 border border-orange-100"
                }`}>
                  {selectedMemberDetails.status}
                </span>
              </div>
            </div>

            <button 
              onClick={() => setSelectedMemberDetails(null)} 
              className="mt-6 w-full bg-slate-100 text-slate-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-200 transition-all"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CollectionManagement