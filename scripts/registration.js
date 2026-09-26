function PetData(name, age, breed, gender, service, imagePath) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
    this.imagePath = imagePath;
}

let petGallery = [];

pet1 = new PetData("Iggy", "4", "Pug","Male", "Bath", "./assets/dog_headshot_1.jpg");
pet2 = new PetData("Tulsi", "7", "Australian-Shepherd","Female", "Daycare", "./assets/dog_headshot_2.jpg");
pet3 = new PetData("Bombadil", "9", "Good Boy","Male", "Full-Service", "./assets/dog_headshot_3.jpg");

petGallery.push(pet1);
petGallery.push(pet2);
petGallery.push(pet3);

function displayPetNames() {
    let output = `<ol>`;
    for(let i = 0; i < petGallery.length; i++) {
        output += `<li class="petName">${petGallery[i].name}</li>`;
    }
    return output + `</ol>`;
}

function refreshGallery() {
    const gallery = document.getElementById("petGallery");
    gallery.innerHTML = "";

    petGallery.forEach((pet, index) => {
        const card = document.createElement("div");
        card.classList.add("pet-card");
        card.innerHTML = `
            <img src="${pet.imagePath}" alt="${pet.name}" class="pet-img">
            <div class="petInfo">
                <h3>${pet.name}</h3>
                <p><strong>Breed:</strong> ${pet.breed}</p>
                <p><strong>Age:</strong> ${pet.age} | <strong>Gender: </strong> ${pet.gender}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

function addToTable(pet) {
    let table = document.getElementById("petsTable");
    const row = document.createElement("tr");
    let registrationDiv = document.getElementById("registeredPets")
    

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
                petGallery = petGallery.filter(p => p !== pet);
                row.remove();
                refreshGallery();
                registrationDiv.innerHTML = displayPetNames();
            }
        });

    table.appendChild(row);
    registrationDiv.innerHTML = displayPetNames();
}

addToTable(pet1);
addToTable(pet2);
addToTable(pet3);

refreshGallery();

function savePet(event) {
    event.preventDefault();

    
    let name = document.getElementById("inputName").value.trim();
    let age = document.getElementById("inputAge").value.trim();
    let breed = document.getElementById("inputBreed").value.trim();
    let gender = document.getElementById("inputGender").value.trim();
    let service = document.getElementById("inputService").value.trim();

    let fileInput = document.getElementById("upload");
    let imagePath = "./assets/Dog.jpg";

    if (fileInput && fileInput.files && fileInput.files[0]) {
        imagePath = URL.createObjectURL(fileInput.files[0]);
    }

    $("#inputName, #inputAge, #inputGender, #inputBreed").css("border", "");

    let complete = true;
    if (name == "") {
        $("#inputName").css("border", "2px solid red");
        complete = false;
    }
    if (age == "") {
        $("#inputAge").css("border", "2px solid red");
        complete = false;
    }
    if (gender == "") {
        $("#inputGender").css("border", "2px solid red");
        complete = false;
    }
    if (breed == "") {
        $("#inputBreed").css("border", "2px solid red");
        complete = false;
    }

    if (!complete) {
        return;
    }

    let pet = new PetData(name, age, breed, gender, service, imagePath);

    petGallery.push(pet);
    
    refreshGallery();
    addToTable(pet);    
    
    document.getElementById("petForm").reset();
}

$(document).ready(function() {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark') {
        $("body").toggleClass("dark-mode");
    }

    $("#changeMode").click(function() {
        $("body").toggleClass("dark-mode");
        const isDark = $("body").hasClass("dark-mode");
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
})

function resetForm(id){
    let form = document.getElementById(id);
    $("#inputName").css("border", "0px solid red");
    $("#inputAge").css("border", "0px solid red");
    $("#inputBreed").css("border", "0px solid red");
    $("#inputGender").css("border", "0px solid red");
    form.reset();
}

function toggleForm(event) {
    event.preventDefault();
    const targetDiv = document.getElementById("animatedForm");
    targetDiv.classList.toggle("open");


    const isExpanded = targetDiv.classList.contains("open");

    if (isExpanded) {
        $(".formBtn").text("Close Form");
    } else {
        $(".formBtn").text("Open Form");
    }
}

$(document).ready(function() {
    const selectElement = document.getElementById("#inputService");
    
    if(!selectElement) {
        return;
    }

    const storedServices = localStorage.getItem("services");

    storedServices.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = s.service
        selectElement.appendChild(option);
    })
});