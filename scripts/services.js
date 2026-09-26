
function Service(service, description, price){
    this.service = service;
    this.description = description;
    this.price = price;
};

function saveServicesToStorage() {
    localStorage.setItem("services", JSON.stringify(services));
}

function addToTable(service) {
    let table = document.getElementById("servicesTable");
    const row = document.createElement("tr");


    row.innerHTML = `
        <td>${service.service}</td>
        <td>${service.description}</td>
        <td>${service.price}</td>
        <td><button type="button" class="deleteBtn btn btn-danger">Delete</button></td>
        `
    row.querySelector(".deleteBtn").addEventListener('click', 
        function () {
            const confirmation = confirm("Are you sure you want to delete this service?")
            if (confirmation) {
                services = services.filter(s => s !== service);
                row.remove();
                saveServicesToStorage();
            }
        });

    table.appendChild(row);

}

$("#registerService").click(function(event) {
    event.preventDefault();

    let service = $("#inputService").val().trim();
    let description = $("#inputDescription").val().trim();
    let price = $("#inputPrice").val().trim();

    let formComplete = true;
    if(service === "") {
        $("#inputService").css("border", "solid 2px red");
        formComplete = false;
    }
    if (description === "") {
        $("#inputDescription").css("border", "solid 2px red");
        formComplete = false;
    }
    if (price === "") {
        $("#inputPrice").css("border", "solid 2px red");
        formComplete=false;
    }

    if (!formComplete){
        return;
    }  

    let registeredService = new Service(service, description, price);
    addToTable(registeredService);
    services.push(registeredService);
    saveServicesToStorage();
});

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

    const stored = localStorage.getItem("services");

    if (services.length === 0) {
        services = [
            new Service("Essential Bath & Brush Out", "A refreshing deep-clean...", "45"),
            new Service("The Signature Spa Groom", "Our full head-to-paw pampering...", "50"),
            new Service("Daily Play & Pamper Daycare", "Full or half-day supervised group play...", "45"),
            new Service("Nail Trim", "A quick, gentle clip of the claws...", "15"),
            new Service("Comprehensive Senior & Wellness Care Check", "Designed specifically for older pets...", "35")
        ];
        saveServicesToStorage();
    }

    services.forEach(s => addToTable(s));
});

$("#resetForm").click(function () {
    $("#inputService").css("border", "solid 0px red");
    $("#inputDescription").css("border", "solid 0px red");
    $("#inputPrice").css("border", "solid 0px red");
})

let service1 = new Service("Essential Bath & Brush Out", 
    "A refreshing deep-clean designed for maintenance between haircuts. Includes a double wash with premium hypoallergenic shampoo, soothing coat conditioner, high-velocity hand drying, a thorough brush out, nail trimming, and ear cleaning.",
    "45"
);

let service2 = new Service("The Signature Spa Groom", 
    "Our full head-to-paw pampering package. Includes everything in the Bath & Brush Out, plus custom scissoring and breed-specific coat styling, pad shaving, sanitary trim, anal gland expression, and a finishing spray of coat-shimmer perfume.",
    "50"
);

let service3 = new Service("Daily Play & Pamper Daycare", 
    "Full or half-day supervised group play in our climate-controlled indoor and outdoor park spaces. Includes socialization, agility play equipment, structured nap time, regular potty breaks, and personalized report card updates with photos.",
    "45"
);

let service4 = new Service("Daily Play & Pamper Daycare", 
    "A quick, gentle clip of the claws to keep paw structure healthy and prevent snagging. Perfect for maintenance visits, completed using low-stress handling techniques to keep your pet calm and comfortable.",
    "15"
);

let service5 = new Service("Comprehensive Senior & Wellness Care Check", 
    "Designed specifically for older or high-maintenance pets, featuring a detailed skin assessment, paw pad hydration check, gentle lump and bump charting, coat-thinning evaluation, and customized grooming recommendations.",
    "35"
);

let services = [
    new Service("Essential Bath & Brush Out", "A refreshing deep-clean...", "45"),
    new Service("The Signature Spa Groom", "Our full head-to-paw pampering...", "50"),
    new Service("Daily Play & Pamper Daycare", "Full or half-day supervised group play...", "45"),
    new Service("Nail Trim", "A quick, gentle clip of the claws...", "15"),
    new Service("Comprehensive Senior Care Check", "Designed specifically for older pets...", "35")
];