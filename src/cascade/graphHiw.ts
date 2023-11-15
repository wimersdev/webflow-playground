function graphHiw() {
  const colGrey = document.getElementsByClassName('graph-fill-grey');
  const colOrange = document.getElementsByClassName('graph-fill-orange');
  const graphArray = [
    { grey: 1.5, orange: -0.1, line: 0 },
    { grey: 2.0, orange: -0.2, line: -1 },
    { grey: 2.2, orange: -0.3, line: -2 },
    { grey: 2.0, orange: -0.2, line: -3 },
    { grey: 2.2, orange: 0, line: -1.1 },
    { grey: 2.4, orange: 0.2, line: 0 },
    { grey: 2.5, orange: 0.4, line: 0.6 },
    { grey: 2.3, orange: 0.6, line: 0.9 },
    { grey: 2.5, orange: 0.8, line: 1 },
    { grey: 2.5, orange: 1.0, line: 0.6 },
    { grey: 2.4, orange: 0.2, line: 12 },
    { grey: 2.5, orange: 0.4, line: 12 },
  ];

  const colHeight = 15;
  const rem = 16;
  const max = Math.max(...graphArray.map((item) => item.grey));
  const maxHeight = colHeight * rem;
  const fillHeight = max / maxHeight;
  const gap = 3.5 * rem;

  const svg = document.getElementById('graph');
  const maxValue = Math.max(...graphArray.map((item) => item.line));
  const scaleFactor = maxHeight / maxValue / 1.125;
  const lineOffsetY = -16;

  for (let i = 0; i < graphArray.length; i++) {
    setTimeout(() => {
      colGrey[i].style.height = `${graphArray[i].grey / fillHeight}px`;
      if (graphArray[i].grey >= 0) {
        colGrey[i].style.height = `${graphArray[i].grey / fillHeight + 1}px`;
      } else {
        colGrey[i].style.height = `${(graphArray[i].grey / fillHeight) * -1}px`;
        console.log((graphArray[i].grey / fillHeight) * -1);
        colGrey[i].style.marginBottom = `${graphArray[i].grey / fillHeight}px`;
      }
      if (graphArray[i].orange >= 0) {
        colOrange[i].style.height = `${graphArray[i].orange / fillHeight + 1}px`;
      } else {
        colOrange[i].style.height = `${(graphArray[i].orange / fillHeight) * -1}px`;
        console.log((graphArray[i].orange / fillHeight) * -1);
        colOrange[i].style.marginBottom = `${graphArray[i].orange / fillHeight}px`;
      }
    }, (i * graphArray[i].grey) / 100);

    //Draw SVG Graph Orange line
    const x1 = i * gap; // расстояние между точками по горизонтали
    const y1 = maxHeight - graphArray[i].line * scaleFactor - lineOffsetY; // инвертируем Y, так как SVG рисует сверху вниз
    const x2 = (i + 1) * gap;
    const y2 = maxHeight - graphArray[i + 1].line * scaleFactor - lineOffsetY;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1.toString());
    line.setAttribute('y1', y1.toString());
    line.setAttribute('x2', x2.toString());
    line.setAttribute('y2', y2.toString());
    line.setAttribute('stroke', '#ee7905');
    line.setAttribute('stroke-width', '2');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    svg.appendChild(line);
  }
}

export default graphHiw;

document.addEventListener('DOMContentLoaded', () => {
  // setup scroll into/out of view
  document.querySelectorAll('.graph-animated').forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // on scroll into view
            graphHiw();
          }
        });
      },
      {
        threshold: 0.5, // adjust the threshold as needed
      }
    ).observe(trigger);
  });
});
