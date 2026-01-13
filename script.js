function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const translations = {
  nl: {
    nav_about: "Over mij",
    nav_experience: "Ervaring",
    nav_projects: "Projecten",
    nav_contact: "Contact",

    hero_intro: "Hallo, ik ben",
    hero_role: "CMD student",
    btn_cv: "Download CV",

    about_subtitle: "Kom meer te weten",
    about_title: "Over mij",
    about_text:
      "Hoi! Ik ben Tess, een enthousiaste en gedreven CMD student aan de Hogeschool van Amsterdam. " +
      "Met een passie voor zowel frontend development als visual design, streef ik ernaar om boeiende en " +
      "gebruiksvriendelijke digitale ervaringen te creëren. Mijn doel is om mijn vaardigheden verder te " +
      "ontwikkelen en bij te dragen aan innovatieve projecten in de toekomst. Ik ben nog steeds lerende en " +
      "sta open voor nieuwe kansen en uitdagingen. <br />Laten we samenwerken!<br />",
    year: "2+ jaar<br />Visual design<br />",
    about_educatie: "Educatie",

    explore_subtitle: "Verken Mijn",

    project_subtitle: "Bekijk Mijn Recente",
    project_more: "Meer Projecten",

    contact_subtitle: "Geïnteresseerd?",

    exp_base: "Basis",
    exp_mid: "Gemiddeld",
    exp_best: "Ervaren"
  },

  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_intro: "Hello, I am",
    hero_role: "CMD student",
    btn_cv: "Download CV",

    about_subtitle: "Get To Know More",
    about_title: "About Me",
    about_text:
      "Hi! I'm Tess, a motivated and enthusiastic CMD student at the Amsterdam University of Applied Sciences. " +
      "With a passion for frontend development and visual design, I aim to create engaging and user-friendly " +
      "digital experiences. My goal is to further develop my skills and contribute to innovative projects in the future. " +
      "I am still learning and open to new opportunities and challenges. <br />Let’s work together!<br />",
    year: "2+ years <br />Visual design<br />",
    about_educatie: "Education",

    explore_subtitle: "Explore My",

    project_subtitle: "Browse My Recent",
    project_more: "More Projects",

    contact_subtitle: "Interested?",

    exp_base: "Basic",
    exp_mid: "Intermediate",
    exp_best: "Experienced"
  }
};

let currentLang = localStorage.getItem("lang") || "nl";
const toggleBtn = document.getElementById("lang-toggle");

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[lang][key];
  });

  toggleBtn.textContent = lang === "nl" ? "EN" : "NL";
  localStorage.setItem("lang", lang);
}

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "nl" ? "en" : "nl";
  setLanguage(currentLang);
});

setLanguage(currentLang);
