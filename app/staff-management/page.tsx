

// "use client";

// import { useEffect, useState } from "react";
// import {
//   Users,
//   UserMinus,
//   TrendingUp,
//   CircleAlert,
//   UserPlus,
// } from "lucide-react";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// type Employee = {
//   Name: string;
//   ID: string;
//   Role: string;
// };

// export default function StaffManagementPage() {
//   const [employees, setEmployees] = useState<Employee[]>([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const res = await fetch("/api/employees");
//       const data = await res.json();
//       setEmployees(data);
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#f5f5f7] p-6">
//       {/* Header */}
//       <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//         <div>
//           <h1 className="text-4xl font-extrabold text-[#111827]">
//             স্টাফ ম্যানেজমেন্ট{" "}
//             <span className="font-bold text-gray-800">
//               (Staff Management)
//             </span>
//           </h1>

//           <p className="mt-2 text-lg text-gray-500">
//             আপনার প্রতিষ্ঠানের সকল কর্মচারীদের তথ্য এবং কর্মক্ষমতা এখানে পরিচালনা করুন।
//           </p>
//         </div>

//         <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1736C6] px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#102ba5]">
//           <UserPlus size={20} />
//           নতুন স্টাফ যোগ করুন
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
//         <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
//           <p className="mb-4 text-sm font-medium text-gray-500">মোট কর্মী</p>
//           <h2 className="text-5xl font-extrabold text-[#1736C6]">
//             {employees.length}
//           </h2>
//           <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600">
//             <TrendingUp size={16} />
//             ডাটাবেস থেকে লোড করা
//           </div>
//         </div>

//         <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
//           <p className="mb-4 text-sm font-medium text-gray-500">
//             সক্রিয় কর্মচারী
//           </p>

//           <h2 className="text-5xl font-extrabold text-[#1736C6]">
//             {employees.filter((e) => e.Role !== "").length}
//           </h2>

//           <div className="mt-6">
//             <div className="h-2.5 w-full rounded-full bg-blue-100">
//               <div
//                 className="h-2.5 rounded-full bg-[#1736C6]"
//                 style={{
//                   width: `${employees.length
//                     ? (employees.filter((e) => e.Role !== "").length /
//                         employees.length) *
//                       100
//                     : 0}%`,
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
//           <p className="mb-4 text-sm font-medium text-gray-500">
//             গড় পারফরম্যান্স
//           </p>
//           <h2 className="text-5xl font-extrabold text-green-600">৮৮%</h2>
//           <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600">
//             <Users size={16} />
//             সময়মতো কর্মীরা সক্রিয়
//           </div>
//         </div>

//         <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
//           <p className="mb-4 text-sm font-medium text-gray-500">
//             অনুপস্থিত (আজ)
//           </p>
//           <h2 className="text-5xl font-extrabold text-red-600">০২</h2>
//           <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-500">
//             <CircleAlert size={16} />
//             ছুটিতে আছেন ১ জন
//           </div>
//         </div>
//       </div>

//       {/* TABLE SECTION */}
//       <div className="mt-10 rounded-2xl bg-secondary p-4 shadow-sm">

//         {/* TOP BAR */}
//         <div className="mb-3 flex items-center justify-between gap-4">

//           {/* LEFT TITLE */}
//           <TableCaption className="text-left font-semibold text-black">
//             কর্মীদের  ভূমিকাও তালিকা
//           </TableCaption>

//           {/* RIGHT BUTTONS */}
//           <div className="flex items-center gap-2">
//             <button className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100">
//               Filter
//             </button>

//             <button className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100">
//               Report
//             </button>

          
//           </div>

//         </div>

