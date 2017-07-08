import Escuela from './escuela.js';

export default class Curso{

    constructor(ciclo, codigo, semestre, nombre, creditos, h1, h2, h3, escuela, r1, r2) {
        this.ciclo = ciclo;
        this.codigo = codigo;

        // nombre = nombre.replace("Tópicos", "Tóp.");
        // nombre = nombre.replace("Arquitectura", "Arq.");
        // nombre = nombre.replace("Programación", "Prog.");
        // this.nombre = nombre.replace("Computación", "Comp.");

        this.nombre = nombre;
        this.creditos = creditos;
        this.escuela = escuela;
        this.codGrupoEscuela = -1; // 0 inform, 1 fis mate, 2 letras
        this.r1 = r1;
        this.r2 = r2;
        this.ant = [];
        this.sig = [];
        this.lisRqs = [];
        this.clickeado = false;
        this.disponible = true;

        this.codGrupoEscuela = getCodGrupEsc(this.escuela);


        this.llenarListRqs();
    }


    llenarListRqs(){
        if (this.r1 > 0) {
            this.lisRqs.push(this.r1);
        }
        if (this.r2 > 0) {
            this.lisRqs.push(this.r2);
        }
    }

    incrementarCred() {
        incrementarCred_(this);
    }

    decrementarCred() {
        decrementarCred_(this);
    }
}
















///////////////////////////////////////////////////////////////

/*****     S T A T I C S     *****/
function getCodGrupEsc(escuela) {/*por cambiar*/
   // dependiendo del grupo de escuelas se asignará 0,1,2.
    if (escuela === "Informatica") {
        return 0;
    }
    else if (escuela === ("Ciencias de la Educacion")) {
        return 2;
    }
    else if (escuela === ("Matematicas")) {
        return 1;
    }
    else if (escuela === ("Fisica")) {
        return 1;
    }
    else if (escuela === ("Idiomas y Linguistica")) {
        return 2;
    }
    else if (escuela === ("Economia")) {
        return 2;
    }
    else if (escuela === ("Ciencias Sociales")) {
        return 2;
    }
    else if (escuela === ("Economia")) {
        return 2;
    }
    else if (escuela === ("Administracion")) {
        return 2;
    }
    else if (escuela === ("Estadistica")) {
        return 1;
    }
    else {
        return -1;
    }
}

function incrementarCred_(c) // Curso C
{   // se consulta de qué escuela es el curso para
    //poder incrementar el contador de créditos

    if (c.codGrupoEscuela === 0) {
        Escuela.prototype.nCredInf += c.creditos;
    }
    if (c.codGrupoEscuela === 1) {
        Escuela.prototype.nCredFym += c.creditos;
    }
    if (c.codGrupoEscuela === 2) {
        Escuela.prototype.nCredLet += c.creditos;
    }
}

function decrementarCred_(c) // Curso C
{   // se consulta de qué escuela es el curso para
    //poder decrementar el contador de créditos
    if (c.codGrupoEscuela === 0) {
        Escuela.prototype.nCredInf -= c.creditos;
    }
    if (c.codGrupoEscuela === 1) {
        Escuela.prototype.nCredFym -= c.creditos;
    }
    if (c.codGrupoEscuela === 2) {
        Escuela.prototype.nCredLet -= c.creditos;
    }
}
