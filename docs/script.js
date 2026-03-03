// Diary - script.js
(function () {
  const languageMenu = document.querySelector(".language-menu");
  const languageButton = document.querySelector(".language-button");
  const languageDropdown = document.querySelector(".language-dropdown");

  if (!languageMenu || !languageButton || !languageDropdown) {
    return;
  }

  function closeMenu() {
    languageMenu.classList.remove("open");
    languageButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = languageMenu.classList.toggle("open");
    languageButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  languageButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  languageDropdown.addEventListener("click", function (event) {
    const target = event.target;
    if (target instanceof HTMLAnchorElement && target.getAttribute("href") === "#") {
      event.preventDefault();
      closeMenu();
    }
  });

  document.addEventListener("click", function (event) {
    if (!languageMenu.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
})();
