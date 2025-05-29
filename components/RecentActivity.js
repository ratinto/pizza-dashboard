const activity = [
  { text: "Order PZA025 delivered", time: "2 minutes ago", color: "bg-green-500", textColor: "text-green-700" },
  { text: "New order PZA026 received", time: "5 minutes ago", color: "bg-blue-500", textColor: "text-blue-700" },
  { text: "Order PZA024 out for delivery", time: "12 minutes ago", color: "bg-yellow-400", textColor: "text-yellow-700" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl p-6 shadow border flex-1 min-w-[320px]">
      <div className="font-extrabold text-lg text-gray-900 mb-1">Recent Activity</div>
      <div className="text-gray-500 text-sm mb-4">
        Latest updates on your <span className="underline cursor-pointer">orders</span>
      </div>
      <ul className="space-y-3">
        {activity.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className={`w-3 h-3 mt-1 rounded-full ${item.color}`}></span>
            <div>
              <span className={`font-medium ${item.textColor}`}>{item.text}</span>
              <div className="text-xs text-gray-400">{item.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}