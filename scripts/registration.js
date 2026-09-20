let pets = [
    {
        name: "Jade",
        age: 2,
        gender: "Female",
        service: "grooming",
        breed: "Shi-tzu"
    },
    {
        name: "Pipo",
        age: 4,
        gender: "Mle",
        service: "Vaccines",
        breed: "Mini-Poodle"
    },
    {
        name: "Rocky",
        age: 8,
        gender: "Male",
        service: "Check-up",
        breed: "Chihuahua"
    }
]

let registrationDiv = document.getElementById("registeredPets")

function displayPetNames() {
    let output = `<ol>`;
    for(let i = 0; i < pets.length; i++) {
        output += `<li>${pets[i].name}</li>`;
    }
    return output + `</ol>`;
}

function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.service = service;
    this.gender = gender;
}

let pet4 = new Pet("Tyson", 6, "Pitbull", "Male", "Check-up");
let pet5 = new Pet("Enrique", 3, "Caramelo", "Male", "Check-up");
let pet6 = new Pet("Flabio", 12, "Bulldog", "Male", "Surgery");

pets.push(pet4);
pets.push(pet5);
pets.push(pet6);

registrationDiv.innerHTML = displayPetNames();

function displayRow(event) {
    event.preventDefault();

    let name = document.getElementById("inputName").value;
    let age = document.getElementById("inputAge").value;
    let breed = document.getElementById("inputBreed").value;
    let gender = document.getElementById("inputGender").value;
    let service = document.getElementById("inputService").value;

    let pet = new Pet(name, age, breed, gender, service)

    let table = document.getElementById("petsTable");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.breed}</td>
        <td>${pet.gender}</td>
        <td>${pet.service}</td>
        <td><button type="button" class="deleteBtn btn btn-danger">Delete</button></td>
    `

    row.querySelector(".deleteBtn").addEventListener('click', 
        function () {
            let confirmation = confirm("Are you sure you want to delete this pet?")
            if (confirmation) {
                row.remove();
                pets.pop(pet);
                registrationDiv.innerHTML = displayPetNames();
            }
        });

    table.appendChild(row);
    pets.push(pet);
    registrationDiv.innerHTML = displayPetNames();
    resetForm("petForm");
}

function resetForm(id){
    let form = document.getElementById(id);
    form.reset();
}