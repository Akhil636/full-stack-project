var plus = document.querySelectorAll(".plus .ok");
var formContainer = document.querySelector(".form-container");
var popupForm = document.querySelector(".popup-form");
var cancel = document.querySelectorAll(".cancel")

function pop() {
    if (formContainer) formContainer.style.display = "block";
    if (popupForm) popupForm.style.display = "block";
}
function can() {
    if (formContainer) formContainer.style.display = "none";
    if (popupForm) popupForm.style.display = "none";
}
function dele() {
    if (two) two.style.display = "none";
}  

var one = document.getElementById("book-container")
var two = document.getElementById("two")
var add = document.getElementById("add")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var discription = document.getElementById("discription")

add.addEventListener("click", function(event) {
    event.preventDefault()
    var div = document.createElement("div");
    div.setAttribute("class", "book-entry")
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h3>${bookauthorinput.value}</h3>
        <p>${discription.value}</p>
        <button onclick="this.parentElement.remove()">Delete</button>`
    if (one) {
        one.append(div)
    }
        if (formContainer) formContainer.style.display = "none";
    if (popupForm) popupForm.style.display = "none";
})