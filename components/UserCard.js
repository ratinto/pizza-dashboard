export default function UserCard({ user }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
      <img src={user?.image || "/file.svg"} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
      <div>
        <div className="font-semibold text-gray-900 text-sm">{user?.name || "Demo User"}</div>
        <div className="text-xs text-gray-500">{user?.email || "demo@email.com"}</div>
      </div>
    </div>
  );
}