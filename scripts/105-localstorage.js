function User(username, name, age, email){
    this.username = username;
    this.name = name;
    this.age = age; 
    this.email = email;
}

// Save
$("#saveBtn").click(function () {
    let usernameValue = $("#username").val().trim()
    let nameValue = $("#name").val().trim()
    let ageValue = $("#age").val().trim()
    let emailValue = $("#email").val().trim()

    usernameValue ? localStorage.setItem("username", usernameValue) : alert("No username was given!");
    nameValue ? localStorage.setItem("name", nameValue) : alert("No name was given!");
    ageValue ? localStorage.setItem("age", ageValue) : alert("No age was given!");
    emailValue ? localStorage.setItem("email", emailValue) : alert("No email was given!");
    
    $("#username").val("");  
    $("#name").val("");  
    $("#age").val("");  
    $("#email").val("");  
});

// Get
$("#getBtn").click(function (event) {
    event.preventDefault();
    let storedUsername = localStorage.getItem("username");
    let storedName = localStorage.getItem("name");
    let storedAge = localStorage.getItem("age");
    let storedEmail = localStorage.getItem("email");

    $("#usernameDisplay").text(storedUsername ? storedUsername : "No data found");
    $("#nameDisplay").text(storedName ? storedName : "No data found");
    $("#ageDisplay").text(storedAge ? storedAge : "No data found");
    $("#emailDisplay").text(storedEmail ? storedEmail : "No data found");
});

// Deletes
$("#deleteBtn").click(function (event) {
    event.preventDefault();
    let flag = confirm("Are you sure you want to delete the stored user");
    
    if (flag) {
        localStorage.removeItem("username");
        localStorage.removeItem("name");
        localStorage.removeItem("age");
        localStorage.removeItem("email");

        $("#usernameDisplay").text(""); 
        $("#nameDisplay").text(""); 
        $("#ageDisplay").text("");  
        $("#emailDisplay").text("");  
    }
});