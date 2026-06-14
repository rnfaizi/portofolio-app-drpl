const root = document.documentElement;
const toggleButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");
const sectionLinks = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll("[data-reveal]");
const timeline = document.querySelector(".timeline");
const experienceSort = document.querySelector("#experience-sort");
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const storedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);

  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Ganti ke light mode" : "Ganti ke dark mode");
};

year.textContent = new Date().getFullYear();
setTheme(initialTheme);

toggleButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggleButton.setAttribute("aria-expanded", String(isOpen));
});

themeToggle.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggleButton.setAttribute("aria-expanded", "false");
  });
});

revealElements.forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 270)}ms`);
});

const sortExperience = (direction) => {
  const items = [...timeline.querySelectorAll(".timeline-item")];

  items.sort((first, second) => {
    const firstStart = Number(first.dataset.start);
    const secondStart = Number(second.dataset.start);
    const firstEnd = Number(first.dataset.end);
    const secondEnd = Number(second.dataset.end);
    const firstOrder = Number(first.dataset.order);
    const secondOrder = Number(second.dataset.order);

    if (direction === "desc") {
      return (
        secondEnd - firstEnd ||
        secondStart - firstStart ||
        secondOrder - firstOrder
      );
    }

    return (
      firstStart - secondStart ||
      firstEnd - secondEnd ||
      firstOrder - secondOrder
    );
  });

  timeline.replaceChildren(...items);
};

experienceSort.addEventListener("change", () => {
  sortExperience(experienceSort.value);
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-45% 0px -50% 0px",
    threshold: 0,
  }
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  }
);

sections.forEach((section) => navObserver.observe(section));
revealElements.forEach((element) => revealObserver.observe(element));
