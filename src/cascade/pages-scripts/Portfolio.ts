

export default function Portfolio() {

  const orange = '#EE7905';
  const gray100 = '#6B6B6B';
  const gray64 = '#A1A1A1';
  const gray16 = '#aBaBaB';

  const datasetOne = [
    { value: 27, name: 'Early', color: orange },
    { value: 29, name: 'Early growth', color: gray100 },
    { value: 24, name: 'Growth', color: gray64 },
    { value: 20, name: 'PE/Buyout', color: gray16 }
  ];

  const datasetTwo = [
    { value: 78, name: 'US', color: orange },
    { value: 22, name: 'Europe', color: gray100 }
  ];

  const datasetThree = [
    { value: 24, name: 'Software', color: orange },
    { value: 12, name: 'FinTech', color: gray100 },
    { value: 10, name: 'SaaS', color: gray64 },
    { value: 12, name: 'Business serv.', color: gray16 },
    { value: 12, name: 'Consumer serv.', color: gray100 },
    { value: 7, name: 'Crypto-inf/Web3', color: gray64 },
    { value: 11, name: 'HealthTech', color: gray16 },
    { value: 3, name: 'BioTech', color: gray100 },
    { value: 2, name: 'ClimateTech', color: gray64 },
    { value: 2, name: 'DeepTech', color: gray16 },
    { value: 4, name: 'OtherTech', color: gray100 }
  ];

// Подготовка данных для графиков
  const chartsData = [
    {
      id: 'stage',
      dataset: datasetOne
    },
    {
      id: 'geography',
      dataset: datasetTwo
    },
    {
      id: 'sector',
      dataset: datasetThree
    }
  ];

  chartsData.forEach(chartData => {
    const ctx = document.getElementById(chartData.id).getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: chartData.dataset.map(item => `${item.name} `),
        datasets: [{
          data: chartData.dataset.map(item => item.value),
          backgroundColor: chartData.dataset.map(item => item.color),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },


          tooltip: {

            enabled: true,
            callbacks: {
              label: function(context) {
                return ` ${context.label}: ${context.parsed}%`;
              },
              title: function() {
                return ''; // Возвращает пустую строку, что эффективно убирает заголовок
              },

            }
          }
        }
      }
    });
  });

}