function handleNavbarStyle() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY === 0) {
      navbar.classList.add("navbar-transparent", "scroll-up");
      navbar.classList.remove("scroll-down");
    } else {
      navbar.classList.remove("navbar-transparent", "scroll-up");
      navbar.classList.add("scroll-down");
    }
  }
  
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, " ");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.innerHTML = "☰";
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        menuToggle.innerHTML = "✕";
      } else {
        document.body.style.overflow = "";
        menuToggle.innerHTML = "☰";
      }
    });
  
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.style.overflow = "";
        menuToggle.innerHTML = "☰";
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
  
  const typingElement = document.getElementById("typing");
  const phrases = ["Web Developer", "Graphic Designer", "Freelancer", "Data Entry", "Game Development"];
  let phraseIndex = 0,
    charIndex = 0,
    isDeleting = false,
    typingSpeed = 100,
    deletingSpeed = 60,
    pauseBetweenPhrases = 1500;
  
  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
  
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, pauseBetweenPhrases);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", typeEffect);
  
  const universe = document.getElementById("universe-bg");
  const stars = [];
  
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = 100 * Math.random() + "vw";
    star.style.top = 100 * Math.random() + "vh";
    const size = 2 * Math.random() + 1 + "px";
    star.style.width = size;
    star.style.height = size;
    universe.appendChild(star);
    stars.push(star);
  }
  
  document.addEventListener("mousemove", e => {
    const centerX = window.innerWidth / 2;
    const offsetX = (e.clientX - centerX) / 50;
    const offsetY = (e.clientY - window.innerHeight / 2) / 50;
  
    stars.forEach((star, index) => {
      star.style.transform = `translate(${offsetX * (index / 100)}px, ${offsetY * (index / 100)}px)`;
    });
  });
  
const scrollToTopButton = document.getElementById("scrollToTop");

function toggleScrollButton() {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Run on scroll
window.addEventListener("scroll", toggleScrollButton);

// Run on page load
window.addEventListener("load", toggleScrollButton);

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  
  const revealSections = document.querySelectorAll("section");
  
  revealSections.forEach(section => {
    section.classList.add("reveal-hidden");
    Array.from(section.children).forEach((child, index) => {
      child.classList.add("reveal-child");
      child.style.transitionDelay = 150 * index + "ms";
    });
  });
  
  const observerOptions = { threshold: 0.1 };
  
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const section = entry.target;
      const children = section.querySelectorAll(".reveal-child");
      if (entry.isIntersecting) {
        section.classList.add("reveal-visible");
        children.forEach(child => child.classList.add("reveal-child-visible"));
      } else {
        section.classList.remove("reveal-visible");
        children.forEach(child => child.classList.remove("reveal-child-visible"));
      }
    });
  }, observerOptions);
  
  revealSections.forEach(section => {
    revealObserver.observe(section);
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
  
  document.addEventListener("keydown", e => {
    if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
      e.preventDefault();
    }
  });
  
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 3000);
  });
  
  document.body.style.overflow = "hidden";
  
  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[m];
    });
  }