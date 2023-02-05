function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('#dropbtn1')) {
        let dpd = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dpd.length; i++) {
            let openDropdown = dpd[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onclick = function (event) {
    if (!event.target.matches('#dropbtn2')) {
        let dropdowns2 = document.getElementsByClassName("dropdown-content");
        let j;
        for (j = 0; j < dropdowns.length; j++) {
            let openDropdown = dropdowns2[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
