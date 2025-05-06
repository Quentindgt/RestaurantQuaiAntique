const burgerBtn = document.getElementById('burgerBtn')
const navBarMobile = document.getElementById('navBarMobile-links')



burgerBtn.addEventListener('click', () => {
    if (navBarMobile.style.display === 'none') {
        navBarMobile.style.display = 'flex';
    } else {
        navBarMobile.style.display = 'none';
    }
})