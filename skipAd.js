skipAd = () => {
    const skipAdSlot = document.getElementsByClassName("ytp-ad-skip-button-slot")[0];
    const skipAdContainer = document.getElementsByClassName("ytp-ad-skip-button-container")[0];
    const skipAdBtn = document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0];
    if (skipAdSlot && skipAdContainer && skipAdBtn) {
        skipAdBtn.click();
    }
}
setInterval(() => {
    skipAd();
}, (1000));

let url = location.href;
document.body.addEventListener('click', () => {
    requestAnimationFrame(() => {
        url !== location.href && skipAd();
        url = location.href;
    });
}, true);

window.addEventListener('popstate', function () {
    skipAd();
});