const container = document.getElementById("col");
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        const newDiv = document.createElement("div");
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "FizzBuzz" ;
        newDiv.classList.add("box");
        newDiv.classList.add("bgRed");
        container.append(newDiv);
        newDiv.append(newParagraph);
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        const newDiv = document.createElement("div");
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "Buzz";
        newDiv.classList.add("box");
        newDiv.classList.add("bgOrange");
        container.append(newDiv);
        newDiv.append(newParagraph);
        console.log("Buzz");
    } else if (i % 3 == 0) {
        const newDiv = document.createElement("div");
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = "Fizz" ;
        newDiv.classList.add("box");
        newDiv.classList.add("bgGreen");
        container.append(newDiv);
        newDiv.append(newParagraph);
        console.log("Fizz");
    } else {
        const newDiv = document.createElement("div");
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = i ;
        newDiv.classList.add("box");
        newDiv.classList.add("bgBlue");
        container.append(newDiv);
        newDiv.append(newParagraph);
        console.log(i);
    }
}
console.log("Conteggio completato");


