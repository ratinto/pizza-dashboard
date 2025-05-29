export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-gray-900/80">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-indigo-500"></div>
      <span className="ml-4 text-indigo-600 dark:text-indigo-300 font-semibold text-lg">Loading...</span>
    </div>
  );
}