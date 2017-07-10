import cargarDatos from './datos.js';
import item from './item-curso.js';
import ListaItemCursos from './lista-item-cursos.js';
import PanelCiclo from './panel-ciclo.js';
import actualizarPanelResultados from './actualizar-resultados.js';
import iniModalManual from './modal-manual.js';
/*          cargar lista cursos y vincularlos   */

let listaCursos = cargarDatos();
for (let ic = 0; ic < listaCursos.length; ic++) {
    for (let jc = 0; jc < listaCursos[ic].lisRqs.length; jc++) {
        for (let kc = 0; kc < listaCursos.length; kc++) {
            if (listaCursos[ic].lisRqs[jc] === listaCursos[kc].codigo) {
                listaCursos[ic].ant.push(listaCursos[kc]);
                listaCursos[kc].sig.push(listaCursos[ic]);
                break;
            }
        }
    }
}
let tam = listaCursos.length;

/*          crear listaPanelesCiclo             */
let listaPaneles = [];
for (let i = 0; i < 10; i++) {
    listaPaneles.push(new PanelCiclo(i));
}

//      crear ItemCursos a partir de los obj cursos
let listaItemCursos = new ListaItemCursos();
for (let i = 0; i < tam; i++) {
    listaItemCursos.agregar(new item(listaCursos[i]));
    listaItemCursos.getItem(i).setListaItc(listaItemCursos);//-> para shiftc, por cambiar
}

//   agregar itemCursos a respectivo panelCiclo
let cont = 1;
listaItemCursos.lista.forEach(function (item) {

    if (cont !== item.curso.ciclo) {
        cont++;
    }
    listaPaneles[cont - 1].agregar(item.li);
});
iniModalManual();


///____________________________________________________________________________________________________________________

////////////////////////////////////////////////////////////////////////////////
/* para mostrar siempre los resultados cuando el ancho es pequeño
 $(window).scroll(function () {
 let panelRes = $('#panelResult');
 let tablaRes = $('#tablaResult');
 //if ($(window).width() < 891 && ($("#widget").offset().top / 4 - $(window).scrollTop() )< 0 &&  ($(window).scrollTop() + $(window).height() - panelRes.offset().top < tablaRes.height())) {
 if ($(window).width() < 891 &&  ($(window).scrollTop() + $(window).height() - panelRes.offset().top < tablaRes.height())) {
 panelRes.addClass('panelrescambio');
 tablaRes.addClass('tablarescambio');
 } else {
 panelRes.removeClass('panelrescambio');
 tablaRes.removeClass('tablarescambio');
 }
 }); */

/////////////////  evento para los 2 botones ///////////////////////////////////
let btnSelec = document.getElementById("btn-selec");
btnSelec.onclick = function () {
    listaItemCursos.seleccionarTodo();
    actualizarPanelResultados();
};
let btnNoSelec = document.getElementById("btn-noselec");
btnNoSelec.onclick = function () {
    listaItemCursos.quitarSeleccion();
    actualizarPanelResultados();
};
///____________________________________________________________________________________________________________________
///____________________________________________________________________________________________________________________