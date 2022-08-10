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
        let html = '<a style="text-decoration:none;cursor:pointer;color:blue;"> Vielen Dank fürs Abbrechen als du darum gebeten wurdest! Als Belohnung darfs du nun auch auf den oberen Text klicken.</a>';
        document.getElementById("reset").innerHTML = html;
        let html2 = '<a style="text-decoration:none;" href="?format=0&finish=true">Klick auf diesen Knopf! :)';
        document.getElementById("test").innerHTML = html2;
    } else if (getParameter("format") == null) {
        console.warn('This may not be executed here!')
    } else {
        window.location.replace("/upt");
    }
}
function finishreset() {
    window.location.replace("/upt")
}