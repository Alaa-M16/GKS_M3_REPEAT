// MODAL

const modal = document.querySelector(".modal");
const modalTriggerButton = document.querySelector("#btn-get");
const modalCloseButton = document.querySelector(".modal_close");

let hasModalOpenedByScroll = false;

const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  clearInterval(setTimerModal);
  removeScrollEventListener();
};

const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
};

modalTriggerButton.onclick = () => openModal();

modalCloseButton.onclick = () => closeModal();

modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

const setTimerModal = setTimeout(openModal, 10000);

const isBottomOfPage = () => {
  return window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight;
};

const scrollHandler = () => {
  if (isBottomOfPage() && !hasModalOpenedByScroll) {
    openModal();
    hasModalOpenedByScroll = true;
  }
};

window.addEventListener("scroll", scrollHandler);

const removeScrollEventListener = () => {
  window.removeEventListener("scroll", scrollHandler);
};
