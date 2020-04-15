
// display test start when click button demarrer le test

// function startTest(){
    
// }

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