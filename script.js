const blog = document.querySelector('#blog');
const navbarShow = document.querySelector('#navbarShow');

blog.addEventListener('click', () => {
    if (navbarShow.style.display === "none") {
        navbarShow.style.display = "block";
    } else {
        navbarShow.style.display = "none";
    }
});



