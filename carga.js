// Función para establecer una cookie  
function setCookie(name, value, days) {  
    const date = new Date();  
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  
    const expires = "expires=" + date.toUTCString();  
    document.cookie = name + "=" + value + ";" + expires + ";path=/";  
}  

// Función para obtener una cookie  
function getCookie(name) {  
    const nameEQ = name + "=";  
    const ca = document.cookie.split(';');  
    for (let i = 0; i < ca.length; i++) {  
        let c = ca[i];  
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);  
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);  
    }  
    return null;  
}  

// Función para verificar la cookie  
function checkCookieConsent() {  
    const cookieConsent = getCookie("cookieConsent");  
    if (cookieConsent === "accepted") {  
        document.getElementById("cookie-banner").style.display = "none";  
    } else {  
        document.getElementById("cookie-banner").style.display = "block";  
    }  
}  

// Evento al hacer clic en aceptar cookies  
document.getElementById("accept-cookies").addEventListener("click", function () {  
    setCookie("cookieConsent", "accepted", 30); // La cookie expirará en 30 días  
    document.getElementById("cookie-banner").style.display = "none";  
});  

// Verifica el estado de la cookie al cargar la página  
window.onload = checkCookieConsent;