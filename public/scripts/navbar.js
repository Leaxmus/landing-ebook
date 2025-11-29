var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");
var inicio = document.getElementById("inicio_text");
var informacion = document.getElementById("informacion_text");
var testimonios = document.getElementById("testimonios_text");

document.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    brandname.classList.remove("text-white");
    brandname.classList.add("text-pink-600");    
    inicio.classList.remove("text-white");
    informacion.classList.remove("text-white");
    testimonios.classList.remove("text-white");
    inicio.classList.add("text-black");
    informacion.classList.add("text-black");
    testimonios.classList.add("text-black");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");

    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-transparent");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
    brandname.classList.remove("text-pink-600");
    brandname.classList.add("text-white");
    inicio.classList.remove("text-black");
    informacion.classList.remove("text-black");
    testimonios.classList.remove("text-black");
    inicio, informacion, testimonios.classList.add("text-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");

    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }
    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-transparent");
  }
});

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;

function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  if (!checkParent(target, navMenuDiv)) {
    if (checkParent(target, navMenu)) {
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
        navcontent.classList.remove("bg-transparent");
        navcontent.classList.add("bg-white");
      } else {
        navMenuDiv.classList.add("hidden");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-transparent");
      }
    } else {
      navMenuDiv.classList.add("hidden");
      navcontent.classList.remove("bg-white");
      navcontent.classList.add("bg-transparent");
    }
  }
}

function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}
