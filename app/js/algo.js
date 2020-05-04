
// Tableaux des 4 rubriques pour le stockage des donnés/////////////////////////////////////////////////////
tabSymptome = [];
tabfacteurPronostique = [];
tabfacteurMineur = [];
tabfacteurMajeur = [];


// Mettre à 0 les 4 rubriques pour les incrémenter en fonction des donnés selectionnés par l'utilisateur////
resultSyptome = 0;
resultFacteurPronostique = 0;
resultfacteurMineur = 0;
resultfacteurMajeur = 0;


// Fonction pour remplir les tableau de chaque rubrique avec les résultats des questions qui conviènnent////
trireponces = () => {
  for (let i = 0; i < resultat.length; i++) {
    if (i == 1) {
      tabfacteurMineur.push(resultat[i]);
      tabfacteurMajeur.push(resultat[i]);
    } else if (i >= 11 && i <= 21) {
      tabfacteurPronostique.push(resultat[i]);
    } else if (i == 7 || i == 8) {
      tabfacteurMajeur.push(resultat[i]);
    } else if (i == 6 || i == 9) {
      tabfacteurMineur.push(resultat[i]);
    }
    //ex: pusher les resultats des question de 0 à 9 dans le tableau des symptomes 
    if (i >= 0 && i <= 9) {
      tabSymptome.push(resultat[i]);
    }
  }
};


// Fonction pour incremonter les resultat des rubriques en fonction des rép dans chaque tab de la même rubrique///
nombreDeFacteur = () => {
  for (let i = 0; i < tabSymptome.length; i++) {
      //ex : si la valeur choisie est oui pour les questions dans le tab des symptomes, le resultSymp est incrémenté + 1
    if (tabSymptome[i] == "Oui") {
      resultSyptome++;
    }
  }
  for (let i = 0; i < tabfacteurPronostique.length; i++) {
      //ex : pour chaque valeur choisi dans le tab des factProno = à oui ou input >= 70 , incrémenter resultFacteurPronostique
    if (tabfacteurPronostique[i] >= 70 || tabfacteurPronostique[i] == "Oui") {
      resultFacteurPronostique++;
    }
  }
  for (let i = 0; i < tabfacteurMineur.length; i++) {
    if (
      tabfacteurMineur[i] >= 39 ||
      tabfacteurMineur[i] == "Oui" ||
      tabfacteurMineur[i] == "Très fatigué" ||
      tabfacteurMineur[i] == " fatigué"
    ) {
      resultfacteurMineur++;
    }
  }
  for (let i = 0; i < tabfacteurMajeur.length; i++) {
    if (tabfacteurMajeur[i] <= 35.4 || tabfacteurMajeur[i] == "Oui") {
      resultfacteurMajeur++;
    }
  }
};


// Fonction pour l'algo decisionel du quizz//////////////////////////////////////////////////////////////////////
let messageFinal = document.getElementById("affichageResult");

Algorithme = () => {

    //Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :   
    if (resultat[0] == "Oui" || (resultat[2] == "Oui" && resultat[4] == "Oui") || (resultat[2] == "Oui" && resultat[3] == "Oui") || (resultat[0] == "Oui" && resultat[5] == "Oui")) {
        //Tout patient sans facteur pronostique  
        if (resultFacteurPronostique == 0) {
            //Sans facteur de gravité & <50 ans
            if (resultfacteurMajeur == 0 && resultfacteurMineur == 0 && resultat[10] < 50 ) {
                messageFinal.innerText = messageAffiche[0];
            }
            // Sans facteur de gravité & 50-69 ans, ou avec au moins un facteur de gravité mineur 
            else if ( resultfacteurMajeur == 0 && resultfacteurMineur >= 1 && (resultat[10] >= 50 || resultat[10] <= 69)) {
                messageFinal.innerText = messageAffiche[1];
            }
        }
        // Tout patient avec un facteur pronostique ou plus
        else {
            //Aucun facteur de gravité / Un seul facteur de gravité mineur
            if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
                messageFinal.innerText = messageAffiche[1];
            }
            //Au moins deux facteurs de gravité mineurs     
            else if (resultfacteurMajeur == 0 && resultfacteurMineur >= 2) {
                messageFinal.innerText = messageAffiche[2];
            }
        }
        // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
        if (resultfacteurMajeur >= 1) {
            messageFinal.innerText = messageAffiche[2];
        }
    } 
    

    // Tout patient avec fièvre et toux :
    else if (resultat[0] == "Oui" && resultat[2] == "Oui") {
        //Tout patient sans facteur pronostique
        if (resultFacteurPronostique == 0) {
            //Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur
            if (resultfacteurMajeur == 0 && resultfacteurMineur >= 1) {
                messageFinal.innerText = messageAffiche[3];
            }
        } 
        // Tout patient avec un facteur pronostique ou plus
        else {
            // Aucun facteur de gravité
            if (resultfacteurMajeur == 0 && resultfacteurMineur <= 1) {
                messageFinal.innerText = messageAffiche[3];
            }
            // Un seul facteur de gravité mineur ou Au moins deux facteurs de gravité mineurs 
            else if (resultfacteurMajeur == 0 && resultfacteurMineur > 1) {
                messageFinal.innerText = messageAffiche[2];
            }
        }
        // Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur
        if (resultfacteurMajeur > 0) {
            messageFinal.innerText = messageAffiche[2];
        }
    }
    

    // Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
    else if ( resultat[0] == "Oui" || resultat[2] == "Oui" || resultat[3] == "Oui" || resultat[4] == "Oui") {
        // Pas de facteur de gravité
        if (resultfacteurMajeur == 0 && resultfacteurMineur == 0) {
            messageFinal.innerText = messageAffiche[4];
        }
        // Au moins un facteur de gravité ou un facteur pronostique :
        else {
            if (resultFacteurPronostique > 0) {
                messageFinal.innerText = messageAffiche[4] + " " + messageAffiche[2];
            }
        }
    } 


    // Tout patient avec aucun symptôme :
    else if (resultSyptome == 0) {
       messageFinal.innerText = messageAffiche[5];
    } 
    

    // Age < 15 :
    else if (resultat[10] < 15) {
    messageFinal.innerText = messageAffiche[6];
    }
};