//         <Table>
//           <TableHeader>
//             <TableRow className="bg-blue-100">
//               <TableHead className="w-[200px]">নাম ও আইডি</TableHead>
//               <TableHead>ভূমিকা</TableHead>
//               <TableHead>এক্সেস লেভেল</TableHead>
//               <TableHead>পারফরম্যান্স</TableHead>
//               <TableHead>অবস্থা</TableHead>
//               <TableHead>অ্যাকশন</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {employees.map((emp, index) => (
//               <TableRow key={index}>
//                 <TableCell className="font-medium">{emp.Name}</TableCell>
//                 <TableCell>{emp.ID || "-"}</TableCell>
//                 <TableCell>{emp.Role}</TableCell>
//                 <TableCell>-</TableCell>
//                 <TableCell>-</TableCell>
//                 <TableCell>-</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>

//           {/* FOOTER */}
//           <TableFooter>
//             <TableRow>
//               <TableCell colSpan={6}>
//                 <div className="flex items-center justify-between w-full">

//                   {/* LEFT INFO */}
//                   <div className="text-sm text-gray-600">
//                     ৪০ জন কর্মীর মধ্যে ১-১০ দেখানো হচ্ছে
//                   </div>

//                   {/* RIGHT PAGINATION */}
//                   <div>
//                     <Pagination>
//                       <PaginationContent>
//                         <PaginationItem>
//                           <PaginationPrevious href="#" />
//                         </PaginationItem>

//                         <PaginationItem>
//                           <PaginationLink href="#">১</PaginationLink>
//                         </PaginationItem>

//                         <PaginationItem>
//                           <PaginationLink href="#" isActive>
//                             ২
//                           </PaginationLink>
//                         </PaginationItem>

//                         <PaginationItem>
//                           <PaginationLink href="#">৩</PaginationLink>
//                         </PaginationItem>

//                         <PaginationItem>
//                           <PaginationEllipsis />
//                         </PaginationItem>

//                         <PaginationItem>
//                           <PaginationNext href="#" />
//                         </PaginationItem>
//                       </PaginationContent>
//                     </Pagination>
//                   </div>

//                 </div>
//               </TableCell>
//             </TableRow>
//           </TableFooter>

//         </Table>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import {
  Users,
  UserMinus,
  TrendingUp,
  CircleAlert,
  UserPlus,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Employee = {
  Name: string;
  ID: string;
  Role: string;
};

