const isLocal = window.location.hostname.includes("localhost");

export const API_BASE = isLocal
  ? "http://localhost:3000/api"
  : "https://projecto-n8938gg5n-kanmani001s-projects.vercel.app/api";
