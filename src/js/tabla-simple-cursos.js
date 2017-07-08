

var lista = cargarDatos();
let tam = lista.length;
let tabla = document.getElementById("body-tab");

for(let i=0 ; i< tam ; i++){
    let tr_fila = document.createElement("tr");
    let td_i = document.createElement("th");
    let td_cod = document.createElement("td");
    let td_ciclo = document.createElement("td");
    let td_nombre = document.createElement("td");
    let td_cred = document.createElement("td");
    let td_escuela = document.createElement("td");


    td_i.innerHTML = i+1;
    td_cod.innerHTML = lista[i].codigo;
    td_ciclo.innerHTML = lista[i].ciclo;
    td_nombre.innerHTML = lista[i].nombre;
    td_cred.innerHTML = lista[i].creditos;
    td_escuela.innerHTML = lista[i].escuela;

    tr_fila.appendChild(td_i);
    tr_fila.appendChild(td_cod);
    tr_fila.appendChild(td_ciclo);
    tr_fila.appendChild(td_nombre);
    tr_fila.appendChild(td_cred);
    tr_fila.appendChild(td_escuela);

    // tabla.appendChild(tr_fila.cloneNode(true));
     tabla.appendChild(tr_fila);
}

