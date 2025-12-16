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
    //LocalStorage pour garder le dark-mode pour l'utilisateur meme en rafraichissant la page
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
});

//Sauvegarder le theme
const saveTheme = localStorage.getItem("theme");
if(saveTheme === "dark"){
    document.body.classList.add("dark-mode");
}

//Fermer le menu burger si on clique sur un lien de navigation
document.querySelectorAll("#navbarNav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navbarNav");
        if(menu.classList.contains("show")){
            menu.classList.remove("show")
        }
    });
});

//Fermer le menu burger si on clique n'importe où en dehors du menu
document.addEventListener("click", function (e) {
    const menu = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");
    if (menu.classList.contains("show") && !menu.contains(e.target) && !toggler.contains(e.target)){
        toggler.click();
    } 
});

