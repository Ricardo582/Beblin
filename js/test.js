var numEquipos;     // Cantidad de equipos
var numPe;      // Cantidad de personas
var page = 0;   // Página acutal
var currIntegrante = 1;     // Integrante actual
var resIntegrante = [];      // Resultados de integrantes

/*
Estructura resIntegrante:
     0           1          2          3          4            5              6            7            8
0 <nombre> - <implant> - <coordi> - <shaper> - <plant> - <investigador> - <obs-eva> - <teamwork> - <finalizador>
*/

function intName() {
    numEquipos = document.getElementById("numEquipos");
    numPersonas = document.getElementById("numPersonas");

    // Ocultar página inicial
    var main = document.getElementsByClassName("main");
    main[0].setAttribute("class" , "main hidden");

    // Cargar página de nombre del integrante
    var name = document.getElementsByClassName("name");
    name[0].setAttribute("class" , "name");

    document.getElementById("numIntegrante").innerHTML = "Integrante " + currIntegrante;

    for(var i = 0; i < parseInt(numPersonas.value); i++) {
        resIntegrante[i] = ["", 0, 0, 0, 0, 0, 0, 0, 0];
    }
};

function beginTest() {
    // Ocultar página de nombre del integrante
    var name = document.getElementsByClassName("name");
    name[0].setAttribute("class" , "name hidden");

    // Comenzar test
    next();
}
/*
function nextTest() {
    if (currIntegrante < numPersonas) {
        page = 0;
        
        // Cargar página de nombre del integrante
        var name = document.getElementsByClassName("name");
        name[0].setAttribute("class" , "name");

        var lastPage = document.getElementsByClassName("")
    }
}
*/
function next() {
    var pagePoints = document.getElementsByClassName("p"+page);
    var points = 0;

    for (var i = 0; i < pagePoints.length; i++) {
        points += parseInt(pagePoints[i].value);
    }

    page++;

    switch(page) {
        // Cargar página 1
        case 1:
            var next = document.getElementsByClassName("test-1");
            next[0].setAttribute("class", "container-center test-1");
            break;
        
        // Cargar página 2
        case 2:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }

            var current = document.getElementsByClassName("test-1");
            current[0].setAttribute("class", "container-center test-1 hidden");
            var next = document.getElementsByClassName("test-2");
            next[0].setAttribute("class", "container-center test-2");
            break;

        // Cargar página 3
        case 3:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }
            var current = document.getElementsByClassName("test-2");
            current[0].setAttribute("class", "container-center test-2 hidden");
            var next = document.getElementsByClassName("test-3");
            next[0].setAttribute("class", "container-center test-3");
            break;

        // Cargar página 4
        case 4:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }
            var current = document.getElementsByClassName("test-3");
            current[0].setAttribute("class", "container-center test-3 hidden");
            var next = document.getElementsByClassName("test-4");
            next[0].setAttribute("class", "container-center test-4");
            break;

        // Cargar página 5
        case 5:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }
            var current = document.getElementsByClassName("test-4");
            current[0].setAttribute("class", "container-center test-4 hidden");
            var next = document.getElementsByClassName("test-5");
            next[0].setAttribute("class", "container-center test-5");
            break;

        // Cargar página 6
        case 6:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }
            var current = document.getElementsByClassName("test-5");
            current[0].setAttribute("class", "container-center test-5 hidden");
            var next = document.getElementsByClassName("test-6");
            next[0].setAttribute("class", "container-center test-6");
            break;

        // Cargar página 7
        case 7:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }
            var current = document.getElementsByClassName("test-6");
            current[0].setAttribute("class", "container-center test-6 hidden");
            var next = document.getElementsByClassName("test-7");
            next[0].setAttribute("class", "container-center test-7");
            break;

        // Finalizar test
        case 8:
            if (points < 10 || points > 10) {
                alert("Asegurate de haber repartido solo 10 puntos.");
                page--;
                break;
            }
            resutls();
            break;

        default:
            break;
    }
};

