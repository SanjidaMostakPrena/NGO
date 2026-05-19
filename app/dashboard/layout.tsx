import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle */}
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">

        {/* NAVBAR */}
        <div className="navbar bg-base-200 border-b px-4">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost lg:hidden"
          >
            {/* menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <span className="font-semibold text-gray-700 px-3">
            Admin Console
          </span>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6 bg-[#f5f7fb] min-h-screen">
          {children}
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}