export default function graph_hiw() {

const columns = document.getElementsByClassName("graph-fill")
const years = document.getElementsByClassName("graph-year")
const sums = document.getElementsByClassName("graph-sum")
const values = document.getElementsByClassName("graph-value")

const graphArray = [
  {
    year: 2012,
    sum: 517.7,
    value: 2.205,
  },
  {
    year: 2013,
    sum: 648.4,
    value: 2.543,
  },
  {
    year: 2014,
    sum: 836.6,
    value: 3.708,
  },
  {
    year: 2015,
    sum: 903.1,
    value: 4.318,
  },
  {
    year: 2016,
    sum: 967.6,
    value: 4.709,
  },
  {
    year: 2017,
    sum: 1169.1,
    value: 4.886,
  },
  {
    year: 2018,
    sum: 1239.0,
    value: 4.873,
  },
  {
    year: 2019,
    sum: 1362.1,
    value: 4.691,
  },
  {
    year: 2020,
    sum: 1331.6,
    value: 4.822,
  },
  {
    year: 2021,
    sum: 1492.0,
    value: 4.806,
  },
  {
    year: 2022,
    sum: 1705.0,
    value: 2.549,
  }
];



const maxSum = Math.max(...graphArray.map(el=>el.sum))
const maxHeight = 16 * 16
const fillHeight = maxSum/maxHeight
const svg = document.getElementById('graph');
const gap = 4.5 * 16
const lineOffsetY = 52
const maxValue = Math.max(...graphArray.map(item => item.value));
const scaleFactor = maxHeight / maxValue / 1.125;




for (let i = 0; i < graphArray.length; i++) { // Убедитесь, что i < graphArray.length - 1, чтобы избежать ошибки out of bounds

  years[i].innerHTML = graphArray[i].year

  //Set filled column height
  setTimeout(() => {
    columns[i].style.height = `${graphArray[i].sum / fillHeight}px`;


  }, i * graphArray[i].sum / 100);

  //Set Value Position Y
  const valuesY = maxHeight + lineOffsetY - graphArray[i].value * scaleFactor;
  values[i].style.bottom = maxHeight - valuesY + lineOffsetY + 24 + 'px';

  //Draw SVG Graph Orange line
  const x1 = i * gap; // расстояние между точками по горизонтали
  const y1 = maxHeight + lineOffsetY - graphArray[i].value * scaleFactor; // инвертируем Y, так как SVG рисует сверху вниз

  const x2 = (i + 1) * gap;
  const y2 = maxHeight + lineOffsetY - graphArray[i + 1].value * scaleFactor;
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1.toString());
  line.setAttribute('y1', y1.toString());
  line.setAttribute('x2', x2.toString());
  line.setAttribute('y2', y2.toString());
  line.setAttribute('stroke', '#ee7905');
  line.setAttribute('stroke-width', '2');

  svg.appendChild(line);

  //Edit text values

  sums[i].innerHTML = '$' + graphArray[i].sum
  values[i].innerHTML = graphArray[i].value


}

