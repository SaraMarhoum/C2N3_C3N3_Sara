
// display test start when click button demarrer le test
   // switch from préambule to 1st question
   
function displayQu(){
   var pré = document.getElementById("Préambule");
   var qu1 = document.getElementById("Q1");
   var line = document.getElementById("time_line");
   var position1 = document.getElementById("test_position");
   var position2 = document.getElementById("test_position_questions");
   pré.style.display = "none";
   qu1.style.display = "block";
   line.style.display = "flex";
   position1.style.display = "none";
   position2.style.display = "block";
}

  //display 1st stepper question after cheking age
function startQ(){
  var qStepper  = document.getElementById("questionsStepper");
  const qu1 = document.getElementById("Q1");
  var showN = document.getElementById("showNext");
  var showP = document.getElementById("showPrev");
  var line2 = document.getElementById("time_line_2");
   
  qu1.style.display = "none";
  qStepper.style.display = "block";
  showN.style.display = "block";
  showP.style.display = "block";
  line2.style.display = "flex";
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
      updateProgress();
    }
  }



//decide if continue afer age question 
  // (if input < 15 ==> alert && get back to accueil)
  // (if input >= 15 ==> continue question stepper)

//Collect answers and give result depanding on inputs

