let services = [];

function Service(service, description, price){
    this.service = service;
    this.description = description;
    this.price = price;
};

$("#registerService").click(function(event) {
    event.preventDefault();

    let service = $("#inputService").val().trim();
    let description = $("#inputDescription").val().trim();
    let price = $("#inputPrice").val().trim();

// need to fix this
    if(service === "") {
        $("#inputService").css("border", "solid 2px red");
        if (description === "") {
            $("#inputDescription").css("border", "solid 2px red");
            if (price === "") {
                $("#inputPrice").css("border", "solid 2px red");
            }
        }
    } else {
        let registeredService = new Service(service, description, price);
        services.push(registeredService);
    }
})