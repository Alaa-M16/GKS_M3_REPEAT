const emailInput = document.querySelector("#gmail_input");
const emailSpan = document.querySelector("#gmail_result");
const emailButton = document.querySelector("#gmail_button");
const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

emailButton.onclick = () => {
  if (regExp.test(emailInput.value)) {
    emailSpan.innerHTML = "OK";
    emailSpan.style.color = "green";
  } else {
    emailSpan.innerHTML = "NOT OK";
    emailSpan.style.color = "red";
  }
};

function moveBlockAround(
  block,
  parent,
  step,
  direction = "right",
  positionX = 0,
  positionY = 0
) {
  const parentWidth = parent.offsetWidth;
  const parentHeight = parent.offsetHeight;
  const blockWidth = block.offsetWidth;
  const blockHeight = block.offsetHeight;

  switch (direction) {
    case "right":
      if (positionX < parentWidth - blockWidth) {
        block.style.left = positionX + "px";
        requestAnimationFrame(() =>
          moveBlockAround(
            block,
            parent,
            step,
            "right",
            positionX + step,
            positionY
          )
        );
      } else {
        requestAnimationFrame(() =>
          moveBlockAround(block, parent, step, "down", positionX, positionY)
        );
      }
      break;
    case "down":
      if (positionY < parentHeight - blockHeight) {
        block.style.top = positionY + "px";
        requestAnimationFrame(() =>
          moveBlockAround(
            block,
            parent,
            step,
            "down",
            positionX,
            positionY + step
          )
        );
      } else {
        requestAnimationFrame(() =>
          moveBlockAround(block, parent, step, "left", positionX, positionY)
        );
      }
      break;
    case "left":
      if (positionX > 0) {
        block.style.left = positionX + "px";
        requestAnimationFrame(() =>
          moveBlockAround(
            block,
            parent,
            step,
            "left",
            positionX - step,
            positionY
          )
        );
      } else {
        requestAnimationFrame(() =>
          moveBlockAround(block, parent, step, "up", positionX, positionY)
        );
      }
      break;
    case "up":
      if (positionY > 0) {
        block.style.top = positionY + "px";
        requestAnimationFrame(() =>
          moveBlockAround(
            block,
            parent,
            step,
            "up",
            positionX,
            positionY - step
          )
        );
      } else {
        requestAnimationFrame(() =>
          moveBlockAround(block, parent, step, "right", positionX, positionY)
        );
      }
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const smallBlock = document.querySelector(".child_block");
  const parentBlock = document.querySelector(".parent_block");

  moveBlockAround(smallBlock, parentBlock, 2); 
});

document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let intervalId = null;

  const counterDisplay = document.querySelector(".time_block");
  const startButton = document.querySelector("#start");
  const stopButton = document.querySelector("#stop");
  const resetButton = document.querySelector("#reset");

  function updateCounterDisplay() {
    counterDisplay.textContent = counter;
  }

  function startCounter() {
    if (intervalId === null) {
      intervalId = setInterval(() => {
        counter++;
        updateCounterDisplay();
      }, 1000);
    }
  }

  function stopCounter() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function resetCounter() {
    stopCounter();
    counter = 0;
    updateCounterDisplay();
  }

  startButton.addEventListener("click", startCounter);

  stopButton.addEventListener("click", stopCounter);

  resetButton.addEventListener("click", resetCounter);

  updateCounterDisplay();
});
