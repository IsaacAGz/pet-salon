function Student(name, lastname, cohort, email, inputClass) {
    this.name = name;
    this.lastname = lastname;
    this.cohort = cohort;
    this.email = email;
    this.inputClass = inputClass;
}

function registerStudent(event) {
    event.preventDefault();

    let name = document.getElementById("inputName").value;
    let lastname = document.getElementById("inputLastName").value;
    let cohort = document.getElementById("inputCohort").value;
    let email = document.getElementById("inputEmail").value;
    let inputClass = document.getElementById("inputClass").value;

    let student = new Student(name, lastname, cohort, email, inputClass);

    let table = document.getElementById("studentsTable");
    const row = document.createElement("tr");
    
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.cohort}</td>
        <td>${student.email}</td>
        <td>${student.inputClass}</td>
        <td><button type="button" class="deleteBtn btn btn-danger">Delete</button></td>
    `

    row.querySelector(".deleteBtn").addEventListener('click', 
        function () {
            let confirmation = confirm("Are you sure you want to delete this student?")
            if (confirmation) {
                row.remove();
            }
            
        });

    table.appendChild(row);

    resetForm("studentForm");
}

function resetForm(id) {
    let form = document.getElementById(id);
    form.reset();
}

const testBtn = document.querySelector("#testBtn");

testBtn.addEventListener('click', function (){alert("Test Button Clicked!");});