function previous() {
    page--;

    switch(page) {

        // Regresar a página 1
        case 1:
            var current = document.getElementsByClassName("test-2");
            current[0].setAttribute("class", "container-center test-2 hidden");
            var previous = document.getElementsByClassName("test-1");
            previous[0].setAttribute("class", "container-center test-1");
            break;
        
        // Regresar a página 2
        case 2:
            var current = document.getElementsByClassName("test-3");
            current[0].setAttribute("class", "container-center test-3 hidden");
            var previous = document.getElementsByClassName("test-2");
            previous[0].setAttribute("class", "container-center test-2");
            break;

        // Regresar a página 3
        case 3:
            var current = document.getElementsByClassName("test-4");
            current[0].setAttribute("class", "container-center test-4 hidden");
            var previous = document.getElementsByClassName("test-3");
            previous[0].setAttribute("class", "container-center test-3");
            break;

        // Regresar a página 4
        case 4:
            var current = document.getElementsByClassName("test-5");
            current[0].setAttribute("class", "container-center test-5 hidden");
            var previous = document.getElementsByClassName("test-4");
            previous[0].setAttribute("class", "container-center test-4");
            break;

        // Regresar a página 5
        case 5:
            var current = document.getElementsByClassName("test-6");
            current[0].setAttribute("class", "container-center test-6 hidden");
            var previous = document.getElementsByClassName("test-5");
            previous[0].setAttribute("class", "container-center test-5");
            break;

        // Regresar a página 6
        case 6:
            var current = document.getElementsByClassName("test-7");
            current[0].setAttribute("class", "container-center test-7 hidden");
            var previous = document.getElementsByClassName("test-6");
            previous[0].setAttribute("class", "container-center test-6");
            break;

        default:
            break;
    }
};

function resutls() {
    // Guardar nombre del integrante
    var intName = document.getElementById("nombre");
    resIntegrante[currIntegrante-1][0] = intName.value;
    intName.value = "";

    console.log("Casilla nombre: " + intName.value);
    console.log("Nombre: " + resIntegrante[currIntegrante-1][0])

    for (var i = 1; i <= 7; i++) {
        var pagePoints = document.getElementsByClassName("p"+(i));

        // Calcula los puntos de cada rol
        switch(i) {
            case 1:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[6].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[3].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[5].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[2].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[7].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[1].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[4].value);
                break;

            case 2:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[1].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[4].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[6].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[2].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[3].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[5].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[7].value);
                break;

            case 3:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[7].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[2].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[3].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[5].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[6].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[4].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[1].value);
                break;

            case 4:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[3].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[7].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[1].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[4].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[6].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[2].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[5].value);
                break;

            case 5:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[1].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[5].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[3].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[7].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[4].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[2].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[6].value);
                break;

            case 6:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[5].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[2].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[6].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[7].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[4].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[1].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[3].value);
                break;

            case 7:
                resIntegrante[currIntegrante-1][1] += parseInt(pagePoints[4].value);
                resIntegrante[currIntegrante-1][2] += parseInt(pagePoints[6].value);
                resIntegrante[currIntegrante-1][3] += parseInt(pagePoints[0].value);
                resIntegrante[currIntegrante-1][4] += parseInt(pagePoints[5].value);
                resIntegrante[currIntegrante-1][5] += parseInt(pagePoints[3].value);
                resIntegrante[currIntegrante-1][6] += parseInt(pagePoints[1].value);
                resIntegrante[currIntegrante-1][7] += parseInt(pagePoints[7].value);
                resIntegrante[currIntegrante-1][8] += parseInt(pagePoints[2].value);
                break;

            default:
                break;
        }
    }

    for (var i = 0; i < 9; i++) {
        console.log(i + ": " + resIntegrante[currIntegrante-1][i]);
    }

    // Encuesta para siguiente persona
    //nextTest();    
}