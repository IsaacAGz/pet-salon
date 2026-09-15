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
    
    table.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${name}</td>
        <td>${name}</td>
        <td>${name}</td>
        <td>${name}</td>
    </tr>
    `
    resetForm("studentForm");
}

function resetForm(id) {
    let form = document.getElementById(id);
    form.reset();
}
