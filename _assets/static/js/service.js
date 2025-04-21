function handleNavbarStyle() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY === 0) {
      navbar.classList.add("navbar-transparent");
      navbar.classList.add("scroll-up");
      navbar.classList.remove("scroll-down");
    } else {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("scroll-down");
      navbar.classList.remove("scroll-up");
    }
  }
  
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[char];
    });
  }
  
  // Reset scroll position if there's a hash in the URL
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, " ");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    toggle.innerHTML = "☰";
  
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  
      if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        toggle.innerHTML = "✕";
      } else {
        document.body.style.overflow = "";
        toggle.innerHTML = "☰";
      }
    });
  
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
        toggle.innerHTML = "☰";
      });
    });
  
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href");
  
        if (href !== "#") {
          window.location.href = href;
        } else {
          let targetId = this.getAttribute("href").substring(1);
          let targetElement = document.getElementById(targetId);
  
          if (targetElement) {
            let offsetTop = targetElement.offsetTop - 60;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth"
            });
  
            setTimeout(() => {
              history.replaceState(null, null, " ");
            }, 500);
          }
        }
  
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
        toggle.innerHTML = "☰";
      });
    });
  });
  
  window.addEventListener("scroll", handleNavbarStyle);
  window.addEventListener("DOMContentLoaded", handleNavbarStyle);
  
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;
    if (window.innerWidth <= 768) {
      if (currentScroll > lastScrollTop) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
      }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  