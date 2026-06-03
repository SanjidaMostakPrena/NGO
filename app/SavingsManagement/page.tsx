
// import React from 'react';
// import { 
//   Plus, 
//   TrendingUp, 
//   Users, 
//   Info, 
//   TrendingDown, 
//   ArrowRight, 
//   FileText, 
//   DollarSign, 
//   MapPin 
// } from 'lucide-react';

// const SavingsManagement = () => {

//   // Mock Data for Recent Withdrawals
//   const recentWithdrawals = [
//     { id: '#২৪৫০', name: 'আবু বকর সিদ্দিক', project: 'দৈনিক সঞ্চয়', date: '১৪ মে, ২০২৪', amount: '৫,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
//     { id: '#২৬১২', name: 'মরিয়ম বেগম', project: 'মাসিক সঞ্চয়', date: '১৩ মে, ২০২৪', amount: '১২,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
//     { id: '#২৯০৩', name: 'কবির হোসেন', project: 'সাপ্তাহিক সঞ্চয়', date: '১২ মে, ২০২৪', amount: '২,৫০০.০০', status: 'অপেক্ষমান', statusType: 'pending' },
//   ];

//   return (
//     <div className="bg-secondary min-h-screen p-4 sm:p-6 font-sans text-slate-800">

//       {/* ================= HEADER SECTION ================= */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
//             সঞ্চয় ব্যবস্থাপনা (Savings Management)
//           </h1>

//           <p className="text-slate-500 text-sm">
//             আপনার এনজিওর সকল আমানত এবং সঞ্চয় প্রকল্প এক নজরে দেখুন
//           </p>
//         </div>

//         <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-secondary px-5 py-3 rounded-xl font-medium transition-all shadow-sm">
//           <Plus size={20} />
//           <span>নতুন সঞ্চয় প্রকল্প</span>
//         </button>

//       </div>

//       {/* ================= STATS CARDS SECTION ================= */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

//         {/* Card 1 */}
//         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
//           <div>
//             <p className="text-slate-400 text-xs font-medium mb-2">
//               মোট সঞ্চয় আমানত
//             </p>

//             <h3 className="text-2xl font-bold text-primary">
//               ৳ ১২,৪৫,৬০০.০০
//             </h3>
//           </div>

//           <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-4">
//             <TrendingUp size={14} />
//             <span>+৪.৫% গত মাস</span>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
//           <div>
//             <p className="text-slate-400 text-xs font-medium mb-2">
//               মোট সক্রিয় সদস্য
//             </p>

//             <h3 className="text-2xl font-bold text-primary">
//               ১,২৫০ জন
//             </h3>
//           </div>

//           <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-4">
//             <Users size={14} />
//             <span>১২ জন নতুন যুক্ত</span>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
//           <div>
//             <p className="text-slate-400 text-xs font-medium mb-2">
//               গড় সুদের হার
//             </p>

//             <h3 className="text-2xl font-bold text-accent">
//               ৭.২৫%
//             </h3>
//           </div>

//           <div className="flex items-center gap-1 text-slate-400 text-xs mt-4">
//             <Info size={14} />
//             <span>বার্ষিক হিসাব</span>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
//           <div>
//             <p className="text-slate-400 text-xs font-medium mb-2">
//               এই মাসে উত্তোলন
//             </p>

//             <h3 className="text-2xl font-bold text-accent">
//               ৳ ৮৫,২০০.০০
//             </h3>
//           </div>

//           <div className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-4">
//             <TrendingDown size={14} />
//             <span>-২.১% গত মাস</span>
//           </div>
//         </div>

//       </div>

//       {/* ================= SAVINGS PROJECTS SECTION ================= */}
//       <div className="mb-8">

//         <h2 className="text-xl font-bold text-slate-900 mb-5">
//           সঞ্চয় প্রকল্পসমূহ
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

//           {/* Project 1 */}
//           <div className="bg-white p-6 rounded-2xl border-l-4 border-l-primary border border-slate-100 shadow-sm flex justify-between items-start">
            
//             <div className="flex flex-col h-full justify-between">
              
//               <div>
//                 <h4 className="font-bold text-slate-900 text-lg">
//                   দৈনিক সঞ্চয় (Daily)
//                 </h4>

//                 <p className="text-slate-400 text-xs mt-0.5">
//                   ক্ষুদ্র ব্যবসায়ীদের জন্য
//                 </p>
//               </div>

