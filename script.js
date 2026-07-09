// Restaurant Chart Example
const ctx = document.getElementById('restaurantChart').getContext('2d');
const restaurantChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Reservations',
        data: [20, 25, 18, 30, 27],
        borderColor: '#f97316',
        fill: false
      },
      {
        label: 'Orders',
        data: [80, 95, 70, 100, 105],
        borderColor: '#22c55e',
        fill: false
      },
      {
        label: 'Revenue ($)',
        data: [2000, 2500, 1800, 3000, 3000],
        borderColor: '#38bdf8',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Example refresh button
document.getElementById('refresh').addEventListener('click', () => {
  alert("Restaurant data refreshed!");
});
