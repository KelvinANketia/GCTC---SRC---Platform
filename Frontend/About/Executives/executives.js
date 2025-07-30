const homePostHeader = document.querySelector('.hp-head');
const homePostSub = document.querySelector('.hp-sub');

window.onload = function () {
    if (homePostHeader) {
        homePostHeader.style.top = "42px";
        homePostHeader.style.opacity = "1";
    }
    
    if (homePostSub) {
        homePostSub.style.bottom = "72px";
        homePostSub.style.opacity = "1";
    }
};