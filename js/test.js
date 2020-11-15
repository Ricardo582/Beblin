var numEquipos;     // Cantidad de equipos
var numPe;      // Cantidad de personas
var page = 0;   // Página acutal
var currIntegrante = 1;     // Integrante actual
var resIntegrante = [];      // Resultados de integrantes
var roles = [];

/*
Estructura resIntegrante:
     0           1          2          3          4            5              6            7            8
0 <nombre> - <implant> - <coordi> - <shaper> - <plant> - <investigador> - <obs-eva> - <teamwork> - <finalizador>

Estructura roles:
     0         1          2
0 <nombre> - <rol> - <asignado?>
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
        roles[i] = ["", 0, false];
    }
};

function beginTest() {
    // Ocultar página de nombre del integrante
    var name = document.getElementsByClassName("name");
    name[0].setAttribute("class" , "name hidden");

    // Comenzar test
    next();
}

function findRoles() {
    // Se mapea el nombre del integrante con su rol
    roles[currIntegrante-1][0] = resIntegrante[currIntegrante-1][0];
    roles[currIntegrante-1][1] = 1;
    var temp = resIntegrante[currIntegrante-1][1];

    // Se obtiene el rol con mayor puntuación del integrante
    for (var i = 1; i < 9; i++) {
        if (temp < resIntegrante[currIntegrante-1][i]) {
            roles[currIntegrante-1][1] = i;
            temp = resIntegrante[currIntegrante-1][i];
        }
    }

    console.log(roles[currIntegrante-1][0] + " " + roles[currIntegrante-1][1] + " " + roles[currIntegrante-1][2]);
}

function nextTest() {
    // Ocultar última página de la encuesta
    var lastPage = document.getElementsByClassName("test-7");
    lastPage[0].setAttribute("class", "container-center test-7 hidden");

    // Verficar que aún faltan integrantes de realizar la encuesta
    if (currIntegrante < parseInt(numPersonas.value)) {
        page = 0;
        currIntegrante++;

        // Cargar página de nombre del integrante
        document.getElementById("numIntegrante").innerHTML = "Integrante " + currIntegrante;
        var name = document.getElementsByClassName("name");
        name[0].setAttribute("class" , "name");

        return;
    }

    // Mostrar container de tabla de resultados
    var container = document.getElementsByClassName("results");
    container[0].setAttribute("class", "results");
    finalResults();
}

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

    for (var i = 1; i < 9; i++) {
        console.log(rol(i) + ": " + resIntegrante[currIntegrante-1][i]);
    }

    // Se obtiene el rol con mayor puntuación de cada integrante
    findRoles();

    // Encuesta para siguiente persona
    nextTest();    
}

function rol(rolNumber) {
    // Regresa el nombre del rol
    switch(rolNumber) {
        case 1:
            return "Implementador";
            break;
        
        case 2:
            return "Coordinador";
            break;

        case 3:
            return "Shaper";
            break;

        case 4:
            return "Plant";
            break;

        case 5:
            return "Investigador de recursos";
            break;

        case 6:
            return "Observador-Evaluador";
            break;

        case 7:
            return "Trabajo de equipo";
            break;

        case 8:
            return "Finalizador";
            break;

        default:
            break;
    }
}

function finalResults() {
    for (var i = 1; i <= parseInt(numEquipos.value); i++) {
        document.getElementById("finalResults").innerHTML += 
            "<legend class='card-title text-center'>Equipo " + i + "</legend>" + 
            "<table class='table'>" +
                "<thead class='thead-dark'>" +
                    "<tr>" +
                        "<th scope='col'>#</th>" +
                        "<th scope='col'>Integrante</th>" +
                        "<th scope='col'>Rol</th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody id='team" + i + "'>" +
                "</tbody>" +
            "</table>"
        ;      
    }

    // Genera tablas de equipos
    for (var i = 1; i <= parseInt(numEquipos.value); i++) {
        var role = 1;

        // Recorre cada rol
        for (var j = 1; j < 9; j++) {
            var found = false;
            var k = 0;  

            // Busca un integrante con el rol "role"
            while (!found) {
                // Si se encuentra un integrante con ese rol y no está asignado a ningún equipo, lo asigna al equipo i
                if (role == roles[k][1] && !roles[k][2]) {
                    found = true;
                    roles[k][2] = true;
                    role++;

                    document.getElementById("team" + i).innerHTML +=
                    "<tr>"+
                        "<th scope='col'>" + j + "</th>" +
                        "<td>" + roles[k][0] + "</td>" +
                        "<td>" + rol(roles[k][1]) + "</td>" +
                    "</tr>"
                    ;
                }
                k++;

                // Si no encontró ninguna persona con ese rol, busca cualquiera que no esté asignado a un equipo
                if (k >= parseInt(numPersonas.value)) {

                    // Vuelve a recorrer todos las personas hasta que encuentre una no asignada
                    for (var pos = 0; pos < parseInt(numPersonas.value); pos++) {

                        // Si encuentra una no asignada, la asigna
                        if (!roles[pos][2]) {
                            roles[pos][2] = true;
                            role++;

                            document.getElementById("team" + i).innerHTML +=
                                "<tr>"+
                                    "<th scope='col'>" + j + "</th>" +
                                    "<td>" + roles[pos][0] + "</td>" +
                                    "<td>" + rol(roles[pos][1]) + "</td>" +
                                "</tr>"
                            ;
                            pos = parseInt(numPersonas.value);
                        }
                    }
                    found = true;
                }
            }
        }
    }

    /*
    document.getElementById("finalResults").innerHTML =
        "<table class='table'>" +
            "<thead class='thead-dark'>" +
                "<tr>" +
                    "<th scope='col'>#</th>" +
                    "<th scope='col'>Integrante</th>" +
                    "<th scope='col'>Rol</th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
                "<tr>" +
                    "<th scope='col'>1</th>" +
                    "<td>Carlitos</td>" +
                    "<td>Implementador</td>" +
                "</tr>" +
            "</tbody>" +
        "</table>"
    ;*/
}