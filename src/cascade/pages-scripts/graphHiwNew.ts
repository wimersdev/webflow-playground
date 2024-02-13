import Chart from 'chart.js/auto'

export default function graphHiwNew() {

  const orange = '#EE7905';
  const gray64 = '#A1A1A1';

  (async function() {

    const graphArray = [
      { grey: 1.0, orange: -0.2, line: -0.2 },
      { grey: 0.9, orange: -0.25, line: -0.45 },
      { grey: 1.0, orange: -0.3, line: -0.7 },
      { grey: 1.1, orange: -0.15, line: -0.9 },
      { grey: 1.3, orange: -0.1, line: -1 },
      { grey: 1.5, orange: 0, line: 0 },
      { grey: 1.75, orange: 0.2, line: 0.2 },
      { grey: 2.1, orange: 0.3, line: 0.4 },
      { grey: 2.4, orange: 0.4, line: 0.8 },
      { grey: 2.6, orange: 0.5, line: 1.2 },
      { grey: 2.9, orange: 0.6, line: 1.8 },
      { grey: 2.9, orange: 1.0, line: 2.9 },
    ];

    new Chart(
      document.getElementById('hiwgraph'),
      {
        type: 'line',
        data: {
          labels: graphArray.map(row => row),
          datasets: [
            {
              label: '',
              data: graphArray.map(row => row.line),
              type: 'line',
              pointRadius: 0,
              borderColor: orange,
            },
            {
              label: '',
              data: graphArray.map(row => row.grey),
              type: 'bar',
              backgroundColor: gray64,
              barThickness:16,
            },
            {
              label: '',
              data: graphArray.map(row => row.orange),
              type: 'bar',
              backgroundColor: orange,
              barThickness:16,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled:false
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: true,
              border: {
                display: false
              },
              grid: {
                display: false
              },
              ticks: {
                min: -1,
                max: 5,
                stepSize: 1,
                suggestedMin: 0.5,
                suggestedMax: 5.5,
                callback: function(label, index, labels) {
                  switch (label) {
                    case -1:
                      return '-1.0';
                    case 0:
                      return '0';
                    case 1:
                      return '1';

                  }
                },
                gridLines: {
                  display: false
                }
              }
            },
          },
        }
      }
    );
  })();


}
