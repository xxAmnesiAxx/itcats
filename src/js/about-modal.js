(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-about-open='2']"),
    closeModalBtn: document.querySelector("[data-about-close='2']"),
    modal: document.querySelector("[data-about-modal='2']"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();