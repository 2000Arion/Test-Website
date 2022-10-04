function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

var Var;

function load() {
    Var = setTimeout(showPage);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("Div").style.display = "block";
}

function reset() {
    if (getParameter("format") == 2) {
        let html = '<a style="text-decoration:none;cursor:pointer;color:blue;"> Vielen Dank fürs Abbrechen als du darum gebeten wurdest! Als Belohnung darfst du nun auch auf den oberen Text klicken.</a>';
        document.getElementById("reset").innerHTML = html;
        let html2 = '<a style="text-decoration:none;" href="?format=0&finish=true">Klick auf diesen Knopf! :)';
        document.getElementById("test").innerHTML = html2;
    } else if (getParameter("format") == null) {
        console.warn('This may not be executed here!')
    } else {
        window.location.replace("/projects/urlparametertesting");
    }
}
function finishreset() {
    window.location.replace("/projects/urlparametertesting")
}

// Start of Tawk.to Script \\
var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function () {
var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
s1.async = true;
s1.src = 'https://embed.tawk.to/61e29fcdf7cf527e84d24447/1fpek0fbh';
s1.charset = 'UTF-8';
s1.setAttribute('crossorigin', '*');
s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Script \\