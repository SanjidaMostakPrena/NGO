
// "use client";

// import React, { useState, FormEvent, useRef, useEffect } from "react";
// import { 
//   Search, 
//   Bell, 
//   Settings, 
//   X, 
//   User, 
//   LogOut, 
//   CheckCircle2, 
//   Globe, 
//   Palette, 
//   CloudLightning, 
//   ShieldCheck,
//   Sliders
// } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function Topbar() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const router = useRouter();

//   // Dropdown/Modal States
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   // Active Live Settings States (Professional Working Feature)
//   const [selectedLanguage, setSelectedLanguage] = useState("bn");
//   const [selectedTheme, setSelectedTheme] = useState("light");
//   const [isAutoBackup, setIsAutoBackup] = useState(true);
//   const [isSecureLog, setIsSecureLog] = useState(true);

//   // Refs for closing dropdowns when clicking outside
//   const notificationRef = useRef<HTMLDivElement>(null);
//   const profileRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
//         setIsNotificationOpen(false);
//       }
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Mapping search terms to your project directory paths
//   const routeMap: { [key: string]: string } = {
//     dashboard: "/",
//     savings: "/SavingsManagement",
//     staff: "/StaffManagement",
//     collection: "/CollectionManagement",
//     branch: "/BranchCenterManagement",
//     notification: "/NotificationsManagement",
//     vault: "/DigitalVault",
//     ড্যাশবোর্ড: "/",
//     সদস্য: "/", 
//     সঞ্চয়: "/SavingsManagement",
//     কর্মী: "/StaffManagement",
//     স্টাফ: "/StaffManagement",
//     আদায়: "/CollectionManagement",
//     ব্রাঞ্চ: "/BranchCenterManagement",
//     কেন্দ্র: "/BranchCenterManagement",
//     নোটিফিকেশন: "/NotificationsManagement",
//     ডকুমেন্ট: "/DigitalVault",
//     ভল্ট: "/DigitalVault"
//   };

//   const handleSearchSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     const query = searchQuery.trim().toLowerCase();

//     if (!query) return;

//     let targetRoute = "";
//     for (const key in routeMap) {
//       if (query.includes(key.toLowerCase())) {
//         targetRoute = routeMap[key];
//         break;
//       }
//     }

//     if (targetRoute) {
//       router.push(targetRoute);
//     } else {
//       router.push(`/?search=${encodeURIComponent(query)}`);
//     }
//   };

//   const handleSaveSettings = () => {
//     // Dynamic Simulation of System update
//     alert(`কনফিগারেশন সফলভাবে আপডেট হয়েছে!\n• ভাষা: ${selectedLanguage === 'bn' ? 'বাংলা' : 'English'}\n• থিম: ${selectedTheme === 'light' ? 'লাইট মোড' : 'ডার্ক মোড'}\n• ক্লাউড ব্যাকআপ: ${isAutoBackup ? 'চালু' : 'বন্ধ'}`);
//     setIsSettingsModalOpen(false);
//   };

//   return (
//     <header className="flex items-center justify-between bg-white px-6 border-b border-gray-200 h-[70px] w-full relative z-40">
      
//       {/* Functional Search Form Wrapper */}
//       <form onSubmit={handleSearchSubmit} className="relative w-full max-w-[500px]">
//         <button 
//           type="submit" 
//           className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-900 transition-colors"
//           aria-label="Submit search"
//         >
//           <Search size={18} />
//         </button>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="অনুসন্ধান করুন..."
//           className="w-full pl-11 pr-4 py-2 text-[15px] border border-gray-200 rounded-lg bg-[#f8fafc] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all duration-200"
//         />
//       </form>

//       {/* Right side system utilities */}
//       <div className="flex items-center gap-5">
        
//         {/* Notification Bell with Dropdown */}
//         <div className="relative" ref={notificationRef}>
//           <button 
//             onClick={() => setIsNotificationOpen(!isNotificationOpen)}
//             className={`text-gray-500 hover:text-blue-900 transition-colors relative p-1.5 rounded-full ${isNotificationOpen ? 'bg-gray-100 text-blue-900' : ''}`} 
//             aria-label="Notifications"
//           >
//             <Bell size={20} />
//             <span className="absolute top-[5px] right-[5px] w-2 h-2 bg-blue-600 rounded-full"></span>
//           </button>

