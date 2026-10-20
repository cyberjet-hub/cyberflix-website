:root {
  --bg: #0d0d0f;
  --bg-soft: #15171d;
  --panel: #171b23;
  --panel-alt: #1d222b;
  --card: #1a1d24;
  --card-hover: #232933;
  --text: #f5f7fa;
  --muted: #b7bec9;
  --line: rgba(255, 255, 255, 0.09);
  --red: #e50914;
  --red-dark: #b70810;
  --amber: #f5c451;
  --green: #4de29d;
  --shadow: 0 18px 38px rgba(0, 0, 0, 0.4);
  --radius: 18px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top, #171a1d, var(--bg) 35%);
  color: var(--text);
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.hidden {
  display: none !important;
}

.primary-button {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--red), #ff4e5c);
  color: white;
  box-shadow: var(--shadow);
  padding: 0.9rem 1.3rem;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-1px);
}

.auth-page-body {
  min-height: 100vh;
  overflow-x: hidden;
}

.auth-shell {
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  background: #090909;
}

.auth-visual {
  position: relative;
  flex: 1.2;
  min-height: 100vh;
  background: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  padding: 54px 48px;
}

.auth-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.82));
}

.auth-visual-content {
  position: relative;
  z-index: 1;
  max-width: 520px;
}

.auth-brand {
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: -0.08em;
  margin-bottom: 18px;
}

.auth-brand span {
  color: var(--red);
}

.badge {
  display: inline-block;
  background: rgba(229, 9, 20, 0.18);
  color: #ffd5d8;
  border: 1px solid rgba(229, 9, 20, 0.35);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.auth-copy h1 {
  margin: 0 0 16px;
  font-size: clamp(2.4rem, 4vw, 4.6rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
}

.auth-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
  font-size: 1.02rem;
}

.auth-panel {
  flex: 0.9;
  background: rgba(15, 15, 17, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 32px;
}

.auth-box {
  width: min(100%, 430px);
}

.logo {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--text);
  letter-spacing: -0.08em;
  display: inline-block;
  margin-bottom: 22px;
}

.logo span {
  color: var(--red);
}

.auth-toggle {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 18px;
}

.auth-toggle button {
  border: none;
  background: transparent;
  color: var(--muted);
  font-weight: 700;
  padding: 0.9rem 1rem;
  transition: all 0.2s ease;
}

.auth-toggle button.active {
  background: rgba(229, 9, 20, 0.14);
  color: var(--text);
}

.auth-box h2 {
  margin: 0 0 8px;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.subtext {
  margin: 0 0 22px;
  color: var(--muted);
  line-height: 1.6;
}

.auth-form-stack {
  display: grid;
  gap: 16px;
}

.auth-form-stack label {
  display: grid;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.auth-form-stack input {
  width: 100%;
  padding: 0.96rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  color: var(--text);
  outline: none;
}

.auth-form-stack input:focus {
  border-color: rgba(229, 9, 20, 0.9);
  box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.12);
}

.auth-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.86rem;
  color: var(--muted);
}

.remember {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.remember input {
  width: auto;
}

.text-link,
.auth-bottom a,
.auth-switch-link {
  color: #dfe8f5;
}

.auth-submit {
  width: 100%;
  margin-top: 8px;
}

.auth-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.45);
  margin: 8px 0 2px;
  font-size: 0.8rem;
}

.auth-divider::before,
.auth-divider::after {
  content: "";
  height: 1px;
  flex: 1;
  background: rgba(255, 255, 255, 0.12);
}

.alt-auth {
  display: flex;
  gap: 12px;
}

.alt-auth button {
  flex: 1;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.auth-bottom {
  margin-top: 22px;
  color: var(--muted);
  font-size: 0.92rem;
}

#authMessage {
  min-height: 18px;
  margin-bottom: 12px;
  font-size: 0.82rem;
  color: #ffd7d9;
}

@media (max-width: 980px) {
  .auth-shell {
    flex-direction: column;
  }

  .auth-visual {
    min-height: 290px;
    flex-basis: auto;
    width: 100%;
  }

  .auth-panel {
    width: 100%;
    flex-basis: auto;
  }
}

@media (max-width: 760px) {
  .auth-panel {
    padding: 28px 18px 40px;
  }

  .auth-visual {
    padding: 28px 24px;
  }
}
