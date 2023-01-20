var activeTab = document.getElementsByClassName("active-tab");
var tabLinks = document.getElementsByClassName("tab-link");
var tabContents = document.getElementsByClassName("tab-content");

var sideMenu = document.getElementById("sideMenu");
var openIcon = document.getElementsByClassName("fa-bars");
var closeIcon = document.getElementsByClassName("fa-xmark");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbydIwxP4c_EpTf_KEVz2wVyXKPvhlPrvpdt43AlG6U7NylbNBT7ez0ucEqtg2AIAp-z/exec";
const form = document.forms["submit-to-google-sheet"];
const message = document.getElementById("msg");

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

/* Google Form Submit Script */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        message.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
