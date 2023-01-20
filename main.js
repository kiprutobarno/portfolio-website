var activeTab = document.getElementsByClassName("active-tab");
var tabLinks = document.getElementsByClassName("tab-link");
var tabContents = document.getElementsByClassName("tab-content");

var sideMenu = document.getElementById("sideMenu");
var openIcon = document.getElementsByClassName("fa-bars");
var closeIcon = document.getElementsByClassName("fa-xmark");

[...openIcon].forEach((icon) => {
  icon.addEventListener("click", openMenu);
});

[...closeIcon].forEach((icon) => {
  icon.addEventListener("click", closeMenu);
});

[...tabLinks].forEach((tabLink) => {
  tabLink.addEventListener("click", openContentTab);
});

function openContentTab(event) {
  var click = event.target;
  [...tabLinks].forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });

  [...tabContents].forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });

  click.classList.add("active-link");

  if (click.classList.contains("experience")) {
    document.getElementById("experience").classList.add("active-tab");
  } else if (click.classList.contains("skills")) {
    document.getElementById("skills").classList.add("active-tab");
  } else {
    document.getElementById("education").classList.add("active-tab");
  }
}

function openMenu() {
  sideMenu.classList.add("side-menu");
}

function closeMenu() {
  sideMenu.classList.remove("side-menu");
}

// bar.addEventListener("click", openMenu);
