   
   
   


// display test start when click button demarrer le test
   // switch from préambule to 1st question
   
function displayQu(){
   const pré = document.getElementById("Préambule");
   const qu1 = document.getElementById("Q1");
   const line = document.getElementById("time_line");
   const position1 = document.getElementById("test_position");
   const position2 = document.getElementById("test_position_questions");
   pré.style.display = "none";
   qu1.style.display = "block";
   line.style.display = "block";
   position1.style.display = "none";
   position2.style.display = "block";
}

  //display 1st stepper question after cheking age
function startQ(){
var qStepper  = document.getElementById("questionsStepper");
const qu1 = document.getElementById("Q1");
var showN = document.getElementById("showNext");
var showP = document.getElementById("showPrev");
   qu1.style.display = "none";
   qStepper.style.display = "block";
   showN.style.display = "block";
   showP.style.display = "block";


}

   // display next questions every click on question suivante
   
var visibleQ = 0;

   function showQ(){
     
     $(".Q").hide();
     $(".Q:eq("+ visibleQ +")").show();
   }
   showQ()

   function showNext(){
     if(visibleQ== $(".Q").length-1){
       visibleQ = 0;
     }
     else{
       visibleQ ++;
     }
     showQ();
   }

   function showPrev(){
      if(visibleQ == 0){
        visibleQ = $(".Q").length-1;
      }
      else{
        visibleQ --;
      }
      showQ();
    }