
'use client';

import React, { useState } from 'react';
import { 
  FolderOpen, 
  Search, 
  UploadCloud, 
  FileText, 
  Image, 
  FileCode, 
  Download, 
  Trash2, 
  Eye, 
  Plus, 
  Calendar, 
  User, 
  HardDrive,
  X 
} from 'lucide-react';

// TypeScript Interface for Document File Data
interface LegalDocument {
  id: string;
  fileName: string;
  category: 'সদস্য ফাইল' | 'ঋণ চুক্তি' | 'অফিস নোটিশ' | 'আইনি ফাইল';
  fileType: 'PDF' | 'JPG' | 'DOCX';
  uploadedBy: string;
  uploadDate: string;
  fileSize: string;
  memberId?: string;
}

const DocumentsPage = () => {
  // Modal Open/Close State
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  // Dynamic Document Viewer Modal State
  const [viewingDocument, setViewingDocument] = useState<LegalDocument | null>(null);
  
  // Search & Tab Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // New File Upload Form States
  const [newFile, setNewFile] = useState({
    fileName: '',
    category: 'সদস্য ফাইল' as 'সদস্য ফাইল' | 'ঋণ চুক্তি' | 'অফিস নোটিশ' | 'আইনি ফাইল',
    fileType: 'PDF' as 'PDF' | 'JPG' | 'DOCX',
    memberId: ''
  });

  // Mock Data: Initial Cloud Documents Data Vault for the NGO
  const [documents, setDocuments] = useState<LegalDocument[]>([
    { id: 'DOC-৫৫০১', fileName: 'সদস্য_মোরশেদ_আলী_NID_কার্ড.pdf', category: 'সদস্য ফাইল', fileType: 'PDF', uploadedBy: 'আরিফ রহমান', uploadDate: '০১ জুন, ২০২৬', fileSize: '১.২ MB', memberId: 'MB-৯৯০১' },
    { id: 'DOC-২২৪১', fileName: 'ক্ষুদ্র_ঋণ_চুক্তিপত্র_কেন্দ্র_০৫_স্ট্যাম্প.docx', category: 'ঋণ চুক্তি', fileType: 'DOCX', uploadedBy: 'সুমাইয়া আক্তার', uploadDate: '৩০ মে, ২০২৬', fileSize: '৪.৫ MB', memberId: 'LN-৪৪০২' },
    { id: 'DOC-৯৮১২', fileName: 'জরুরী_সাধারণ_সভা_রেজুলেশন_২০২৬.pdf', category: 'অফিস নোটিশ', fileType: 'PDF', uploadedBy: 'মো: হাসান আলী', uploadDate: '২৮ মে, ২০২৬', fileSize: '৮৫০ KB', memberId: 'LN-৪৪০২'  },
    { id: 'DOC-৩৪০৯', fileName: 'জামিনদার_হলফনামা_মোস্তফা_কামাল.jpg', category: 'আইনি ফাইল', fileType: 'JPG', uploadedBy: 'আরিফ রহমান', uploadDate: '২৫ মে, ২০২৬', fileSize: '২.১ MB', memberId: 'MB-৮৮১২' },
    { id: 'DOC-১১৭২', fileName: 'সদস্য_ফাতেমা_বেগম_ভর্তি_ফরম_স্ক্যান.pdf', category: 'সদস্য ফাইল', fileType: 'PDF', uploadedBy: 'সুমাইয়া আক্তার', uploadDate: '২৪ মে, ২০২৬', fileSize: '৩.৮ MB', memberId: 'MB-৭১০৩' },
  ]);

  // Handler to Record/Simulate New Document Upload Dynamically
  const handleUploadFile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFile.fileName) return;

    const randomDocId = `DOC-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const addedDoc: LegalDocument = {
      id: randomDocId,
      fileName: newFile.fileName.replaceAll(' ', '_') + (newFile.fileType === 'PDF' ? '.pdf' : newFile.fileType === 'JPG' ? '.jpg' : '.docx'),
      category: newFile.category,
      fileType: newFile.fileType,
      uploadedBy: 'অ্যাডমিন ইউজার', // Simulating current session user
      uploadDate: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      fileSize: `${(Math.random() * 3 + 1).toFixed(1)} MB`,
      memberId: newFile.memberId || undefined
    };

    setDocuments([addedDoc, ...documents]);
    setIsUploadModalOpen(false); // Close Modal

    // Reset Form fields
    setNewFile({
      fileName: '',
      category: 'সদস্য ফাইল',
      fileType: 'PDF',
      memberId: ''
    });
  };

  // Handler to Delete File from Archive
  const handleDeleteDocument = (id: string) => {
    if (confirm('আপনি কি নিশ্চিতভাবে এই ডকুমেন্টটি সিস্টেম আর্কাইভ থেকে ডিলিট করতে চান?')) {
      setDocuments(documents.filter(doc => doc.id !== id));
    }
  };

  // Handler to Simulate File Download Successfully
  const handleDownloadDocument = (doc: LegalDocument) => {
    alert(`"${doc.fileName}" ফাইলটি সফলভাবে ডাউনলোড হয়েছে!`);
  };

  // Dynamic Metrics Recalculation Core
  const totalFilesCount = documents.length;
  const pdfCount = documents.filter(d => d.fileType === 'PDF').length;
  const docxCount = documents.filter(d => d.fileType === 'DOCX').length;

  // Dynamic Filter & Real-time Search Processing Matrix
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.fileName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.id.includes(searchQuery) || 
                          (doc.memberId && doc.memberId.includes(searchQuery)) ||
                          doc.uploadedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (categoryFilter === 'All') return matchesSearch;
    if (categoryFilter === 'Member') return matchesSearch && doc.category === 'সদস্য ফাইল';
    if (categoryFilter === 'Loan') return matchesSearch && doc.category === 'ঋণ চুক্তি';
    if (categoryFilter === 'Office') return matchesSearch && doc.category === 'অফিস নোটিশ';
    if (categoryFilter === 'Legal') return matchesSearch && doc.category === 'আইনি ফাইল';
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-1">কেন্দ্রীয় ডকুমেন্ট আর্কাইভ (Cloud Vault)</h1>
          <p className="text-slate-500 text-sm">সদস্যদের KYC ডকুমেন্টস, NID স্ক্যান কপি, আইনগত স্ট্যাম্প চুক্তিপত্র এবং ডিজিটাল ফাইল ও রসিদ ক্লাউড স্টোরেজ।</p>
        </div>
        <button 
          onClick={() => setIsUploadModalOpen(true)}
          className="flex items-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm shrink-0"
        >
          <UploadCloud size={16} />
          <span>নতুন ফাইল আপলোড (Upload File)</span>
        </button>
      </div>

      {/* ================= STORAGE ARCHIVE ANALYTICS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-indigo-50 text-[#0c2483] flex items-center justify-center"><HardDrive size={20} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">মোট সংরক্ষিত ফাইল</p>
            <h3 className="text-xl font-extrabold text-slate-900">{totalFilesCount} টি ডকুমেন্ট</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-red-50 text-red-500 flex items-center justify-center"><FileText size={20} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">পিডিএফ ফাইল (PDFs)</p>
            <h3 className="text-xl font-extrabold text-slate-900">{pdfCount} টি ফাইল</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center"><FileCode size={20} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">ওয়ার্ড ফাইল (DOCX)</p>
            <h3 className="text-xl font-extrabold text-slate-900">{docxCount} টি ফাইল</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><Image size={20} /></div>
          <div>
            <p className="text-slate-400 text-xs font-bold">ছবি / ইমেজ ফাইল</p>
            <h3 className="text-xl font-extrabold text-slate-900">{totalFilesCount - (pdfCount + docxCount)} টি ফাইল</h3>
          </div>
        </div>
      </div>

      {/* ================= FILTERS & VAULT CONTROLS ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col md:flex-row justify-between gap-4">
        
        {/* Real-time File Index Searcher */}
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 w-full md:w-96 transition-all focus-within:border-[#0c2483] focus-within:bg-white">
          <Search size={16} className="text-slate-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="ফাইলের নাম, আইডি বা সদস্য কোড দিয়ে খুঁজুন..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-slate-700 outline-none w-full placeholder-slate-400 font-medium"
          />
        </div>

        {/* Tab Filters Based on Category Architecture */}
        <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap bg-slate-50 p-1 rounded-xl border border-slate-200/60">
          {[
            { id: 'All', label: 'সকল ফাইল' },
            { id: 'Member', label: 'সদস্য KYC' },
            { id: 'Loan', label: 'ঋণ চুক্তিপত্র' },
            { id: 'Office', label: 'রেজুলেশন ও নোটিশ' },
            { id: 'Legal', label: 'আইনি ও স্ট্যাম্প' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCategoryFilter(tab.id)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
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

      {/* ================= ARCHIVE FOLDER RECORDS TABLE ================= */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 text-xs font-bold border-b border-slate-100">
                <th className="p-4 rounded-l-xl">নথিপত্র / ফাইলের নাম</th>
                <th className="p-4">সংরক্ষণ ক্যাটাগরি</th>
                <th className="p-4">সংশ্লিষ্ট আইডি (ID)</th>
                <th className="p-4">আপলোডকারী স্টাফ</th>
                <th className="p-4">আপলোডের তারিখ</th>
                <th className="p-4 text-right">ফাইলের সাইজ</th>
                <th className="p-4 text-center rounded-r-xl">অ্যাকশন কনসোল</th>
              </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50 font-medium">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/40 transition-colors">
                    
                    {/* File Name with Extension Icon */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          doc.fileType === 'PDF' ? 'bg-red-50 text-red-500' :
                          doc.fileType === 'DOCX' ? 'bg-blue-50 text-blue-500' : 'bg-amber-50 text-amber-500'
                        }`}>{
                          doc.fileType === 'PDF' ? <FileText size={16} /> : 
                           doc.fileType === 'DOCX' ? <FolderOpen size={16} /> : <Image size={16} />}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm max-w-xs truncate" title={doc.fileName}>
                            {doc.fileName}
                          </p>
                          <p className="text-[10px] text-slate-400 mt-0.5">ফাইল আইডি: {doc.id}</p>
                        </div>
                      </div>
                    </td>

                    {/* Category Column */}
                    <td className="p-4">
                      <span className="text-slate-700 font-bold bg-slate-100 px-2.5 py-1 rounded-lg text-[10px]">
                        {doc.category}
                      </span>
                    </td>

                    {/* Linked Member ID */}
                    <td className="p-4 font-mono font-bold text-slate-600">
                      {doc.memberId ? (
                        <span className="flex items-center gap-1">
                          <User size={12} className="text-slate-400" />
                          {doc.memberId}
                        </span>
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>

                    {/* Uploader Staff */}
                    <td className="p-4 text-slate-600 font-bold">{doc.uploadedBy}</td>

                    {/* Upload Date */}
                    <td className="p-4 text-slate-500 flex items-center gap-1 h-14">
                      <Calendar size={12} className="text-slate-400" />
                      {doc.uploadDate}
                    </td>

                    {/* Size Counter */}
                    <td className="p-4 text-right font-bold text-slate-500">{doc.fileSize}</td>

                    {/* Action Hub tools */}
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button 
                          onClick={() => setViewingDocument(doc)}
                          className="p-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#0c2483] transition-all shadow-2xs" 
                          title="ডকুমেন্ট ভিউ"
                        >
                          <Eye size={13} />
                        </button>
                        <button 
                          onClick={() => handleDownloadDocument(doc)}
                          className="p-1.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-emerald-600 transition-all shadow-2xs" 
                          title="ডাউনলোড ফাইল"
                        >
                          <Download size={13} />
                        </button>
                        <button 
                          onClick={() => handleDeleteDocument(doc.id)}
                          className="p-1.5 rounded-xl border border-slate-200 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all shadow-2xs" 
                          title="ডিলিট ফাইল"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center p-8 text-slate-400 font-bold">
                    আর্কাইভে কোনো মেম্বার বা অফিসিয়াল আপলোডেড ডকুমেন্ট ফাইল খুঁজে পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= DYNAMIC FILE UPLOAD MODAL DIALOG ================= */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">ডিজিটাল আর্কাইভ ফাইল আপলোডার</h3>
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form Content */}
            <form onSubmit={handleUploadFile} className="p-5 space-y-4 text-xs font-semibold">
              
              <div>
                <label className="block text-slate-500 mb-1">ফাইলের মূল শিরোনাম / নাম *</label>
                <input 
                  type="text" 
                  required
                  placeholder="উদা: মোরশেদ আলী জামিনদার হলফনামা"
                  value={newFile.fileName}
                  onChange={(e) => setNewFile({...newFile, fileName: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">সংরক্ষণ ক্যাটাগরি *</label>
                  <select 
                    value={newFile.category}
                    onChange={(e) => setNewFile({...newFile, category: e.target.value as any})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                  >
                    <option value="সদস্য ফাইল">সদস্য KYC ফাইল</option>
                    <option value="ঋণ চুক্তি">ঋণ চুক্তিপত্র</option>
                    <option value="অফিস নোটিশ">অফিস রেজুলেশন</option>
                    <option value="আইনি ফাইল">আইনি ও স্ট্যাম্প ফাইল</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">ফাইল ফরম্যাট টাইপ</label>
                  <select 
                    value={newFile.fileType}
                    onChange={(e) => setNewFile({...newFile, fileType: e.target.value as any})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white"
                  >
                    <option value="PDF">PDF ডকুমেন্ট</option>
                    <option value="JPG">JPG / ইমেজ কপি</option>
                    <option value="DOCX">DOCXোর্ড ফাইল</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">সংশ্লিষ্ট সদস্য বা লোন আইডি (ঐচ্ছিক)</label>
                <input 
                  type="text" 
                  placeholder="উদা: MB-৮৮১২ বা LN-৪০৯২"
                  value={newFile.memberId}
                  onChange={(e) => setNewFile({...newFile, memberId: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white font-mono uppercase"
                />
              </div>

              {/* Pseudo Drag & Drop Upload Zone Area */}
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                <UploadCloud size={28} className="text-slate-400 mx-auto mb-2 group-hover:text-[#0c2483] transition-colors" />
                <p className="text-slate-600 font-bold mb-0.5 text-xs">ডিভাইস থেকে ফাইল নির্বাচন করুন</p>
                <p className="text-slate-400 text-[10px] font-medium">সর্বোচ্চ ১০ মেগাবাইট (PDF, JPG, DOCX সমর্থিত)</p>
              </div>

              {/* Action Trigger Handles */}
              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center"
                >
                  বাতিল করুন
                </button>
                <button 
                  type="submit"
                  className="w-full bg-[#0c2483] hover:bg-[#0a1e6e] text-white py-2.5 rounded-xl font-bold transition-all text-center shadow-xs"
                >
                  আর্কাইভে যুক্ত করুন
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ================= DYNAMIC DOCUMENT DETAILS VIEW MODAL ================= */}
      {viewingDocument && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">নথিপত্র / ফাইলের বিস্তারিত তথ্য</h3>
              <button 
                onClick={() => setViewingDocument(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Details Body */}
            <div className="p-5 space-y-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  viewingDocument.fileType === 'PDF' ? 'bg-red-50 text-red-500' :
                  viewingDocument.fileType === 'DOCX' ? 'bg-blue-50 text-blue-500' : 'bg-amber-50 text-amber-500'
                }`}>
                  {viewingDocument.fileType === 'PDF' ? <FileText size={18} /> : 
                   viewingDocument.fileType === 'DOCX' ? <FolderOpen size={18} /> : <Image size={18} />}
                </div>
                <div className="overflow-hidden">
                  <p className="font-bold text-slate-900 text-sm truncate" title={viewingDocument.fileName}>
                    {viewingDocument.fileName}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">আইডি: {viewingDocument.id}</p>
                </div>
              </div>

              <div className="divide-y divide-slate-100 bg-white border border-slate-100 rounded-xl">
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">সংরক্ষণ ক্যাটাগরি:</span>
                  <span className="text-slate-900 font-bold">{viewingDocument.category}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">ফাইল ফরম্যাট:</span>
                  <span className="text-slate-900 font-bold font-mono">{viewingDocument.fileType}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">সংশ্লিষ্ট আইডি (ID):</span>
                  <span className="text-slate-900 font-bold font-mono">{viewingDocument.memberId || '-'}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">আপলোডকারী স্টাফ:</span>
                  <span className="text-slate-900 font-bold">{viewingDocument.uploadedBy}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">আপলোডের তারিখ:</span>
                  <span className="text-slate-500 font-medium">{viewingDocument.uploadDate}</span>
                </div>
                <div className="flex justify-between p-3">
                  <span className="text-slate-400">ফাইলের সাইজ:</span>
                  <span className="text-slate-900 font-bold">{viewingDocument.fileSize}</span>
                </div>
              </div>

              {/* Action Handles */}
              <div className="flex gap-3 pt-3 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setViewingDocument(null)}
                  className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center"
                >
                  বন্ধ করুন
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    handleDownloadDocument(viewingDocument);
                    setViewingDocument(null);
                  }}
                  className="w-full bg-[#0c2483] hover:bg-[#0a1e6e] text-white py-2.5 rounded-xl font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Download size={14} />
                  ডাউনলোড করুন
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default DocumentsPage;