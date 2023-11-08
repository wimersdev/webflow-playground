import Chart from 'chart.js/auto';

const orange = '#EE7905'
const gray100 = '#6B6B6B'
const gray64 = '#A1A1A1'
const gray16 = '#aBaBaB'

const charts = [
  {
    id: 'stage',
    data: [25, 25, 35, 15],
    backgroundColor: [orange, gray100, gray64, gray16]
  },
  {
    id: 'geography',
    data: [75, 25],
    backgroundColor: [orange, gray100]
  },
  {
    id: 'sector',
    data: [25, 25, 50],
    backgroundColor: [orange, gray100, gray64]
  }
]

for ( let i = 0; i < charts.length; i++) {
  const ctx = document.getElementById(charts[i].id).getContext('2d');

  const data = {
    datasets: [{
      data: charts[i].data, // Значения для каждого сегмента
      backgroundColor: charts[i].backgroundColor, // Цвета для каждого сегмента
      borderWidth: 0,
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false
    },


  };

  const chart = new Chart(ctx, config);
}