'use client';

export default function NotificationsPage() {
  return (
    <div className="py-10 px-8 md:px-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Notifications</h1>
      <p className="text-gray-600 mb-8">
        Here you will see all recent system and order notifications.
      </p>
      <div className="bg-white rounded-xl shadow border p-8 text-gray-500 text-center">
        No new notifications.
      </div>
    </div>
  );
}