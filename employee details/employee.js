var name = document.getElementById("name").value
var id = document.getElementById("id").value
var department = document.getElementById("department").value
var email = document.getElementById("email").value
var experience = document.getElementById("experience").value
var dob = document.getElementById("dob").value

function add() {
    var name = document.getElementById("name").value
    var id = document.getElementById("id").value
    var department = document.getElementById("department").value
    var email = document.getElementById("email").value
    var experience = document.getElementById("experience").value
    var dob = document.getElementById("dob").value

    if (name && id && email) {
        var table = document.getElementById("employee table").getElementsByTagName("tbody")[0];
        var newRow = table.insertRow();
        newRow.innerHTML = `
        <td>${name}</td>
        <td>${id}</td>
        <td>${department}</td>
        <td>${email}</td>
        <td>${experience}</td>
        <td>${dob}</td>
        <td><button onclick="deleteRow(event)">Delete</button></td>`;
    }
    else {
        alert("please enter all remaining details...")
    }

    function deleteRow(event) {
        var row = event.target.closest("tr");
        row.remove();
    }
}
