export default function heroSquares() {
  function squares() {
    const squares = document.getElementsByClassName('gray-square');
    let movementArray = [];
    const remSize = 16; // px
    const movementDelta = remSize * 5; // square width in rem
    const movementCount = 5; // How many squares moving MAX=5
    const maxpositions = [
      movementDelta * -1, // min x
      movementDelta * 11, // max x
      movementDelta * -1, // min y
      movementDelta * 8, // max y
    ];
    let intervalId = null;

    function getRandomElement(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function movingSquares() {
      movementArray = [];
      while (movementArray.length < movementCount) {
        const element = getRandomElement(squares);
        if (!movementArray.includes(element)) {
          movementArray.push(element);
          setDirection(element);
        }
      }
    }

    function setDirection(element) {
      const randomValue = Math.ceil(Math.random() * 4);
      const computedStyles = getComputedStyle(element);

      const bottom = parseInt(computedStyles.getPropertyValue('bottom'), 10);
      const left = parseInt(computedStyles.getPropertyValue('left'), 10);
      let reverse = 1;

      function checkBounds(position, min, max) {
        if (position <= min) return -1;
        if (position >= max) return 1;
        return 0;
      }

      switch (randomValue) {
        case 1:
          reverse = checkBounds(left, maxpositions[0], maxpositions[1]);
          element.style.left = `${left + (reverse !== 0 ? -reverse : 1) * movementDelta}px`;
          break;
        case 2:
          reverse = checkBounds(left, maxpositions[0], maxpositions[1]);
          element.style.left = `${left + (reverse !== 0 ? -reverse : -1) * movementDelta}px`;
          break;
        case 3:
          reverse = checkBounds(bottom, maxpositions[2], maxpositions[3]);
          element.style.bottom = `${bottom + (reverse !== 0 ? -reverse : 1) * movementDelta}px`;
          break;
        case 4:
          reverse = checkBounds(bottom, maxpositions[2], maxpositions[3]);
          element.style.bottom = `${bottom + (reverse !== 0 ? -reverse : -1) * movementDelta}px`;
          break;
      }
    }

    function startMoving() {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      intervalId = setInterval(movingSquares, 3000);
    }

    startMoving();
  }
  squares();
}
