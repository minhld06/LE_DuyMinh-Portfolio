//Formulaire contact
const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); //pour ne pas recharger la page

    contactMsg.textContent = "Merci pour votre message.";
    contactMsg.style.color = "green";

    contactForm.reset();
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
    } else {
        btnDark.innerHTML = '<i class="bi bi-moon"></i>';
        btnDark.classList.remove("btn-outline-light");
        btnDark.classList.add("btn-outline-dark");
    }
});