//           {isNotificationOpen && (
//             <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl border border-gray-100 shadow-xl py-2 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
//               <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
//                 <span className="font-bold text-sm">সিস্টেম নোটিফিকেশন</span>
//                 <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">৩টি নতুন</span>
//               </div>
//               <div className="max-h-[280px] overflow-y-auto text-xs font-medium">
//                 <div className="p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
//                   <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
//                   <div>
//                     <p className="text-slate-700">মেম্বার MB-৯৯০১ এর নতুন NID ডকুমেন্ট আপলোড করা হয়েছে।</p>
//                     <p className="text-[10px] text-gray-400 mt-1">৫ মিনিট আগে</p>
//                   </div>
//                 </div>
//                 <div className="p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
//                   <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
//                   <div>
//                     <p className="text-slate-700">আজকের লোন কালেকশন রিপোর্ট জেনারেট সম্পন্ন হয়েছে।</p>
//                     <p className="text-[10px] text-gray-400 mt-1">১ ঘণ্টা আগে</p>
//                   </div>
//                 </div>
//                 <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
//                   <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
//                   <div>
//                     <p className="text-slate-700">কর্মী আরিফ রহমান সিস্টেমে লগইন করেছেন।</p>
//                     <p className="text-[10px] text-gray-400 mt-1">২ ঘণ্টা আগে</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         {/* Settings Button */}
//         <button 
//           onClick={() => setIsSettingsModalOpen(true)}
//           className={`text-gray-500 hover:text-blue-900 transition-colors p-1.5 rounded-full hover:bg-gray-100 ${isSettingsModalOpen ? 'bg-gray-100 text-blue-900' : ''}`}
//           aria-label="Settings"
//         >
//           <Settings size={20} />
//         </button>

//         {/* Profile Avatar with Dropdown */}
//         <div className="relative" ref={profileRef}>
//           <button 
//             onClick={() => setIsProfileOpen(!isProfileOpen)}
//             className="w-[38px] h-[38px] rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center hover:border-blue-900 transition-all focus:outline-none"
//           >
//             <img
//               src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin"
//               alt="Admin Avatar"
//               className="w-full h-full object-cover"
//             />
//           </button>

//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl border border-gray-100 shadow-xl py-2 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
//               <div className="p-4 border-b border-gray-100 flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
//                   <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin" alt="Admin" className="w-full h-full" />
//                 </div>
//                 <div className="overflow-hidden">
//                   <p className="font-bold text-sm text-slate-900 truncate">মুহাম্মদ আলী</p>
//                   <p className="text-xs text-gray-400 truncate">admin@ngo-system.com</p>
//                 </div>
//               </div>
//               <div className="p-1.5 text-xs font-semibold">
//                 <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
//                   <User size={15} className="text-gray-400" />
//                   <span>আমার প্রোফাইল</span>
//                 </button>
//                 <button 
//                   onClick={() => { alert("সিস্টেম থেকে লগআউট করা হচ্ছে..."); setIsProfileOpen(false); }}
//                   className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors text-left"
//                 >
//                   <LogOut size={15} />
//                   <span>লগআউট করুন</span>
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//       </div>

//       {/* ================= HIGHLY PROFESSIONAL SYSTEM SETTINGS MODAL ================= */}
//       {isSettingsModalOpen && (
//         <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
//             {/* Modal Header */}
//             <div className="flex justify-between items-center p-5 bg-slate-50/50 border-b border-gray-100">
//               <div>
//                 <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
//                   <Settings size={18} className="text-blue-900 animate-spin-slow" />
//                   <span>সিস্টেম কনফিগারেশন কন্ট্রোল প্যানেল</span>
//                 </h3>
//                 <p className="text-[11px] text-gray-400 mt-0.5 font-medium">এনজিও কোর ম্যানেজমেন্ট সফটওয়্যার কনফিগারেশন মডিউল</p>
//               </div>
//               <button 
//                 onClick={() => setIsSettingsModalOpen(false)}
//                 className="text-gray-400 hover:text-gray-600 p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
//               >
//                 <X size={18} />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6 space-y-5 text-xs font-semibold text-slate-700">
              
