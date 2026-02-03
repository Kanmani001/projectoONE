const isLocal = window.location.hostname.includes("localhost");

export const API_BASE = isLocal
  ? "http://localhost:3000/api"
  : "https://projecto-ff6nsdep-kannani001s-projects.vercel.app/api";
