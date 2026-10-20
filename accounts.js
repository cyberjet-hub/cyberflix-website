const STORAGE_KEY = "cyberflix_user";

const MAX_ACCOUNTS = 4;

const profiles = [
  { name: "Main Profile", initials: "MP", active: true },
  { name: "Kids", initials: "KI", active: false },
  { name: "Travel", initials: "TR", active: false },
  { name: "Guest", initials: "GU", active: false }
];

const plans = [
  {
    name: "Starter",
    price: 35000,
    badge: "Solo",
    features: ["1 screen at a time", "SD quality", "Up to 2 devices", "Best for individual viewing"],
    featured: false
  },
  {
    name: "Family",
    price: 55000,
    badge: "Popular",
    features: ["2 screens at once", "HD quality", "Up to 4 profiles", "Perfect for shareable viewing"],
    featured: true
  },
  {
    name: "Premium",
    price: 75000,
    badge: "Ultra",
    features: ["4 screens at once", "4K + HDR", "Unlimited downloads", "Best for full household streaming"],
    featured: false
  }
];

const profileGrid = document.getElementById("profileGrid");
const planGrid = document.getElementById("planGrid");
const addProfileBtn = document.querySelector(".add-profile-btn");

function formatUGX(value) {
  return new Intl.NumberFormat("en-US").format(value) + " UGX";
}

function renderProfiles() {
  if (!profileGrid) return;

  profileGrid.innerHTML = profiles
    .map(
      (profile, index) => `
        <article class="profile-card ${profile.active ? "active" : ""}">
          <div>
            <div class="profile-meta">
              <div class="profile-avatar">${profile.initials}</div>
              ${profile.active ? '<span class="profile-status">Active</span>' : ""}
            </div>
            <div style="margin-top: 22px;">
              <h3>${profile.name}</h3>
              <p>Profile ${index + 1}</p>
            </div>
          </div>
          <button class="secondary-button" type="button">${profile.active ? "Manage" : "Switch"}</button>
        </article>
      `
    )
    .join("");

  const currentCount = profiles.length;
  const limitPill = document.querySelector(".account-limit-pill strong");
  if (limitPill) {
    limitPill.textContent = `${currentCount} / ${MAX_ACCOUNTS}`;
  }

  if (currentCount >= MAX_ACCOUNTS && addProfileBtn) {
    addProfileBtn.disabled = true;
    addProfileBtn.style.opacity = "0.55";
    addProfileBtn.textContent = "Max reached";
  }
}

function renderPlans() {
  if (!planGrid) return;

  planGrid.innerHTML = plans
    .map(
      (plan) => `
        <article class="plan-card ${plan.featured ? "featured" : ""}">
          <span class="plan-badge">${plan.badge}</span>
          <h3 class="plan-name">${plan.name}</h3>
          <div class="plan-price">
            <strong>${formatUGX(plan.price)}</strong>
            <span>/ month</span>
          </div>
          <ul>
            ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <button class="${plan.featured ? "primary-button" : "secondary-button"}" type="button">Select plan</button>
        </article>
      `
    )
    .join("");
}

addProfileBtn?.addEventListener("click", () => {
  if (profiles.length >= MAX_ACCOUNTS) {
    alert("You have reached the maximum of 4 accounts.");
    return;
  }

  const name = prompt("New profile name:", `Profile ${profiles.length + 1}`);
  if (!name) return;

  profiles.push({
    name: name.trim() || `Profile ${profiles.length + 1}`,
    initials: name.trim().slice(0, 2).toUpperCase() || `P${profiles.length + 1}`,
    active: false
  });

  renderProfiles();
});

renderProfiles();
renderPlans();

const user = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
if (user && user.name) {
  const current = document.querySelector(".profile-card.active h3");
  if (current) current.textContent = user.name;
}
