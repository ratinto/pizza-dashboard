'use client';

import { pizzaOrders } from "../../utils/data";
import { useMemo } from "react";

function getTopCustomers(orders, count = 3) {
  const stats = {};
  orders.forEach(order => {
    stats[order.customer] = (stats[order.customer] || 0) + 1;
  });
  return Object.entries(stats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([customer, total]) => ({ customer, total }));
}

function getPopularPizzas(orders, count = 3) {
  const pizzaStats = {};
  orders.forEach(order => {
    order.items.forEach(item => {
      pizzaStats[item] = (pizzaStats[item] || 0) + 1;
    });
  });
  return Object.entries(pizzaStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([pizza, total]) => ({ pizza, total }));
}

function getOrderTrends(orders) {
  // Orders per day for last 7 days
  const map = {};
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    map[key] = 0;
  }
  orders.forEach(order => {
    if (!order.createdAt) return;
    const key = order.createdAt.slice(0, 10);
    if (map[key] !== undefined) map[key]++;
  });
  return map;
}

export default function AnalyticsPage() {
  const topCustomers = useMemo(() => getTopCustomers(pizzaOrders), []);
  const popularPizzas = useMemo(() => getPopularPizzas(pizzaOrders), []);
  const orderTrends = useMemo(() => getOrderTrends(pizzaOrders), []);
  const trendLabels = Object.keys(orderTrends);
  const trendData = Object.values(orderTrends);

  return (
    <div className="py-10 px-8 md:px-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Analytics</h1>
      <p className="text-gray-600 mb-8">
        Get insights and visualize your pizza business performance.
      </p>

      {/* Order Trends */}
      <div className="mb-10">
        <h2 className="font-bold text-lg mb-2 text-indigo-700">Orders in Last 7 Days</h2>
        <div className="bg-white rounded-xl shadow border p-4">
          <div className="flex items-end space-x-2 h-40">
            {trendData.map((val, idx) => (
              <div key={trendLabels[idx]} className="flex flex-col items-center" style={{ width: "40px" }}>
                <div
                  className="bg-indigo-500 w-6 rounded-t"
                  style={{ height: `${val * 18 || 4}px`, minHeight: '4px', transition: 'height 0.3s' }}
                  title={val + " orders"}
                ></div>
                <div className="text-xs text-gray-400 mt-2" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>
                  {trendLabels[idx].slice(5)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-1 text-xs text-gray-500">
            {trendLabels.map(d => <span key={d}>{d.slice(5)}</span>)}
          </div>
        </div>
      </div>

      {/* Top Customers & Popular Pizzas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Customers */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-indigo-700">Top Customers</h2>
          <div className="bg-white rounded-xl shadow border p-4">
            {topCustomers.length === 0 && <div className="text-gray-400">No orders yet.</div>}
            <ol className="space-y-2">
              {topCustomers.map((c, i) => (
                <li key={c.customer} className="flex justify-between">
                  <span className="font-medium text-gray-700">{i + 1}. {c.customer}</span>
                  <span className="bg-indigo-50 text-indigo-700 rounded px-2 py-0.5 text-xs font-semibold">{c.total} orders</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Popular Pizzas */}
        <div>
          <h2 className="font-bold text-lg mb-2 text-indigo-700">Most Popular Pizzas</h2>
          <div className="bg-white rounded-xl shadow border p-4">
            {popularPizzas.length === 0 && <div className="text-gray-400">No pizza sales yet.</div>}
            <ol className="space-y-2">
              {popularPizzas.map((p, i) => (
                <li key={p.pizza} className="flex justify-between">
                  <span className="font-medium text-gray-700">{i + 1}. {p.pizza}</span>
                  <span className="bg-indigo-50 text-indigo-700 rounded px-2 py-0.5 text-xs font-semibold">{p.total} sold</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}