
'use client';

import React, { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  PieChart,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Plus,
  Search,
  FileText,
  Users,
  CheckCircle,
  AlertCircle,
  X,
  Eye,
  Briefcase
} from "lucide-react";

const Accounting = () => {
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState("all"); // all, grants, expenses
  const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState("all");

  // Mock Data: Financial Summary
  const stats = [
    { title: "মোট গ্রান্ট/ফান্ড (YTD)", amount: "৳ ৪৫,৫০,০০০", change: "+১৮.৫%", isPositive: true, icon: <DollarSign size={20} />, bgColor: "bg-blue-50 text-blue-600" },
    { title: "মোট প্রজেক্ট খরচ", amount: "৳ ২৯,২০,০০০", change: "৬৪% বাজেট ব্যবহৃত", isPositive: true, icon: <Layers size={20} />, bgColor: "bg-emerald-50 text-emerald-600" },
    { title: "অবশিষ্ট রিজার্ভ ফান্ড", amount: "৳ ১৬,৩০,০০০", change: "নিরাপদ সীমানায়", isPositive: true, icon: <TrendingUp size={20} />, bgColor: "bg-indigo-50 text-indigo-600" },
    { title: "বকেয়া/অনুমোদনহীন ভাউচার", amount: "৳ ১,৮৫,০০০", change: "৪টি ভাউচার পেন্ডিং", isPositive: false, icon: <AlertCircle size={20} />, bgColor: "bg-rose-50 text-rose-600" },
  ];

  // Mock Data: Project-wise Allocation
  const projects = [
    { id: "p1", name: "রোহিঙ্গা রিফিউজি শিক্ষা প্রজেক্ট", allocated: 1500000, spent: 1100000, color: "bg-blue-600" },
    { id: "p2", name: "গ্রামীণ স্বাস্থ্যসেবা ক্যাম্প ২০২৬", allocated: 1200000, spent: 850000, color: "bg-emerald-600" },
    { id: "p3", name: "উপকূলীয় বনায়ন ও জলবায়ু ফান্ড", allocated: 1000000, spent: 620000, color: "bg-amber-500" },
    { id: "p4", name: "নারী উদ্যোক্তা অনুদান স্কিম", allocated: 850000, spent: 350000, color: "bg-purple-600" },
  ];

  // Mock Data: Recent Transactions (Grants & Expenses)
  const [transactions, setTransactions] = useState([
    { id: "TXN-9910", description: "ইউনেস্কো (UNESCO) থেকে ২য় কিস্তির গ্রান্ট প্রাপ্তি", type: "grant", project: "রোহিঙ্গা রিফিউজি শিক্ষা প্রজেক্ট", amount: "৳ ৫,০০,০০০", date: "০২ জুন, ২০২৬", status: "Approved", statusType: "success" },
    { id: "TXN-9911", description: "মেডিসিন এবং মেডিকেল কিট ক্রয়", type: "expense", project: "গ্রামীণ স্বাস্থ্যসেবা ক্যাম্প ২০২৬", amount: "৳ ১,২০,০০০", date: "০১ জুন, ২০২৬", status: "Approved", statusType: "success" },
    { id: "TXN-9912", description: "ফিল্ড অফিসারদের যাতায়াত ভাতা (ভাউচার #৪৫)", type: "expense", project: "উপকূলীয় বনায়ন ও জলবায়ু ফান্ড", amount: "৳ ৩৫,০০০", date: "৩০ মে, ২০২৬", status: "Pending", statusType: "warning" },
    { id: "TXN-9913", description: "বিল অ্যান্ড মেলিন্ডা গেটস ফাউন্ডেশন ডোনেশন", type: "grant", project: "গ্রামীণ স্বাস্থ্যসেবা ক্যাম্প ২০২৬", amount: "৳ ১২,০০,০০০", date: "২৮ মে, ২০২৬", status: "Approved", statusType: "success" },
    { id: "TXN-9914", description: "ট্রেইনিং ম্যাটেরিয়ালস এবং লজিস্টিকস খরচ", type: "expense", project: "নারী উদ্যোক্তা অনুদান স্কিম", amount: "৳ ৭৫,০০০", date: "২৫ মে, ২০২৬", status: "Approved", statusType: "success" },
  ]);

  // Filter transactions based on active tab and project selection
  const filteredTransactions = transactions.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesProject = selectedProject === "all" || item.project === selectedProject;
    return matchesTab && matchesProject;
  });

  return (
    <div className="min-h-screen bg-secondary p-4 sm:p-6 lg:p-8 font-sans text-slate-800">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="mb-6 lg:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md"></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-1 tracking-tight">
            অ্যাকাউন্টিং ও বাজেট ড্যাশবোর্ড
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 ">
            এনজিও-এর অর্থায়ন, অনুদান বরাদ্দ এবং রিয়েল-টাইম অডিট ট্র্যাকিং সিস্টেম
          </p>
        </div>
        
        {/* Header Actions */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
          <button className="flex-1 md:flex-initial flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 shadow-xs">
            <Download size={16} />
            <span>অডিট রিপোর্ট (PDF)</span>
          </button>
          <button 
            onClick={() => setShowAddTransactionModal(true)}
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700"
          >
            <Plus size={16} />
            <span>নতুন ভাউচার/এন্ট্রি</span>
          </button>
        </div>
      </div>

      {/* ================= TOP STATS CARDS ================= */}
      <div className="mb-6 lg:mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-5 shadow-xs transition-all hover:shadow-sm">
            <div className="flex items-start justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgColor}`}>
                {stat.icon}
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                stat.isPositive ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50"
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="mb-0.5 text-xs font-semibold text-slate-400">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.amount}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MIDDLE SECTION: BUDGET ALLOCATION & GRAPH ================= */}
      <div className="mb-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Project Budget Progress */}
        <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-xs lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">প্রজেক্ট ভিত্তিক বাজেট ও ইউটিলাইজেশন</h3>
                <p className="text-xs text-slate-400">অনুমোদিত প্রজেক্ট ফান্ড বনাম বর্তমান খরচের অনুপাত</p>
              </div>
              <select 
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="select select-sm border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none"
              >
                <option value="all">সকল প্রজেক্ট ফিল্টার</option>
                {projects.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
            </div>

            {/* Project Bars */}
            <div className="space-y-5 my-2">
              {projects.map((project) => {
                const percent = Math.round((project.spent / project.allocated) * 100);
                return (
                  <div key={project.id} className="space-y-1.5 p-3 rounded-xl hover:bg-slate-50/60 transition-all">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs font-bold">
                      <span className="text-slate-700 flex items-center gap-1.5">
                        <Briefcase size={14} className="text-slate-400" />
                        {project.name}
                      </span>
                      <span className="text-slate-500">
                        ৳ {project.spent.toLocaleString()} <span className="text-slate-300">/</span> <span className="text-slate-400">৳ {project.allocated.toLocaleString()}</span>
                      </span>
                    </div>
                    <div className="relative pt-1">
                      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 flex">
                        <div
                          className={`${project.color} h-full rounded-full transition-all duration-500`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <span className="absolute right-0 -top-6 text-[10px] font-extrabold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                        {percent}% ব্যবহৃত
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1">
            <InfoIcon size={14} />
            <span>কোনো প্রজেক্টের খরচ ৮০% পার হলে সিস্টেম স্বয়ংক্রিয়ভাবে অ্যালার্ট বা নোটিফিকেশন পাঠায়।</span>
          </div>
        </div>

        {/* Right 1 Column: Donor Sector Allocation (Pie-chart representation) */}
        <div className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <PieChart size={18} className="text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">ফান্ডিং সোর্স (Sector Distribution)</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">চলতি অর্থবছর কোন খাত থেকে কত ফান্ড এসেছে:</p>

            {/* Custom Interactive Legend List instead of heavy canvas library */}
            <div className="space-y-3">
              {[
                { source: "International Grants (UN/NGOs)", amount: "৳ ২৫,০০,০০০", percent: "৫৫%", color: "bg-blue-600" },
                { source: "Corporate CSR Funding", amount: "৳ ১০,০০,০০০", percent: "২২%", color: "bg-emerald-600" },
                { source: "Government Subsidies", amount: "৳ ৬,০০,০০০", percent: "১৩%", color: "bg-amber-500" },
                { source: "Individual & Public Donors", amount: "৳ ৪,৫০,০০০", percent: "১০%", color: "bg-purple-600" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-xl border border-slate-50 bg-slate-50/30">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color} shrink-0`}></span>
                    <div className="truncate">
                      <p className="text-xs font-bold text-slate-700 truncate">{item.source}</p>
                      <p className="text-[10px] text-slate-400">{item.amount}</p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-100 shadow-2xs">
                    {item.percent}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100/40 mt-4 text-center">
            <p className="text-[11px] text-blue-700 font-medium">ফরেন ডোনেশন রেগুলেশন এক্ট (FD7) অনুযায়ী ভেরিফাইড।</p>
          </div>
        </div>
      </div>

      {/* ================= LOWER SECTION: TRANSACTION LEDGER & TABLE ================= */}
      <div className="rounded-2xl border border-slate-200/60 bg-white p-4 sm:p-6 shadow-xs">
        
        {/* Table Toolbar controls */}
        <div className="mb-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">রিসেন্ট ফাইনান্সিয়াল লেজার (Ledger)</h3>
            <p className="text-xs text-slate-400">গ্রান্ট ইনকাম এবং ডেবিট ভাউচারের সম্মিলিত লাইভ ট্র্যাকিং</p>
          </div>

          {/* Filters & Tabs Wrapper */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
            {/* Custom Navigation Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab("all")}
                className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeTab === "all" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-500 hover:text-slate-800"}`}
              >
                সব রেকর্ড
              </button>
              <button 
                onClick={() => setActiveTab("grant")}
                className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeTab === "grant" ? "bg-white text-emerald-600 shadow-2xs" : "text-slate-500 hover:text-slate-800"}`}
              >
                শুধুমাত্র ইনকাম/গ্রান্ট
              </button>
              <button 
                onClick={() => setActiveTab("expense")}
                className={`flex-1 sm:flex-initial px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeTab === "expense" ? "bg-white text-rose-600 shadow-2xs" : "text-slate-500 hover:text-slate-800"}`}
              >
                শুধুমাত্র খরচ
              </button>
            </div>

            {/* Quick Search bar */}
            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="TXN আইডি বা বিবরণ খুঁজুন..." 
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Responsive Table Layout */}
        <div className="w-full overflow-x-auto rounded-xl border border-slate-100">
          <table className="w-full border-collapse text-left min-w-[750px]">
            <thead>
              <tr className="bg-slate-50/70 text-xs font-bold text-slate-500 border-b border-slate-100">
                <th className="p-4">ট্রানজেকশন আইডি</th>
                <th className="p-4">বিবরণ ও সেক্টর</th>
                <th className="p-4">সংশ্লিষ্ট প্রজেক্ট</th>
                <th className="p-4">তারিখ</th>
                <th className="p-4">পরিমাণ</th>
                <th className="p-4 text-center">অনুমোদন স্ট্যাটাস</th>
                <th className="p-4 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((item) => (
                  <tr key={item.id} className="transition-colors hover:bg-slate-50/40">
                    <td className="p-4 font-mono text-xs font-bold text-slate-500">{item.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg shrink-0 ${
                          item.type === "grant" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                        }`}>
                          {item.type === "grant" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        </div>
                        <p className="font-semibold text-slate-800 max-w-[240px] truncate">{item.description}</p>
                      </div>
                    </td>
                    <td className="p-4 text-xs font-medium text-slate-600 max-w-[180px] truncate">
                      {item.project}
                    </td>
                    <td className="p-4 text-xs text-slate-400">{item.date}</td>
                    <td className={`p-4 font-extrabold ${
                      item.type === "grant" ? "text-emerald-600" : "text-rose-600"
                    }`}>
                      {item.type === "grant" ? "+" : "-"} {item.amount}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        item.statusType === "success" 
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                          : "bg-amber-50 text-amber-700 border border-amber-100"
                      }`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => alert(`ভাউচার ফাইল প্রাকদর্শন: ${item.id}`)}
                        className="p-1 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-all inline-flex items-center gap-1 font-semibold text-xs"
                      >
                        <Eye size={14} />
                        <span>রিসিপ্ট</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400 text-sm">
                    এই ফিল্টারে কোনো লেনদেনের রেকর্ড পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MODAL: ADD TRANSACTION ================= */}
      {showAddTransactionModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-5 sm:p-6 w-full max-w-lg shadow-2xl border border-slate-100 transition-all">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">নতুন ফাইনান্সিয়াল এন্ট্রি করুন</h3>
                <p className="text-xs text-slate-400">ভাউচার, ডেবিট নোট বা এক্সটার্নাল ফান্ড এন্ট্রি ফরম</p>
              </div>
              <button 
                onClick={() => setShowAddTransactionModal(false)} 
                className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); setShowAddTransactionModal(false); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">এন্ট্রি টাইপ</label>
                  <select className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500 font-semibold">
                    <option value="expense">Expense (খরচের ভাউচার)</option>
                    <option value="grant">Grant/Income (ফান্ড আগমন)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">সংশ্লিষ্ট প্রজেক্ট</label>
                  <select className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500 font-semibold">
                    {projects.map(p => <option key={p.id} value={p.name}>{p.name.substring(0,25)}...</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5">লেনদেন/ভাউচারের বিবরণ *</label>
                <input 
                  type="text" required 
                  placeholder="উদা: অফিস স্পেস ভাড়া বা ডোনার ফান্ড ট্রান্সফার ডিটেইলস"
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">টাকার পরিমাণ (৳) *</label>
                  <input 
                    type="number" required placeholder="50000"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">ভাউচার/রিসিপ্ট আপলোড (PDF/Img)</label>
                  <input 
                    type="file" 
                    className="file-input file-input-bordered file-input-xs w-full rounded-xl bg-slate-50 text-xs"
                  />
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 flex gap-2 text-[11px] text-amber-800 leading-relaxed">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>নতুন এন্ট্রি সাবমিট করার পর এটি সরাসরি 'পেন্ডিং' স্টেটে থাকবে। ফাইনান্স ডিরেক্টর বা অডিটর কর্তৃক এপ্রুভালের পর মেইন লেজারে যুক্ত হবে।</span>
              </div>

              <div className="flex gap-2 justify-end pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowAddTransactionModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  বাতিল করুন
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 shadow-xs"
                >
                  অনুমোদনের জন্য পাঠান
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

// Simple inline helper icon components to avoid breakages
const InfoIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export default Accounting;