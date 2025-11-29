var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

var inicio = document.getElementById("inicio_text");
var informacion = document.getElementById("informacion_text");
var testimonios = document.getElementById("testimonios_text");

// Agrupamos los textos del menú para manipularlos más fácil
var navTextItems = [inicio, informacion, testimonios];

function setNavTexts(colorClassToAdd, colorClassToRemove) {
  navTextItems.forEach(el => {
    el.classList.remove(colorClassToRemove);
    el.classList.add(colorClassToAdd);
  });
}

document.addEventListener("scroll", function () {
  // Si el menú está desplegado, NO ejecutar efectos de scroll
  if (!navcontent.classList.contains("hidden")) {
    return;
  }

  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    brandname.classList.remove("text-white");
    brandname.classList.add("text-pink-600");

    setNavTexts("text-black", "text-white");

    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");

    toToggle.forEach(el => {
      el.classList.add("text-gray-800");
      el.classList.remove("text-white");
    });

    header.classList.add("shadow");
    navcontent.classList.remove("bg-transparent");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
    brandname.classList.remove("text-pink-600");
    brandname.classList.add("text-white");

    setNavTexts("text-white", "text-black");

    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");

    toToggle.forEach(el => {
      el.classList.add("text-white");
      el.classList.remove("text-gray-800");
    });

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-transparent");
  }
});


// ---- TOGGLE MENU ---- //
var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;

function check(e) {
  var target = e.target;

  if (!checkParent(target, navMenuDiv)) {
    // Click sobre el botón hamburguesa
    if (checkParent(target, navMenu)) {
      if (navMenuDiv.classList.contains("hidden")) {
        openMenu();
      } else {
        closeMenu();
      }
    } else {
      // Click fuera → cerrar menú
      closeMenu();
    }
  }
}

function openMenu() {
  navMenuDiv.classList.remove("hidden");

  // Fondo blanco y textos negros SIEMPRE cuando está abierto
  navcontent.classList.remove("bg-transparent");
  navcontent.classList.add("bg-white");

  setNavTexts("text-black", "text-white");
}

function closeMenu() {
  navMenuDiv.classList.add("hidden");

  // Recuperar comportamiento según scroll
  if (scrollpos > 10) {
    navcontent.classList.add("bg-white");
    navcontent.classList.remove("bg-transparent");
    setNavTexts("text-black", "text-white");
  } else {
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-transparent");
    setNavTexts("text-white", "text-black");
  }
}

function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) return true;
    t = t.parentNode;
  }
  return false;
}
