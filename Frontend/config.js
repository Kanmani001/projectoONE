window.APP_CONFIG = {
  API_BASE: window.location.hostname.includes("localhost")
    ? "http://localhost:3000/api"
    : "https://projectoone-2.onrender.com/api"
};
