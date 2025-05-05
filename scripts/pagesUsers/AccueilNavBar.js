const burgerBtn = document.getElementById('burgerBtn')
const navBarMobile = document.getElementById('accueil-navBarMobile-links')



burgerBtn.addEventListener('click', () => {
    if (navBarMobile.style.display === 'none') {
        navBarMobile.style.display = 'block';
    } else {
        navBarMobile.style.display = 'none';
    }
})