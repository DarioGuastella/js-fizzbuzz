const container = document.getElementById("col");
for (let i = 1; i <= 100; i++) {
    const newDiv = document.createElement("div");
    const newParagraph = document.createElement("p");
    container.append(newDiv);
    newDiv.append(newParagraph);
    if (i % 15 == 0) {
        newParagraph.innerHTML = "FizzBuzz" ;
        newDiv.classList.add("bgRed", "box");
    } else if (i % 5 == 0) {
        newParagraph.innerHTML = "Buzz";
        newDiv.classList.add("bgOrange", "box");
    } else if (i % 3 == 0) {
        newParagraph.innerHTML = "Fizz" ;
        newDiv.classList.add("bgGreen", "box");
        console.log("Fizz");
    } else {
        newParagraph.innerHTML = i ;
        newDiv.classList.add("bgBlue", "box");
    }
}
console.log("Conteggio completato");


