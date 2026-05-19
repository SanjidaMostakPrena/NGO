"use client"
import {
  Users,
  Wallet,
  PiggyBank,
  CreditCard,
  TrendingUp,
  Bell,
  CalendarDays,
} from "lucide-react"

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const chartData = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 5200, expense: 2800 },
  { month: "Apr", income: 4100, expense: 2000 },
  { month: "May", income: 6200, expense: 3900 },
  { month: "Jun", income: 5400, expense: 3200 },
]

const stats = [
  {
    title: "Total Members",
    value: "12,450",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Total Loans",
    value: "৳ 8,85,45,000",
    icon: Wallet,
    color: "bg-emerald-500",
  },
  {
    title: "Monthly Collection",
    value: "৳ 45,30,000",
    icon: CreditCard,
    color: "bg-orange-500",
  },
  {
    title: "Total Savings",
    value: "৳ 3,45,00,000",
    icon: PiggyBank,
    color: "bg-purple-500",
  },
]

const notifications = [
  "Mirpur branch audit at 10:00 AM",
  "Monthly budget planning meeting",
  "Field officer workshop tomorrow",
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Header */}
      <div
        className="
          flex
          flex-col
          gap-4
          border-b
          bg-white
          px-6
          py-5
          dark:border-slate-800
          dark:bg-slate-900
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <h1
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            Dashboard Overview
          </h1>

          <p className="text-sm text-slate-500">
            Welcome back, Admin 👋
          </p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="
              w-full
              rounded-xl
              border
              bg-slate-50
              px-4
              py-2
              text-sm
              outline-none
              dark:border-slate-700
              dark:bg-slate-800
              md:w-72
            "
          />

          <button
            className="
              rounded-xl
              bg-emerald-600
              px-5
              py-2
              text-sm
              font-medium
              text-white
              transition-all
              hover:bg-emerald-700
            "
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 p-6">
        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  bg-white
                  p-5
                  shadow-sm
                  dark:bg-slate-900
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>

                    <h2
                      className="
                        mt-2
                        text-2xl
                        font-bold
                        text-slate-900
                        dark:text-white
                      "
                    >
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      ${item.color}
                    `}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />

                  <span className="text-sm text-emerald-600">
                    +12% this month
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Chart + Calendar */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-3
          "
        >
          {/* Chart */}
          <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
              xl:col-span-2
            "
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2
                  className="
                    text-lg
                    font-semibold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Monthly Income vs Expense
                </h2>

                <p className="text-sm text-slate-500">
                  Financial overview of last 6 months
                </p>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="income"
                  radius={[10, 10, 0, 0]}
                />

                <Bar
                  dataKey="expense"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Calendar */}
          <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
            "
          >
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-emerald-600" />

              <h2
                className="
                  text-lg
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Calendar
              </h2>
            </div>

            <div className="mt-6">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-dashed
                  p-10
                  text-center
                  text-sm
                  text-slate-500
                  dark:border-slate-700
                "
              >
                Calendar Component Here
              </div>
            </div>
          </div>
        </div>

        {/* Notifications + Meetings */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-2
          "
        >
          {/* Notifications */}
          <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
            "
          >
            <div className="mb-5 flex items-center gap-3">
              <Bell className="h-5 w-5 text-orange-500" />

              <h2
                className="
                  text-lg
                  font-semibold
                  text-slate-900
                  dark:text-white
                "
              >
                Notifications
              </h2>
            </div>

            <div className="space-y-4">
              {notifications.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    bg-slate-50
                    p-4
                    dark:bg-slate-800
                  "
                >
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Meetings */}
          <div
            className="
              rounded-3xl
              bg-white
              p-6
              shadow-sm
              dark:bg-slate-900
            "
          >
            <h2
              className="
                mb-5
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Upcoming Meetings
            </h2>

            <div className="space-y-4">
              <div
                className="
                  rounded-2xl
                  border
                  p-4
                  dark:border-slate-700
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      Mirpur Branch Audit
                    </h3>

                    <p className="text-sm text-slate-500">
                      Today • 10:00 AM
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-emerald-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-emerald-700
                    "
                  >
                    Upcoming
                  </span>
                </div>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  p-4
                  dark:border-slate-700
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">
                      Budget Planning Session
                    </h3>

                    <p className="text-sm text-slate-500">
                      Tomorrow • 02:00 PM
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-blue-100
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-blue-700
                    "
                  >
                    Scheduled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

