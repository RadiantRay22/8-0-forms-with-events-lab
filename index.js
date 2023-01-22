
console.log("Code your solution!")
const form = document.querySelector("form"); //grab form from the DOM which querySelector is needed
//console.log("Code your solution!")

 form.addEventListener("submit", (event) => 
 {//created an addEventListener with submit and (event)-- basically the code is listening out for the user to conduct an event

    event.preventDefault();
    //stops the default such as disappering or overriding

    const list = document.createElement("li"); 
    
    //created a list of items (li) using createElement

    const  textInput= document.querySelector("#textInput").value;
    //get the value (what ever the information is) of textInput, grab text input from html doc

    list.textContent = textInput; 
//created a text content variable for textInput 

    list.addEventListener("click", (event) => {
    event.preventDefault();

    list.style.textDecoration = "line-through";
    });
    //creates a line through that crosses out check list once dishes and/tasks is done

    const elementsForUl = document.querySelector("ul"); 
    elementsForUl.append(list);
 })

 // This is a great study tool please refer to this for the test
