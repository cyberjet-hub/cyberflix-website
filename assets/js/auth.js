const STORAGE_KEY = "cyberflix_user";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const authMessage = document.getElementById("authMessage");
const toggleButtons = document.querySelectorAll("[data-tab]");
const toggleCopy = document.getElementById("toggleCopy");
const switchLink = document.querySelector(".auth-switch-link");

function showMessage(message, isError = false) {
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.style.color = isError ? "#ffd7d9" : "#dfffe9";
}

function setActiveTab(tabName) {
  const isLogin = tabName === "login";

  if (loginForm) loginForm.classList.toggle("hidden", !isLogin);
  if (signupForm) signupForm.classList.toggle("hidden", isLogin);

  toggleButtons.forEach((button) => {
    const active = button.dataset.tab === tabName;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  if (toggleCopy) {
    toggleCopy.textContent = isLogin ? "New to Cyberflix?" : "Already have an account?";
  }

  if (switchLink) {
    switchLink.textContent = isLogin ? "Sign up now" : "Sign in now";
  }
}

function sanitizeName(value) {
  return String(value || "").trim();
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  window.location.href = "index.html";
}

function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", true);
    return;
  }

  if (!password || password.length < 6) {
    showMessage("Password must be at least 6 characters long.", true);
    return;
  }

  const existingUser = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  if (existingUser && existingUser.email && existingUser.email.toLowerCase() === email.toLowerCase()) {
    showMessage("Welcome back! Redirecting...", false);
    saveUser(existingUser);
    return;
  }

  if (existingUser && existingUser.email && existingUser.email.toLowerCase() !== email.toLowerCase()) {
    showMessage("This account does not match the saved profile. Please create or sign in with the correct email.", true);
    return;
  }

  const user = { name: "Cyberflix User", email, password: password.length >= 6 ? password : "" };
  showMessage("Signing you in...", false);
  saveUser(user);
}

function handleSignup(event) {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const name = sanitizeName(formData.get("name"));
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!name) {
    showMessage("Please enter your full name.", true);
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", true);
    return;
  }

  if (!password || password.length < 6) {
    showMessage("Password must be at least 6 characters long.", true);
    return;
  }

  const user = { name, email, password };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  showMessage("Account created successfully. Redirecting...", false);
  window.location.href = "index.html";
}

if (toggleButtons.length) {
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tab));
  });
}

if (switchLink) {
  switchLink.addEventListener("click", (event) => {
    event.preventDefault();
    const currentTab = document.querySelector(".auth-toggle button.active")?.dataset.tab || "login";
    setActiveTab(currentTab === "login" ? "signup" : "login");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

if (signupForm) {
  signupForm.addEventListener("submit", handleSignup);
}

setActiveTab("login");
