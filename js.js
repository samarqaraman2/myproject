
function darkMode() {
    var element = document.body;
    element.className = "dark-mode";

}
function lightMode() {
    var element = document.body;
    element.className = "light-mode";

}
function whenpageloaded() {
    var mode;
    if (confirm("do you want dark mode? ") == true) {

        mode = darkMode();
    } else {
        mode = lightMode();
    }
    document.getElementById('body').style.background = mode;
}




function increaseFontSizeBy20px() {
    document.getElementById('body').style.fontSize = "20px";
}

function getDefaultFontSize() {

    let fontsdefault = document.getElementById("body");
    fontsdefault.style.fontSize = '16px';
}


function whenpageloaded2() {
    var font;
    if (confirm("do you want increase Font Size? ") == true) {

        font = increaseFontSizeBy20px();
    } else {
        font = getDefaultFontSize();
    }
    document.getElementById('body').style.fontSize = font;
}


function mouseOver() {
    document.getElementById("Dom").style.backgroundColor = "yellow";

}

function mouseOut() {
    document.getElementById("Dom").style.backgroundColor = "white";

}

// function mouseOver() {
//     document.getElementById("body").style.backgroundColor = "yellow";

// }

// function mouseOut() {
//     document.getElementById("body").style.backgroundColor = "white";

// }