//               <div className="mt-6 text-xs text-slate-500 space-y-1">
//                 <p>
//                   সুদের হার: 
//                   <span className="font-semibold text-slate-700"> ৬%</span>
//                 </p>

//                 <p>
//                   আমানত: 
//                   <span className="font-semibold text-slate-700"> ৳ ৩,২০,৫০০</span>
//                 </p>
//               </div>

//             </div>

//             <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
              
//               <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
//                 সক্রিয়
//               </span>

//               <div className="w-8 h-8 bg-emerald-50 rounded flex items-center justify-center text-emerald-600">
//                 <TrendingUp size={18} />
//               </div>

//             </div>

//           </div>

//           {/* Project 2 */}
//           <div className="bg-white p-6 rounded-2xl border-l-4 border-l-emerald-600 border border-slate-100 shadow-sm flex justify-between items-start">
            
//             <div className="flex flex-col h-full justify-between">
              
//               <div>
//                 <h4 className="font-bold text-slate-900 text-lg">
//                   সাপ্তাহিক সঞ্চয় (Weekly)
//                 </h4>

//                 <p className="text-slate-400 text-xs mt-0.5">
//                   কৃষক ও শ্রমিকদের জন্য
//                 </p>
//               </div>

//               <div className="mt-6 text-xs text-slate-500 space-y-1">
//                 <p>
//                   সুদের হার: 
//                   <span className="font-semibold text-slate-700"> ৮%</span>
//                 </p>

//                 <p>
//                   আমানত: 
//                   <span className="font-semibold text-slate-700"> ৳ ৫,৫০,০০০</span>
//                 </p>
//               </div>

//             </div>

//             <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
              
//               <span className="bg-emerald-50 text-emerald-600 text-xs font-medium px-3 py-1 rounded-full">
//                 সক্রিয়
//               </span>

//               <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-400">
//                 <div className="flex items-end gap-[2px] h-4">
//                   <div className="w-[3px] h-2 bg-slate-300 rounded-sm"></div>
//                   <div className="w-[3px] h-3 bg-slate-400 rounded-sm"></div>
//                   <div className="w-[3px] h-4 bg-slate-500 rounded-sm"></div>
//                 </div>
//               </div>

//             </div>

//           </div>

//           {/* Project 3 */}
//           <div className="bg-white p-6 rounded-2xl border-l-4 border-l-amber-600 border border-slate-100 shadow-sm flex justify-between items-start">
            
//             <div className="flex flex-col h-full justify-between">
              
//               <div>
//                 <h4 className="font-bold text-slate-900 text-lg">
//                   মাসিক ডিপিএস (Monthly)
//                 </h4>

//                 <p className="text-slate-400 text-xs mt-0.5">
//                   দীর্ঘমেয়াদী সঞ্চয়
//                 </p>
//               </div>

//               <div className="mt-6 text-xs text-slate-500 space-y-1">
//                 <p>
//                   সুদের হার: 
//                   <span className="font-semibold text-slate-700"> ১০.৫%</span>
//                 </p>

//                 <p>
//                   আমানত: 
//                   <span className="font-semibold text-slate-700"> ৳ ৩,৭৫,১০০</span>
//                 </p>
//               </div>

//             </div>

//             <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
              
//               <span className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
//                 সীমিত
//               </span>

//               <div className="w-8 h-8 flex items-center justify-center">
//                 <span className="text-orange-400 text-xs font-bold">📈</span>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//       {/* ================= LOWER SECTION ================= */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

//         {/* TABLE */}
//         <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-6">

//           <div className="flex justify-between items-center mb-6">
            
//             <h3 className="text-lg font-bold text-slate-900">
//               সাম্প্রতিক সঞ্চয় উত্তোলন
//             </h3>

//             <button className="text-primary hover:text-primary/80 text-xs font-semibold flex items-center gap-1 transition-all">
//               <span>সব দেখুন</span>
//               <ArrowRight size={14} />
//             </button>

//           </div>

//           <div className="overflow-x-auto">

//             <table className="w-full min-w-[700px] text-left border-collapse">

//               <thead>
//                 <tr className="bg-slate-50 text-slate-500 text-xs font-semibold rounded-lg">
//                   <th className="p-4 rounded-l-xl">সদস্য</th>
//                   <th className="p-4">প্রকল্প</th>
//                   <th className="p-4">তারিখ</th>
//                   <th className="p-4 text-right">পরিমাণ</th>
//                   <th className="p-4 text-center rounded-r-xl">অবস্থা</th>
//                 </tr>
//               </thead>

