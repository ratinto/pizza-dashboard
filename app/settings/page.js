'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";

export default function SettingsPage() {
  const { data: session } = useSession();
  const user = session?.user || {
    name: "Demo User",
    email: "demo@email.com",
    image: "/file.svg",
  };

  // Example settings state (for demo; real app would persist these)
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="py-10 px-8 md:px-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Settings</h1>
      <p className="text-gray-600 mb-8">
        Manage your application preferences and account settings.
      </p>

      <div className="bg-white rounded-xl shadow border p-8 space-y-8">
        {/* Profile Settings */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-indigo-700">Profile</h2>
          <div className="flex items-center gap-4">
            <img
              src={user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-indigo-100 object-cover"
            />
            <div>
              <div className="font-bold text-gray-800">{user.name}</div>
              <div className="text-gray-500">{user.email}</div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-indigo-700">Notifications</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="accent-indigo-600 w-5 h-5"
              checked={emailNotifications}
              onChange={() => setEmailNotifications((e) => !e)}
            />
            <span className="text-gray-700">Receive email notifications for new orders</span>
          </label>
        </div>

        {/* Appearance Settings */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-indigo-700">Appearance</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="accent-indigo-600 w-5 h-5"
              checked={darkMode}
              onChange={() => setDarkMode((d) => !d)}
            />
            <span className="text-gray-700">Enable dark mode</span>

          </label>
        </div>
      </div>
    </div>
  );
}