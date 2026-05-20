import React from 'react';
import { 
  UploadCloud, 
  FileText, 
  Fingerprint, 
  HardDrive, 
  MoreVertical, 
  Grid, 
  List, 
  BellRing,
  ChevronDown,
  Eye,
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

const DigitalVault = () => {
  
  // Top Analytics Summary Stats
  const storageStats = [
    { label: 'মোট ডকুমেন্টস', value: '৪,৫২০', icon: <FileText size={18} className="text-[#0c2483]" />, iconBg: 'bg-indigo-50' },
    { label: 'এনআইডি ভেরিফাইড', value: '৯৮%', icon: <Fingerprint size={18} className="text-emerald-600" />, iconBg: 'bg-emerald-50' },
    { label: 'ব্যবহৃত স্টোরেজ', value: '২৫৬ GB', icon: <HardDrive size={18} className="text-orange-600" />, iconBg: 'bg-orange-50' },
  ];

  // Left Side: System Notifications Stream
  const systemNotifications = [
    { id: 1, type: 'urgent', tag: 'জরুরি সতর্কতা', time: '১০ মিনিট আগে', desc: 'ব্রাঞ্চ-০৪ এর মাসিক রিপোর্ট জমা দেয়ার সময়সীমা শেষ হয়েছে।', actionText: 'পদক্ষেপ নিন', bg: 'bg-red-50/50 border-l-4 border-l-red-600', tagColor: 'text-red-600' },
    { id: 2, type: 'approval', tag: 'ঋণ অনুমোদন', time: '২ ঘণ্টা আগে', desc: 'মেম্বার আইডি #8829 এর ঋণের আবেদন সফলভাবে অনুমোদিত হয়েছে।', bg: 'bg-white border border-slate-100', tagColor: 'text-indigo-600' },
    { id: 3, type: 'update', tag: 'সিস্টেম আপডেট', time: '৪ ঘণ্টা আগে', desc: 'আজ রাত ১২টায় সার্ভার রক্ষণাবেক্ষণের জন্য সিস্টেম ২ ঘণ্টা বন্ধ থাকবে।', bg: 'bg-white border border-slate-100', tagColor: 'text-emerald-600' },
    { id: 4, type: 'payment', tag: 'পেমেন্ট রিসিভড', time: '১ দিন আগে', desc: 'কালেকশন এজেন্ট #০১২৩ থেকে ৫০,০০০ টাকা পেমেন্ট নিশ্চিত হয়েছে।', bg: 'bg-white border border-slate-100', tagColor: 'text-teal-600' },
  ];

  // Digital Vault Folders/Categories
  const vaultCategories = [
    { title: 'মেম্বার এনআইডি (NID)', count: '২,১০০ ফাইল', size: '৪.৫ GB', progress: 'w-[45%]', progressColor: 'bg-[#0c2483]' },
    { title: 'লোন এগ্রিমেন্ট', count: '১,৪৫০ ফাইল', size: '৩.২ GB', progress: 'w-[68%]', progressColor: 'bg-emerald-600' },
    { title: 'ফিল্ড রিপোর্টস', count: '৯৭০ ফাইল', size: '১.৮ GB', progress: 'w-[25%]', progressColor: 'bg-red-500' },
  ];

  // Recent Uploads Table Dataset
  const recentUploads = [
    { fileName: 'NID_Copy_8829.pdf', fileSize: '৪২০ KB', fileType: 'pdf', memberName: 'আব্দুর রহমান', date: '১০ মে, ২০২৪', status: 'যাচাইকৃত', statusStyle: 'bg-emerald-50 text-emerald-600' },
    { fileName: 'Loan_Agreement_V2.docx', fileSize: '১.২ MB', fileType: 'docx', memberName: 'মোসাম্মৎ করিমা বেগম', date: '০৯ মে, ২০২৪', status: 'পেন্ডিং', statusStyle: 'bg-orange-50 text-orange-600' },
    { fileName: 'Trade_License_Scan.pdf', fileSize: '২.৫ MB', fileType: 'pdf', memberName: 'মো: কামাল হোসেন', date: '০৮ মে, ২০২৪', status: 'যাচাইকৃত', statusStyle: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">নোটিফিকেশন ও ডিজিটাল ভল্ট</h1>
          <p className="text-slate-500 text-sm">সিস্টেম আপডেট এবং মেম্বারদের গুরুত্বপূর্ণ ডকুমেন্টস ম্যানেজ করুন।</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm shrink-0">
          <UploadCloud size={16} />
          <span>নতুন ডকুমেন্ট আপলোড</span>
        </button>
      </div>

      {/* ================= MAIN TWO-COLUMN GRID LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ---------------- LEFT SIDEBAR: NOTIFICATIONS STREAM ---------------- */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between h-[calc(100vh-160px)] min-h-[620px]">
          <div>
            <div className="flex items-center justify-between mb-5 border-b border-slate-50 pb-3">
              <div className="flex items-center gap-2">
                <BellRing className="text-[#0c2483]" size={18} />
                <h3 className="text-base font-bold text-slate-900">সিস্টেম নোটিফিকেশন</h3>
              </div>
              <span className="bg-indigo-50 text-[#0c2483] font-bold text-[11px] px-2.5 py-1 rounded-full">
                ১২টি নতুন
              </span>
            </div>

            {/* Notification List Scrollable Container */}
            <div className="space-y-3 overflow-y-auto max-h-[500px] pr-1 scrollbar-none">
              {systemNotifications.map((notif) => (
                <div key={notif.id} className={`rounded-xl p-4 transition-all hover:shadow-xs ${notif.bg}`}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className={`text-xs font-bold ${notif.tagColor}`}>{notif.tag}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{notif.time}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2 font-medium">
                    {notif.desc}
                  </p>
                  {notif.actionText && (
                    <button className="text-red-600 hover:text-red-700 text-xs font-bold underline transition-colors block">
                      {notif.actionText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-4 border border-indigo-100 text-[#0c2483] hover:bg-indigo-50/50 py-2.5 rounded-xl font-bold text-xs transition-all text-center">
            সকল নোটিফিকেশন দেখুন
          </button>
        </div>

        {/* ---------------- RIGHT SIDE: VAULT ANALYTICS & RECENT UPLOADS ---------------- */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Top Row Horizontal Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {storageStats.map((stat, index) => (
              <div key={index} className="bg-white p-4.5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-[11px] font-bold mb-0.5">{stat.label}</p>
                  <p className="text-xl font-extrabold text-slate-900 leading-none">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Folder Categories Main Canvas Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-base font-bold text-slate-900">ডিজিটাল ভল্ট ক্যাটাগরি</h3>
              <div className="flex items-center gap-1 text-slate-400 bg-slate-50 p-1 rounded-lg">
                <button className="p-1.5 rounded-md bg-white text-[#0c2483] shadow-xs"><Grid size={14} /></button>
                <button className="p-1.5 rounded-md hover:text-slate-700"><List size={14} /></button>
              </div>
            </div>

            {/* Folder Layout Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {vaultCategories.map((folder, idx) => (
                <div key={idx} className="border border-slate-100 bg-slate-50/30 rounded-xl p-4 relative hover:shadow-md/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center">
                      <FileText size={18} className="text-[#0c2483]" />
                    </div>
                    <button className="text-slate-400 hover:text-slate-600"><MoreVertical size={16} /></button>
                  </div>
                  
                  <h4 className="font-bold text-slate-800 text-sm mb-0.5">{folder.title}</h4>
                  <p className="text-xs text-slate-400 font-medium mb-3">{folder.count} • {folder.size}</p>
                  
                  {/* Progress Line */}
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${folder.progressColor} ${folder.progress}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Uploads Table Section */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-base font-bold text-slate-900">সাম্প্রতিক আপলোডসমূহ</h3>
              <button className="flex items-center gap-1 text-slate-500 border border-slate-200 px-3 py-1.5 bg-white hover:bg-slate-50 rounded-xl text-xs font-semibold transition-all">
                <span>সকল ব্রাঞ্চ</span>
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Structured Data Table matching Figma exactly */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50/70 text-slate-500 text-xs font-bold border-b border-slate-100">
                    <th className="p-3.5 rounded-l-xl">ফাইলের নাম</th>
                    <th className="p-3.5 text-center">মেম্বার নেম</th>
                    <th className="p-3.5 text-center">আপলোড তারিখ</th>
                    <th className="p-3.5 text-center">স্ট্যাটাস</th>
                    <th className="p-3.5 text-center rounded-r-xl">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-slate-50 font-medium">
                  {recentUploads.map((file, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-[10px]">
                          PDF
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-xs">{file.fileName}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{file.fileSize}</p>
                        </div>
                      </td>
                      <td className="p-4 text-center text-slate-700 font-semibold">{file.memberName}</td>
                      <td className="p-4 text-center text-slate-500">{file.date}</td>
                      <td className="p-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] inline-flex items-center gap-1 ${file.statusStyle}`}>
                          <span className={`w-1 h-1 rounded-full ${file.status === 'যাচাইকৃত' ? 'bg-emerald-500' : 'bg-orange-500'}`}></span>
                          {file.status}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-3 text-slate-400">
                          <button className="hover:text-[#0c2483] transition-colors"><Eye size={14} /></button>
                          <button className="hover:text-slate-600 transition-colors"><ExternalLink size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination Load more asset link matching Figma */}
            <div className="border-t border-slate-100 pt-4 mt-3 text-center">
              <button className="text-[#0c2483] hover:text-[#0a1e6e] text-xs font-bold transition-colors inline-flex items-center gap-1">
                <span>আরও ২০টি ডকুমেন্ট দেখুন</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DigitalVault;