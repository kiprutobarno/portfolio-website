var activeTab = document.getElementsByClassName("active-tab");
var tabLinks = document.getElementsByClassName("tab-link");
var tabContents = document.getElementsByClassName("tab-content");

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
