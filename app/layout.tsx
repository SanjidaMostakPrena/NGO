// "use client";

// import React, { useState, createContext, useContext } from "react";
// import { Geist, Geist_Mono, Inter } from "next/font/google";

// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import { cn } from "@/lib/utils";
// import Sidebar from "@/components/sidebar";
// import Topbar from "@/components/Topbar"; // Importing your Topbar component

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// const fontMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

// // Create a Search Context so any sub-page or dashboard layout can listen to the search query
// const SearchContext = createContext<string>("");
// export const useSearch = () => useContext(SearchContext);

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   // State to hold the live search query from the Topbar
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   return (
//     <html
//       lang="bn" /* Changed to 'bn' to correctly support your Bengali admin font rendering */
//       suppressHydrationWarning
//       className={cn(
//         "antialiased",
//         fontMono.variable,
//         "font-sans",
//         inter.variable
//       )}
//     >
//       <body>
//         <ThemeProvider>
//           <div className="flex min-h-screen bg-[#f4f6f9]">
//             {/* Sidebar matching image_fb4979.png layout */}
//             <Sidebar />

//             {/* Main content wrapper containing both Topbar and sub-pages */}
//             <div className="flex-1 flex flex-col  bg-secondary lg:ml-72 min-w-0">

//               {/* Added Topbar with search action handler */}
//               <Topbar onSearch={(query) => setSearchQuery(query)} />

//               {/* Page Body containing actual dashboard widgets */}
//               <main className="flex-1 p-6 overflow-y-auto">
//                 <SearchContext.Provider value={searchQuery}>
//                   {children}
//                 </SearchContext.Provider>
//               </main>

//             </div>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
"use client"

import React, { useState, createContext, useContext } from "react"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Sidebar from "@/components/sidebar"
import Topbar from "@/components/Topbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const SearchContext = createContext<string>("")
export const useSearch = () => useContext(SearchContext)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [searchQuery, setSearchQuery] = useState<string>("")

  // মোবাইল ড্রয়ারের জন্য স্টেট
  const [open, setOpen] = useState<boolean>(false)

  // ডেস্কটপে আইকন-রেইল ও ওপেন/ক্লোজ করার গ্লোবাল স্টেট
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen bg-[#f4f6f9]">
            {/* সাইডবারে স্টেটগুলো পাস করা হলো */}
            <Sidebar
              open={open}
              setOpen={setOpen}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />

            {/* মেইন কনটেন্ট র্যাপার: 
              isCollapsed ট্রু হলে মার্জিন কমে ছবির মতো 'lg:ml-20' হয়ে যাবে 
            */}
            <div
              className={cn(
                "flex min-w-0 flex-1 flex-col bg-secondary transition-all duration-300 ease-in-out",
                isCollapsed ? "lg:ml-20" : "lg:ml-72"
              )}
            >
              {/* টপবার এরিয়া */}
              <Topbar
                onSearch={(query) => setSearchQuery(query)}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />

              {/* পেজ বডি */}
              <main className="flex-1 overflow-y-auto p-6">
                <SearchContext.Provider value={searchQuery}>
                  {children}
                </SearchContext.Provider>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
