const sectionOne = document.getElementById("sectionOne");
const sectionToggle = document.getElementById("sectionToggle");

  sectionToggle.addEventListener("click", () => {
    const isHidden = sectionOne.classList.toggle("is-content-hidden");

    sectionToggle.textContent = isHidden
      ? "Show Section Content"
      : "Hide Section Content";

    sectionToggle.setAttribute("aria-expanded", String(!isHidden));
  });