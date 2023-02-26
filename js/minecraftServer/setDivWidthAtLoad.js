const imageR = document.getElementById("imagesWidth");
const imageR2 = document.getElementById("imagesWidth2");

function setIWidth(){
    imageR.style.width = "calc(100% - 60px)";
}
function setIWidth2(){
    imageR2.style.width = "calc(100% - 60px)";
}

window.addEventListener('resize', setIWidth);
setIWidth();
window.addEventListener('resize', setIWidth2);
setIWidth2();