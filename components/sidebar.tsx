
// "use client"

// import Link from "next/link"
// import {
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   FileText,
//   PiggyBank,
//   Wallet,
//   Bell,
//   Folder,
//   Building2,
//   Menu,
// } from "lucide-react"
// import { useState } from "react"

// const menu = [
//   { label: "Dashboard", icon: LayoutDashboard, href: "/DashboardOverview" },
//   { label: "Members", icon: Users, href: "/MembersPage" },
//   { label: "Loans", icon: CreditCard, href: "/LoansPage" },
//   { label: "Accounting", icon: Wallet, href: "/AccountPage" },
//   { label: "Reports", icon: FileText, href: "/ReportsPage" },
//   { label: "Savings", icon: PiggyBank, href: "/SavingsManagement" },
//   { label: "Collections", icon: Folder, href: "/CollectionManagement" },
//   { label: "Staff Management", icon: Users, href: "/StaffManagement" },
//   { label: "Branch Management", icon: Building2, href: "/BranchCenterManagement" },
//   { label: "Notifications", icon: Bell, href: "/DigitalVault" },
//   { label: "Documents", icon: FileText, href: "/DocumentsPage" },
// ]

// export default function Sidebar() {
//   const [open, setOpen] = useState(false)

//   return (
//     <>
//       {/* Mobile Top Bar */}
//       <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-border flex items-center justify-between px-4 z-50">
//         <h1 className="text-lg font-bold text-blue-700">Admin Console</h1>

//         <button
//           onClick={() => setOpen(!open)}
//           className="p-2 rounded-md hover:bg-gray-100"
//         >
//           <Menu size={22} />
//         </button>
//       </div>

//       {/* Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed
//           top-0
//           left-0
//           h-screen
//           w-72
//           bg-blue-50
//           shadow-sm
//           flex
//           flex-col
//           z-50
//           transform
//           transition-transform
//           duration-300
//           overflow-hidden

//           ${open ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0
//         `}
//       >
//         {/* Logo */}
//         <div className="px-6 py-5  shrink-0">
//           <h1 className="text-xl font-bold text-blue-700">
//             Admin Console
//           </h1>
//           <p className="text-xs text-gray-500">Regional HQ</p>
//         </div>

//         {/* Scrollable Menu */}
//         <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scrollbar-thin">
//           {menu.map((item, idx) => {
//             const Icon = item.icon

//             return (
//               <Link
//                 key={idx}
//                 href={item.href}
//                 onClick={() => setOpen(false)}
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   px-4
//                   py-3
//                   rounded-lg
//                   text-gray-600
//                   hover:bg-blue-700
//                   hover:text-blue-100
//                   transition
//                   whitespace-nowrap
//                 "
//               >
//                 <Icon size={18} />
//                 <span className="text-sm font-medium">
//                   {item.label}
//                 </span>
//               </Link>
//             )
//           })}
//         </nav>
//       </aside>
//     </>
//   )
// }
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  PiggyBank,
  Wallet,
  Bell,
  Folder,
  Building2,
  Menu,
} from "lucide-react"

// Props-এর মাধ্যমে Layout থেকে স্টেট রিসিভ করা হচ্ছে
interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/DashboardOverview" },
  { label: "Members", icon: Users, href: "/MembersPage" },
  { label: "Loans", icon: CreditCard, href: "/LoansPage" },
  { label: "Accounting", icon: Wallet, href: "/AccountPage" },
  { label: "Reports", icon: FileText, href: "/ReportsPage" },
  { label: "Savings", icon: PiggyBank, href: "/SavingsManagement" },
  { label: "Collections", icon: Folder, href: "/CollectionManagement" },
  { label: "Staff Management", icon: Users, href: "/StaffManagement" },
  { label: "Branch Management", icon: Building2, href: "/BranchCenterManagement" },
  { label: "Notifications", icon: Bell, href: "/DigitalVault" },
  { label: "Documents", icon: FileText, href: "/DocumentsPage" },
]

export default function Sidebar({ open, setOpen, isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* --- Mobile Top Bar --- */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">
        <h1 className="text-lg font-bold text-blue-700">Admin Console</h1>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* --- Mobile Backdrop Overlay --- */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* --- Universal Sidebar Container --- */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          bg-white
          border-r border-gray-200
          shadow-xs
          flex
          flex-col
          z-50
          transition-all
          duration-300
          ease-in-out

          /* Mobile Responsive Control */
          ${open ? "translate-x-0 w-72" : "-translate-x-full lg:translate-x-0"}
          
          /* Desktop Width Control (ছবি অনুযায়ী আইকন-রেইল বনাম ফুল উইডথ) */
          ${isCollapsed ? "lg:w-20" : "lg:w-72"}
        `}
      >
        {/* Logo / Header Area */}
        <div className={`px-6 py-5 shrink-0 flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          {!isCollapsed ? (
            <div>
              <h1 className="text-xl font-bold text-blue-700">Admin Console</h1>
              <p className="text-xs text-gray-400">Regional HQ</p>
            </div>
          ) : (
            <div className="h-9 w-9 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
          )}
        </div>

        {/* Navigation Items (Scrollable) */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-none">
          {menu.map((item, idx) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setOpen(false)}
                title={isCollapsed ? item.label : ""} // কলাপ্সড মোডে হোভার করলে নাম দেখাবে
                className={`
                  flex
                  items-center
                  rounded-xl
                  transition-all
                  duration-200
                  whitespace-nowrap
                  ${isCollapsed ? "justify-center p-3 mx-auto w-12" : "gap-3 px-4 py-3"}
                  ${isActive 
                    ? "bg-blue-700 text-white" 
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  }
                `}
              >
                <Icon size={20} className={isActive ? "text-white" : "text-gray-500"} />
                
                {/* সাইডবার কলাপ্সড থাকলে টেক্সট হাইড হয়ে যাবে */}
                {!isCollapsed && (
                  <span className="text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}