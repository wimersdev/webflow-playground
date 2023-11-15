export default function graph01() {
  function graphAnimation() {
    const columns = document.getElementsByClassName('graph-fill');
    const years = document.getElementsByClassName('graph-year');
    const sums = document.getElementsByClassName('graph-sum');
    const values = document.getElementsByClassName('graph-value');

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
      },
    ];

    const maxSum = Math.max(...graphArray.map((el) => el.sum));
    const maxHeight = 16 * 16;
    const fillHeight = maxSum / maxHeight;
    const svg = document.getElementById('graph');
    const gap = 4.5 * 16;
    const lineOffsetY = 52;
    const maxValue = Math.max(...graphArray.map((item) => item.value));
    const scaleFactor = maxHeight / maxValue / 1.125;

    for (let i = 0; i < graphArray.length; i++) {
      // Убедитесь, что i < graphArray.length - 1, чтобы избежать ошибки out of bounds

      years[i].innerHTML = String(graphArray[i].year);

      //Set filled column height
      setTimeout(() => {
        columns[i].style.height = `${graphArray[i].sum / fillHeight}px`;
      }, (i * graphArray[i].sum) / 100);

      //Set Value Position Y
      const valuesY = maxHeight + lineOffsetY - graphArray[i].value * scaleFactor;
      values[i].style.bottom = maxHeight - valuesY + lineOffsetY + 24 + 'px';

      function drawPartialGraphLine(
        ctx,
        graphArray,
        gap,
        maxHeight,
        lineOffsetY,
        scaleFactor,
        progress
      ) {
        ctx.beginPath();
        ctx.strokeStyle = '#ee7905';
        ctx.lineWidth = 2;

        // Start at the first point
        const startX = 0;
        const startY = maxHeight + lineOffsetY - graphArray[0].value * scaleFactor;
        ctx.moveTo(startX, startY);

        // Draw up to the current progress point
        let i = 0;
        for (i = 0; i < graphArray.length - 1; i++) {
          const x1 = i * gap;
          const y1 = maxHeight + lineOffsetY - graphArray[i].value * scaleFactor;
          const x2 = (i + 1) * gap;
          const y2 = maxHeight + lineOffsetY - graphArray[i + 1].value * scaleFactor;

          // Check if we've reached the progress point
          if (progress < x2) {
            // Find the intermediate point on the current segment
            const t = (progress - x1) / (x2 - x1);
            const x = x1 + t * (x2 - x1);
            const y = y1 + t * (y2 - y1);
            ctx.lineTo(x, y);
            break;
          }

          ctx.lineTo(x2, y2);
        }

        if (i === graphArray.length - 1) {
          // Ensure we draw the last line segment if we've finished
          const lastX = (graphArray.length - 1) * gap;
          const lastY =
            maxHeight + lineOffsetY - graphArray[graphArray.length - 1].value * scaleFactor;
          ctx.lineTo(lastX, lastY);
        }

        ctx.stroke();
      }

      function animateLineDrawing() {
        const canvas = document.getElementById('myCanvas');
        if (!canvas.getContext) return;

        const ctx = canvas.getContext('2d');
        const totalLength = (graphArray.length - 1) * gap;
        let currentProgress = 0;
        const speed = 12; // Control the speed of the animation

        function drawFrame() {
          // Clear the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw the graph up to the current progress point
          drawPartialGraphLine(
            ctx,
            graphArray,
            gap,
            maxHeight,
            lineOffsetY,
            scaleFactor,
            currentProgress
          );

          // Increment the progress for smooth animation
          currentProgress += speed;
          if (currentProgress < totalLength) {
            requestAnimationFrame(drawFrame);
          }
        }

        drawFrame();
      }

      function resizeCanvas() {
        const canvas = document.getElementById('myCanvas');
        const container = document.getElementById('graph-container');
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        // Re-draw the graph when the canvas is resized
        animateLineDrawing();
      }

      window.addEventListener('resize', resizeCanvas, false);

      resizeCanvas();
      //Edit text values
      sums[i].innerHTML = '$' + graphArray[i].sum;
      values[i].innerHTML = String(graphArray[i].value);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // setup scroll into/out of view
    document.querySelectorAll('.graph-animated').forEach((trigger) => {
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // on scroll into view
              graphAnimation();
            }
          });
        },
        {
          threshold: 0.5, // adjust the threshold as needed
        }
      ).observe(trigger);
    });
  });
}
