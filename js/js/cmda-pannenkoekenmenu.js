/* ****************************************
    auteur: Sonja Rouwhorst
    datum: 2016-10-18
   **************************************** */

document.addEventListener("DOMContentLoaded", function () {

    function toggleCmdaMenu() {
        document.querySelector('#pancake-icon').classList.toggle('close-icon');
        document.querySelector('.cmda-sidemenu nav').classList.toggle('show');
        document.querySelector('.cmda-sidemenu main').classList.toggle('move-right');
    }

    document.querySelector('#pancake-icon').onclick = toggleCmdaMenu;
    document.querySelector('.cmda-sidemenu nav').onclick = toggleCmdaMenu;

});