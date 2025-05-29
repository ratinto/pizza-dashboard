export default function StatCard({ label, value, color }) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow border">
      <span className={`inline-block w-3 h-3 rounded-full ${color}`}></span>
      <div>
        <div className="text-gray-500 text-sm font-medium">{label}</div>
        <div className="text-2xl font-extrabold text-gray-900">{value}</div>
      </div>
    </div>
  );
}