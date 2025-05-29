// Centralized data file

export const pizzaOrders = [
  {
    id: 'PZA025',
    customer: 'John Doe',
    status: 'Delivered',
    time: '2 minutes ago',
    items: ['Pepperoni', 'Margherita'],
    createdAt: '2025-05-29T14:58:00Z',
  },
  {
    id: 'PZA026',
    customer: 'Jane Smith',
    status: 'Pending',
    time: '5 minutes ago',
    items: ['Veggie'],
    createdAt: '2025-05-29T14:53:00Z',
  },
  {
    id: 'PZA024',
    customer: 'Tom Lee',
    status: 'Out for delivery',
    time: '12 minutes ago',
    items: ['BBQ Chicken', 'Hawaiian'],
    createdAt: '2025-05-01T12:00:00Z',
  },
  {
  id: 'PZA027',
  customer: 'Emily Clark',
  status: 'Preparing',
  time: '1 minute ago',
  items: ['Margherita'],
},
{
  id: 'PZA028',
  customer: 'Michael Brown',
  status: 'Delivered',
  time: '10 minutes ago',
  items: ['Pepperoni', 'Cheese Burst'],
},
{
  id: 'PZA029',
  customer: 'Olivia White',
  status: 'Pending',
  time: '8 minutes ago',
  items: ['Farmhouse'],
},
{
  id: 'PZA030',
  customer: 'Daniel Wilson',
  status: 'Out for delivery',
  time: '3 minutes ago',
  items: ['Veggie', 'Paneer Tikka'],
},
{
  id: 'PZA031',
  customer: 'Sophia Martinez',
  status: 'Preparing',
  time: '6 minutes ago',
  items: ['BBQ Chicken'],
},
{
  id: 'PZA032',
  customer: 'Liam Johnson',
  status: 'Cancelled',
  time: '15 minutes ago',
  items: ['Hawaiian'],
},
{
  id: 'PZA033',
  customer: 'Ava Davis',
  status: 'Delivered',
  time: '20 minutes ago',
  items: ['Cheese Burst', 'Veggie'],
},
{
  id: 'PZA034',
  customer: 'Ethan Lewis',
  status: 'Pending',
  time: '9 minutes ago',
  items: ['Pepperoni', 'Paneer Tikka'],
},


  // Add more as needed...
];

export const dashboardStats = [
  { label: "Total Orders", key: "totalOrders", color: "bg-blue-500" },
  { label: "This Month", key: "thisMonth", color: "bg-green-500" },
  { label: "Pending", key: "pending", color: "bg-yellow-400" },
  { label: "Delivered", key: "delivered", color: "bg-purple-500" },
];

// Helper to calculate stats
function calculateDashboardStatsValues(orders) {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let delivered = 0;
  let pending = 0;
  let thisMonth = 0;

  orders.forEach(order => {
    if (order.status === 'Delivered') delivered += 1;
    if (order.status === 'Pending') pending += 1;
    const created = new Date(order.createdAt);
    if (created.getMonth() === currentMonth && created.getFullYear() === currentYear) {
      thisMonth += 1;
    }
  });

  return {
    totalOrders: orders.length,
    thisMonth,
    pending,
    delivered,
  };
}

export const dashboardStatsValues = calculateDashboardStatsValues(pizzaOrders);