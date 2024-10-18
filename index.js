const menuIconEl = document.querySelector("#menu-icon")
const navbarEl = document.querySelector(".navbar");
const sectionsEl = document.querySelectorAll("section");
const navLinksEl = document.querySelectorAll("header nav a")


window.onscroll = () => {
    sectionsEl.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height){
            navLinksEl.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");

            })
        }

    })
}

menuIconEl.onclick = ()=> {
    menuIconEl.classList.toggle('bx-x')
    navbarEl.classList.toggle("active")

}