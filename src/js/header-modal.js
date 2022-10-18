(() => {
  const refs = {
    openModalBtn: document.querySelector("[header-open]"),
    closeModalBtn: document.querySelector("[header-close]"),
    modal: document.querySelector("[header-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();