// dropdown menu //

var menuicon = document.getElementById("menuicon");
var checkboxesMenu = document.getElementsByClassName("checkboxesmenu")[0];
var checkboxesMenu2 = document.getElementsByClassName("checkboxesmenu2")[0];
var checkboxesMenu3 = document.getElementsByClassName("checkboxesmenu3")[0];
var checkboxesMenu4 = document.getElementsByClassName("checkboxesmenu4")[0];

function zichtbareElement() {
    console.log("zichtbaar");
    checkboxesMenu.classList.toggle("open-checkbox");
    checkboxesMenu2.classList.toggle("open-checkbox");
    checkboxesMenu3.classList.toggle("open-checkbox");
    checkboxesMenu4.classList.toggle("open-checkbox");
}

menuicon.addEventListener('click', zichtbareElement);