//               {/* Option 1: Language Switcher */}
//               <div className="grid grid-cols-3 items-center gap-4 border-b border-slate-50 pb-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><Globe size={15} /></div>
//                   <div>
//                     <p className="text-slate-800 font-bold">ভাষা / Language</p>
//                     <p className="text-[10px] text-gray-400 font-medium">সিস্টেম লোড ভিউ</p>
//                   </div>
//                 </div>
//                 <div className="col-span-2">
//                   <select 
//                     value={selectedLanguage}
//                     onChange={(e) => setSelectedLanguage(e.target.value)}
//                     className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none font-bold text-slate-700 focus:border-blue-900 focus:bg-white transition-all text-xs cursor-pointer"
//                   >
//                     <option value="bn">বাংলা (Bengali)</option>
//                     <option value="en">English (US)</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Option 2: Theme Selector */}
//               <div className="grid grid-cols-3 items-start gap-4 border-b border-slate-50 pb-4">
//                 <div className="flex items-center gap-2 mt-1">
//                   <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><Palette size={15} /></div>
//                   <div>
//                     <p className="text-slate-800 font-bold">ইন্টারফেস থিম</p>
//                     <p className="text-[10px] text-gray-400 font-medium">ডিসপ্লে ভিউ স্টাইল</p>
//                   </div>
//                 </div>
//                 <div className="col-span-2 grid grid-cols-2 gap-2.5">
//                   <button 
//                     type="button"
//                     onClick={() => setSelectedTheme("light")}
//                     className={`p-2.5 rounded-xl text-left flex items-center justify-between border-2 transition-all ${
//                       selectedTheme === "light" 
//                         ? "border-blue-900 bg-blue-50/20 font-bold" 
//                         : "border-gray-200 bg-white hover:bg-slate-50"
//                     }`}
//                   >
//                     <span className={selectedTheme === "light" ? "text-blue-900" : "text-slate-600"}>লাইট মোড</span>
//                     {selectedTheme === "light" && <CheckCircle2 size={14} className="text-blue-900" />}
//                   </button>
                  
//                   <button 
//                     type="button"
//                     onClick={() => setSelectedTheme("dark")}
//                     className={`p-2.5 rounded-xl text-left flex items-center justify-between border-2 transition-all ${
//                       selectedTheme === "dark" 
//                         ? "border-blue-900 bg-blue-50/20 font-bold" 
//                         : "border-gray-200 bg-white hover:bg-slate-50"
//                     }`}
//                   >
//                     <span className={selectedTheme === "dark" ? "text-blue-900" : "text-slate-600"}>ডার্ক মোড</span>
//                     {selectedTheme === "dark" && <CheckCircle2 size={14} className="text-blue-900" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Option 3: Auto Backup Switch */}
//               <div className="flex items-center justify-between border-b border-slate-50 pb-4">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><CloudLightning size={15} /></div>
//                   <div>
//                     <p className="text-slate-800 font-bold">রিয়েল-টাইম ক্লাউড ব্যাকআপ</p>
//                     <p className="text-[10px] text-gray-400 font-medium">ডাটা লস প্রোটেকশন সিস্টেম ট্র্যাকিং</p>
//                   </div>
//                 </div>
//                 <div 
//                   onClick={() => setIsAutoBackup(!isAutoBackup)}
//                   className={`w-10 h-6 rounded-full relative cursor-pointer p-0.5 transition-colors duration-200 ${isAutoBackup ? 'bg-blue-900' : 'bg-gray-200'}`}
//                 >
//                   <div className={`w-5 h-5 bg-white rounded-full shadow-sm absolute transition-all duration-200 ${isAutoBackup ? 'right-0.5' : 'left-0.5'}`}></div>
//                 </div>
//               </div>

