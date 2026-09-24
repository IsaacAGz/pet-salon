$("#changeMode").click(function(){
    $("body").toggleClass("dark-mode");

    const isDark = $("body").hasClass("dark-mode");

    /*
    if (isDark) {
        $("h1").text("🌘 Dark Mode");
    } else {
        $("h1").text("☀️ Light Mode");
    }
    */

    $("#mode").text(isDark ? "🌘 Dark Mode" : "☀️ Light Mode");
})