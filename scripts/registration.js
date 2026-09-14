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



function createPet(name, age, breed, gender, service) {
    let pet = {
        name: name,
        age: age, 
        breed: breed,
        gender: gender,
        service: service
    }

    return pet
}

let pet4 = createPet("Tyson", 6, "Pitbull", "Male", "Check-up");
let pet5 = createPet("Entique", 3, "Caramelo", "Male", "Check-up");
let pet6 = createPet("Flabio", 12, "Bulldog", "Male", "Surgery");

pets.push(pet4);
pets.push(pet5);
pets.push(pet6);

registrationDiv.innerHTML = displayPetNames();