// FadeUp animation for Hero h1 and p
document.addEventListener("DOMContentLoaded", () => {
  const heroH1 = document.querySelector(".hero h1");
  const heroH2 = document.querySelector(".hero h2");
  const heroP = document.querySelector(".hero p");

  setTimeout(() => { heroH1.style.opacity = "1"; heroH1.style.transform = "translateY(0)"; }, 500);
  setTimeout(() => { heroH2.style.opacity = "1"; heroH2.style.transform = "translateY(0)"; }, 1000);
  setTimeout(() => { heroP.style.opacity = "1"; heroP.style.transform = "translateY(0)"; }, 1500);
});
