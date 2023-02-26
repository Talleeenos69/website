const Image = document.getElementById("imagesWidth");

function setWidth(){
    Image.style.width = "calc(100% - 35px)";
}

window.addEventListener('resize', setWidth);
setWidth();