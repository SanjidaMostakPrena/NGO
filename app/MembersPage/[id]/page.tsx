'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Phone, 
  MapPin, 
  Calendar, 
  Wallet, 
  User, 
  AlertCircle, 
  Edit3, 
  Trash2,
  CreditCard,
  Home,
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { Member, initialMembersData } from '../../../membersData';

export default function MemberDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  const {id:slug} = params
 console.log(params,"params data");
console.log(slug,"this is documentid from new params");

  useEffect(() => {
    // Get the ID from URL params
   
    
    let id = params.id as string;
    
    // Decode the URL-encoded ID
    id = decodeURIComponent(id);
    
    console.log('Original ID from URL:', params.id);
    console.log('Decoded ID:', id);
    
    // Find the member by ID from the imported data
    const foundMember = initialMembersData.find(m => m.id === id);
    
    console.log('Found member:', foundMember);
    
    setTimeout(() => {
      setMember(foundMember || null);
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleGoBack = () => {
    router.back();
  };

  const handleEdit = () => {
    console.log('Edit member:', member?.id);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this member?')) {
      console.log('Member deleted');
      router.push('/members');
    }
  };

  const getStatusConfig = (statusType: string) => {
    switch(statusType) {
      case 'active':
        return { color: 'emerald', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: CheckCircle, label: 'সক্রিয় সদস্য' };
      case 'due':
        return { color: 'red', bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', icon: AlertTriangle, label: 'বকেয়া সদস্য' };
      case 'inactive':
        return { color: 'gray', bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', icon: XCircle, label: 'নিষ্ক্রিয় সদস্য' };
      default:
        return { color: 'gray', bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200', icon: User, label: 'সদস্য' };
    }
  };

  const statusConfig = member ? getStatusConfig(member.statusType) : getStatusConfig('active');
  const StatusIcon = statusConfig.icon;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0c2483] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">সদস্যের তথ্য লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">সদস্য পাওয়া যায়নি</h2>
          <p className="text-slate-500 mb-6">আপনার অনুসন্ধান করা সদস্যটি খুঁজে পাওয়া যায়নি।</p>
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 bg-[#0c2483] hover:bg-[#0a1e6e] text-white px-6 py-3 rounded-xl font-medium transition-all"
          >
            <ArrowLeft size={18} />
            পেছনে ফিরুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={handleGoBack}
          className="mb-6 inline-flex items-center gap-2 text-slate-600 hover:text-[#0c2483] transition-colors font-medium group bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          ফিরে যান
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-gradient-to-r from-[#0c2483] to-[#1a3bb5] p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
                <span className="text-4xl font-bold">{member.initial}</span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{member.name}</h1>
                <p className="text-white/80 text-sm mb-3">সদস্য আইডি: {member.id}</p>
                <div className="inline-flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${statusConfig.bg} ${statusConfig.text} border ${statusConfig.border}`}>
                    <StatusIcon size={12} />
                    {statusConfig.label}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleEdit}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium"
                >
                  <Edit3 size={16} />
                  সম্পাদনা
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500/20 hover:bg-red-500/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium text-red-100"
                >
                  <Trash2 size={16} />
                  মুছুন
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <User size={20} className="text-[#0c2483]" />
                <h2 className="text-lg font-bold text-slate-800">ব্যক্তিগত তথ্যাবলী</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1 flex items-center gap-1">
                    <User size={14} />
                    স্বামী/পিতার নাম
                  </p>
                  <p className="text-slate-800 font-medium text-base">{member.spouseName}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1 flex items-center gap-1">
                    <Phone size={14} />
                    মোবাইল নাম্বার
                  </p>
                  <p className="text-slate-800 font-medium text-base">{member.phone}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <MapPin size={20} className="text-[#0c2483]" />
                <h2 className="text-lg font-bold text-slate-800">কেন্দ্র ও শাখার তথ্য</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1 flex items-center gap-1">
                    <Home size={14} />
                    নিবন্ধিত কেন্দ্র
                  </p>
                  <p className="text-slate-800 font-medium text-base">{member.center}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1 flex items-center gap-1">
                    <Briefcase size={14} />
                    শাখা অফিস
                  </p>
                  <p className="text-slate-800 font-medium text-base">{member.branch}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <p className="text-slate-500 text-sm mb-1 flex items-center gap-1">
                    <Calendar size={14} />
                    ভর্তির তারিখ
                  </p>
                  <p className="text-slate-800 font-medium text-base">{member.joinDate}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
                <Wallet size={20} className="text-[#0c2483]" />
                <h2 className="text-lg font-bold text-slate-800">আর্থিক তথ্য</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-5 border border-emerald-200">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-emerald-700 text-sm font-medium">মোট সঞ্চয় ব্যালেন্স</p>
                    <Wallet size={20} className="text-emerald-600" />
                  </div>
                  <p className="text-emerald-900 font-bold text-3xl">{member.savingsBalance}</p>
                </div>

                <div className={`rounded-xl p-5 border ${
                  member.statusType === 'due' 
                    ? 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <p className={`text-sm font-medium ${
                      member.statusType === 'due' ? 'text-red-700' : 'text-blue-700'
                    }`}>
                      ঋণের বর্তমান অবস্থা
                    </p>
                    <CreditCard size={20} className={member.statusType === 'due' ? 'text-red-600' : 'text-blue-600'} />
                  </div>
                  <p className={`font-bold text-xl ${
                    member.statusType === 'due' ? 'text-red-800' : 'text-blue-800'
                  }`}>
                    {member.loanStatus}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}