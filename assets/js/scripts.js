// HAMBURGER X STARTS

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    if (this.navList.classList.contains(this.activeClass)) {
      document.addEventListener("click", this.handleOutsideClick);
    } else {
      document.removeEventListener("click", this.handleOutsideClick);
    }
  }

  handleOutsideClick(event) {
    if (
      !this.navList.contains(event.target) &&
      !this.mobileMenu.contains(event.target)
    ) {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.animateLinks();
      document.removeEventListener("click", this.handleOutsideClick);
    }
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);

mobileNavbar.init();



// FADE IN X STARTS

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});

// COUNT UP ANIMATION

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent ="+"+ startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});





document.addEventListener("DOMContentLoaded", function() {
  var popup = document.getElementById("welcome-popup");
  var closeBtn = document.getElementById("close-btn");

  // Mostrar o popup após um breve atraso
  setTimeout(function() {
      popup.style.display = "flex";
  }, 1000); // 1 segundo de atraso

  // Fechar o popup ao clicar no botão de fechar
  closeBtn.onclick = function() {
      popup.style.display = "none";
  };

  // Fechar o popup ao clicar fora do conteúdo
  window.onclick = function(event) {
      if (event.target === popup) {
          popup.style.display = "none";
      }
  };
});


