import actualizarPanelResultados from './actualizar-resultados.js';
export default function item(_curso) {
    this.curso = _curso;
    _curso.item = this;
    this.spCred = document.createElement("span");
    this.spCred.innerHTML = this.curso.creditos;
    this.spCred.classList.add("num-cred");
    this.asignarEstiloxEsc();

    this.spCurso = document.createElement("span");
    this.spCheck = document.createElement("span");
    this.spCurso.innerHTML = this.curso.nombre;

    this.li = document.createElement("li");
    this.li.classList.add("item-curso");
    this.enabled = true;
    this.selected = false;
    this.spCheck.classList.add("fa");
    this.spCheck.classList.add("fa-square-o");
    this.spCheck.classList.add("ico-check");

    this.li.appendChild(this.spCheck);
    this.li.appendChild(this.spCred);
    this.li.appendChild(this.spCurso);

    this.asignarEventos();

    if (this.curso.ant.length > 0) { // si tiene rqs  ===> "bloquear"
        this.setEnabled(false);
    }
};
////////////////////////////////////////////////////////////////////////
item.prototype.asignarEstiloxEsc = function () {
    if (this.curso.codGrupoEscuela === 0) {
        this.spCred.classList.add("inf");
    }
    if (this.curso.codGrupoEscuela === 1) {
        this.spCred.classList.add("fym");
    }
    if (this.curso.codGrupoEscuela === 2) {
        this.spCred.classList.add("let");
    }
};

item.prototype.setEnabled = function (band) {
    if (this.enabled === band) {
        return false;// si tienen el mismo valor -> no hacer nada
    }
    else {
        if (band === false) {
            this.li.classList.add("disabled");
        } else {
            this.li.classList.remove("disabled");
        }
        this.enabled = !this.enabled;
    }
};
item.prototype.setSelected = function (band) {
    if (this.selected === band) {  // si se quiere asignar el mismo estado, retornar
        return;
    }
    if (this.enabled === true) {
        if (band === false) { // si nuevo estado = false  ---> this.selected == false
            this.curso.decrementarCred();

            this.spCheck.classList.remove("fa-check-square-o");// cuadro con check
            this.spCheck.classList.add("fa-square-o"); //cuadro sin check
            this.selected = band;
            this.inhabilitarSigRecr();
        }
        else { // si nuevo estado = true  ---> selected == true
            this.curso.incrementarCred();
            this.spCheck.classList.remove("fa-square-o");
            this.spCheck.classList.add("fa-check-square-o");
            let numCurRq, numCurRqSelected;
            this.selected = band;// <-- importante q esté antes del foreach
            this.curso.sig.forEach(function (curso) {
                //para habilitar, hay q verificar que todos los Rq estén seleccionados
                numCurRq = curso.ant.length;
                numCurRqSelected = 0;
                curso.ant.forEach(function (c) {
                    if (c.item.selected === true) // contar cursos RQ q estén seleccionados
                    {
                        numCurRqSelected++;
                    }
                });
                if (numCurRq === numCurRqSelected) {
                    curso.item.setEnabled(true);
                }
            }.bind(this));
        }
    }
    else {
        // si enabled==false(bloqueado) ---> no hacer nada
    }

};


item.prototype.inhabilitarSigRecr = function () {  // inhabilitar siguientes cursos (recursivo)

    this.curso.sig.forEach(function (curs) {
        if (curs.item.selected === true) {
            curs.item.setSelected(false);
            curs.item.inhabilitarSigRecr();
            curs.item.setEnabled(false);

        } else {
            curs.item.setEnabled(false);
        }
    }.bind(this));
};


item.prototype.seleccionarTodoRqs = function () {  //
    let listaTodoRqs = [];
    this.obtenerListaRqs(listaTodoRqs);//el argumento obentrá la lista
    let tam = listaTodoRqs.length;
    for (let i = 0; i < tam; i++) {
        listaTodoRqs[i].setSelected(true);
    }
};

item.prototype.obtenerListaRqs = function (listaTodoRqs) {
    // this.curso.ant.forEach(async function (curso) {
    this.curso.ant.forEach(function (curso) {
        curso.item.obtenerListaRqs(listaTodoRqs);
        curso.item.li.classList.add("item-rqs-anim-selec");
        listaTodoRqs.push(curso.item);
        setTimeout(function(){
            curso.item.li.classList.remove("item-rqs-anim-selec")
        }, 1300);
    }.bind(this));

    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
};

item.prototype.asignarEventos = function () {

    this.li.onclick = function (event) {
        document.getSelection().removeAllRanges();
        if (event.shiftKey) {     ////////// shift + click
            this.listaItemCursos.quitarSeleccion();
            let tam = this.listaItemCursos.getTam();
            let cod = this.curso.codigo;
            for (let i = 0; i < tam; i++) {
                this.listaItemCursos.getItem(i).setSelected(true);
                if (this.listaItemCursos.getItem(i).curso.codigo === cod) {
                    break;
                }
            }
        }
        else if (event.ctrlKey) { ////////// Ctrl + click
            this.seleccionarTodoRqs();
            this.setSelected(true);
        }
        else {
            this.setSelected(!this.selected);
        }
        actualizarPanelResultados();
    }.bind(this);



    this.li.onmouseover = function () {
        this.curso.ant.forEach(function (curso) {
            curso.item.li.classList.add("curso-ant");
            //curso.item.mostrarRqs();
        });
        this.curso.sig.forEach(function (curso) {
            curso.item.li.classList.add("curso-sig");
        })
    }.bind(this);


    this.li.onmouseout = function () {
        this.curso.ant.forEach(function (curso) {
            curso.item.li.classList.remove("curso-ant");
           // curso.item.noMostrarRqs();
        });
      this.curso.sig.forEach(function (curso) {
            curso.item.li.classList.remove("curso-sig");
        })
    }.bind(this);
};


item.prototype.setListaItc = function (listaItemCursos) {
    this.listaItemCursos = listaItemCursos;
};


item.prototype.mostrarRqs = function(){
    this.curso.ant.forEach(function(cur){
        cur.item.li.classList.add("curso-ant-ant");
        cur.item.mostrarRqs(cur);
    })
};
item.prototype.noMostrarRqs = function(){
    this.curso.ant.forEach(function(cur){
        cur.item.li.classList.remove("curso-ant-ant");
        cur.item.noMostrarRqs(cur);
    })
};


