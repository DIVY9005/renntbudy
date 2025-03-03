document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
  
    // Switch to Login
    const showLogin = () => {
      loginTab.classList.add('active-tab');
      registerTab.classList.remove('active-tab');
      loginForm.classList.add('active-form');
      registerForm.classList.remove('active-form');
    };
  
    // Switch to Register
    const showRegister = () => {
      registerTab.classList.add('active-tab');
      loginTab.classList.remove('active-tab');
      registerForm.classList.add('active-form');
      loginForm.classList.remove('active-form');
    };
  
    // Event Listeners
    loginTab.addEventListener('click', showLogin);
    registerTab.addEventListener('click', showRegister);
    switchToRegister.addEventListener('click', showRegister);
    switchToLogin.addEventListener('click', showLogin);
  });
  