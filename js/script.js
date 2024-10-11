// nav
const nav = document.getElementById("nav");
const navOpen = document.getElementById("open");
const navClose = document.getElementById("close");

// open navbar
navOpen?.addEventListener("click", function () {
  nav?.classList.add("right-0");
});

// close navbar
navClose?.addEventListener("click", function () {
  nav?.classList.remove("right-0");
});

// lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxBody = document.querySelector(".lightbox-body");
const images = document.querySelectorAll("#gallery");

images.forEach(function (image) {
  image.addEventListener("click", function () {
    if (lightbox) {
      lightbox.classList.add("scale-100");
      const img = document.createElement("img");
      if (image instanceof HTMLImageElement) {
        img.src = image.src;
        img.classList.add("w-full");
        img.classList.add("h-full");
        img.classList.add("object-cover");
        if (lightboxBody?.children[0]) {
          lightboxBody.removeChild(lightboxBody.children[0]);
        }
        lightboxBody?.appendChild(img);
      }
    }
  });
});

// close lightbox
lightbox?.addEventListener("click", function (e) {
  if (e.target instanceof HTMLElement) {
    const idName = e.target.getAttribute("id");
    if (idName === "lightbox") {
      lightbox.classList.remove("scale-100");
    }
  }
});

// get full year of current year
const year = document.querySelector(".year");
console.log(year);
const getYear = new Date().getFullYear();
if (year && "textContent" in year) {
  year.textContent = getYear.toString();
}

//cloase off loader
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  if (loader) loader.classList.add("hidden");
});
