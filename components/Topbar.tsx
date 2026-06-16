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

// // RootLayout থেকে আসা সাইডবার স্টেটের প্রপস টাইপ ডিফাইন করা হলো
// interface TopbarProps {
//   onSearch: (query: string) => void;
//   isCollapsed: boolean;
//   setIsCollapsed: (collapsed: boolean) => void;
// }

// export default function Topbar({ onSearch, isCollapsed, setIsCollapsed }: TopbarProps) {
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

//     // পাস করা অন-সার্চ ইভেন্ট কল করা হচ্ছে
//     onSearch(query);

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
//     alert(`কনফিগারেশন সফলভাবে আপডেট হয়েছে!\n• ভাষা: ${selectedLanguage === 'bn' ? 'বাংলা' : 'English'}\n• থিম: ${selectedTheme === 'light' ? 'লাইট মোড' : 'ডার্ক মোড'}\n• ক্লাউড ব্যাকআপ: ${isAutoBackup ? 'চালু' : 'বন্ধ'}`);
//     setIsSettingsModalOpen(false);
//   };

//   return (
//     <header className="flex items-center justify-between bg-white px-6 border-b border-gray-200 h-[70px] w-full relative z-40">

//       {/* বাম পাশে সার্চ বক্সের ঠিক আগে কলাপ্স বাটনটি যুক্ত করা হলো */}
//       <div className="flex items-center gap-4 w-full max-w-[500px]">
//         <button
//           type="button"
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="hidden lg:flex p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
//           title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="M9 3v18" />
//           </svg>
//         </button>

//         {/* Functional Search Form Wrapper */}
//         <form onSubmit={handleSearchSubmit} className="relative w-full">
//           <button
//             type="submit"
//             className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-900 transition-colors"
//             aria-label="Submit search"
//           >
//             <Search size={18} />
//           </button>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="অনুসন্ধান করুন..."
//             className="w-full pl-11 pr-4 py-2 text-[15px] border border-gray-200 rounded-lg bg-[#f8fafc] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:bg-white transition-all duration-200"
//           />
//         </form>
//       </div>

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
//                     <p className="text-slate-700">মেম্বার MB-৯৯০১ এর নতুন NID ডকুমেন্ট আপলোড করা হয়েছে।</p>
//                     <p className="text-[10px] text-gray-400 mt-1">৫ মিনিট আগে</p>
//                   </div>
//                 </div>
//                 <div className="p-3 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-2.5">
//                   <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
//                   <div>
//                     <p className="text-slate-700">আজকের লোন কালেকশন রিপোর্ট জেনারেট সম্পন্ন হয়েছে।</p>
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
//                   <Settings size={18} className="text-blue-900" />
//                   <span>সিস্টেম কনফিগারেশন কন্ট্রোল প্যানেল</span>
//                 </h3>
//                 <p className="text-[11px] text-gray-400 mt-0.5 font-medium">এনজিও কোর ম্যানেজমেন্ট সফটওয়্যার কনফিগারেশন মডিউল</p>
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
//                     <p className="text-slate-800 font-bold">টু-ফ্যাক্টর অ্যাক্টিভিটি লগ</p>
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
"use client"

import React, { useState, FormEvent, useRef, useEffect } from "react"
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
  Sliders,
  Users,
  Lock,
  Building2,
  KeyRound,
  History,
  Clock,
  UploadCloud,
} from "lucide-react"
import { useRouter } from "next/navigation"

