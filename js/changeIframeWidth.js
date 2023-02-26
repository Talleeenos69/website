const IFrameWrapper = document.getElementById("iframe-wrapper");

function setwidth() {
    if(document.getElementById('side-bar').classList.contains("hidden")) {
        IFrameWrapper.style.width = "calc(100% - 56px)";
    }
    else{
        if (window.innerWidth > 800) {
        IFrameWrapper.style.width = "calc(100% - 350px)";
        }
    }
}

window.addEventListener('click', setwidth);
setwidth();
window.addEventListener('resize', setwidth);
setwidth();