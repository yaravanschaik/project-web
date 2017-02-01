var scrollButton = document.getElementById("scrollbutton");

console.log("script started");

function scrollWin() {
    var top = document.getElementById("scrollarticle").getBoundingClientRect().top;
    var navigatie = document.querySelector("body header");
    top -= navigatie.offsetHeight;
    console.log("top: " + top);
    window.scrollBy(0, top);
}

scrollButton.addEventListener('click', scrollWin);
console.log("script started2");