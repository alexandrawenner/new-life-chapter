const h2 = document.createElement("h2");
h2.textContent = "Thanks for visiting!";
document.querySelector("body").appendChild(h2);



function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
