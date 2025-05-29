'use client';
import { pizzaOrders } from '../../utils/data';

export default function PizzaOrdersPage() {
  const statusStyles = {
    Delivered: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    'Out for delivery': 'bg-blue-100 text-blue-700',
    Preparing: 'bg-purple-100 text-purple-700',
    Cancelled: 'bg-red-100 text-red-700',

  };

  return (
    <div className="py-10 px-8 md:px-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Pizza Orders</h1>
      <p className="text-gray-600 mb-8">
        View and manage all pizza orders below.
      </p>
      <div className="bg-white rounded-xl shadow border overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b text-gray-500 text-sm">
              <th className="py-4 px-6 text-left font-semibold">Order ID</th>
              <th className="py-4 px-6 text-left font-semibold">Customer</th>
              <th className="py-4 px-6 text-left font-semibold">Status</th>
              <th className="py-4 px-6 text-left font-semibold">Items</th>
              <th className="py-4 px-6 text-left font-semibold">Placed</th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {pizzaOrders.map(order => (
              <tr
                key={order.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="py-4 px-6 font-mono font-semibold text-indigo-600">{order.id}</td>
                <td className="py-4 px-6 text-indigo-600">{order.customer}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  {order.items.map((item, idx) => (
                    <span key={item} className="inline-block mr-2 px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded">
                      {item}
                    </span>
                  ))}
                </td>
                <td className="py-4 px-6 text-gray-400 text-sm">{order.time}</td>
                <td className="py-4 px-6">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}