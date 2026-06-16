// app/membersData.ts
export interface Member {
  id: string;
  name: string;
  initial: string;
  spouseName: string;
  phone: string;
  center: string;
  branch: string;
  joinDate: string;
  loanStatus: string;
  savingsBalance: string;
  status: 'সক্রিয়' | 'নিষ্ক্রিয়' | 'বকেয়া';
  statusType: 'active' | 'inactive' | 'due';
}

export const initialMembersData: Member[] = [
  {
    id: '1',
    name: 'রাশেদ আহমেদ',
    initial: 'রা',
    spouseName: 'মরিয়ম বেগম',
    phone: '০১৭১২৩৪৫৬৭৮',
    center: 'শাপলা কেন্দ্র - ০১',
    branch: 'মিরপুর শাখা',
    joinDate: '১২ জানু, ২০২৪',
    loanStatus: 'চলতি লোন: ২৫,০০০',
    savingsBalance: '৳ ৫০০০',
    status: 'সক্রিয়',
    statusType: 'active'
  },
  {
    id: '2',
    name: 'সুমাইয়া আক্তার',
    initial: 'সু',
    spouseName: 'মো: রফিক',
    phone: '০১৯৮৭৬৫৪৩২১',
    center: 'জুঁই কেন্দ্র - ০৫',
    branch: 'উত্তরা শাখা',
    joinDate: '০৫ মার্চ, ২০২৩',
    loanStatus: 'কোন লোন নেই',
    savingsBalance: '৳ ১২,০০০',
    status: 'সক্রিয়',
    statusType: 'active'
  },
  {
    id: 'M-১০৫২',
    name: 'মো: হাসান আলী',
    initial: 'হা',
    spouseName: 'ফাতেমা খাতুন',
    phone: '০১৫৫৫১১২২৩৩',
    center: 'শাপলা কেন্দ্র - ০১',
    branch: 'মিরপুর শাখা',
    joinDate: '২০ নভেম্বর, ২০২৩',
    loanStatus: 'বকেয়া কিস্তি: ৩,৫০০',
    savingsBalance: '৳ ৪,৫০০',
    status: 'বকেয়া',
    statusType: 'due'
  },
  {
    id: 'M-১৯৫৬',
    name: 'শফিক উদ্দিন',
    initial: 'শ',
    spouseName: 'পারভীন আক্তার',
    phone: '০১৮৪৪৩৩২২১১',
    center: 'গোলাপ কেন্দ্র - ১২',
    branch: 'সাভার শাখা',
    joinDate: '০১ জুন, ২০২২',
    loanStatus: 'ক্লোজড',
    savingsBalance: '৳ ৮০০',
    status: 'নিষ্ক্রিয়',
    statusType: 'inactive'
  }
];