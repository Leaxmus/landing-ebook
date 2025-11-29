var scrollpos = window.scrollY;

var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");

var inicio = document.getElementById("inicio_text");
var informacion = document.getElementById("informacion_text");
var testimonios = document.getElementById("testimonios_text");

var toToggle = document.querySelectorAll(".toggleColour");

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

[inicio, informacion, testimonios, navaction].forEach(item => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});

function setNavTexts(addClass, removeClass) {
  [inicio, informacion, testimonios].forEach(el => {
    el.classList.add(addClass);
    el.classList.remove(removeClass);
  });
}

document.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (!navMenuDiv.classList.contains("hidden")) return;

  if (scrollpos > 10) {
    header.classList.add("bg-white", "shadow");

    brandname.classList.remove("text-white");
    brandname.classList.add("text-pink-600");

    setNavTexts("text-black", "text-white");

    navaction.classList.remove("bg-white", "text-gray-800");
    navaction.classList.add("gradient", "text-white");

    navcontent.classList.add("bg-white");
    navcontent.classList.remove("bg-transparent");

    toToggle.forEach(el => {
      el.classList.add("text-gray-800");
      el.classList.remove("text-white");
    });

  } else {
    header.classList.remove("bg-white", "shadow");

    brandname.classList.remove("text-pink-600");
    brandname.classList.add("text-white");

    setNavTexts("text-white", "text-black");

    navaction.classList.remove("gradient", "text-white");
    navaction.classList.add("bg-white", "text-gray-800");

    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-transparent");

    toToggle.forEach(el => {
      el.classList.add("text-white");
      el.classList.remove("text-gray-800");
    });
  }
});

document.onclick = check;

function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  if (!checkParent(target, navMenuDiv)) {

    if (checkParent(target, navMenu)) {

      if (navMenuDiv.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }

    } else {
      closeMenu();
    }
  }
}

function openMenu() {
  navMenuDiv.classList.remove("hidden");

  navcontent.classList.add("bg-white");
  navcontent.classList.remove("bg-transparent");

  setNavTexts("text-black", "text-white");

  navaction.classList.remove("bg-white", "text-gray-800");
  navaction.classList.add("gradient", "text-white");

  toToggle.forEach(el => {
    el.classList.add("text-gray-800");
    el.classList.remove("text-white");
  });
}

function closeMenu() {
  navMenuDiv.classList.add("hidden");

  // Restaurar comportamiento según scroll
  if (scrollpos > 10) {
    navcontent.classList.add("bg-white");
    navcontent.classList.remove("bg-transparent");

    setNavTexts("text-black", "text-white");

    navaction.classList.remove("bg-white", "text-gray-800");
    navaction.classList.add("gradient", "text-white");

    toToggle.forEach(el => {
      el.classList.add("text-gray-800");
      el.classList.remove("text-white");
    });

  } else {
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-transparent");

    setNavTexts("text-white", "text-black");

    navaction.classList.remove("gradient", "text-white");
    navaction.classList.add("bg-white", "text-gray-800");

    toToggle.forEach(el => {
      el.classList.add("text-white");
      el.classList.remove("text-gray-800");
    });
  }
}

function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) return true;
    t = t.parentNode;
  }
  return false;
}
