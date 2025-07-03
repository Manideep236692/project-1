document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  // Home Page Logic
  if (path.includes("index.html") || path === "/" || path === "/index") {
    const temperature = localStorage.getItem("temperature") || "21.5°C";
    const message = localStorage.getItem("backendMessage") || "Hello from backend!";
    
    const tempEl = document.getElementById("temp");
    const msgEl = document.getElementById("message");

    if (tempEl) tempEl.textContent = temperature;
    if (msgEl) msgEl.textContent = message;
  }

  // WiFi Page
  if (path.includes("wifi.html")) {
    const ssidInput = document.getElementById("ssid");
    const passInput = document.getElementById("password");
    const connectBtn = document.getElementById("connect");

    connectBtn?.addEventListener("click", () => {
      const ssid = ssidInput.value;
      const pass = passInput.value;
      alert(`Connecting to SSID: ${ssid}`);
      localStorage.setItem("wifiSSID", ssid);
    });
  }

  // Lamp Page
  if (path.includes("lamp.html")) {
    const brightnessSlider = document.getElementById("brightness");
    const brightnessValue = document.getElementById("brightness-value");

    brightnessSlider?.addEventListener("input", () => {
      brightnessValue.textContent = brightnessSlider.value + "%";
      localStorage.setItem("lampBrightness", brightnessSlider.value);
    });

    const stored = localStorage.getItem("lampBrightness");
    if (stored && brightnessSlider) {
      brightnessSlider.value = stored;
      brightnessValue.textContent = stored + "%";
    }
  }

  // Fan Page
  if (path.includes("fan.html")) {
    const fanSelect = document.getElementById("fan-speed");

    fanSelect?.addEventListener("change", () => {
      localStorage.setItem("fanSpeed", fanSelect.value);
      alert(`Fan set to: ${fanSelect.value}`);
    });

    const storedSpeed = localStorage.getItem("fanSpeed");
    if (storedSpeed && fanSelect) {
      fanSelect.value = storedSpeed;
    }
  }

  // Lock Page
  if (path.includes("lock.html")) {
    const lockBtn = document.getElementById("lock-btn");
    const unlockBtn = document.getElementById("unlock-btn");
    const statusText = document.getElementById("lock-status");

    const updateStatus = (state) => {
      localStorage.setItem("lockState", state);
      statusText.textContent = `Status: ${state}`;
    };

    lockBtn?.addEventListener("click", () => updateStatus("Locked"));
    unlockBtn?.addEventListener("click", () => updateStatus("Unlocked"));

    const currentState = localStorage.getItem("lockState") || "Unlocked";
    if (statusText) statusText.textContent = `Status: ${currentState}`;
  }
});
