window.addEventListener("scroll", () => {
  const contentSection = document.querySelector(".content-section");
  const sectionPosition = contentSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    contentSection.classList.add("active");
  }
});