export default function StaffManagementPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await fetch("/api/employees");
      const data = await res.json();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-[#111827]">
            স্টাফ ম্যানেজমেন্ট{" "}
            <span className="font-bold text-gray-800">
              (Staff Management)
            </span>
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            আপনার প্রতিষ্ঠানের সকল কর্মচারীদের তথ্য এবং কর্মক্ষমতা এখানে পরিচালনা করুন।
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#1736C6] px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#102ba5]">
          <UserPlus size={20} />
          নতুন স্টাফ যোগ করুন
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-gray-500">মোট কর্মী</p>
          <h2 className="text-5xl font-extrabold text-[#1736C6]">
            {employees.length}
          </h2>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600">
            <TrendingUp size={16} />
            ডাটাবেস থেকে লোড করা
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-gray-500">
            সক্রিয় কর্মচারী
          </p>

          <h2 className="text-5xl font-extrabold text-[#1736C6]">
            {employees.filter((e) => e.Role !== "").length}
          </h2>

          <div className="mt-6">
            <div className="h-2.5 w-full rounded-full bg-blue-100">
              <div
                className="h-2.5 rounded-full bg-[#1736C6]"
                style={{
                  width: `${employees.length
                    ? (employees.filter((e) => e.Role !== "").length /
                        employees.length) *
                      100
                    : 0}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-gray-500">
            গড় পারফরম্যান্স
          </p>
          <h2 className="text-5xl font-extrabold text-green-600">৮৮%</h2>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600">
            <Users size={16} />
            সময়মতো কর্মীরা সক্রিয়
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-sm font-medium text-gray-500">
            অনুপস্থিত (আজ)
          </p>
          <h2 className="text-5xl font-extrabold text-red-600">০২</h2>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-500">
            <CircleAlert size={16} />
            ছুটিতে আছেন ১ জন
          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="mt-10 rounded-2xl bg-secondary p-4 shadow-sm">

        {/* TOP BAR */}
        <div className="mb-3 flex items-center justify-between gap-4">

          <TableCaption className="text-left font-semibold text-black">
            কর্মীদের  ভূমিকাও তালিকা
          </TableCaption>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100">
              Filter
            </button>

            <button className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-100">
              Report
            </button>
          </div>

        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-blue-100">
              <TableHead className="w-[200px]">নাম ও আইডি</TableHead>
              <TableHead>ভূমিকা</TableHead>
              <TableHead>এক্সেস লেভেল</TableHead>
              <TableHead>পারফরম্যান্স</TableHead>
              <TableHead>অবস্থা</TableHead>
              <TableHead>অ্যাকশন</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {employees.map((emp, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{emp.Name}</TableCell>
                <TableCell>{emp.ID || "-"}</TableCell>
                <TableCell>{emp.Role}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={6}>
                <div className="flex items-center justify-between w-full">

                  <div className="text-sm text-gray-600">
                    ৪০ জন কর্মীর মধ্যে ১-১০ দেখানো হচ্ছে
                  </div>

                  <div>
                    <Pagination>
                      <PaginationContent>

                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>

                        <PaginationItem>
                          <PaginationLink href="#">১</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            ২
                          </PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                          <PaginationLink href="#">৩</PaginationLink>
                        </PaginationItem>

                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>

                      </PaginationContent>
                    </Pagination>
                  </div>

                </div>
              </TableCell>
            </TableRow>
          </TableFooter>

        </Table>
      </div>

      {/* ✅ NEW ADDED SECTION (RBAC + INSIGHTS) */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* LEFT - RBAC */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            অ্যাক্সেস কন্ট্রোল (RBAC)
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">

            <div className="rounded-lg border p-3">
              <p className="font-semibold text-blue-600">Admin</p>
              <p>সিস্টেমের সব কনফিগারেশন ও সেটিংস পরিবর্তনের পূর্ণ নিয়ন্ত্রণ।</p>
            </div>

            <div className="rounded-lg border p-3">
              <p className="font-semibold text-green-600">Field Officer</p>
              <p>মেম্বার ডাটা দেখা, সংগ্রহ এবং রিপোর্ট দেখার সুবিধা।</p>
            </div>

            <div className="rounded-lg border p-3">
              <p className="font-semibold text-orange-600">Auditor</p>
              <p>শুধুমাত্র ট্রানজেকশন রিপোর্ট দেখার অনুমতি।</p>
            </div>

          </div>
        </div>

        {/* MIDDLE - INSIGHTS */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            পারফরম্যান্স ট্র্যাকিং ইনসাইটস
          </h2>

          <div className="mt-4 space-y-3 text-sm text-gray-600">

            <div className="rounded-lg bg-gray-50 p-3">
              দেরি রিকভারি রেট এবং নতুন মেম্বার এনরোলমেন্টের ভিত্তিতে কর্মীদের তুলনা।
            </div>

            <div className="rounded-lg border p-3">
              <p className="font-semibold text-indigo-600">
                Best Performer
              </p>
              <p>নাসরিন আক্তার শামা — ৮৩% রিকভারি</p>
            </div>

            <div className="rounded-lg border p-3">
              <p className="font-semibold text-purple-600">
                Upcoming Training
              </p>
              <p>ডিজিটাল কালেকশন ট্রেনিং — ১৫ মে (Field Officers)</p>
            </div>

          </div>
        </div>

        {/* RIGHT - STATS */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">
            সিস্টেম স্ট্যাটাস
          </h2>

          <div className="mt-4 space-y-4 text-sm">

            <div className="rounded-lg bg-green-50 p-3 text-green-700">
              ✔ Active Users: 124
            </div>

            <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
              📊 Daily Reports: 32
            </div>

            <div className="rounded-lg bg-yellow-50 p-3 text-yellow-700">
              ⚠ Pending Approvals: 5
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}