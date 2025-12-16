//Formulaire contact
const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); //pour ne pas recharger la page

    contactMsg.textContent = "Merci pour votre message.";
    contactMsg.style.color = "green";

    contactForm.reset(); //Réinitialiser le formulaire
});

//Dark mode
const btnDark = document.getElementById("btnDarkMode");

btnDark.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    //Changer texte/icon du bouton
    if (document.body.classList.contains("dark-mode")) {
        btnDark.innerHTML = '<i class="bi bi-sun"></i>';
        btnDark.classList.remove("btn-outline-dark");
        btnDark.classList.add("btn-outline-light");
    }else{
        btnDark.innerHTML = '<i class="bi bi-moon"></i>';
        btnDark.classList.remove("btn-outline-light");
        btnDark.classList.add("btn-outline-dark");
    }
});

//Fermer le menu burger si on clique n'importe où en dehors du menu
const navbarCollapseEl = document.getElementById("navbarNav");
const navbarCollapse = new bootstrap.Collapse(navbarCollapseEl, { toggle: false });

document.addEventListener("click", function (e) {
    const isMenuOpen = navbarCollapseEl.classList.contains("show");
    if (!isMenuOpen) return;

    const clickedInsideNavbar = e.target.closest(".navbar");
    if (!clickedInsideNavbar) {
        navbarCollapse.hide(); // fermer le menu
    }
});

//Fermer le menu burger si on clique sur un lien de navigation
document.querySelectorAll("#navbarNav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navbarCollapse.hide();
    });
});

