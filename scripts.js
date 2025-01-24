document.addEventListener('DOMContentLoaded', () => {
  // Login Modal Elements
  const openLoginModal = document.getElementById('openLoginModal');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const switchToSignUp = document.getElementById('switchToSignUp');

  // Sign-Up Modal Elements
  const openSignUpModal = document.getElementById('openSignUpModal');
  const signUpModal = document.getElementById('signUpModal');
  const closeSignUpModal = document.getElementById('closeSignUpModal');
  const switchToLogin = document.getElementById('switchToLogin');

  // Open Login Modal
  openLoginModal.addEventListener('click', () => {
      console.log("Login button clicked");
      loginModal.style.display = 'flex';
  });

  // Close Login Modal
  closeLoginModal.addEventListener('click', () => {
      loginModal.style.display = 'none';
  });

  // Open Sign-Up Modal
  openSignUpModal.addEventListener('click', () => {
      console.log("Sign-Up button clicked");
      signUpModal.style.display = 'flex';
  });

  // Close Sign-Up Modal
  closeSignUpModal.addEventListener('click', () => {
      signUpModal.style.display = 'none';
  });

  // Switch from Login to Sign-Up
  switchToSignUp.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Switch to Sign-Up");
      loginModal.style.display = 'none';
      signUpModal.style.display = 'flex';
  });

  // Switch from Sign-Up to Login
  switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      console.log("Switch to Login");
      signUpModal.style.display = 'none';
      loginModal.style.display = 'flex';
  });

  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
      if (e.target === loginModal) loginModal.style.display = 'none';
      if (e.target === signUpModal) signUpModal.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded'), function() {
  const apiKey = '6793a0be1128e052496abe5f';
  const apiUrl = 'https://devassignmentven-57f7.restdb.io/rest/account';}

  // Handle login form submission
document.getElementById('login-form').addEventListener('submit'), function(event){

  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;}
