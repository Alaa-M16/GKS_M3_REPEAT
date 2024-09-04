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

function moveBlockToRight(block, parent, step, position = 0) {
  if (position < parent.clientWidth - block.clientWidth) {
    block.style.left = position + "px";
    requestAnimationFrame(() =>
      moveBlockToRight(block, parent, step, position + step)
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const smallBlock = document.querySelector(".child_block");
  const parentBlock = document.querySelector(".parent_block");

  moveBlockToRight(smallBlock, parentBlock, 2);
});
