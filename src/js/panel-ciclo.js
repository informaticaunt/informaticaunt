export default function PanelCiclo(numCiclo) {

    let panel = document.createElement("fieldset");
    panel.className = "panel-ciclo";

    let titulo = document.createElement("legend");
    titulo.className = "leyenda";
    titulo.innerHTML = getRoman(numCiclo+1) + " Ciclo ";

    panel.appendChild(titulo);

    let panelResult = document.getElementById("panelResult");
    panelResult.parentNode.insertBefore(panel, panelResult);

    this.panel = panel;

};

PanelCiclo.prototype.agregar = function (control) {
    this.panel.appendChild(control);
};


//////////
let getRoman  = function(num){
    switch (num)
    {
    case 1:return "I";
    case 2:return "II";
    case 3:return "III";
    case 4:return "IV";
    case 5:return "V";
    case 6:return "VI";
    case 7:return "VII";
    case 8:return "VIII";
    case 9:return "IX";
    case 10: return "X";
    }
};