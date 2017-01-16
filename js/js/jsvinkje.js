// javascript voor vinkje //

var checkicon = document.querySelector(".checkicon");
var checkiconstil = document.querySelector(".checkiconstil");


var vinkjeStatus = false;

function zichtbareVinkje() {
    // add class 'active'
    checkicon.classList.add('active');

    setTimeout(function () {
        checkicon.classList.remove('active');
    }, 200);

    console.log("zichtbaar");
    if (!vinkjeStatus) {
        checkicon.src = "img/checkmark.png";

    } else {
        checkicon.src = "img/check-mark.png";

    }
    vinkjeStatus = !vinkjeStatus; // true = false = true = false

    //classList.toggle("checkmarkgevuld");

}

checkiconstil.addEventListener('click', zichtbareVinkje);