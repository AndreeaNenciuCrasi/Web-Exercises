// first we need the element(s) to put event listener on
let elements = document.querySelectorAll('button');
let resultDiv = document.querySelector('#result');



// if we have multiple ones then you must iterate through them
for (element of elements) {
    // Besides the element you need the type of the event and the callback
    // function which runs when the event happens with the element
    // Use addEventListener function to make it happen

    element.addEventListener('click', clickHandler);


    // You can even define the function here (called anonymous function)
    element.addEventListener('click', function() {
        console.log("Button clicked!!!");
    });

}

// function which is called above
function clickHandler(event) {
    resultDiv.textContent="You clicked the button";
    resultDiv.style.color= "red";
    resultDiv.style.backgroundColor="yellow";
    element.style.color="red";
    element.style.backgroundColor ="yellow";
};

