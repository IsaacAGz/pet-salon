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

registrationDiv.innerHTML = displayPetNames();