
"use client";

import { Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Search */}
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm rounded-lg border outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 cursor-pointer" size={20} />
        <Settings className="text-gray-600 cursor-pointer" size={20} />

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-blue-600" />
      </div>
    </header>
  );
}