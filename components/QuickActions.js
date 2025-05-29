const actions = [
  { label: "View all pizza orders", color: "bg-blue-500", bg: "bg-blue-50", text: "text-blue-700" },
  { label: "Check delivery status", color: "bg-green-500", bg: "bg-green-50", text: "text-green-700" },
  { label: "Update order status", color: "bg-purple-500", bg: "bg-purple-50", text: "text-purple-700" },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl p-6 shadow border flex-1 min-w-[320px]">
      <div className="font-extrabold text-lg text-gray-900 mb-1">Quick Actions</div>
      <div className="text-gray-500 text-sm mb-4">Common tasks you might want to perform</div>
      <div className="flex flex-col gap-3">
        {actions.map((action) => (
          <div key={action.label} className={`flex items-center gap-3 px-4 py-3 rounded-lg ${action.bg}`}>
            <span className={`w-2 h-2 rounded-full ${action.color}`}></span>
            <span className={`font-medium ${action.text}`}>{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}