export const scrollToSection = (href: string, callback?: () => void) => {
  if (callback) callback();
  
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const navH = document.querySelector("nav")?.offsetHeight ?? 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, 50);
};
