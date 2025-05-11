window.addEventListener("load", () => {
    document.body.style.opacity = 1;
});

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const tokenCookieName = "accesstoken";
const signoutBtn = document.getElementById("deconnexion");
const signoutBtnMobile = document.getElementById("deconnexionMobile");
const roleCookieName = "role";

function getRole(){
    return getCookie(roleCookieName);
}

signoutBtn.addEventListener("click", function() {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    window.location.reload();
});

signoutBtnMobile.addEventListener("click", function() {
    eraseCookie(tokenCookieName);
    window.location.reload();
}
);

function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}

function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll("[data-show]");

    allElementsToEdit.forEach(element => {
        switch(element.dataset.show) {
            case "disconnected":
                if (userConnected) {
                    element.style.display = "none";
                } else {
                    element.style.display = "block";
                }
                break;
            case "connected":
                if (!userConnected) {
                    element.style.display = "none";
                } else {
                    element.style.display = "block";
                }
                break;
            case "admin":
                if (!userConnected || role !== "admin") {
                    element.style.display = "none";
                } else {
                    element.style.display = "block";
                }
                break;
            case "client":
                if (!userConnected || role !== "client") {
                    element.style.display = "none";
                } else {
                    element.style.display = "block";
                }
                break;
            }
    });
}

showAndHideElementsForRoles();