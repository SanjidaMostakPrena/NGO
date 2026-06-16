
'use client';

import React, { useState } from 'react';
import { 
  HandCoins, 
  Search, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  User, 
  Calendar, 
  DollarSign, 
  PlusCircle, 
  Eye, 
  Edit2, 
  Receipt,
  X,
  FileText,
  BadgeCent,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

// TypeScript Interface for Loan Data
interface Loan {
  id: string;
  memberId: string;
  memberName: string;
  initial: string;
  loanAmount: string;
  disbursedDate: string;
  totalInstallments: number;
  paidInstallments: number;
  totalPaid: string;
  totalDue: string;
  status: 'চলতি ঋণ' | 'বকেয়া ঋণ' | 'পরিশোধিত';
  statusType: 'active' | 'due' | 'paid';
}

const LoansPage = () => {
  // Main Create Loan Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Interactive Feature Modals States
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);

  // Edit Form Fields State
  const [editFormData, setEditFormData] = useState({
    loanAmount: '',
    totalInstallments: 40,
    paidInstallments: 0,
    status: 'চলতি ঋণ' as 'চলতি ঋণ' | 'বকেয়া ঋণ' | 'পরিশোধিত'
  });

  // Receipt Amount Input State
  const [collectedAmount, setCollectedAmount] = useState('');
  
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Form Inputs State for New Loan Approval
  const [newLoan, setNewLoan] = useState({
    memberId: '',
    memberName: '',
    loanAmount: '',
    installments: 40,
    interestRate: '১০%'
  });

  // Mock Data: Initial Loans Dataset matching your NGO schema
  const [loans, setLoans] = useState<Loan[]>([
    { id: 'LN-৪৪০১', memberId: 'M-৮৮৯২', memberName: 'রাশেদ আহমেদ', initial: 'রা', loanAmount: '৳ ৫০,০০০', disbursedDate: '১২ জানু, ২০২৬', totalInstallments: 40, paidInstallments: 15, totalPaid: '৳ ১৮,৭৫০', totalDue: '৳ ৩১,২৫০', status: 'চলতি ঋণ', statusType: 'active' },
    { id: 'LN-৯২০৫', memberId: 'M-১০৫২', memberName: 'মো: হাসান আলী', initial: 'হা', loanAmount: '৳ ৩০,০০০', disbursedDate: '২০ নভেম্বর, ২০২৫', totalInstallments: 30, paidInstallments: 22, totalPaid: '৳ ২২,০০০', totalDue: '৳ ৮,০০০', status: 'বকেয়া ঋণ', statusType: 'due' },
    { id: 'LN-১১৮২', memberId: 'M-৭৭১২', memberName: 'সুমাইয়া আক্তার', initial: 'সু', loanAmount: '৳ ২০,০০০', disbursedDate: '০৫ মার্চ, ২০২৫', totalInstallments: 20, paidInstallments: 20, totalPaid: '৳ ২০,০০০', totalDue: '৳ ০', status: 'পরিশোধিত', statusType: 'paid' },
    { id: 'LN-৫৫৬১', memberId: 'M-৩০১৪', memberName: 'মোছা: আমেনা বেগম', initial: 'আ', loanAmount: '৳ ৪০,০০০', disbursedDate: '০১ ফেব, ২০২৬', totalInstallments: 40, paidInstallments: 8, totalPaid: '৳ ৮,০০০', totalDue: '৳ ৩২,০০০', status: 'চলতি ঋণ', statusType: 'active' },
  ]);

  // Handler to issue/approve a new loan dynamically
  const handleCreateLoan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLoan.memberName || !newLoan.loanAmount) return;

    const randomLoanId = `LN-${Math.floor(1000 + Math.random() * 9000)}`;
    const randomMemberId = newLoan.memberId || `M-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const formattedAmount = parseInt(newLoan.loanAmount).toLocaleString('bn-BD');

    const addedLoan: Loan = {
      id: randomLoanId,
      memberId: randomMemberId,
      memberName: newLoan.memberName,
      initial: newLoan.memberName.substring(0, 2),
      loanAmount: `৳ ${formattedAmount}`,
      disbursedDate: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      totalInstallments: Number(newLoan.installments),
      paidInstallments: 0,
      totalPaid: '৳ ০',
      totalDue: `৳ ${formattedAmount}`,
      status: 'চলতি ঋণ',
      statusType: 'active',
    };

    setLoans([addedLoan, ...loans]);
    setIsModalOpen(false); // Close Modal
    
    // Reset Form
    setNewLoan({
      memberId: '',
      memberName: '',
      loanAmount: '',
      installments: 40,
      interestRate: '১০%'
    });
  };

  // Open Receipt Collection Modal
  const handleOpenReceipt = (loan: Loan) => {
    setSelectedLoan(loan);
    setCollectedAmount('');
    setIsReceiptModalOpen(true);
  };

  // Submit Receipt Collection
  const handleReceiptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLoan || !collectedAmount) return;

    setLoans(loans.map(item => {
      if (item.id === selectedLoan.id) {
        const updatedPaidInstallments = item.paidInstallments + 1;
        const currentTotalPaid = parseInt(item.totalPaid.replace(/[^\d]/g, '')) || 0;
        const currentTotalDue = parseInt(item.totalDue.replace(/[^\d]/g, '')) || 0;
        const inputAmount = parseInt(collectedAmount) || 0;

        const calculatedPaid = currentTotalPaid + inputAmount;
        const calculatedDue = Math.max(0, currentTotalDue - inputAmount);

        return {
          ...item,
          paidInstallments: updatedPaidInstallments >= item.totalInstallments ? item.totalInstallments : updatedPaidInstallments,
          totalPaid: `৳ ${calculatedPaid.toLocaleString('bn-BD')}`,
          totalDue: `৳ ${calculatedDue.toLocaleString('bn-BD')}`,
          status: calculatedDue === 0 ? 'পরিশোধিত' : item.status,
          statusType: calculatedDue === 0 ? 'paid' : item.statusType
        };
      }
      return item;
    }));

    setIsReceiptModalOpen(false);
  };

  // Open View Details Modal
  const handleOpenView = (loan: Loan) => {
    setSelectedLoan(loan);
    setIsViewModalOpen(true);
  };

  // Open Edit Layout Modal
  const handleOpenEdit = (loan: Loan) => {
    setSelectedLoan(loan);
    setEditFormData({
      loanAmount: loan.loanAmount.replace(/[^\d]/g, ''),
      totalInstallments: loan.totalInstallments,
      paidInstallments: loan.paidInstallments,
      status: loan.status
    });
    setIsEditModalOpen(true);
  };

  // Submit Edit Modifications
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLoan) return;

    setLoans(loans.map(item => {
      if (item.id === selectedLoan.id) {
        const cleanAmount = parseInt(editFormData.loanAmount) || 0;
        let sType: 'active' | 'due' | 'paid' = 'active';
        if (editFormData.status === 'বকেয়া ঋণ') sType = 'due';
        if (editFormData.status === 'পরিশোধিত') sType = 'paid';

        return {
          ...item,
          loanAmount: `৳ ${cleanAmount.toLocaleString('bn-BD')}`,
          totalInstallments: Number(editFormData.totalInstallments),
          paidInstallments: Number(editFormData.paidInstallments),
          status: editFormData.status,
          statusType: sType
        };
      }
      return item;
    }));

    setIsEditModalOpen(false);
  };

  // Dynamic Search and Filter Matrix Logic
  const filteredLoans = loans.filter(loan => {
    const matchesSearch = loan.memberName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          loan.id.includes(searchQuery) || 
                          loan.memberId.includes(searchQuery);
    
    if (statusFilter === 'All') return matchesSearch;
    if (statusFilter === 'Active') return matchesSearch && loan.statusType === 'active';
    if (statusFilter === 'Due') return matchesSearch && loan.statusType === 'due';
    if (statusFilter === 'Paid') return matchesSearch && loan.statusType === 'paid';
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">ঋণ বিতরণ ও আদায় (Loans Management)</h1>
          <p className="text-slate-500 text-sm">সদস্যদের মাঝে বিতরণকৃত মাইক্রো-ক্রেডিট ঋণ, চলমান কিস্তি ট্র্যাকিং এবং বকেয়া আদায় মনিটর প্যানেল।</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm shrink-0"
        >
          <PlusCircle size={16} />
          <span>নতুন ঋণ অনুমোদন (Disburse Loan)</span>
        </button>
      </div>

      {/* ================= LOAN METRICS CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-[#0c2483] flex items-center justify-center"><TrendingUp size={22} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">চলমান মোট ঋণ বিতরণ</p>
            <h3 className="text-2xl font-extrabold text-slate-900">
              {loans.filter(l => l.statusType === 'active').length} টি কেস
            </h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-red-50 text-red-500 flex items-center justify-center"><AlertCircle size={22} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">বকেয়া ঋণের তালিকা</p>
            <h3 className="text-2xl font-extrabold text-red-600">
              {loans.filter(l => l.statusType === 'due').length} টি কেস
            </h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={22} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">সম্পূর্ণ পরিশোধিত ঋণ</p>
            <h3 className="text-2xl font-extrabold text-slate-700">
              {loans.filter(l => l.statusType === 'paid').length} টি কেস
            </h3>
          </div>
        </div>
      </div>

      {/* ================= SEARCH & FILTERS CONTROLS ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col md:flex-row justify-between gap-4">
        
        {/* Dynamic Search Box */}
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 w-full md:w-96 transition-all focus-within:border-[#0c2483] focus-within:bg-white">
          <Search size={16} className="text-slate-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="সদস্যের নাম, ঋণ আইডি অথবা মেম্বার আইডি..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-slate-700 outline-none w-full placeholder-slate-400 font-medium"
          />
        </div>

        {/* Tab Filters Grid */}
        <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap bg-slate-50 p-1 rounded-xl border border-slate-200/60">
          {[
            { id: 'All', label: 'সকল ঋণ' },
            { id: 'Active', label: 'চলতি ঋণ' },
            { id: 'Due', label: 'বকেয়া ঋণ' },
            { id: 'Paid', label: 'পরিশোধিত' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                statusFilter === tab.id
                  ? 'bg-white text-[#0c2483] shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= LOAN REGISTER DATA TABLE ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 text-xs font-bold border-b border-slate-100">
                <th className="p-4 rounded-l-xl">ঋণগ্রহীতা ও মেম্বার আইডি</th>
                <th className="p-4">ঋণ আইডি</th>
                <th className="p-4">বিতরণের তারিখ</th>
                <th className="p-4">ঋণের পরিমাণ</th>
                <th className="p-4">মোট কিস্তি আদায়</th>
                <th className="p-4">মোট আদায়কৃত টাকা</th>
                <th className="p-4">অবशिष्ट বকেয়া স্থিতি</th>
                <th className="p-4 text-center">স্ট্যাটাস</th>
                <th className="p-4 text-center rounded-r-xl">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50 font-medium">
              {filteredLoans.length > 0 ? (
                filteredLoans.map((loan) => (
                  <tr key={loan.id} className="hover:bg-slate-50/40 transition-colors">
                    
                    {/* Member Details */}
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">
                        {loan.initial}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{loan.memberName}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">Member ID: {loan.memberId}</p>
                      </div>
                    </td>

                    {/* Loan Application Identity */}
                    <td className="p-4 font-mono text-slate-600 font-bold">{loan.id}</td>

                    {/* Disbursement Date */}
                    <td className="p-4 text-slate-500 flex items-center gap-1 h-14">
                      <Calendar size={12} className="text-slate-400" />
                      {loan.disbursedDate}
                    </td>

                    {/* Principal Loan Amount */}
                    <td className="p-4 font-extrabold text-slate-800 text-sm">{loan.loanAmount}</td>

                    {/* Installments Progress Bar Aspect */}
                    <td className="p-4">
                      <div className="space-y-1">
                        <p className="text-slate-600 text-[11px]">
                          <span className="font-bold text-slate-800">{loan.paidInstallments}</span> / {loan.totalInstallments} টি কিস্তি
                        </p>
                        <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${loan.statusType === 'due' ? 'bg-red-400' : 'bg-[#0c2483]'}`}
                            style={{ width: `${(loan.paidInstallments / loan.totalInstallments) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>

                    {/* Total Collected Cash Node */}
                    <td className="p-4 text-emerald-600 font-bold">{loan.totalPaid}</td>

                    {/* Outstandings Target Rest */}
                    <td className="p-4 font-bold text-slate-700">{loan.totalDue}</td>

                    {/* Dynamic Badging */}
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] inline-flex items-center gap-1 ${
                        loan.statusType === 'active' ? 'bg-indigo-50 text-[#0c2483]' :
                        loan.statusType === 'due' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-600'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          loan.statusType === 'active' ? 'bg-[#0c2483]' :
                          loan.statusType === 'due' ? 'bg-red-500' : 'bg-emerald-500'
                        }`}></span>
                        {loan.status}
                      </span>
                    </td>

                    {/* Action Tools */}
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2.5 text-slate-400">
                         <Link href={`/LoansPage/444`}>goooooo</Link>
                        <button onClick={() => handleOpenView(loan)} className="hover:text-slate-700 transition-colors" title="বিস্তারিত দেখুন"><Eye size={14} /></button>
                        <button onClick={() => handleOpenEdit(loan)} className="hover:text-slate-700 transition-colors" title="সংশোধন করুন"><Edit2 size={14} /></button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="text-center p-8 text-slate-400 font-bold">
                    কোন ঋণের তথ্য পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= 1. RECEIPT COLLECTION MODAL ================= */}
      {isReceiptModalOpen && selectedLoan && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
            <div className="bg-[#0c2483] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BadgeCent size={18} />
                <h3 className="text-sm font-bold">কিস্তি সংগ্রহ রশিদ</h3>
              </div>
              <button onClick={() => setIsReceiptModalOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
            </div>
            <form onSubmit={handleReceiptSubmit} className="p-4 space-y-4 text-xs font-semibold">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 font-medium text-slate-600">
                <p>ঋণগ্রহীতা: <span className="font-bold text-slate-800">{selectedLoan.memberName}</span></p>
                <p>ঋণ আইডি: <span className="font-mono font-bold text-[#0c2483]">{selectedLoan.id}</span></p>
                <p>অবশিষ্ট বকেয়া: <span className="font-bold text-red-500">{selectedLoan.totalDue}</span></p>
              </div>
              <div>
                <label className="block text-slate-500 mb-1">আদায়কৃত কিস্তির পরিমাণ (৳) *</label>
                <input 
                  type="number" 
                  required
                  placeholder="উদা: ১,২৫০"
                  value={collectedAmount}
                  onChange={(e) => setCollectedAmount(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                />
              </div>
              <div className="flex gap-2.5 pt-2">
                <button type="button" onClick={() => setIsReceiptModalOpen(false)} className="w-full border border-slate-200 text-slate-600 py-2 rounded-xl transition-all">বাতিল</button>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl transition-all shadow-xs">আদায় নিশ্চিত করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= 2. LOAN DETAILS VIEW MODAL ================= */}
      {isViewModalOpen && selectedLoan && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
            <div className="bg-slate-950 text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-indigo-400" />
                <h3 className="text-sm font-bold">ঋণ ফাইল খতিয়ান প্যানেল</h3>
              </div>
              <button onClick={() => setIsViewModalOpen(false)} className="text-white/80 hover:text-white"><X size={18} /></button>
            </div>
            <div className="p-5 space-y-4 text-xs font-semibold">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 font-medium text-slate-600">
                <div>
                  <p className="text-slate-400 text-[10px]">ঋণগ্রহীতার নাম</p>
                  <p className="text-slate-800 font-bold text-sm mt-0.5">{selectedLoan.memberName}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[10px]">মেম্বার আইডি</p>
                  <p className="text-slate-800 font-mono font-bold mt-0.5">{selectedLoan.memberId}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-indigo-50/50 border border-indigo-100/30 p-2.5 rounded-xl">
                  <p className="text-slate-400 text-[10px]">মোট মঞ্জুরকৃত ঋণ</p>
                  <p className="text-[#0c2483] font-black text-sm mt-0.5">{selectedLoan.loanAmount}</p>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100/30 p-2.5 rounded-xl">
                  <p className="text-slate-400 text-[10px]">মোট আদায় সম্পন্ন</p>
                  <p className="text-emerald-600 font-black text-sm mt-0.5">{selectedLoan.totalPaid}</p>
                </div>
                <div className="bg-red-50/50 border border-red-100/30 p-2.5 rounded-xl">
                  <p className="text-slate-400 text-[10px]">অবশিষ্ট পাওনা স্থিতি</p>
                  <p className="text-red-500 font-black text-sm mt-0.5">{selectedLoan.totalDue}</p>
                </div>
              </div>
              <div className="border border-slate-100 rounded-xl p-3 space-y-2 text-slate-600 font-medium">
                <div className="flex justify-between"><span>কিস্তি রেকর্ড প্রগ্রেস:</span><span className="font-bold text-slate-800">{selectedLoan.paidInstallments} / {selectedLoan.totalInstallments} টি</span></div>
                <div className="flex justify-between"><span>ঋণ প্রদানের সময়কাল:</span><span className="font-bold text-slate-800">{selectedLoan.disbursedDate}</span></div>
                <div className="flex justify-between"><span>ঋণ ফাইল স্ট্যাটাস:</span><span className="font-bold text-[#0c2483]">{selectedLoan.status}</span></div>
              </div>
              <button onClick={() => setIsViewModalOpen(false)} className="w-full bg-slate-900 text-white py-2.5 rounded-xl transition-all font-bold">ফাইল বন্ধ করুন</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= 3. EDIT LOAN MODAL ================= */}
      {isEditModalOpen && selectedLoan && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150 overflow-hidden">
            <div className="border-b border-slate-100 p-4.5 flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-900">ঋণ ফাইল সংশোধন প্যানেল</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button>
            </div>
            <form onSubmit={handleEditSubmit} className="p-5 space-y-4 text-xs font-semibold">
              <div>
                <label className="block text-slate-500 mb-1">ঋণের পরিমাণ সংশোধন (প্রধান মূলধন ৳) *</label>
                <input 
                  type="number" 
                  required
                  value={editFormData.loanAmount}
                  onChange={(e) => setEditFormData({...editFormData, loanAmount: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">মোট মঞ্জুর কিস্তি সংখ্যা</label>
                  <input 
                    type="number" 
                    required
                    value={editFormData.totalInstallments}
                    onChange={(e) => setEditFormData({...editFormData, totalInstallments: Number(e.target.value)})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">আদায়কৃত কিস্তি সংখ্যা</label>
                  <input 
                    type="number" 
                    required
                    value={editFormData.paidInstallments}
                    onChange={(e) => setEditFormData({...editFormData, paidInstallments: Number(e.target.value)})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-500 mb-1">ঋণ ফাইল স্ট্যাটাস</label>
                <select 
                  value={editFormData.status}
                  onChange={(e) => setEditFormData({...editFormData, status: e.target.value as any})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483]"
                >
                  <option value="চলতি ঋণ">চলতি ঋণ (Active)</option>
                  <option value="বকেয়া ঋণ">বকেয়া ঋণ (Due Risk)</option>
                  <option value="পরিশোধিত">পরিশোধিত (Closed Case)</option>
                </select>
              </div>
              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="w-full border border-slate-200 text-slate-600 py-2 rounded-xl">বাতিল</button>
                <button type="submit" className="w-full bg-[#0c2483] text-white py-2 rounded-xl font-bold">হালনাগাদ নিশ্চিত করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= NEW LOAN INPUT DISBURSEMENT MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">ঋণ অনুমোদন ফরম (Disbursement Sheet)</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateLoan} className="p-5 space-y-4 text-xs font-semibold">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">সদস্য আইডি (ঐচ্ছিক)</label>
                  <input 
                    type="text" 
                    placeholder="M-XXXX"
                    value={newLoan.memberId}
                    onChange={(e) => setNewLoan({...newLoan, memberId: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">ঋণগ্রহীতার নাম *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="নাম লিখুন"
                    value={newLoan.memberName}
                    onChange={(e) => setNewLoan({...newLoan, memberName: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">ঋণের প্রধান পরিমাণ (Principal Amount ৳) *</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 text-sm">৳</span>
                  <input 
                    type="number" 
                    required
                    placeholder="উদা: ৩০,০০০"
                    value={newLoan.loanAmount}
                    onChange={(e) => setNewLoan({...newLoan, loanAmount: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">মোট কিস্তির সংখ্যা</label>
                  <select 
                    value={newLoan.installments}
                    onChange={(e) => setNewLoan({...newLoan, installments: Number(e.target.value)})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                  >
                    <option value={20}>২০ কিস্তি</option>
                    <option value={30}>৩০ কিস্তি</option>
                    <option value={40}>৪০ কিস্তি (১ বছর)</option>
                    <option value={80}>৮০ কিস্তি (২ বছর)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">সার্ভিস চার্জ / লাভ হার</label>
                  <input 
                    type="text" 
                    disabled
                    value={newLoan.interestRate}
                    className="w-full bg-slate-100 border border-slate-200 rounded-xl px-3 py-2.5 outline-none text-slate-400 cursor-not-allowed font-medium"
                  />
                </div>
              </div>

              <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-3 text-[11px] text-amber-700 font-medium leading-relaxed">
                * ঋণ বিতরণের সাথে সাথে সিস্টেম অটোমেটিকলি কালেকশন লেজার শীট এবং কিস্তির সূচি তৈরি করে নেবে।
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center"
                >
                  বাতিল করুন
                </button>
                <button 
                  type="submit"
                  className="w-full bg-[#0c2483] hover:bg-[#0a1e6e] text-white py-2.5 rounded-xl font-bold transition-all text-center shadow-xs"
                >
                  অনুমোদন নিশ্চিত করুন
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default LoansPage;