//               {/* Option 4: Security Log Switch */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center"><ShieldCheck size={15} /></div>
//                   <div>
//                     <p className="text-slate-800 font-bold">টু-ফ্যাক্টর স্টাফ অ্যাক্টিভিটি লগ</p>
//                     <p className="text-[10px] text-gray-400 font-medium">নিরাপত্তা অডিট ও সেশন ট্র্যাকিং সিস্টেম</p>
//                   </div>
//                 </div>
//                 <div 
//                   onClick={() => setIsSecureLog(!isSecureLog)}
//                   className={`w-10 h-6 rounded-full relative cursor-pointer p-0.5 transition-colors duration-200 ${isSecureLog ? 'bg-blue-900' : 'bg-gray-200'}`}
//                 >
//                   <div className={`w-5 h-5 bg-white rounded-full shadow-sm absolute transition-all duration-200 ${isSecureLog ? 'right-0.5' : 'left-0.5'}`}></div>
//                 </div>
//               </div>

//               {/* Action Handles */}
//               <div className="flex gap-3 pt-4 border-t border-gray-100">
//                 <button 
//                   type="button"
//                   onClick={() => setIsSettingsModalOpen(false)}
//                   className="w-full border border-gray-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center"
//                 >
//                   বাতিল করুন
//                 </button>
//                 <button 
//                   type="button"
//                   onClick={handleSaveSettings}
//                   className="w-full bg-blue-900 hover:bg-blue-950 text-white py-2.5 rounded-xl font-bold transition-all text-center shadow-sm"
//                 >
//                   কনফিগারেশন সেভ করুন
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       )}

//     </header>
//   );
// }
"use client";

import React, { useState, FormEvent, useRef, useEffect } from "react";
import { 
  Search, 
  Bell, 
  Settings, 
  X, 
  User, 
  LogOut, 
  CheckCircle2, 
  Globe, 
  Palette, 
  CloudLightning, 
  ShieldCheck,
  Sliders
} from "lucide-react";
import { useRouter } from "next/navigation";

