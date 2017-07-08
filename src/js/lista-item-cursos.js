
export default function ListaItemCursos(){
    this.lista = [];
};
ListaItemCursos.prototype.agregar = function(control){
    this.lista.push(control);
};
ListaItemCursos.prototype.getItem = function(i){
    return this.lista[i];
};
ListaItemCursos.prototype.seleccionarTodo = function () {
    let tam = this.lista.length;
    for (let i = 0; i < tam; i++) {
        this.lista[i].setSelected(true);
    }
};

ListaItemCursos.prototype.getTam = function () {
    return this.lista.length
};

ListaItemCursos.prototype.quitarSeleccion = function () {
    let tam = this.lista.length;
    for (let i = 0; i < tam; i++) {
        this.lista[i].setSelected(false);
    }
};











