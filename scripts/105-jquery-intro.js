function sayHello() {
    alert("Hello world");
}

$("#triggerEventButton").click(function(){
    alert("Hello, Isaac");
});

$("#showParagraph").click(function() {
    $("p").show();
}); 

$("#hideParagraph").click(function() {
    $("p").hide();
}); 

$("#toggleParagraph").click(function() {
    $("p").slideToggle();
}); 

// Change Text for text or html
$("#changeText").click(function() {
    $("p").html("<i>Hello class! </i>");
});

// Apply CSS
$("#applyCSS").click(function() {
    $("p")
        .css("color", "blue")
        .css("padding", "20px")
        .css("border", "solid 2px red");

});

// Apply CSS class
$("#applyClass").click(function() {
    $("p").addClass("text-style");
});