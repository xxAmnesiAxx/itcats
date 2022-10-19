(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-header-open]"),
    closeModalBtn: document.querySelector("[data-header-close]"),
    modal: document.querySelector("[data-header-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();