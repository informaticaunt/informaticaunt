import Escuela from './escuela.js';

export default function actualizarPanelResultados() {
    document.getElementById("num-cred-inf").innerHTML = Escuela.prototype.nCredInf;
    document.getElementById("num-cred-fym").innerHTML = Escuela.prototype.nCredFym;
    document.getElementById("num-cred-let").innerHTML = Escuela.prototype.nCredLet;
    document.getElementById("num-cred-tot").innerHTML = Escuela.prototype.nCredInf + Escuela.prototype.nCredFym + Escuela.prototype.nCredLet;
}
