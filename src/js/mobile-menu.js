(() => {
    const mobileMenu = document.querySelector(".js-menu-container");
    const menuLink = document.querySelectorAll(".mobile-nav__link");   
    const menuBtnOpen = document.querySelector(".js-open-menu");
    const menuBtnClose = document.querySelector('.js-close-menu');
  const body = document.body;
  
  // Open the mobile menu by click on the menuBtnOpen
    menuBtnOpen.addEventListener("click", () => {
        // console.log(mobileMenu);
        const expanded = menuBtnOpen.getAttribute("aria-expanded") === "true" || false;
        mobileMenu.classList.toggle("is-open");
        menuBtnOpen.setAttribute("aria-expanded", !expanded);
        body.classList.add('overflow');
    });
  
    // Close the mobile menu by click on the menuBtnClose
    menuBtnClose.addEventListener('click', () => {
        const expanded = menuBtnClose.getAttribute('aria-expanded') === 'false' || true;
        menuBtnOpen.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('is-open');
        body.classList.remove('overflow');
    });
  
    // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.classList.remove('overflow');
  });

   // Close the mobile menu by click on a navigation link in the mobile menu
    menuLink.forEach(item => {
        item.addEventListener('click', function () {
            mobileMenu.classList.toggle('is-open');
            body.classList.remove('overflow');
        });
    });
})();