const event1 = document.getElementById("farbBox");
event1.addEventListener("mouseover", () => {
    event1.style.backgroundColor = "red";
});
event1.addEventListener("mouseout", () => {
    event1.style.backgroundColor = "blue";
});