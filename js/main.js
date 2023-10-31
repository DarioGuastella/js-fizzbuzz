const container = document.getElementById("col");
for (let i = 1; i <= 100; i++) {
    const newDiv = document.createElement("div");
    const newParagraph = document.createElement("p");
    newDiv.classList.add("box");
    container.append(newDiv);
    newDiv.append(newParagraph);
    if (i % 15 == 0) {
        newParagraph.innerHTML = "FizzBuzz" ;
        newDiv.classList.add("bgRed");
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        newParagraph.innerHTML = "Buzz";
        newDiv.classList.add("bgOrange");
        console.log("Buzz");
    } else if (i % 3 == 0) {
        newParagraph.innerHTML = "Fizz" ;
        newDiv.classList.add("bgGreen");
        console.log("Fizz");
    } else {
        newParagraph.innerHTML = i ;
        newDiv.classList.add("bgBlue");
        console.log(i);
    }
}
console.log("Conteggio completato");


