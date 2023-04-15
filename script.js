window.addEventListener('scroll', () => {
    let navbar = document.getElementById("nav-container");
    let scrollValue = window.scrollY;

    if(scrollValue > 250){
        navbar.style.display = 'none';
    }else if(scrollValue >= 100){
        navbar.style.display = 'flex';
    }
});