//               <tbody className="text-sm divide-y divide-slate-100">

//                 {recentWithdrawals.map((item, idx) => (

//                   <tr
//                     key={idx}
//                     className="hover:bg-slate-50/50 transition-colors"
//                   >
//                     <td className="p-4 flex items-center gap-3">

//                       <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
//                         {item.name.split(' ').slice(0,2).map(n => n[0]).join('')}
//                       </div>

//                       <div>
//                         <p className="font-semibold text-slate-800">
//                           {item.name}
//                         </p>

//                         <p className="text-xs text-slate-400">
//                           ID: {item.id}
//                         </p>
//                       </div>

//                     </td>

//                     <td className="p-4 text-slate-600 font-medium">
//                       {item.project}
//                     </td>

//                     <td className="p-4 text-slate-500 text-xs">
//                       {item.date}
//                     </td>

//                     <td className="p-4 text-right font-bold text-accent">
//                       -৳ {item.amount}
//                     </td>

//                     <td className="p-4 text-center">

//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-medium ${
//                           item.statusType === 'approved'
//                             ? 'bg-emerald-50 text-emerald-600'
//                             : 'bg-red-50 text-red-500'
//                         }`}
//                       >
//                         {item.status}
//                       </span>

//                     </td>
//                   </tr>

//                 ))}

//               </tbody>

//             </table>

//           </div>

//         </div>

//         {/* RIGHT SIDEBAR */}
//         <div className="space-y-6">

//           {/* Interest Card */}
//           <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

//             <h3 className="text-lg font-bold text-slate-900 mb-4">
//               সুদ ও লভ্যাংশ
//             </h3>

//             <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6">

//               <p className="text-slate-500 text-xs font-medium mb-1">
//                 আগামী বণ্টন তারিখ
//               </p>

//               <h4 className="text-xl font-bold text-primary mb-3">
//                 ০১ জুন, ২০২৪
//               </h4>

//               {/* Progress */}
//               <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
//                 <div className="bg-primary h-full w-[65%] rounded-full"></div>
//               </div>

//               <p className="text-slate-400 text-xs">
//                 অপেক্ষা করুন আরও ১৬ দিন
//               </p>

//             </div>

//             <div className="space-y-3">

//               <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
//                 দ্রুত একশন
//               </p>

//               <button className="w-full flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/5 py-3 rounded-xl font-semibold text-sm transition-all">
//                 <FileText size={16} />
//                 <span>রিপোর্ট জেনারেট করুন</span>
//               </button>

//               <button className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-sm">
//                 <DollarSign size={16} />
//                 <span>লভ্যাংশ বণ্টন করুন</span>
//               </button>

//             </div>

//           </div>

//           {/* MAP CARD */}
//           <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

//             <h3 className="text-sm font-bold text-slate-500 mb-3">
//               সঞ্চয় আমানতকারীর ম্যাপ
//             </h3>

//             <div className="bg-slate-100 rounded-xl h-36 flex items-center justify-center relative overflow-hidden border border-slate-200">

//               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

//               <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full z-10 border border-slate-100 animate-bounce">

//                 <MapPin
//                   size={16}
//                   className="text-sky-500 fill-sky-100"
//                 />

//                 <span className="text-xs font-bold text-slate-700">
//                   ঢাকা সদর শাখা
//                 </span>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default SavingsManagement;
'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Info, 
  TrendingDown, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  MapPin,
  X,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

// TypeScript Type Simulation for State Management
interface SavingsProject {
  id: string;
  title: string;
  subtitle: string;
  interestRate: string;
  depositAmount: string;
  status: string;
  statusType: 'active' | 'limited';
  borderClass: string;
}

