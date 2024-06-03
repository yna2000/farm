function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
}

function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

function checkCookiesAccepted() {
    return getCookie('cookiesAccepted') === 'true';
}

function showCookiesPopup() {
    const cookiesPopup = document.getElementById('cookies-popup');
    cookiesPopup.classList.remove('hide');
    cookiesPopup.classList.add('show');
}

function hideCookiesPopup() {
    const cookiesPopup = document.getElementById('cookies-popup');
    cookiesPopup.classList.remove('show');
    cookiesPopup.classList.add('hide');
    setTimeout(() => cookiesPopup.style.display = 'none', 1000); // Wait for the transition to complete
}

function acceptCookies() {
    setCookie('cookiesAccepted', 'true', 365);
    hideCookiesPopup();
}

document.addEventListener('DOMContentLoaded', () => {
    if (!checkCookiesAccepted()) {
        showCookiesPopup();
    }
});

document.getElementById('accept-cookies-btn').addEventListener('click', acceptCookies);
