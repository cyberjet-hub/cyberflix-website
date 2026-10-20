const STORAGE_KEY = "cyberflix_user";

const authTabs = document.querySelectorAll(".auth-toggle button");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const authMessage = document.getElementById("authMessage");
const switchLink = document.querySelector(".auth-switch-link");
const toggleCopy = document.getElementById("toggleCopy");

function setMessage(text, isError = false) {
  if (!authMessage) return;
  authMessage.textContent = text;
  authMessage.style.color = isError ? "#ffd7d9" : "#d8ffe6";
}

function getStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function setActiveTab(tab) {
  authTabs.forEach((button) => {
    const active = button.dataset.tab === tab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  loginForm.classList.toggle("hidden", tab !== "login");
  signupForm.classList.toggle("hidden", tab !== "signup");

  if (switchLink) {
    const isSignUp = tab === "signup";
    switchLink.textContent = isSignUp ? "Sign in now" : "Sign up now";
    toggleCopy.textContent = isSignUp ? "Already on Cyberflix?" : "New to Cyberflix?";
  }
}

function handleLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email || !password) {
    setMessage("Please fill in both email and password.", true);
    return;
  }

  const stored = getStoredUser();
  if (!stored || stored.email.toLowerCase() !== email.toLowerCase() || stored.password !== password) {
    setMessage("No matching account found. Please create an account first.", true);
    return;
  }

  const keepLoggedIn = form.remember?.checked;
  saveUser({ ...stored, loggedIn: true, remember: keepLoggedIn });
  setMessage("Login successful. Redirecting...");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

function handleSignup(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  if (!name || !email || !password) {
    setMessage("Please complete all sign up fields.", true);
    return;
  }

  if (password.length < 6) {
    setMessage("Password must be at least 6 characters long.", true);
    return;
  }

  const stored = getStoredUser();
  if (stored && stored.email && stored.email.toLowerCase() === email.toLowerCase()) {
    setMessage("This email is already registered. Please sign in instead.", true);
    setActiveTab("login");
    return;
  }

  const user = {
    name,
    email,
    password,
    loggedIn: true,
    remember: true
  };

  saveUser(user);
  setMessage("Account created successfully. Redirecting...");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

authTabs.forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

switchLink?.addEventListener("click", (event) => {
  event.preventDefault();
  const currentTab = document.querySelector(".auth-toggle button.active")?.dataset.tab || "login";
  setActiveTab(currentTab === "login" ? "signup" : "login");
});

loginForm?.addEventListener("submit", handleLogin);
signupForm?.addEventListener("submit", handleSignup);

setActiveTab("login");
