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
    window.location.replace("/projects/urlparametertesting");
}