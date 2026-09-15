let salon = {
    name: "Nana's grooming and pet salon",
    hours: "8:00-16:00",
    phone: "555-555-5555",
    address: "125 I street City State 01392"
};

function displaySalonInfo (salonData) {
    let salonStr = `Name: ${salonData.name} Hours: ${salonData.hours} Phone: ${salonData.phone} Address: ${salonData.address}</p>`;
    document.getElementById("salonInfo").innerHTML = salonStr;
}

displaySalonInfo(salon);