const SavingsManagement = () => {
  // Modal & Toast States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // New Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    subtitle: '',
    interestRate: '',
    depositAmount: '',
    status: 'সক্রিয়'
  });

  // State to control showing all rows or just a subset
  const [showAllWithdrawals, setShowAllWithdrawals] = useState(false);

  // Mock Data for Recent Withdrawals (Expanded to include more members)
  const [recentWithdrawals, setRecentWithdrawals] = useState([
    { id: '#২৪৫০', name: 'আবু বকর সিদ্দিক', project: 'দৈনিক সঞ্চয়', date: '১৪ মে, ২০২৬', amount: '৫,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#২৬১২', name: 'মরিয়ম বেগম', project: 'মাসিক সঞ্চয়', date: '১৩ মে, ২০২৬', amount: '১২,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#২৯০৩', name: 'কবির হোসেন', project: 'সাপ্তাহিক সঞ্চয়', date: '১২ মে, ২০২৬', amount: '২,৫০০.০০', status: 'অপেক্ষমান', statusType: 'pending' },
    { id: '#৩০১৪', name: 'ফাতেমা আক্তার', project: 'মাসিক সঞ্চয়', date: '১১ মে, ২০২৬', amount: '৮,৫০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#৩১২৫', name: 'আব্দুর রহমান', project: 'দৈনিক সঞ্চয়', date: '১০ মে, ২০২৬', amount: '৪,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    // Additional 8 members for "Show All" functionality
    { id: '#৩২২৬', name: 'নাজমুল হাসান', project: 'সাপ্তাহিক সঞ্চয়', date: '০৯ মে, ২০২৬', amount: '৩,২০০.০০', status: 'অপেক্ষমান', statusType: 'pending' },
    { id: '#৩৩৪৭', name: 'রোকসানা পারভীন', project: 'মাসিক সঞ্চয়', date: '০৮ মে, ২০২৬', amount: '১৫,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#৩৪৫৮', name: 'কামরুল ইসলাম', project: 'দৈনিক সঞ্চয়', date: '০৭ মে, ২০২৬', amount: '১,৫0০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#৩৫৬৯', name: 'আয়েশা সিদ্দিকা', project: 'মাসিক সঞ্চয়', date: '০৬ মে, ২০২৬', amount: '১০,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#৩৬৮০', name: 'তারেক আজিজ', project: 'সাপ্তাহিক সঞ্চয়', date: '০৫ মে, ২০২৬', amount: '৬,০০০.০০', status: 'অপেক্ষমান', statusType: 'pending' },
    { id: '#৩৭৯১', name: 'মেহেদী হাসান', project: 'দৈনিক সঞ্চয়', date: '০৪ মে, ২০২৬', amount: '২,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#৩৮০২', name: 'সুলতানা রাজিয়া', project: 'মাসিক সঞ্চয়', date: '০৩ মে, ২০২৬', amount: '২০,০০০.০০', status: 'অনুমোদিত', statusType: 'approved' },
    { id: '#৩৯১৩', name: 'আরিফুর রহমান', project: 'সাপ্তাহিক সঞ্চয়', date: '০২ মে, ২০২৬', amount: '৫,৫০০.০০', status: 'অনুমোদিত', statusType: 'approved' }
  ]);

  // Savings Projects State Array
  const [projects, setProjects] = useState<SavingsProject[]>([
    { id: 'P1', title: 'দৈনিক সঞ্চয় (Daily)', subtitle: 'ক্ষুদ্র ব্যবসায়ীদের জন্য', interestRate: '৬%', depositAmount: '৳ ৩,২০,৫০০', status: 'সক্রিয়', statusType: 'active', borderClass: 'border-l-4 border-l-[#0c2483]' },
    { id: 'P2', title: 'সাপ্তাহিক সঞ্চয় (Weekly)', subtitle: 'কৃষক ও শ্রমিকদের জন্য', interestRate: '৮%', depositAmount: '৳ ৫,base,০০০', status: 'সক্রিয়', statusType: 'active', borderClass: 'border-l-4 border-l-emerald-600' },
    { id: 'P3', title: 'মাসিক ডিপিএস (Monthly)', subtitle: 'দীর্ঘমেয়াদী সঞ্চয়', interestRate: '১০.৫%', depositAmount: '৳ ৩,৭৫,১০০', status: 'সীমিত', statusType: 'limited', borderClass: 'border-l-4 border-l-amber-600' },
  ]);

  // Handler to Create New Savings Project Form
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.depositAmount) return;

    const formattedAmount = parseInt(newProject.depositAmount).toLocaleString('bn-BD');
    const projectNode: SavingsProject = {
      id: `P${Date.now()}`,
      title: newProject.title,
      subtitle: newProject.subtitle || 'সাধারণ আমানতকারী',
      interestRate: newProject.interestRate.includes('%') ? newProject.interestRate : `${newProject.interestRate}%`,
      depositAmount: `৳ ${formattedAmount}`,
      status: newProject.status,
      statusType: newProject.status === 'সক্রিয়' ? 'active' : 'limited',
      borderClass: 'border-l-4 border-l-[#0c2483]'
    };

    setProjects([...projects, projectNode]);
    setIsModalOpen(false);
    showNotification('নতুন সঞ্চয় প্রকল্প সফলভাবে ডাটাবেজে তৈরি করা হয়েছে!');
    
    // Reset Form
    NewProject({ title: '', subtitle: '', interestRate: '', depositAmount: '', status: 'সক্রিয়' });
  };

  // Handler to toggle pending withdrawal status row click
  const handleApproveWithdrawal = (id: string, currentStatus: string) => {
    if (currentStatus !== 'অপেক্ষমান') return;
    
    if (confirm('আপনি কি এই সঞ্চয় উত্তোলন রিকোয়েস্টটি অনুমোদন করতে চান?')) {
      setRecentWithdrawals(recentWithdrawals.map(w => 
        w.id === id ? { ...w, status: 'অনুমোদিত', statusType: 'approved' } : w
      ));
      showNotification('উত্তোলন রিকোয়েস্ট সফলভাবে অনুমোদিত হয়েছে।');
    }
  };

  // Handler to simulate profit distribution logic
  const handleDistributeProfit = () => {
    showNotification('সকল আমানতকারী সদস্যদের অ্যাকাউন্টে বাৎসরিক লভ্যাংশ বণ্টন সম্পন্ন হয়েছে।');
  };

  // Helper trigger custom dynamic notification toast
  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Determine which withdrawals to display (5 initially, or all if toggled)
  const displayedWithdrawals = showAllWithdrawals ? recentWithdrawals : recentWithdrawals.slice(0, 5);

  return (
    <div className="bg-[#f8fafc] min-h-screen p-4 sm:p-6 font-sans text-slate-800">

      {/* ================= DYNAMIC TOAST ALERT ================= */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 bg-slate-900 border border-slate-800 text-white px-5 py-3.5 rounded-2xl flex items-center gap-2.5 text-xs font-bold z-50 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0c2483] mb-1">
            সঞ্চয় ব্যবস্থাপনা (Savings Management)
          </h1>
          <p className="text-slate-500 text-sm">
            আপনার এনজিওর সকল আমানত এবং সঞ্চয় প্রকল্প এক নজরে দেখুন
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-3 rounded-xl font-medium transition-all shadow-sm"
        >
          <Plus size={20} />
          <span>নতুন সঞ্চয় প্রকল্প</span>
        </button>
      </div>

      {/* ================= STATS CARDS SECTION ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">মোট সঞ্চয় আমানত</p>
            <h3 className="text-2xl font-bold text-[#0c2483]">৳ ১২,৪৫,৬০০.০০</h3>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-4">
            <TrendingUp size={14} />
            <span>+৪.৫% গত মাস</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">মোট সক্রিয় সদস্য</p>
            <h3 className="text-2xl font-bold text-[#0c2483]">১,২৫০ জন</h3>
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold mt-4">
            <Users size={14} />
            <span>১২ জন নতুন যুক্ত</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">গড় সুদের হার</p>
            <h3 className="text-2xl font-bold text-slate-800">৭.২৫%</h3>
          </div>
          <div className="flex items-center gap-1 text-slate-400 text-xs mt-4">
            <Info size={14} />
            <span>বার্ষিক হিসাব</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-medium mb-2">এই মাসে উত্তোলন</p>
            <h3 className="text-2xl font-bold text-slate-800">৳ ৮৫,২০০.০০</h3>
          </div>
          <div className="flex items-center gap-1 text-red-500 text-xs font-semibold mt-4">
            <TrendingDown size={14} />
            <span>-২.১% গত মাস</span>
          </div>
        </div>
      </div>

      {/* ================= SAVINGS PROJECTS SECTION ================= */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 mb-5">সঞ্চয় প্রকল্পসমূহ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {projects.map((project) => (
            <div key={project.id} className={`bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-start ${project.borderClass}`}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{project.title}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">{project.subtitle}</p>
                </div>
                <div className="mt-6 text-xs text-slate-500 space-y-1">
                  <p>সুদের হার: <span className="font-semibold text-slate-700">{project.interestRate}</span></p>
                  <p>আমানত: <span className="font-semibold text-slate-700">{project.depositAmount}</span></p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between h-full min-h-[90px]">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  project.statusType === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {project.status}
                </span>
                <div className="w-8 h-8 bg-emerald-50 rounded flex items-center justify-center text-emerald-600">
                  <TrendingUp size={18} />
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= LOWER SECTION ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* TABLE COMPONENT */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-4 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900">সাম্প্রতিক সঞ্চয় উত্তোলন</h3>
            <button 
              onClick={() => setShowAllWithdrawals(!showAllWithdrawals)}
              className="text-[#0c2483] hover:text-[#0a1e6e] text-xs font-semibold flex items-center gap-1 transition-all"
            >
              <span>{showAllWithdrawals ? 'কমিয়ে দেখুন' : 'সব দেখুন'}</span>
              <ArrowRight size={14} className={`transform transition-transform ${showAllWithdrawals ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-semibold rounded-lg border-b border-slate-100">
                  <th className="p-4 rounded-l-xl">সদস্য</th>
                  <th className="p-4">প্রকল্প</th>
                  <th className="p-4">তারিখ</th>
                  <th className="p-4 text-right">পরিমাণ</th>
                  <th className="p-4 text-center rounded-r-xl">অবস্থা</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {displayedWithdrawals.map((item, idx) => (
                  <tr 
                    key={idx} 
                    onClick={() => handleApproveWithdrawal(item.id, item.status)}
                    className={`transition-colors ${item.statusType === 'pending' ? 'bg-amber-50/20 hover:bg-amber-50/50 cursor-pointer' : 'hover:bg-slate-50/50'}`}
                    title={item.statusType === 'pending' ? 'অনুমোদন করতে ক্লিক করুন' : ''}
                  >
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
                    <td className="p-4 text-right font-bold text-slate-800">-৳ {item.amount}</td>
                    <td className="p-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.statusType === 'approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600 animate-pulse'
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

        {/* RIGHT SIDEBAR CONTROLS */}
        <div className="space-y-6">
          
          {/* Interest Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">সুদ ও লভ্যাংশ</h3>
            <div className="bg-indigo-50/60 border border-indigo-100/50 rounded-xl p-4 mb-6">
              <p className="text-slate-500 text-xs font-medium mb-1">আগামী বণ্টন তারিখ</p>
              <h4 className="text-xl font-bold text-[#0c2483] mb-3">০১ জুন, ২০২৬</h4>
              
              {/* Progress Tracker */}
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                <div className="bg-[#0c2483] h-full w-[65%] rounded-full"></div>
              </div>
              <p className="text-slate-400 text-xs">অপেক্ষা করুন আরও ১৬ দিন</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">দ্রুত একশন</p>
              <button className="w-full flex items-center justify-center gap-2 border border-[#0c2483] text-[#0c2483] hover:bg-indigo-50/40 py-3 rounded-xl font-semibold text-sm transition-all">
                <FileText size={16} />
                <span>রিপোর্ট জেনারেট করুন</span>
              </button>
              <button 
                onClick={handleDistributeProfit}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-semibold text-sm transition-all shadow-sm"
              >
                <DollarSign size={16} />
                <span>লভ্যাংশ বণ্টন করুন</span>
              </button>
            </div>
          </div>

          {/* MAP PLACEHOLDER CARD */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-sm font-bold text-slate-500 mb-3">সঞ্চয় আমানতকারীর ম্যাপ</h3>
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

      {/* ================= 4. CREATIVE ADD NEW PROJECT MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">নতুন সঞ্চয় স্কিম তৈরি করুন</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50"><X size={18} /></button>
            </div>

            <form onSubmit={handleCreateProject} className="p-5 space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-500 mb-1">প্রকল্পের মূল নাম (Scheme Title) *</label>
                <input 
                  type="text" required placeholder="উদা: বিশেষ মেয়াদী সঞ্চয় স্কিম"
                  value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-slate-500 mb-1">সংक्षिप्त বিবরণ (Target Target Audience)</label>
                <input 
                  type="text" placeholder="উদা: গৃহিণী ও ক্ষুদ্র উদ্যোক্তাদের জন্য"
                  value={newProject.subtitle} onChange={(e) => setNewProject({...newProject, subtitle: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">বাৎসরিক সুদের হার (%) *</label>
                  <input 
                    type="text" required placeholder="উদা: ৯.৫"
                    value={newProject.interestRate} onChange={(e) => setNewProject({...newProject, interestRate: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">প্রাথমিক আমানত তহবিল (৳) *</label>
                  <input 
                    type="number" required placeholder="৳ ১,০০,০০০"
                    value={newProject.depositAmount} onChange={(e) => setNewProject({...newProject, depositAmount: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="w-full border border-slate-200 text-slate-600 py-2.5 rounded-xl text-center">বাতিল</button>
                <button type="submit" className="w-full bg-[#0c2483] text-white py-2.5 rounded-xl font-bold shadow-xs">প্রজেক্ট লঞ্চ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default SavingsManagement;