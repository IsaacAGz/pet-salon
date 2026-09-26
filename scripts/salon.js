$(document).ready(function() {
    const savedTheme = localStorage.getItem('theme');

    if(savedTheme === 'dark') {
        $("body").toggleClass("dark-mode");
        $("#changeMode").text("🌘 Dark Mode");
    } else {
        $("#changeMode").text("☀️ Light Mode");
    }

    $("#changeMode").click(function() {
        $("body").toggleClass("dark-mode");
        const isDark = $("body").hasClass("dark-mode");
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        $("#changeMode").text(isDark ? "🌘 Dark Mode" : "☀️ Light Mode");
    });
})