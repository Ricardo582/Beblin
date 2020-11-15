var numEquipos;
var numPe;
var personas = new Array();
var page = 0;

function test() {
    numEquipos = document.getElementById("numEquipos");
    numPersonas = document.getElementById("numPersonas");

    //Ocultar página inicial
    var main = document.getElementsByClassName("main");
    main[0].setAttribute("class" , "main hidden");

    next();
};

function next() {
    var pagePoints = document.getElementsByClassName("p"+page);
    var points = 0;
    
    for (var i = 0; i < pagePoints.length; i++) {
        points += parseInt(pagePoints[i].value);
    }
    console.log(points);

    page++;
    console.log(page);

    switch(page) {
        case 1:
            var next = document.getElementsByClassName("test-1");
            next[0].setAttribute("class", "container-center test-1");
            break;
        
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
    console.log(page);

    switch(page) {
        case 1:
            var current = document.getElementsByClassName("test-2");
            current[0].setAttribute("class", "container-center test-2 hidden");
            var previous = document.getElementsByClassName("test-1");
            previous[0].setAttribute("class", "container-center test-1");
            break;
        
        case 2:
            var current = document.getElementsByClassName("test-3");
            current[0].setAttribute("class", "container-center test-3 hidden");
            var previous = document.getElementsByClassName("test-2");
            previous[0].setAttribute("class", "container-center test-2");
            break;

        case 3:
            var current = document.getElementsByClassName("test-4");
            current[0].setAttribute("class", "container-center test-4 hidden");
            var previous = document.getElementsByClassName("test-3");
            previous[0].setAttribute("class", "container-center test-3");
            break;

        case 4:
            var current = document.getElementsByClassName("test-5");
            current[0].setAttribute("class", "container-center test-5 hidden");
            var previous = document.getElementsByClassName("test-4");
            previous[0].setAttribute("class", "container-center test-4");
            break;

        case 5:
            var current = document.getElementsByClassName("test-6");
            current[0].setAttribute("class", "container-center test-6 hidden");
            var previous = document.getElementsByClassName("test-5");
            previous[0].setAttribute("class", "container-center test-5");
            break;

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