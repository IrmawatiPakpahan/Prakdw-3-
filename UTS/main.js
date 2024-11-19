class Menu {
    constructor() {
      this.menuIcon = document.getElementById('menu-icon');
      this.navbar = document.querySelector('.navbar');
      this.navLinks = document.querySelectorAll('.navbar a');
  
      this.setupMenuToggle();
      this.setupSmoothScrolling();
      this.setupMenuCloseOnOutsideClick();
    }
  
    setupMenuToggle() {
      this.menuIcon.addEventListener('click', () => {
        this.navbar.classList.toggle('active');
        this.menuIcon.classList.toggle('active');
      });
    }
  
    setupSmoothScrolling() {
      this.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          this.closeMenuIfOpen();
        });
      });
    }
  
    setupMenuCloseOnOutsideClick() {
      document.addEventListener('click', (e) => {
        if (!this.menuIcon.contains(e.target) && !this.navbar.contains(e.target)) {
          this.closeMenuIfOpen();
        }
      });
    }
  
    closeMenuIfOpen() {
      if (this.navbar.classList.contains('active')) {
        this.navbar.classList.remove('active');
        this.menuIcon.classList.remove('active'); 
      }
    }
  }
  
  let menu = new Menu();