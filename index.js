// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
const content = document.querySelector(".content");
const sidebar = document.getElementById("side-bar");
btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml
