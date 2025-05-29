'use client';
import { useSession } from "next-auth/react";
import StatCard from "../../components/StatCard";
import QuickActions from "../../components/QuickActions";
import RecentActivity from "../../components/RecentActivity";
import { dashboardStats, dashboardStatsValues } from "../../utils/data";

export default function Dashboard() {
  const { data: session } = useSession();
  const user = session?.user || {
    name: "Demo User",
    email: "demo@email.com",
    image: "/file.svg",
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar is handled in app/layout.js */}
      <main className="flex-1 overflow-y-auto py-10 px-4 md:px-12">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Hello, {user.name}! <span role="img" aria-label="Wave">👋</span>
          </h1>
          <span className="ml-auto px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 border border-green-200">Online</span>
        </div>
        <div className="text-gray-600 mb-6 text-base">
          Welcome back to your pizza orders dashboard. Here&apos;s what&apos;s happening today.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={dashboardStatsValues[stat.key]}
              color={stat.color}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </main>
    </div>
  );
}