// javascript voor vinkje //

var checkiconstil = document.querySelector(".checkiconstil");
var checkmarkgevuld = document.querySelector(".checkmarkgevuld");


function zichtbareVinkje() {
    console.log("zichtbaar");
    checkmarkgevuld.classList.toggle("open-checkmark");

}

checkiconstil.addEventListener('click', zichtbareVinkje);