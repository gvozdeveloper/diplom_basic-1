const links = document.querySelectorAll(".events-smooth, .scedule-smooth, .about-smooth, .arrow, .main-link");
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

//Modal
function openModal() {
        document.getElementById("modal").style.top = "0px";
        document.getElementById("body").className = "hidden";
    }

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
    document.getElementById("body").className = " ";
}
