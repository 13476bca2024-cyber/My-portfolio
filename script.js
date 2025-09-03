// Animate skill bars when visible
const progressBars = document.querySelectorAll(".progress");

function showProgress() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value + "%";
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const sectionTop = skillsSection.offsetTop - window.innerHeight + 100;
  if (window.scrollY > sectionTop) {
    showProgress();
  }
});