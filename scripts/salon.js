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