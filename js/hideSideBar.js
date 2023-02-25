const toggleBtn = document.getElementById('toggleSideBar');
const sideBar = document.getElementById('side-bar');
//const IFrameWrapper = document.getElementById("iframe-wrapper");

function toggleDivVisibility() {
    if (window.innerWidth < 770) {
        sideBar.classList.add('hidden');
    } else {
        sideBar.classList.remove('hidden');
    }
}

toggleBtn.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
    //IFrameWrapper.classList.toggle('wide');
});

window.addEventListener('resize', toggleDivVisibility);
toggleDivVisibility();