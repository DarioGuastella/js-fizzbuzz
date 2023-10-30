const container = document.getElementById("col");
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "FizzBuzz" ;
        newParagraph.classList.add("d-inline-block");
        newParagraph.classList.add("bgRed");
        container.append(newParagraph);
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "Buzz" ;
        newParagraph.classList.add("d-inline-block");
        newParagraph.classList.add("bgOrange");
        container.append(newParagraph);
        console.log("Buzz");
    } else if (i % 3 == 0) {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "Fizz" ;
        newParagraph.classList.add("d-inline-block");
        newParagraph.classList.add("bgGreen");
        container.append(newParagraph);
        console.log("Fizz");
    } else {
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = i ;
        newParagraph.classList.add("d-inline-block");
        newParagraph.classList.add("bgBlue");
        container.append(newParagraph);
        console.log(i);
    }
}
console.log("Conteggio completato");


