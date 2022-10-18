(() => {
  const refs = {
    openModalBtn: document.querySelector("[hero-open]"),
    closeModalBtn: document.querySelector("[hero-close]"),
    modal: document.querySelector("[hero-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden--hero");
  }
})();