// RootLayout থেকে আসা সাইডবার স্টেটের প্রপস টাইপ ডিফাইন করা হলো
interface TopbarProps {
  onSearch: (query: string) => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

export default function Topbar({
  onSearch,
  isCollapsed,
  setIsCollapsed,
}: TopbarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Dropdown/Modal States
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  // --- SETTINGS TABS STATE ---
  const [activeSettingsTab, setActiveSettingsTab] = useState<
    "users" | "security" | "system"
  >("users")

  // --- NEW DYNAMIC STATES FOR SETTINGS INTERFACE ---
  // Users & Roles States
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "মুhammad আলী",
      email: "admin@ngo-system.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "আরিফ রহমান",
      email: "arif@ngo-system.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "তানিয়া সুলতানা",
      email: "tania@ngo-system.com",
      role: "Staff",
      status: "Inactive",
    },
  ])
  const [selectedRolePermission, setSelectedRolePermission] = useState("Admin")

  // Security States
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    new: "",
    confirm: "",
  })
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)
  const [sessionTimeout, setSessionTimeout] = useState("30")

  // System Settings States
  const [companyName, setCompanyName] = useState("এনজিও")
  const [logoName, setLogoName] = useState<string | null>(null)
  const [faviconName, setFaviconName] = useState<string | null>(null)

  // Active Live Settings States (Retained from original code)
  const [selectedLanguage, setSelectedLanguage] = useState("bn")
  const [selectedTheme, setSelectedTheme] = useState("light")
  const [isAutoBackup, setIsAutoBackup] = useState(true)
  const [isSecureLog, setIsSecureLog] = useState(true)

  // Refs for closing dropdowns when clicking outside
  const notificationRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false)
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Mapping search terms to your project directory paths (Exactly Unchanged)
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
    ভল্ট: "/DigitalVault",
  }

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    const query = searchQuery.trim().toLowerCase()

    if (!query) return

    // পাস করা অন-সার্চ ইভেন্ট কল করা হচ্ছে
    onSearch(query)

    let targetRoute = ""
    for (const key in routeMap) {
      if (query.includes(key.toLowerCase())) {
        targetRoute = routeMap[key]
        break
      }
    }

    if (targetRoute) {
      router.push(targetRoute)
    } else {
      router.push(`/?search=${encodeURIComponent(query)}`)
    }
  }

  // Dynamic Save Handler for all configuration sections
  const handleSaveSettings = () => {
    alert(
      `কনফিগারেশন সফলভাবে ডাটাবেজে আপডেট হয়েছে!\n` +
        `• প্রতিষ্ঠানের নাম: ${companyName}\n` +
        `• টু-ফ্যাক্টর অথেন্টিকেশন (2FA): ${is2FAEnabled ? "চালু" : "বন্ধ"}\n` +
        `• সেশন টাইমআউট: ${sessionTimeout} মিনিট\n` +
        `• সিলেক্টেড রোল পারমিশন: ${selectedRolePermission}`
    )
    setIsSettingsModalOpen(false)
  }

  // Dummy action helper for dynamic user deletion
  const handleDeleteUser = (id: number, name: string) => {
    if (confirm(`${name}-কে কি ইউজার লিস্ট থেকে রিমুভ করতে চান?`)) {
      setUsers(users.filter((u) => u.id !== id))
    }
  }

  return (
    <header className="relative z-40 flex h-[70px] w-full items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* বাম পাশে সার্চ বক্সের ঠিক আগে কলাপ্স বাটনটি যুক্ত করা হলো */}
      <div className="flex w-full max-w-[500px] items-center gap-4">
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden shrink-0 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 lg:flex"
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
            className="absolute top-1/2 left-[14px] -translate-y-1/2 text-gray-400 transition-colors hover:text-blue-900"
            aria-label="Submit search"
          >
            <Search size={18} />
          </button>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="অনুসন্ধান করুন..."
            className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] py-2 pr-4 pl-11 text-[15px] text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-blue-900 focus:bg-white focus:outline-none"
          />
        </form>
      </div>

      {/* Right side system utilities */}
      <div className="flex items-center gap-5">
        {/* Notification Bell with Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className={`relative rounded-full p-1.5 text-gray-500 transition-colors hover:text-blue-900 ${isNotificationOpen ? "bg-gray-100 text-blue-900" : ""}`}
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute top-[5px] right-[5px] h-2 w-2 rounded-full bg-blue-600"></span>
          </button>

          {isNotificationOpen && (
            <div className="animate-in fade-in slide-in-from-top-2 absolute right-0 mt-2 w-80 rounded-xl border border-gray-100 bg-white py-2 text-slate-800 shadow-xl duration-200">
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2">
                <span className="text-sm font-bold">সিস্টেম নোটিফিকেশন</span>
                <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-600">
                  ৩টি নতুন
                </span>
              </div>
              <div className="max-h-[280px] overflow-y-auto text-xs font-medium">
                <div className="flex cursor-pointer gap-2.5 border-b border-slate-50 p-3 transition-colors hover:bg-slate-50">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"></div>
                  <div>
                    <p className="text-slate-700">
                      মেম্বার MB-৯৯০১ এর নতুন NID ডকুমেন্ট আপলোড করা হয়েছে।
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      ৫ মিনিট আগে
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer gap-2.5 border-b border-slate-50 p-3 transition-colors hover:bg-slate-50">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"></div>
                  <div>
                    <p className="text-slate-700">
                      আজকের লোন কালেকশন রিপোর্ট জেনারেট সম্পন্ন হয়েছে।
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      ১ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer gap-2.5 p-3 transition-colors hover:bg-slate-50">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600"></div>
                  <div>
                    <p className="text-slate-700">
                      কর্মী আরিফ রহমান সিস্টেমে লগইন করেছেন।
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      ২ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings Button */}
        <button
          onClick={() => setIsSettingsModalOpen(true)}
          className={`rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-blue-900 ${isSettingsModalOpen ? "bg-gray-100 text-blue-900" : ""}`}
          aria-label="Settings"
        >
          <Settings size={20} />
        </button>

        {/* Profile Avatar with Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex h-[38px] w-[38px] items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 transition-all hover:border-blue-900 focus:outline-none"
          >
            <img
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin"
              alt="Admin Avatar"
              className="h-full w-full object-cover"
            />
          </button>

          {isProfileOpen && (
            <div className="animate-in fade-in slide-in-from-top-2 absolute right-0 mt-2 w-64 rounded-xl border border-gray-100 bg-white py-2 text-slate-800 shadow-xl duration-200">
              <div className="flex items-center gap-3 border-b border-gray-100 p-4">
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  <img
                    src="https://api.dicebear.com/7.x/adventurer/svg?seed=Admin"
                    alt="Admin"
                    className="h-full w-full"
                  />
                </div>
                <div className="overflow-hidden">
                  <p className="truncate text-sm font-bold text-slate-900">
                    মুহাম্মদ আলী
                  </p>
                  <p className="truncate text-xs text-gray-400">
                    admin@ngo-system.com
                  </p>
                </div>
              </div>
              <div className="p-1.5 text-xs font-semibold">
                <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-slate-600 transition-colors hover:bg-slate-50">
                  <User size={15} className="text-gray-400" />
                  <span>আমার প্রোফাইল</span>
                </button>
                <button
                  onClick={() => {
                    alert("সিস্টেম থেকে লগআউট করা হচ্ছে...")
                    setIsProfileOpen(false)
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-red-500 transition-colors hover:bg-red-50"
                >
                  <LogOut size={15} />
                  <span>লগআউট করুন</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ================= HIGHLY PROFESSIONAL DYNAMIC SETTINGS MODAL ================= */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="animate-in fade-in zoom-in-95 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl duration-200">
            {/* Modal Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-slate-50/50 p-5">
              <div>
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                  <Settings size={18} className="text-blue-900" />
                  <span>সিস্টেম কনফিগারেশন কন্ট্রোল প্যানেল</span>
                </h3>
                <p className="mt-0.5 text-[11px] font-medium text-gray-400">
                  এনজিও কোর ইউজার রোলস, সিকিউরিটি ও ব্র্যান্ডিং সেটিংস
                </p>
              </div>
              <button
                onClick={() => setIsSettingsModalOpen(false)}
                className="rounded-xl p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            {/* Sub-Navigation Tabs for Setting Categories */}
            <div className="flex shrink-0 gap-1 border-b border-gray-100 bg-slate-100 p-1.5">
              <button
                type="button"
                onClick={() => setActiveSettingsTab("users")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${activeSettingsTab === "users" ? "bg-white text-blue-950 shadow-xs" : "text-slate-500 hover:text-slate-800"}`}
              >
                <Users size={14} />
                <span>ইউজার ও রোলস</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSettingsTab("security")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${activeSettingsTab === "security" ? "bg-white text-blue-950 shadow-xs" : "text-slate-500 hover:text-slate-800"}`}
              >
                <Lock size={14} />
                <span>সিকিউরিটি ও 2FA</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSettingsTab("system")}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition-all ${activeSettingsTab === "system" ? "bg-white text-blue-950 shadow-xs" : "text-slate-500 hover:text-slate-800"}`}
              >
                <Building2 size={14} />
                <span>সিস্টেম ও ব্র্যান্ডিং</span>
              </button>
            </div>

            {/* Modal Body / Scrollable Content Panel */}
            <div className="custom-scrollbar flex-1 space-y-5 overflow-y-auto p-6 text-xs font-semibold text-slate-700">
              {/* ================= TAB 1: USERS & ROLES ================= */}
              {activeSettingsTab === "users" && (
                <div className="animate-in fade-in space-y-5 duration-200">
                  {/* User List management */}
                  <div>
                    <div className="mb-2.5 flex items-center justify-between">
                      <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
                        একটিভ ইউজার ডাটা লিস্ট
                      </h4>
                      <button
                        type="button"
                        onClick={() => {
                          const name = prompt("ইউজারের নাম লিখুন:")
                          const email = prompt("ইউজারের ইমেইল লিখুন:")
                          if (name && email)
                            setUsers([
                              ...users,
                              {
                                id: Date.now(),
                                name,
                                email,
                                role: "Staff",
                                status: "Active",
                              },
                            ])
                        }}
                        className="rounded-lg bg-blue-900 px-2.5 py-1 text-[11px] text-white hover:bg-blue-950"
                      >
                        + নতুন ইউজার যোগ করুন
                      </button>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
                      <table className="w-full border-collapse text-left">
                        <thead>
                          <tr className="border-b border-slate-200 bg-slate-100 text-[10px] text-slate-500 uppercase">
                            <th className="p-2.5">নাম ও ইমেইল</th>
                            <th className="p-2.5">রোল (Role)</th>
                            <th className="p-2.5 text-center">অ্যাকশন</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[11px]">
                          {users.map((u) => (
                            <tr
                              key={u.id}
                              className="transition-colors hover:bg-white"
                            >
                              <td className="p-2.5">
                                <p className="font-bold text-slate-800">
                                  {u.name}
                                </p>
                                <p className="text-[10px] font-medium text-slate-400">
                                  {u.email}
                                </p>
                              </td>
                              <td className="p-2.5">
                                <span
                                  className={`rounded px-2 py-0.5 text-[10px] font-bold ${u.role === "Admin" ? "bg-purple-50 text-purple-700" : u.role === "Manager" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`}
                                >
                                  {u.role}
                                </span>
                              </td>
                              <td className="p-2.5 text-center">
                                <button
                                  type="button"
                                  onClick={() => handleDeleteUser(u.id, u.name)}
                                  className="text-rose-500 hover:text-rose-700 hover:underline"
                                >
                                  রিমুভ
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Role Permissions Setting Grid */}
                  <div className="border-t border-slate-100 pt-4">
                    <label className="mb-2 block font-bold text-slate-800">
                      রোল পারমিশন ম্যাট্রিক্স কনফিগারেশন
                    </label>
                    <div className="mb-3 flex gap-2">
                      {["Admin", "Manager", "Staff"].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setSelectedRolePermission(role)}
                          className={`rounded-lg border px-3 py-1.5 text-[11px] font-bold transition-all ${selectedRolePermission === role ? "border-blue-900 bg-blue-50/40 text-blue-900" : "border-slate-200 bg-white text-slate-600"}`}
                        >
                          {role} পারমিশন স্কোপ
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2 rounded-xl border border-slate-200/60 bg-slate-50 p-3 text-[11px] font-medium text-slate-600">
                      <p className="mb-1 font-bold text-slate-800">
                        সিলেক্টেড রোল অ্যাক্সেসসমূহ:
                      </p>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          disabled={selectedRolePermission === "Admin"}
                          className="rounded text-blue-900"
                        />{" "}
                        ড্যাশবোর্ড এবং সমস্ত ফাইনান্সিয়াল লেজার ভিউ স্কোপ
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked={selectedRolePermission !== "Staff"}
                          disabled={selectedRolePermission === "Staff"}
                          className="rounded text-blue-900"
                        />{" "}
                        নতুন সঞ্চয় হিসাব বা লোন এপ্রুভাল পারমিশন
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked={selectedRolePermission === "Admin"}
                          disabled={selectedRolePermission !== "Admin"}
                          className="rounded text-blue-900"
                        />{" "}
                        ডাটাবেজ ব্যাকআপ ডাউনলোড এবং রিস্টোর প্রিভিলেজ
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 2: SECURITY & 2FA ================= */}
              {activeSettingsTab === "security" && (
                <div className="animate-in fade-in space-y-4 duration-200">
                  {/* Change Password Input Fields */}
                  <div className="space-y-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                    <h4 className="mb-1 flex items-center gap-1.5 font-bold text-slate-900">
                      <KeyRound size={14} className="text-blue-900" />{" "}
                      পাসওয়ার্ড পরিবর্তন করুন
                    </h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div>
                        <label className="mb-1 block text-[10px] text-slate-400 uppercase">
                          বর্তমান পাসওয়ার্ড
                        </label>
                        <input
                          type="password"
                          value={passwordForm.current}
                          onChange={(e) =>
                            setPasswordForm({
                              ...passwordForm,
                              current: e.target.value,
                            })
                          }
                          placeholder="••••••••"
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:border-blue-900"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-[10px] text-slate-400 uppercase">
                          নতুন পাসওয়ার্ড
                        </label>
                        <input
                          type="password"
                          value={passwordForm.new}
                          onChange={(e) =>
                            setPasswordForm({
                              ...passwordForm,
                              new: e.target.value,
                            })
                          }
                          placeholder="••••••••"
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:border-blue-900"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-[10px] text-slate-400 uppercase">
                          কনফার্ম পাসওয়ার্ড
                        </label>
                        <input
                          type="password"
                          value={passwordForm.confirm}
                          onChange={(e) =>
                            setPasswordForm({
                              ...passwordForm,
                              confirm: e.target.value,
                            })
                          }
                          placeholder="••••••••"
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 outline-none focus:border-blue-900"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          if (!passwordForm.current || !passwordForm.new)
                            return alert("দয়া করে ক্ষেত্রগুলো পূরণ করুন।")
                          alert("সিকিউর পাসওয়ার্ড সফলভাবে আপডেট হয়েছে!")
                          setPasswordForm({ current: "", new: "", confirm: "" })
                        }}
                        className="rounded-lg bg-slate-800 px-3 py-1.5 text-[11px] text-white hover:bg-slate-900"
                      >
                        পাসওয়ার্ড আপডেট করুন
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication (2FA) */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <ShieldCheck size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">
                          টু-ফ্যাক্টর অথেন্টিকেশন (2FA)
                        </p>
                        <p className="text-[10px] font-medium text-gray-400">
                          লগইনের সময় ওটিপি (OTP) ভেরিফিকেশন আবশ্যিক করুন
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                      className={`relative h-6 w-10 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ${is2FAEnabled ? "bg-blue-900" : "bg-gray-200"}`}
                    >
                      <div
                        className={`absolute h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-200 ${is2FAEnabled ? "right-0.5" : "left-0.5"}`}
                      ></div>
                    </div>
                  </div>

                  {/* Session Timeout */}
                  <div className="grid grid-cols-3 items-center gap-4 rounded-xl border border-slate-100 bg-white p-3">
                    <div className="col-span-2 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">
                          অটোমেটিক সেশন টাইমআউট
                        </p>
                        <p className="text-[10px] font-medium text-gray-400">
                          নিষ্ক্রিয় থাকলে কতক্ষণ পর অটো লগআউট হবে
                        </p>
                      </div>
                    </div>
                    <div>
                      <select
                        value={sessionTimeout}
                        onChange={(e) => setSessionTimeout(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-slate-50 p-2 text-xs font-bold outline-none"
                      >
                        <option value="15">১৫ মিনিট</option>
                        <option value="30">৩০ মিনিট</option>
                        <option value="60">১ ঘণ্টা</option>
                      </select>
                    </div>
                  </div>

                  {/* Login History Preview */}
                  <div className="pt-2">
                    <h5 className="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-900 uppercase">
                      <History size={13} /> সাম্প্রতিক লগইন হিস্ট্রি ট্র্যাকিং
                    </h5>
                    <div className="space-y-1.5 rounded-xl border border-slate-100 bg-slate-50 p-3 font-mono text-[10px] font-medium text-slate-500">
                      <p className="flex justify-between border-b border-slate-200/60 pb-1">
                        <span>• IP: 103.45.22.10 (বগুড়া, বাংলাদেশ)</span>{" "}
                        <span className="font-bold text-emerald-600">
                          সফল (Active) - আজ ১২:৪৫
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span>• IP: 182.16.45.102 (ঢাকা, বাংলাদেশ)</span>{" "}
                        <span className="text-slate-400">
                          ০৩ জুন, ২০২৬ রাত ০৯:১৫
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 3: SYSTEM SETTINGS & BRANDING ================= */}
              {activeSettingsTab === "system" && (
                <div className="animate-in fade-in space-y-4 duration-200">
                  {/* Company Profile Input */}
                  <div>
                    <label className="mb-1.5 block font-bold text-slate-800">
                      প্রতিষ্ঠানের নাম (Company / NGO Name)
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="এনজিও এর পূর্ণ নাম প্রদান করুন"
                      className="w-full rounded-xl border border-gray-200 bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-700 transition-all outline-none focus:border-blue-900 focus:bg-white"
                    />
                  </div>

                  {/* Logo and Favicon File Uploaders */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Logo Uploader */}
                    <div className="relative rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-4 text-center transition-all hover:border-blue-900">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files?.[0])
                            setLogoName(e.target.files[0].name)
                        }}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      />
                      <UploadCloud
                        size={24}
                        className="mx-auto mb-1.5 text-gray-400"
                      />
                      <p className="text-[11px] font-bold text-slate-800">
                        অফিসিয়াল লোগো আপলোড
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium text-gray-400">
                        PNG, JPG (Max 2MB)
                      </p>
                      {logoName && (
                        <p className="mt-2 truncate text-[10px] font-bold text-emerald-600">
                          ✓ {logoName}
                        </p>
                      )}
                    </div>

                    {/* Favicon Uploader */}
                    <div className="relative rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-4 text-center transition-all hover:border-blue-900">
                      <input
                        type="file"
                        accept="image/x-icon,image/png"
                        onChange={(e) => {
                          if (e.target.files?.[0])
                            setFaviconName(e.target.files[0].name)
                        }}
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                      />
                      <UploadCloud
                        size={24}
                        className="mx-auto mb-1.5 text-gray-400"
                      />
                      <p className="text-[11px] font-bold text-slate-800">
                        ফেভিকন (Favicon) আপলোড
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium text-gray-400">
                        ICO, PNG (16x16, 32x32)
                      </p>
                      {faviconName && (
                        <p className="mt-2 truncate text-[10px] font-bold text-emerald-600">
                          ✓ {faviconName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Standard Systems UI (Language & Theme Integration) */}
                  <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-3">
                    <div>
                      <label className="mb-1 block text-[10px] text-slate-400 uppercase">
                        ভাষা / Language
                      </label>
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-slate-50 p-2 text-xs font-bold"
                      >
                        <option value="bn">বাংলা (Bengali)</option>
                        <option value="en">English (US)</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-[10px] text-slate-400 uppercase">
                        ইন্টারফেস থিম
                      </label>
                      <select
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-slate-50 p-2 text-xs font-bold"
                      >
                        <option value="light">লাইট মোড (Light)</option>
                        <option value="dark">ডার্ক মোড (Dark)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* End of content fields */}
            </div>

            {/* Action Handles */}
            <div className="flex shrink-0 gap-3 border-t border-gray-100 bg-slate-50/50 p-5">
              <button
                type="button"
                onClick={() => setIsSettingsModalOpen(false)}
                className="w-full rounded-xl border border-gray-200 bg-white py-2.5 text-center font-bold text-slate-600 transition-all hover:bg-slate-50"
              >
                বাতিল করুন
              </button>
              <button
                type="button"
                onClick={handleSaveSettings}
                className="w-full rounded-xl bg-blue-900 py-2.5 text-center font-bold text-white shadow-sm transition-all hover:bg-blue-950"
              >
                কনফিগারেশন সেভ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
