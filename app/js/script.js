

// Variables //////////////////////////////////////////////////////
const demarage = document.getElementById("demarer");
let sect = document.querySelectorAll(".sect");
let question = document.querySelector(".questions");
const suivant = document.getElementById("suivant");
const precedent = document.getElementById("precedent");
const afficheResultat = document.getElementById("resultat");
let progress = document.getElementById("file");
let afficheNum = document.getElementById("afficheNum");
let repeter = document.getElementById("repeter");
var conter = 0;
var resultat = [];
let valeur = 1;


// Fonction pour demarrer le test ////////////////////////////////
demarage.addEventListener("click", () => {
  //contoler l'afichage des sections par l'ajout/ supression de class avec la propriété css de display none
  sect[0].classList.add("affiche");
  sect[1].classList.remove("affiche");
  //afficher la première question dans le tableau
  question.innerHTML = questions[0];
  inputs = document.querySelectorAll(".answer-inputs input");
  //cacher le bouton precedent à la première question 
  precedent.classList.add("affiche");
  //desactiver le bouton tant que l'utilisateur n'a pas répondu à la première question 
  suivant.setAttribute("disabled", "disabled");
  //mettre le compte à 0 pour la barre du stepper 
  progressBar(0);
  //appel de la fonction qui permet de récuperer les réponses de l'utilisateur dès le debut du test 
  recuperation();
});


// Fonction pour le stepper ProgresseBar //////////////////////////
progressBar = (e) => {
  progress.setAttribute("value", conter + 1);
  afficheNum.innerHTML = e + 1 + "/" + questions.length;
};


///// Reglagie du bouton Suivant //////////////////////////////////
suivant.addEventListener("click", (e) => {
  //incrémenter le compte pour le stepper et le numéro
  if (conter < questions.length - 1) {
    valeur++;
    conter++;
  }
  //aficher le bouton pour montrer le resultat à la dernière question
  if (conter == questions.length - 1) {
    suivant.classList.add("affiche");
    afficheResultat.classList.remove("affiche");
  }
  //incrémenter le compte pour afficher les questions 1 par une après chaque click
  question.innerHTML = questions[conter];
  inputs = document.querySelectorAll(".answer-inputs input");
  //aficher le bouton suivant
  precedent.classList.remove("affiche");
  suivant.setAttribute("disabled", "disabled");
  progressBar(conter);
  recuperation();
  //empecher le click sur le bouton lien de rafraichir la page 
  e.preventDefault();
});


// Reglage du bouton Precedent ////////////////////////////////////
precedent.addEventListener("click", (e) => {
  afficheResultat.classList.add("affiche");
  suivant.classList.remove("affiche");
  if (conter > 0) {
    conter--;
  }
  if (conter == 0) {
    precedent.classList.add("affiche");
  }
  question.innerHTML = questions[conter];
  inputs = document.querySelectorAll(".answer-inputs input");
  progressBar(conter);
  recuperation();
  e.preventDefault();
});


// Fonction pour recuperer les données de l'utilisateur ////////////
recuperation = () => {
  for (let i = 0; i < inputs.length; i++) {
    //fonction pour changé les données collectés si l'utilisateur change sa réponse "change"
    inputs[i].addEventListener("change", () => {
      //pour les input de type text ou string
      if (inputs.length == 1) {
        resultat.splice(conter, 1, inputs[0].value);
        suivant.removeAttribute("disabled");
      } else {
        //pour les inputs type radio button checked
        if (inputs[i].checked == true) {
          resultat.splice(conter, 1, inputs[i].value);
          suivant.removeAttribute("disabled");
        }
      }
    });
  }
};


// Fonction pour afficher les resultats ////////////////////////////
afficheResultat.addEventListener("click", (e) => {
  sect[1].classList.add("affiche");
  sect[2].classList.remove("affiche");
  e.preventDefault();
  //appliquer la fonction du tri des données de l'utilisateur 
  trireponces();
  //appliquer la fonction qui permet de compter le nombre de donnée des facteur dans l'algo
  nombreDeFacteur();
  //appliquer la fonction de l'algo
  Algorithme();
});


// Fonction pour recommancer le test après que le resultat est affiché/
repeter.addEventListener("click", (e) => {
  sect[2].classList.add("affiche");
  sect[1].classList.remove("affiche");
  //mettre les comptes à 0
  tabSymptome = [];
  tabfacteurPronostique = [];
  tabfacteurMineur = [];
  tabfacteurMajeur = [];
  resultSyptome = 0;
  resultFacteurPronostique = 0;
  resultfacteurMineur = 0;
  resultfacteurMajeur = 0;
  conter = 0;
  valeur = 1;
  suivant.classList.remove("affiche");
  precedent.classList.add("affiche");
  afficheResultat.classList.add("affiche");
  question.innerHTML = questions[0];
  inputs = document.querySelectorAll(".answer-inputs input");
  progressBar(conter);
  recuperation();
  e.preventDefault();
});

