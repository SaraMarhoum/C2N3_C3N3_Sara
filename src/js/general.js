
// display test start when click button demarrer le test
   // switch from préambule to 1st question
   
function displayQu(){
   var pré = document.getElementById("Préambule");
   var qu1 = document.getElementById("Q1");
   var position1 = document.getElementById("test_position");
   var position2 = document.getElementById("test_position_questions");
   pré.style.display = "none";
   qu1.style.display = "block";
   position1.style.display = "none";
   position2.style.display = "block";
}

//decide if continue afer age question 
  // (if input < 15 ==> alert && get back to accueil)
  // (if input >= 15 ==> continue question stepper)

  function ageCondition(){
    var pré = document.getElementById("Préambule");
    var qu1 = document.getElementById("Q1");
    var position1 = document.getElementById("test_position");
    var position2 = document.getElementById("test_position_questions");

      alert("Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.")
      pré.style.display = "block";
      qu1.style.display = "none";
      position1.style.display = "block";
      position2.style.display = "none";   
  }

  //display 1st stepper question after cheking age
function startQ(){
  let AgeInput = document.getElementById("ageInp").value;

  var qStepper  = document.getElementById("questionsStepper");
  const qu1 = document.getElementById("Q1");
  var showN = document.getElementById("showNext");
  var showP = document.getElementById("showPrev");

  if(AgeInput < 15){
    ageCondition();
  }
   else{
     qu1.style.display = "none";
  qStepper.style.display = "block";
  showN.style.display = "block";
  showP.style.display = "block";
   }
}

  // display next questions every click on question suivante using Jquery
  var visibleQ = 0;

  function showQ(){
     
    $(".Q").hide();
    $(".Q:eq("+ visibleQ +")").show();
  }
   
  showQ()

  function showNext(){
    if(visibleQ < 20){
      if(visibleQ== $(".Q").length-1){
        visibleQ = 0;
      }
      else{
        visibleQ ++;
      }
     showQ();
    }
    //make time line incremant with question ++
    displaycount();  
  }

//make time line incremant with question ++
var count = (function(){

  var counter = 2;
     
    return function(){
    return counter +=1;
    }

})();

function displaycount(){
  document.getElementById("number_stepper").innerHTML = count();
}

  // display peevious questions every click on question précédente using Jquery
  function showPrev(){
    if(visibleQ > 0){
      if(visibleQ == 0){
        visibleQ = $(".Q").length-1;
        }
      else{
        visibleQ --;
        }
      showQ();
    } 
  }



//Collect answers and give result depanding on inputs
  //Storing the user's answers in an object
  let rép = {};

  function CollectAnswers(){

    // Let the user check answers into the Object "rép"
    function choix(id1, id2, factor) {
        let OUI = document.getElementById(id1);
        let NON = document.getElementById(id2);
        if (OUI.checked) {
            rép[factor] = "OUI";
        } else if (NON.checked) {
            rép[factor] = "NON";
        }
    }

    var NextButt = document.getElementById("showNext");
    var Q = document.querySelectorAll("Q");

    NextButt.addEventListener("click", function () {

      switch (Q) {
        
        case Q[1]:
          choix('check1', 'check2', "fièvre");
          break;

        case Q[2]:
          let temp = document.getElementById("temp");
          if (temp.value !== "") {
            rép.température = parseInt(temp.value);
          }
          break;
        
        case Q[3]:
          choix('check3', 'check4', "toux");
          break;

        case Q[4]:
          choix('check5', 'check6', "courbature");
          break;

        case Q[5]:
          choix('check7', 'check8', "mal_gorge");
          break;

        case Q[6]:
          choix('check9', 'check10', "diarrhée");
          break;

        case Q[7]:
          choix('check11', 'check12', "fatigue");
          break;

        case Q[8]:
          choix('check13', 'check14', "diff_alimentation");
          break;

        case Q[9]:
          choix('check15', 'check16', "gêne_respiratoire");
          break;

        case Q[10]:
          let BIEN = document.getElementById('check17');
        let A_BIEN = document.getElementById('check18');
        let MAL = document.getElementById('check19');
        let T_MAL = document.getElementById('check20');
        if (BIEN.checked) {
            rép.sante = "BIEN";
        }
        if (A_BIEN.checked) {
          rép.sante = "A_BIEN";
        }
        if (MAL.checked) {
            rép.sante = "MAL";
        }
        if (T_MAL.checked) {
            rép.sante = "T_MAL";
        }
          break;

        case Q[11]:
          let poid = document.getElementById("poid");
          if (poid.value !== "") {
            rép.Poid = parseInt(poid.value);
          }
          break;
        
        case Q[12]:
          let taille = document.getElementById("taille");
          if (taille.value !== "") {
            rép.Taille = parseInt(taille.value);
          }
          break;

        case Q[13]:
          choix('check21', 'check22', "maladie_cardiaque");
          break;

        case Q[14]:
          choix('check23', 'check24', "diabétique");
          break;

        case Q[15]:
          choix('check25', 'check26', "cancer");
          break;

        case Q[16]:
          choix('check27', 'check28', "maladie_respiratoire");
          break;

        case Q[17]:
          choix('check29', 'check30', "I_R_chronique_dialysée");
          break;

        case Q[18]:
          choix('check31', 'check32', "MC_foie");
          break;

        case Q[19]:
          choix('check33', 'check34', "enceinte");
          break;

        case Q[20]:
          choix('check35', 'check36', "maladie_déf_immunitaire");
          break;

        case Q[21]:
          choix('check37', 'check38', "trait_immunosuppresseur");
          break;
      
        default:
          break; 
      }
    }); 

  };

  
choix('check15', 'check16', "");

//make time line incremant with question ++ using Js