// RootLayout থেকে আসা সাইডবার স্টেটের প্রপস টাইপ ডিফাইন করা হলো
interface TopbarProps {
  onSearch: (query: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Topbar({ onSearch, isCollapsed, setIsCollapsed }: TopbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Dropdown/Modal States
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Active Live Settings States (Professional Working Feature)
  const [selectedLanguage, setSelectedLanguage] = useState("bn");
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [isAutoBackup, setIsAutoBackup] = useState(true);
  const [isSecureLog, setIsSecureLog] = useState(true);

  // Refs for closing dropdowns when clicking outside
  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mapping search terms to your project directory paths
  const routeMap: { [key: string]: string } = {
    dashboard: "/",
    savings: "/SavingsManagement",
    staff: "/StaffManagement",
    collection: "/CollectionManagement",
    branch: "/BranchCenterManagement",
    notification: "/NotificationsManagement",
    vault: "/DigitalVault",
    ড্যাশবোর্ড: "/",
    সদস্য: "/", 
    সঞ্চয়: "/SavingsManagement",
    কর্মী: "/StaffManagement",
    স্টাফ: "/StaffManagement",
    আদায়: "/CollectionManagement",
    ব্রাঞ্চ: "/BranchCenterManagement",
    কেন্দ্র: "/BranchCenterManagement",
    নোটিফিকেশন: "/NotificationsManagement",
    ডকুমেন্ট: "/DigitalVault",
    ভল্ট: "/DigitalVault"
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();

    if (!query) return;

    // পাস করা অন-সার্চ ইভেন্ট কল করা হচ্ছে
    onSearch(query);

    let targetRoute = "";
    for (const key in routeMap) {
      if (query.includes(key.toLowerCase())) {
        targetRoute = routeMap[key];
        break;
      }
    }

    if (targetRoute) {
      router.push(targetRoute);
    } else {
      router.push(`/?search=${encodeURIComponent(query)}`);
    }
  };

  const handleSaveSettings = () => {
    alert(`কনফিগারেশন সফলভাবে আপডেট হয়েছে!\n• ভাষা: ${selectedLanguage === 'bn' ? 'বাংলা' : 'English'}\n• থিম: ${selectedTheme === 'light' ? 'লাইট মোড' : 'ডার্ক মোড'}\n• ক্লাউড ব্যাকআপ: ${isAutoBackup ? 'চালু' : 'বন্ধ'}`);
    setIsSettingsModalOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 border-b border-gray-200 h-[70px] w-full relative z-40">
      
      {/* বাম পাশে সার্চ বক্সের ঠিক আগে কলাপ্স বাটনটি যুক্ত করা হলো */}
      <div className="flex items-center gap-4 w-full max-w-[500px]">
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
          </svg>
        </button>

        {/* Functional Search Form Wrapper */}
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <button 
            type="submit" 
            className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-900 transition-colors"
            aria-label="Submit search"
          >
            <Search size={18} />
          </button>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="অনুসন্ধান করুন..."
            className="w-full pl-11 pr-4 py-2 text-[15px] border border-gray-200 rounded-lg bg-[#f8fafc] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all duration-200"
          />
        </form>
      </div>

      {/* Right side system utilities */}
      <div className="flex items-center gap-5">
        
        {/* Notification Bell with Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button 
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`text-gray-500 hover:text-blue-900 transition-colors relative p-1.5 rounded-full ${isNotificationOpen ? 'bg-gray-100 text-blue-900' : ''}`} 
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-[5px] right-[5px] w-2 h-2 bg-blue-600 rounded-full"></span>
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl border border-gray-100 shadow-xl py-2 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                <span className="font-bold text-sm">সিস্টেম নোটিফিকেশন</span>
                <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">৩টি নতুন</span>
              </div>
              <div className="max-h-[280px] overflow-y-auto text-xs font-medium">
                <div className="p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-slate-700">মেম্বার MB-৯৯০১ এর নতুন NID ডকুমেন্ট আপলোড করা হয়েছে।</p>
                    <p className="text-[10px] text-gray-400 mt-1">৫ মিনিট আগে</p>
                  </div>
                </div>
                <div className="p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-slate-700">আজকের লোন কালেকশন রিপোর্ট জেনারেট সম্পন্ন হয়েছে।</p>
                    <p className="text-[10px] text-gray-400 mt-1">১ ঘণ্টা আগে</p>
                  </div>
                </div>
                <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-slate-700">কর্মী আরিফ রহমান সিস্টেমে লগইন করেছেন।</p>
                    <p className="text-[10px] text-gray-400 mt-1">২ ঘণ্টা আগে</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Settings Button */}
        <button 
          onClick={() => setIsSettingsModalOpen(true)}
          className={`text-gray-500 hover:text-blue-900 transition-colors p-1.5 rounded-full hover:bg-gray-100 ${isSettingsModalOpen ? 'bg-gray-100 text-blue-900' : ''}`}
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>

        {/* Profile Avatar with Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-[38px] h-[38px] rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center hover:border-blue-900 transition-all focus:outline-none"
          >
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin"
              alt="Admin Avatar"
              className="w-full h-full object-cover"
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl border border-gray-100 shadow-xl py-2 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                  <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin" alt="Admin" className="w-full h-full" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-sm text-slate-900 truncate">মুহাম্মদ আলী</p>
                  <p className="text-xs text-gray-400 truncate">admin@ngo-system.com</p>
                </div>
              </div>
              <div className="p-1.5 text-xs font-semibold">
                <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
                  <User size={15} className="text-gray-400" />
                  <span>আমার প্রোফাইল</span>
                </button>
                <button 
                  onClick={() => { alert("সিস্টেম থেকে লগআউট করা হচ্ছে..."); setIsProfileOpen(false); }}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors text-left"
                >
                  <LogOut size={15} />
                  <span>লগআউট করুন</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ================= HIGHLY PROFESSIONAL SYSTEM SETTINGS MODAL ================= */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 bg-slate-50/50 border-b border-gray-100">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Settings size={18} className="text-blue-900" />
                  <span>সিস্টেম কনফিগারেশন কন্ট্রোল প্যানেল</span>
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5 font-medium">এনজিও কোর ম্যানেজমেন্ট সফটওয়্যার কনফিগারেশন মডিউল</p>
              </div>
              <button 
                onClick={() => setIsSettingsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5 text-xs font-semibold text-slate-700">
              
              {/* Option 1: Language Switcher */}
              <div className="grid grid-cols-3 items-center gap-4 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><Globe size={15} /></div>
                  <div>
                    <p className="text-slate-800 font-bold">ভাষা / Language</p>
                    <p className="text-[10px] text-gray-400 font-medium">সিস্টেম লোড ভিউ</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none font-bold text-slate-700 focus:border-blue-900 focus:bg-white transition-all text-xs cursor-pointer"
                  >
                    <option value="bn">বাংলা (Bengali)</option>
                    <option value="en">English (US)</option>
                  </select>
                </div>
              </div>

              {/* Option 2: Theme Selector */}
              <div className="grid grid-cols-3 items-start gap-4 border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center"><Palette size={15} /></div>
                  <div>
                    <p className="text-slate-800 font-bold">ইন্টারফেস থিম</p>
                    <p className="text-[10px] text-gray-400 font-medium">ডিসপ্লে ভিউ স্টাইল</p>
                  </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-2.5">
                  <button 
                    type="button"
                    onClick={() => setSelectedTheme("light")}
                    className={`p-2.5 rounded-xl text-left flex items-center justify-between border-2 transition-all ${
                      selectedTheme === "light" 
                        ? "border-blue-900 bg-blue-50/20 font-bold" 
                        : "border-gray-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <span className={selectedTheme === "light" ? "text-blue-900" : "text-slate-600"}>লাইট মোড</span>
                    {selectedTheme === "light" && <CheckCircle2 size={14} className="text-blue-900" />}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setSelectedTheme("dark")}
                    className={`p-2.5 rounded-xl text-left flex items-center justify-between border-2 transition-all ${
                      selectedTheme === "dark" 
                        ? "border-blue-900 bg-blue-50/20 font-bold" 
                        : "border-gray-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <span className={selectedTheme === "dark" ? "text-blue-900" : "text-slate-600"}>ডার্ক মোড</span>
                    {selectedTheme === "dark" && <CheckCircle2 size={14} className="text-blue-900" />}
                  </button>
                </div>
              </div>

              {/* Option 3: Auto Backup Switch */}
              <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><CloudLightning size={15} /></div>
                  <div>
                    <p className="text-slate-800 font-bold">রিয়েল-টাইম ক্লাউড ব্যাকআপ</p>
                    <p className="text-[10px] text-gray-400 font-medium">ডাটা লস প্রোটেকশন সিস্টেম ট্র্যাকিং</p>
                  </div>
                </div>
                <div 
                  onClick={() => setIsAutoBackup(!isAutoBackup)}
                  className={`w-10 h-6 rounded-full relative cursor-pointer p-0.5 transition-colors duration-200 ${isAutoBackup ? 'bg-blue-900' : 'bg-gray-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm absolute transition-all duration-200 ${isAutoBackup ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </div>

              {/* Option 4: Security Log Switch */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center"><ShieldCheck size={15} /></div>
                  <div>
                    <p className="text-slate-800 font-bold">টু-ফ্যাক্টরスタッフ অ্যাক্টিভিটি লগ</p>
                    <p className="text-[10px] text-gray-400 font-medium">নিরাপত্তা অডিট ও সেশন ট্র্যাকিং সিস্টেম</p>
                  </div>
                </div>
                <div 
                  onClick={() => setIsSecureLog(!isSecureLog)}
                  className={`w-10 h-6 rounded-full relative cursor-pointer p-0.5 transition-colors duration-200 ${isSecureLog ? 'bg-blue-900' : 'bg-gray-200'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-sm absolute transition-all duration-200 ${isSecureLog ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </div>

              {/* Action Handles */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <button 
                  type="button"
                  onClick={() => setIsSettingsModalOpen(false)}
                  className="w-full border border-gray-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center"
                >
                  বাতিল করুন
                </button>
                <button 
                  type="button"
                  onClick={handleSaveSettings}
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white py-2.5 rounded-xl font-bold transition-all text-center shadow-sm"
                >
                  কনফিগারেশন সেভ করুন
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}