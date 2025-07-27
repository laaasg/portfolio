$(document).ready(function () {
  // Load navbar
  $("#navbar-placeholder").load("/components/navbar.html", function () {
    const header = document.querySelector(".navbar");

    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      const isMenuHidden = $("#menu").hasClass("hidden");

      // Always show navbar at the very top of the page
      if (currentScrollY <= 0) {
        header.classList.remove("hidden");
      } else if (isMenuHidden) {
        // Only hide/show if menu is hidden and user is not at top
        if (currentScrollY > lastScrollY) {
          header.classList.add("hidden"); // scrolling down
        } else if (currentScrollY < lastScrollY) {
          header.classList.remove("hidden"); // scrolling up
        }
      }

      lastScrollY = currentScrollY;
    });

    // Load menu
    $("#menu-placeholder").load("/components/menu.html", function () {
      const $hamburger = $(".hamburger");
      const $navitem = $(".nav-item");
      const $brand = $(".brand");
      const $menu = $("#menu");
      const $body = $("body");

      function toggleMenu(forceState = null) {
        const isHidden = $menu.hasClass("hidden");
        const shouldOpen = forceState !== null ? forceState : isHidden;

        if (shouldOpen) {
          $menu.removeClass("hidden");
          $body.addClass("fixed-position");
          $hamburger.addClass("active");
          $brand.addClass("active");
          $navitem.addClass("hidden");
        } else {
          $menu.addClass("hidden");
          $body.removeClass("fixed-position");
          $hamburger.removeClass("active");
          $brand.removeClass("active");
          $navitem.removeClass("hidden");
        }
      }

      // Toggle on hamburger click
      $hamburger.on("click", function (e) {
        e.stopPropagation(); // Prevent bubbling to document
        // console.log("change to x");
        toggleMenu();
      });

      // Click outside of the .grid (but inside #menu) should close menu
      $menu.on("click", function (e) {
        const $grid = $menu.find(".grid");

        if (!$grid.is(e.target) && $grid.has(e.target).length === 0) {
          toggleMenu(false);
        }
      });
    });
  });

  // Load footer
  $("#footer-placeholder").load("/components/footer.html");
});
