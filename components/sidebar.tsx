
"use client"

import Link from "next/link"
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
} from "lucide-react"

const menu = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/DashboardOverview" },
  { label: "Members", icon: Users, href: "/members" },
  { label: "Loans", icon: CreditCard, href: "/loans" },
  { label: "Accounting", icon: Wallet, href: "/accounting" },
  { label: "Reports", icon: FileText, href: "/reports" },
  { label: "Savings", icon: PiggyBank, href: "/SavingsManagement" },
  { label: "Collections", icon: Folder, href: "/CollectionManagement" },
  { label: "Staff Management", icon: Users, href: "/StaffManagement" },
  { label: "Branch Management", icon: Building2, href: "/BranchCenterManagement" },
  { label: "Notifications", icon: Bell, href: "/DigitalVault" },
  { label: "Documents", icon: FileText, href: "/documents" },
]

export default function Sidebar() {
  return (
    <aside
  className="
    hidden
    lg:flex
    fixed
    left-0
    top-0
    h-screen
    w-72
    bg-white
    border border-border
    shadow-sm
    flex-col
    z-50
  "
>
      {/* Logo */}
      <div className="px-6 py-5 ">
        <h1 className="text-xl font-bold text-blue-700">Admin Console</h1>
        <p className="text-xs text-gray-500">Regional HQ</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {menu.map((item, idx) => {
          const Icon = item.icon

          return (
            <Link
              key={idx}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition"
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}