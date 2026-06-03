'use client';

import React, { useState } from 'react';
import { 
  FileBarChart2, 
  Search, 
  Download, 
  Printer, 
  Calendar, 
  Filter, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Users, 
  PiggyBank, 
  TrendingUp, 
  RefreshCw,
  FileText
} from 'lucide-react';

// TypeScript Interface for Report Item Data
interface ReportSummary {
  id: string;
  reportName: string;
  category: 'ঋণ' | 'সঞ্চয়' | 'অ্যাকাউন্টিং' | 'সদস্য';
  generatedBy: string;
  dateRange: string;
  recordsCount: string;
  status: 'প্রস্তুত' | 'প্রক্রিয়াধীন';
  statusType: 'ready' | 'pending';
}

const ReportsPage = () => {
  // Search, Category Filter & Date Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [startDate, setStartDate] = useState('2026-05-01');
  const [endDate, setEndDate] = useState('2026-06-01');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock Data: Initial Reports Metadata Registry matching NGO Auditing Standard
  const [reports, setReports] = useState<ReportSummary[]>([
    { id: 'REP-৮৮০১', reportName: 'মাসিক ঋণ বিতরণ ও আদায় প্রতিবেদন (মে ২০২৬)', category: 'ঋণ', generatedBy: 'আরিফ রহমান', dateRange: '০১ মে - ৩১ মে, ২০২৬', recordsCount: '১২৪ টি লোন কেস', status: 'প্রস্তুত', statusType: 'ready' },
    { id: 'REP-৭৭৪৫', reportName: 'সদস্য সঞ্চয় আমানত ও উত্তোলন খতিয়ান', category: 'সঞ্চয়', generatedBy: 'মো: হাসান আলী', dateRange: '১৫ মে - ৩০ মে, ২০২৬', recordsCount: '৫১২ জন সদস্য', status: 'প্রস্তুত', statusType: 'ready' },
    { id: 'REP-৯২১০', reportName: 'সার্বিক আয়-ব্যয় ও লাভ-ক্ষতি বিবরণী (ক্যাশ বুক)', category: 'অ্যাকাউন্টিং', generatedBy: 'আরিফ রহমান', dateRange: '০১ মে - ৩১ মে, ২০২৬', recordsCount: '৮৯ টি ট্রানজেকশন', status: 'প্রস্তুত', statusType: 'ready' },
    { id: 'REP-৩৪০৫', reportName: 'নতুন সদস্য অন্তর্ভুক্তি ও ড্রপআউট পরিসংখ্যান', category: 'সদস্য', generatedBy: 'সুমাইয়া আক্তার', dateRange: '০১ জানু - ৩১ মে, ২০২৬', recordsCount: '৪৫ জন নতুন সদস্য', status: 'প্রস্তুত', statusType: 'ready' },
    { id: 'REP-১১০২', reportName: 'খেলাপি ঋণ ও বকেয়া কিস্তি বিশেষ অডিট রিপোর্ট', category: 'ঋণ', generatedBy: 'সিস্টেম অটো', dateRange: 'কারেন্ট রানিং স্ট্যাটাস', recordsCount: '১৮ টি বকেয়া কেস', status: 'প্রক্রিয়াধীন', statusType: 'pending' },
  ]);

  // Handler to simulate refreshing dashboard analytics
  const handleRefreshData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  // Dynamic Search and Category Filter Logic
  const filteredReports = reports.filter(report => {
    const matchesSearch = report.reportName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          report.id.includes(searchQuery) || 
                          report.generatedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (categoryFilter === 'All') return matchesSearch;
    if (categoryFilter === 'Loan') return matchesSearch && report.category === 'ঋণ';
    if (categoryFilter === 'Savings') return matchesSearch && report.category === 'সঞ্চয়';
    if (categoryFilter === 'Accounting') return matchesSearch && report.category === 'অ্যাকাউন্টিং';
    if (categoryFilter === 'Members') return matchesSearch && report.category === 'সদস্য';
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">রিপোর্ট ও অডিট অ্যানালিটিক্স (NGO Reports)</h1>
          <p className="text-slate-500 text-sm">ঋণ আদায়ের হার, সঞ্চয় আমানত প্রবৃদ্ধি এবং অফিসিয়াল অডিটের জন্য কাস্টম স্টেটমেন্ট জেনারেটর।</p>
        </div>
        
        <div className="flex gap-2 shrink-0">
          <button 
            onClick={handleRefreshData}
            className={`p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
            title="ডাটা রিফ্রেশ করুন"
          >
            <RefreshCw size={18} />
          </button>
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-xs"
          >
            <Printer size={15} />
            <span>পৃষ্ঠা প্রিন্ট করুন</span>
          </button>
        </div>
      </div>

      {/* ================= HIGH-TECH SUMMARY CARDS WITH GRAPH VISUALS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        
        {/* Card 1: Loan Recovery Rate */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 rounded-xl bg-indigo-50 text-[#0c2483] flex items-center justify-center"><TrendingUp size={18} /></span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5"><ArrowUpRight size={10} /> ২.৪%</span>
          </div>
          <div>
            <p className="text-slate-400 text-[11px] font-bold">ঋণ আদায়ের হার (Recovery Rate)</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">৯৭.৮%</h3>
          </div>
          {/* Mini CSS Bar Graph */}
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-[#0c2483] rounded-full" style={{ width: '97.8%' }}></div>
          </div>
        </div>

        {/* Card 2: Savings Growth */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><PiggyBank size={18} /></span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5"><ArrowUpRight size={10} /> ৫.১%</span>
          </div>
          <div>
            <p className="text-slate-400 text-[11px] font-bold">মোট সঞ্চয় প্রবৃদ্ধি (Net Savings)</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">৳ ৪,৫০,০০০</h3>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Card 3: Outstandings Rate */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center"><ArrowDownLeft size={18} /></span>
            <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">- ০.৮%</span>
          </div>
          <div>
            <p className="text-slate-400 text-[11px] font-bold">খেলাপি ঋণের অনুপাত (Risk Portfolio)</p>
            <h3 className="text-2xl font-extrabold text-red-600 mt-0.5">২.২%</h3>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full" style={{ width: '22%' }}></div>
          </div>
        </div>

        {/* Card 4: Active Members Counter */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center"><Users size={18} /></span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5"><ArrowUpRight size={10} /> ১২ জন</span>
          </div>
          <div>
            <p className="text-slate-400 text-[11px] font-bold">মোট সক্রিয় গ্রাহক ডাটাবেজ</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">১,৮২০ জন</h3>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-slate-700 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

      </div>

      {/* ================= SEARCH & INTERACTIVE FILTERS BAR ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        
        {/* Dynamic Search Box */}
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 w-full lg:w-80 transition-all focus-within:border-[#0c2483] focus-within:bg-white">
          <Search size={16} className="text-slate-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="রিপোর্টের নাম, আইডি বা কর্মকর্তা দিয়ে খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-slate-700 outline-none w-full placeholder-slate-400 font-medium"
          />
        </div>

        {/* Filter Matrix Configuration */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
          
          {/* Date Range Selectors */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-xs font-bold text-slate-600">
            <Calendar size={14} className="text-slate-400 ml-1" />
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-slate-700" 
            />
            <span className="text-slate-300 font-normal">থেকে</span>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-slate-700" 
            />
          </div>

          {/* Category Dropdown Pill Wrapper */}
          <div className="flex gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/60 overflow-x-auto">
            {[
              { id: 'All', label: 'সকল রিপোর্ট' },
              { id: 'Loan', label: 'ঋণ' },
              { id: 'Savings', label: 'সঞ্চয়' },
              { id: 'Accounting', label: 'হিসাব' },
              { id: 'Members', label: 'সদস্য' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  categoryFilter === tab.id
                    ? 'bg-white text-[#0c2483] shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ================= REPORTS REGISTRY DATA TABLE ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 text-xs font-bold border-b border-slate-100">
                <th className="p-4 rounded-l-xl">রিপোর্ট পরিচিতি ও আইডি</th>
                <th className="p-4">রিপোর্ট শ্রেণী</th>
                <th className="p-4">প্রস্তুতকারক কর্মকর্তা</th>
                <th className="p-4">কভার্ড সময়কাল</th>
                <th className="p-4">রেকর্ড সাইজ</th>
                <th className="p-4 text-center">অবস্থা (Status)</th>
                <th className="p-4 text-center rounded-r-xl">অ্যাকশন / এক্সপোর্ট</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50 font-medium">
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50/40 transition-colors">
                    
                    {/* Report Name & Code */}
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                        <FileText size={16} className="text-[#0c2483]" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm max-w-sm truncate" title={report.reportName}>
                          {report.reportName}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">ID: {report.id}</p>
                      </div>
                    </td>

                    {/* Category Label Pin */}
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
                        report.category === 'ঋণ' ? 'bg-indigo-50 text-[#0c2483]' :
                        report.category === 'সঞ্চয়' ? 'bg-emerald-50 text-emerald-600' :
                        report.category === 'অ্যাকাউন্টিং' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {report.category} মডিউল
                      </span>
                    </td>

                    {/* Staff Issuer Node */}
                    <td className="p-4 text-slate-700 font-bold">{report.generatedBy}</td>

                    {/* Date Coverage Range */}
                    <td className="p-4 text-slate-500">{report.dateRange}</td>

                    {/* Records Scale */}
                    <td className="p-4 font-semibold text-slate-600">{report.recordsCount}</td>

                    {/* Processing Badges */}
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] inline-flex items-center gap-1 ${
                        report.statusType === 'ready' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-500'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          report.statusType === 'ready' ? 'bg-emerald-500' : 'bg-amber-400 animate-pulse'
                        }`}></span>
                        {report.status}
                      </span>
                    </td>

                    {/* Audit Export Download Suite */}
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button 
                          disabled={report.statusType === 'pending'}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${
                            report.statusType === 'pending'
                              ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-[#0c2483] hover:text-white hover:border-[#0c2483] shadow-2xs'
                          }`}
                        >
                          <Download size={12} />
                          <span>PDF ডাউনলোড</span>
                        </button>
                        <button 
                          disabled={report.statusType === 'pending'}
                          className={`p-1.5 rounded-xl border text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors ${report.statusType === 'pending' ? 'hidden' : ''}`}
                          title="এক্সেল (Excel) ফাইল"
                        >
                          <FileBarChart2 size={13} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center p-8 text-slate-400 font-bold">
                    নির্ধারিত ক্রাইটেরিয়ার মধ্যে কোন রিপোর্টের ডেটা ফাইল পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= EXTRA AD-HOC REPORT GENERATOR TOOLTIP FOOTER ================= */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <h4 className="text-xs font-extrabold text-slate-800">আপনার কি বিশেষ কোনো কাস্টম অডিট রিপোর্টের প্রয়োজন?</h4>
          <p className="text-[11px] text-slate-500 font-medium">যেকোনো নির্দিষ্ট কেন্দ্র, মাঠ কর্মী অথবা নির্দিষ্ট স্কিমের ওপর ভিত্তি করে ফিল্টারড রিলিজ স্টেটমেন্ট বের করতে পারবেন।</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs shrink-0 transition-colors">
          কাস্টম কুয়েরি বিল্ডার (Query Builder)
        </button>
      </div>

    </div>
  );
};

export default ReportsPage;