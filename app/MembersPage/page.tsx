
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  UserPlus, 
  Search, 
  UserCheck, 
  UserMinus, 
  AlertTriangle, 
  Edit3, 
  Trash2, 
  Eye, 
  MapPin, 
  Phone, 
  Calendar,
  X,
  User,
  Wallet
} from 'lucide-react';



import { initialMembersData, Member } from '../../membersData';


// TypeScript Interface for Member Data


export default function MembersPage() {
  const router = useRouter();
  
  // Modal Open/Close State for Adding Member
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Edit Modal States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    spouseName: '',
    phone: '',
    center: '',
    branch: '',
    status: 'সক্রিয়' as 'সক্রিয়' | 'নিষ্ক্রিয়' | 'বকেয়া',
    statusType: 'active' as 'active' | 'inactive' | 'due'
  });

  // Delete Confirmation Modal States
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState<Member | null>(null);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Form Inputs State for New Member
  const [newMember, setNewMember] = useState({
    name: '',
    spouseName: '',
    phone: '',
    center: 'শাপলা কেন্দ্র - ০১',
    branch: 'মিরপুর শাখা',
    savings: '০.০০',
    status: 'সক্রিয়' as const,
    statusType: 'active' as const
  });

  // Mock Data: Initial Members Dataset
  const [members, setMembers] = useState<Member[]>(initialMembersData);


  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMember.name || !newMember.phone) return;

    const randomId = `M-${Math.floor(1000 + Math.random() * 9000)}`;
    const addedMember: Member = {
      id: randomId,
      name: newMember.name,
      initial: newMember.name.substring(0, 2),
      spouseName: newMember.spouseName || 'N/A',
      phone: newMember.phone,
      center: newMember.center,
      branch: newMember.branch,
      joinDate: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      loanStatus: 'কোন লোন নেই',
      savingsBalance: `৳ ${newMember.savings}`,
      status: newMember.status,
      statusType: 'active',
    };

    setMembers([addedMember, ...members]);
    setIsModalOpen(false);
    setNewMember({
      name: '',
      spouseName: '',
      phone: '',
      center: 'শাপলা কেন্দ্র - ০১',
      branch: 'মিরপুর শাখা',
      savings: '০.০০',
      status: 'সক্রিয়',
      statusType: 'active'
    });
  };

  const handleViewDetails = (member: Member) => {
    router.push(`/MembersPage/${member.id}`);
  };

  const handleOpenEditModal = (member: Member) => {
    setEditFormData({
      id: member.id,
      name: member.name,
      spouseName: member.spouseName,
      phone: member.phone,
      center: member.center,
      branch: member.branch,
      status: member.status,
      statusType: member.statusType
    });
    setIsEditModalOpen(true);
  };

  const handleEditMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMembers(members.map(member => {
      if (member.id === editFormData.id) {
        let type: 'active' | 'inactive' | 'due' = 'active';
        if (editFormData.status === 'নিষ্ক্রিয়') type = 'inactive';
        if (editFormData.status === 'বকেয়া') type = 'due';

        return {
          ...member,
          name: editFormData.name,
          initial: editFormData.name.substring(0, 2),
          spouseName: editFormData.spouseName,
          phone: editFormData.phone,
          center: editFormData.center,
          status: editFormData.status,
          statusType: type
        };
      }
      return member;
    }));
    setIsEditModalOpen(false);
  };

  const handleOpenDeleteModal = (member: Member) => {
    setMemberToDelete(member);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteMember = () => {
    if (memberToDelete) {
      setMembers(members.filter(m => m.id !== memberToDelete.id));
      setIsDeleteModalOpen(false);
      setMemberToDelete(null);
    }
  };

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.id.includes(searchQuery) || 
                          member.phone.includes(searchQuery);
    
    if (statusFilter === 'All') return matchesSearch;
    if (statusFilter === 'Active') return matchesSearch && member.statusType === 'active';
    if (statusFilter === 'Due') return matchesSearch && member.statusType === 'due';
    if (statusFilter === 'Inactive') return matchesSearch && member.statusType === 'inactive';
    return matchesSearch;
  });

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8 max-w-screen-2xl mx-auto w-full box-border">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-2">
        <div className="space-y-1 max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            সদস্য ডিরেক্টরি (Members Profile)
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
            আপনার এনজিওর সকল মাঠ পর্যায়ের নিবন্ধিত সদস্য তালিকা এবং তাদের সঞ্চয় ও ঋণের প্রোফাইল।
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0 group"
        >
          <UserPlus size={18} className="group-hover:scale-110 transition-transform" />
          <span>নতুন সদস্য অন্তর্ভুক্ত করুন</span>
        </button>
      </div>

      {/* Counter Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-emerald-200 transition-all">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><UserCheck size={24} /></div>
          <div className="min-w-0">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">সক্রিয় সদস্য</p>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mt-0.5 truncate">
              {members.filter(m => m.statusType === 'active').length} জন
            </h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-red-200 transition-all">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0"><AlertTriangle size={24} /></div>
          <div className="min-w-0">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">বকেয়া কিস্তি প্রোফাইল</p>
            <h3 className="text-xl md:text-2xl font-extrabold text-red-600 mt-0.5 truncate">
              {members.filter(m => m.statusType === 'due').length} জন
            </h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-slate-300 sm:col-span-2 lg:col-span-1 transition-all">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0"><UserMinus size={24} /></div>
          <div className="min-w-0">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">নিষ্ক্রিয় অ্যাকাউন্ট</p>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-700 mt-0.5 truncate">
              {members.filter(m => m.statusType === 'inactive').length} জন
            </h3>
          </div>
        </div>
      </div>

      {/* Search & Controls */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 w-full md:w-96 transition-all focus-within:border-[#0c2483] focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
          <Search size={18} className="text-slate-400 mr-2 shrink-0" />
          <input 
            type="text" 
            placeholder="সদস্যের নাম, আইডি বা মোবাইল নাম্বার..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-slate-700 outline-none w-full placeholder-slate-400 font-medium"
          />
        </div>

        <div className="flex gap-1 overflow-x-auto whitespace-nowrap bg-slate-50 p-1.5 rounded-xl border border-slate-200/60">
          {[
            { id: 'All', label: 'সকল সদস্য' },
            { id: 'Active', label: 'সক্রিয়' },
            { id: 'Due', label: 'বকেয়া' },
            { id: 'Inactive', label: 'নিষ্ক্রিয়' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                statusFilter === tab.id
                  ? 'bg-white text-[#0c2483] shadow-sm font-extrabold'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl border border-slate-100 p-4 shadow-xs flex flex-col justify-between space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-[#0c2483] flex items-center justify-center font-bold text-xs shrink-0">
                    {member.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{member.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">ID: {member.id}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full font-bold text-[9px] inline-flex items-center gap-1 ${
                  member.statusType === 'active' ? 'bg-emerald-50 text-emerald-600' :
                  member.statusType === 'due' ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-500'
                }`}>
                  {member.status}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 font-medium border-t border-b border-slate-50 py-2.5">
                <p className="truncate"><span className="text-slate-400">অভিভাবক:</span> {member.spouseName}</p>
                <p className="flex items-center gap-1"><Phone size={12} className="text-slate-400" /> {member.phone}</p>
                <p className="flex items-center gap-1 text-[11px] text-slate-500 truncate"><MapPin size={12} className="text-slate-400" /> {member.center}</p>
                <p className="flex items-center gap-1 text-[11px] text-slate-400"><Calendar size={12} /> {member.joinDate}</p>
              </div>

              <div className="flex justify-between items-center pt-1">
                <div>
                  <p className="text-[10px] text-slate-400">মোট সঞ্চয়</p>
                  <p className="font-bold text-[#0c2483] text-sm">{member.savingsBalance}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400">ঋণ স্থিতি</p>
                  <p className={`text-xs font-bold ${member.statusType === 'due' ? 'text-red-500' : 'text-slate-500'}`}>{member.loanStatus}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-50">
                <button onClick={() => handleViewDetails(member)} className="flex items-center justify-center gap-1 bg-slate-50 hover:bg-indigo-50 hover:text-[#0c2483] py-2 rounded-lg text-slate-500 font-bold text-[11px] transition-colors">
                  <Eye size={13} /> বিবরণ
                </button>
                <button onClick={() => handleOpenEditModal(member)} className="flex items-center justify-center gap-1 bg-slate-50 hover:bg-slate-100 text-slate-600 py-2 rounded-lg font-bold text-[11px] transition-colors">
                  <Edit3 size={13} /> পরিবর্তন
                </button>
                <button onClick={() => handleOpenDeleteModal(member)} className="flex items-center justify-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg font-bold text-[11px] transition-colors">
                  <Trash2 size={13} /> মুছুন
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center text-slate-400 font-bold sm:col-span-2">
            কোন সদস্যের তথ্য পাওয়া যায়নি।
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 text-xs font-bold border-b border-slate-100">
                <th className="p-4">সদস্যের নাম ও আইডি</th>
                <th className="p-4">স্বামী/পিতার নাম</th>
                <th className="p-4">মোবাইল ও কেন্দ্র</th>
                <th className="p-4">ভর্তি তারিখ</th>
                <th className="p-4">আমানত/সঞ্চয়</th>
                <th className="p-4">ঋণ অবস্থা</th>
                <th className="p-4 text-center">স্ট্যাটাস</th>
                <th className="p-4 text-center">অ্যাকশন</th>
               </tr>
            </thead>
            <tbody className="text-xs divide-y divide-slate-50 font-medium">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-50/40 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 text-[#0c2483] flex items-center justify-center font-bold text-xs shrink-0">
                          {member.initial}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-slate-800 text-sm truncate">{member.name}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">ID: {member.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600 font-semibold truncate">{member.spouseName}</td>
                    <td className="p-4">
                      <div className="space-y-0.5 text-slate-600">
                        <p className="flex items-center gap-1"><Phone size={11} className="text-slate-400" />{member.phone}</p>
                        <p className="flex items-center gap-1 text-[10px] text-slate-400 truncate"><MapPin size={10} />{member.center} ({member.branch})</p>
                      </div>
                    </td>
                    <td className="p-4 text-slate-500">
                      <div className="flex items-center gap-1"><Calendar size={12} className="text-slate-400" />{member.joinDate}</div>
                    </td>
                    <td className="p-4 font-bold text-[#0c2483] text-sm">{member.savingsBalance}</td>
                    <td className="p-4">
                      <span className={`text-[11px] font-bold truncate block max-w-[150px] ${member.statusType === 'due' ? 'text-red-500' : 'text-slate-500'}`}>
                        {member.loanStatus}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] inline-flex items-center gap-1 ${
                        member.statusType === 'active' ? 'bg-emerald-50 text-emerald-600' :
                        member.statusType === 'due' ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          member.statusType === 'active' ? 'bg-emerald-500' :
                          member.statusType === 'due' ? 'bg-red-500' : 'bg-slate-400'
                        }`}></span>
                        {member.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-3 text-slate-400">
                        <button onClick={() => handleViewDetails(member)} className="hover:text-[#0c2483] transition-colors p-1" title="প্রোফাইল দেখুন">
                          <Eye size={15} />
                        </button>
                        <button onClick={() => handleOpenEditModal(member)} className="hover:text-slate-700 transition-colors p-1" title="সম্পাদনা করুন">
                          <Edit3 size={15} />
                        </button>
                        <button onClick={() => handleOpenDeleteModal(member)} className="hover:text-red-500 transition-colors p-1" title="মুছে ফেলুন">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center p-8 text-slate-400 font-bold">
                    কোন সদস্যের তথ্য পাওয়া যায়নি।
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Member Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 my-auto max-h-[calc(100vh-2rem)] flex flex-col">
            <div className="flex justify-between items-center p-5 border-b border-slate-100 shrink-0">
              <h3 className="text-base font-bold text-slate-900">সদস্য তথ্য সংশোধন (Edit Profile)</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleEditMemberSubmit} className="p-5 space-y-4 text-xs font-semibold overflow-y-auto flex-1">
              <div>
                <label className="block text-slate-500 mb-1">সদস্যের নাম *</label>
                <input 
                  type="text" 
                  required
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">স্বামী/পিতার নাম</label>
                  <input 
                    type="text" 
                    value={editFormData.spouseName}
                    onChange={(e) => setEditFormData({...editFormData, spouseName: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">মোবাইল নাম্বার *</label>
                  <input 
                    type="text" 
                    required
                    value={editFormData.phone}
                    onChange={(e) => setEditFormData({...editFormData, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">কেন্দ্রের নাম</label>
                  <select 
                    value={editFormData.center}
                    onChange={(e) => setEditFormData({...editFormData, center: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  >
                    <option>শাপলা কেন্দ্র - ০১</option>
                    <option>জুঁই কেন্দ্র - ০৫</option>
                    <option>গোলাপ কেন্দ্র - ১২</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">স্ট্যাটাস</label>
                  <select 
                    value={editFormData.status}
                    onChange={(e) => setEditFormData({...editFormData, status: e.target.value as any})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  >
                    <option value="সক্রিয়">সক্রিয়</option>
                    <option value="বকেয়া">বকেয়া</option>
                    <option value="নিষ্ক্রিয়">নিষ্ক্রিয়</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 shrink-0">
                <button 
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center text-sm order-2 sm:order-1"
                >
                  বাতিল
                </button>
                <button 
                  type="submit"
                  className="w-full bg-[#0c2483] hover:bg-[#0a1e6e] text-white py-2.5 rounded-xl font-bold transition-all text-center text-sm shadow-sm order-1 sm:order-2"
                >
                  হালনাগাদ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && memberToDelete && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full shadow-2xl border border-slate-100 p-6 text-center my-auto">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-3">
              <Trash2 size={24} />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">আপনি কি নিশ্চিত?</h3>
            <p className="text-slate-500 text-xs font-medium mb-5 leading-relaxed">
              সদস্য <span className="font-bold text-slate-800">"{memberToDelete.name}"</span> (ID: {memberToDelete.id})-এর প্রোফাইলটি ডিরেক্টরি থেকে স্থায়ীভাবে মুছে ফেলা হবে।
            </p>
            <div className="flex gap-3 text-xs font-bold">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl transition-all text-sm"
              >
                না, রাখুন
              </button>
              <button 
                onClick={handleDeleteMember}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl transition-all shadow-sm text-sm"
              >
                হ্যাঁ, মুছে ফেলুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Member Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 my-auto max-h-[calc(100vh-2rem)] flex flex-col">
            <div className="flex justify-between items-center p-5 border-b border-slate-100 shrink-0">
              <h3 className="text-base font-bold text-slate-900">নতুন সদস্য ফরম</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddMember} className="p-5 space-y-4 text-xs font-semibold overflow-y-auto flex-1">
              <div>
                <label className="block text-slate-500 mb-1">সদস্যের নাম *</label>
                <input 
                  type="text" 
                  required
                  placeholder="উদা: মোছা: নাসরিন বেগম"
                  value={newMember.name}
                  onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">স্বামী/পিতার নাম</label>
                  <input 
                    type="text" 
                    placeholder="পিতার নাম লিখুন"
                    value={newMember.spouseName}
                    onChange={(e) => setNewMember({...newMember, spouseName: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">মোবাইল নাম্বার *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="০১XXXXXXXXX"
                    value={newMember.phone}
                    onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 mb-1">কেন্দ্রের নাম</label>
                  <select 
                    value={newMember.center}
                    onChange={(e) => setNewMember({...newMember, center: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  >
                    <option>শাপলা কেন্দ্র - ০১</option>
                    <option>জুঁই কেন্দ্র - ০৫</option>
                    <option>গোলাপ কেন্দ্র - ১২</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">শাখা অফিস</label>
                  <select 
                    value={newMember.branch}
                    onChange={(e) => setNewMember({...newMember, branch: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                  >
                    <option>মিরপুর শাখা</option>
                    <option>উত্তরা শাখা</option>
                    <option>সাভার শাখা</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-500 mb-1">প্রাথমিক সঞ্চয় আমানত (৳)</label>
                <input 
                  type="text" 
                  placeholder="০.০০"
                  value={newMember.savings}
                  onChange={(e) => setNewMember({...newMember, savings: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none font-medium text-slate-700 focus:border-[#0c2483] focus:bg-white text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 shrink-0">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full border border-slate-200 text-slate-600 hover:bg-slate-50 py-2.5 rounded-xl font-bold transition-all text-center text-sm order-2 sm:order-1"
                >
                  বাতিল
                </button>
                <button 
                  type="submit"
                  className="w-full bg-[#0c2483] hover:bg-[#0a1e6e] text-white py-2.5 rounded-xl font-bold transition-all text-center text-sm shadow-sm order-1 sm:order-2"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}