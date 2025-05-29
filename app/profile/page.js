'use client';
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user || {
    name: "Demo User",
    email: "demo@email.com",
    image: "/file.svg",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-indigo-100 object-cover mb-4"
        />
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">{user.name}</h1>
        <p className="text-gray-500 mb-4">{user.email}</p>

        <div className="w-full mt-6">
          <div className="mb-2 text-sm text-gray-400 uppercase font-semibold">Account Details</div>
          <div className="bg-indigo-50 rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">Name:</span>
              <span className="text-gray-900">{user.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">Email:</span>
              <span className="text-gray-900">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}