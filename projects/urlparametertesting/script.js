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
if (getParameter("format") == "b") {
    let html =
        '<a style="text-decoration:none;" href="?format=i"><b>Hallo!</b> Klick doch nochmal :)</a>';
    document.getElementById("test").innerHTML = html;
}
if (getParameter("format") == "i") {
    let html =
        '<a style="text-decoration:none;" href="?format=c"><b>Hallo!</b> <i>Bitte klick <b>nicht</b> nochmal...</i></a>';
    document.getElementById("test").innerHTML = html;
}
if (getParameter("format") == "c") {
    let html = "Och nee.. jetzt hör bitte wirklich auf...</a>";
    document.getElementById("test").innerHTML = html;
}

function reset() {
    window.location.replace("/");
}