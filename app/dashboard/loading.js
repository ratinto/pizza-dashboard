export default function DashboardLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-indigo-500"></div>
      <span className="ml-3 text-indigo-600 font-semibold">Loading dashboard...</span>
    </div>
  );
}