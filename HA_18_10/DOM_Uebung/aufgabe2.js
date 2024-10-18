document.getElementById("colorButton").addEventListener("click", function() {
    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
});