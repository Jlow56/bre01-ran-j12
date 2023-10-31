let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let formIntroduction = document.getElementById("choice");

formIntroduction.addEventListener("submit",function(event)
{
    event.preventDefault();
    
        if ("choice" === "choice1")
        {
            alert("Vous avez choisi les Hommes");
        }
        
        else if ("choice" === "choise2")
        {
            alert("Vous avez choisi les Elfes");
        }
        
        else if ("choice" ==="choice3")
        {
            alert("Vous avez choisi les Naims");
        }
        else 
        {
           alert("Vous avez choisi les Orcs") 
        }

}
    


// let formIntroduction = document.getElementById("choice-2");{
//     alert("vous avez choisi les Elfes");
// } 