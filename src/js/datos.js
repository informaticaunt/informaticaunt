import Curso from './curso.js';


export default function cargarDatos(){
    /*
    parametros:
    ciclo,codigo,semestre,nombre,creditos,horas,horas,horas,escuela,
    los 2 últimos parámetros son codigos de los cursos requisitos. Si no tiene se llena con cero(s).
     */
    var listaCursos = [];
    listaCursos.push(new Curso(1, 984, 1, "Algoritmos y Programación", 4, 2, 2, 2, "Informatica", 0, 0));
    listaCursos.push(new Curso(1, 1036, 1, "Técnicas del Aprendizaje", 2, 2, 0, 0, "Ciencias de la Educacion", 0, 0));
    listaCursos.push(new Curso(1, 978, 1, "Cálculo", 4, 2, 4, 0, "Matematicas", 0, 0));
    listaCursos.push(new Curso(1, 979, 1, "Matemática Discreta", 4, 2, 4, 0, "Matematicas", 0, 0));
    listaCursos.push(new Curso(1, 973, 1, "Física I", 4, 2, 2, 2, "Fisica", 0, 0));
    listaCursos.push(new Curso(1, 1037, 1, "Inglés I", 2, 2, 0, 0, "Idiomas y Linguistica", 0, 0));
    listaCursos.push(new Curso(2, 985, 2, "Estructura de Datos", 4, 2, 2, 2, "Informatica", 0, 0));
    listaCursos.push(new Curso(2, 986, 2, "Introducción a la Arq. De Computadoras", 4, 2, 2, 2, "Informatica", 0, 0));
    listaCursos.push(new Curso(2, 980, 2, "Lógica para Computación", 4, 2, 2, 2, "Matematicas", 0, 0));
    listaCursos.push(new Curso(2, 977, 2, "Algebra Lineal Computacional", 4, 2, 2, 2, "Matematicas", 0, 0));
    listaCursos.push(new Curso(2, 976, 2, "Geometría", 4, 2, 4, 0, "Matematicas", 0, 0));
    listaCursos.push(new Curso(2, 1038, 2, "Inglés II", 2, 2, 0, 0, "Idiomas y Linguistica", 1037, 0));
    listaCursos.push(new Curso(3, 987, 1, "Técnicas de Construcción de Programas", 4, 2, 2, 2, "Informatica", 984, 0));
    listaCursos.push(new Curso(3, 988, 1, "Arq. y Organización de Computadoras", 4, 2, 2, 2, "Informatica", 986, 0));
    listaCursos.push(new Curso(3, 989, 1, "Teoría de la Computación", 4, 2, 2, 2, "Informatica", 979, 0));
    listaCursos.push(new Curso(3, 990, 1, "Técnicas Digitales para Computación", 4, 2, 2, 2, "Informatica", 980, 0));
    listaCursos.push(new Curso(3, 974, 1, "Física II", 4, 2, 2, 2, "Fisica", 973, 0));
    listaCursos.push(new Curso(3, 1039, 1, "Inglés III", 2, 2, 0, 0, "Idiomas y Linguistica", 1038, 0));
    listaCursos.push(new Curso(3, 981, 1, "Métodos Numéricos Computacionales", 4, 2, 2, 2, "Matematicas", 978, 0));
    listaCursos.push(new Curso(4, 991, 2, "Organización de Archivos", 4, 2, 2, 2, "Informatica", 985, 0));
    listaCursos.push(new Curso(4, 992, 2, "Modelos de Lenguajes de Progr.", 4, 2, 2, 2, "Informatica", 987, 0));
    listaCursos.push(new Curso(4, 993, 2, "Lenguajes Formales y Automatas", 4, 2, 2, 2, "Informatica", 989, 0));
    listaCursos.push(new Curso(4, 994, 2, "Computación Gráfica I", 4, 2, 2, 2, "Informatica", 976, 0));
    listaCursos.push(new Curso(4, 995, 2, "Electronica para Computación", 4, 2, 2, 2, "Fisica", 974, 0));
    listaCursos.push(new Curso(4, 996, 2, "Informática y Sociedad", 2, 2, 0, 0, "Informatica", 0, 0));
    listaCursos.push(new Curso(4, 982, 2, "Teoría de Grafos y Análisis Combinatorio", 4, 2, 2, 2, "Matematicas", 979, 0));
    listaCursos.push(new Curso(5, 997, 1, "Sistemas Operativos I", 4, 2, 2, 2, "Informatica", 991, 0));
    listaCursos.push(new Curso(5, 998, 1, "Base De Datos I", 4, 2, 2, 2, "Informatica", 991, 0));
    listaCursos.push(new Curso(5, 999, 1, "Metodología e Ingeniería de Software I", 4, 2, 2, 2, "Informatica", 987, 0));
    listaCursos.push(new Curso(5, 1000, 1, "Computación Simbólica y Numérica", 4, 2, 2, 2, "Informatica", 977, 0));
    listaCursos.push(new Curso(5, 1001, 1, "Teleprocesamiento", 4, 2, 2, 2, "Informatica", 995, 0));
    listaCursos.push(new Curso(5, 972, 1, "Economía General", 2, 2, 0, 0, "Economia", 0, 0));
    listaCursos.push(new Curso(5, 1002, 1, "Tóp. Especiales en Lenguajes de Prog.", 4, 2, 2, 2, "Informatica", 992, 993));
    listaCursos.push(new Curso(6, 1003, 2, "Sistemas Operativos II", 4, 2, 2, 2, "Informatica", 997, 0));
    listaCursos.push(new Curso(6, 1004, 2, "Base de Datos II", 4, 2, 2, 2, "Informatica", 998, 0));
    listaCursos.push(new Curso(6, 1005, 2, "Metodología e Ingeniería de Software II", 4, 2, 2, 2, "Informatica", 999, 0));
    listaCursos.push(new Curso(6, 1006, 2, "Computación Gráfica II", 4, 2, 2, 2, "Informatica", 994, 0));
    listaCursos.push(new Curso(6, 983, 2, "Estadística y Probabilidad", 4, 2, 2, 2, "Estadistica", 0, 0));
    listaCursos.push(new Curso(6, 1007, 2, "Portugués Instrumental", 2, 2, 0, 0, "Informatica", 0, 0));
    listaCursos.push(new Curso(6, 1008, 2, "Tóp. Especiales en Base De Datos", 4, 2, 2, 2, "Informatica", 998, 0));
    listaCursos.push(new Curso(6, 1009, 2, "Tóp. Especiales en Ingeniería De Software", 4, 2, 2, 2, "Informatica", 999, 0));
    listaCursos.push(new Curso(7, 1010, 1, "Compiladores", 4, 2, 2, 2, "Informatica", 1003, 0));
    listaCursos.push(new Curso(7, 1011, 1, "Algebra Universal para Ciencias de la Comp.", 4, 2, 2, 2, "Informatica", 980, 0));
    listaCursos.push(new Curso(7, 1012, 1, "Programación en Lógica", 4, 2, 2, 2, "Informatica", 980, 0));
    listaCursos.push(new Curso(7, 970, 1, "Administración y Finanzas", 2, 2, 0, 0, "Administracion", 0, 0));
    listaCursos.push(new Curso(7, 1013, 1, "Redes de Computadoras", 4, 2, 2, 2, "Informatica", 1001, 0));
    listaCursos.push(new Curso(7, 1035, 1, "Realidad Nacional", 2, 2, 0, 0, "Ciencias Sociales", 0, 0));
    listaCursos.push(new Curso(7, 1014, 1, "Tóp. Especiales en Sistemas Operativos", 4, 2, 2, 2, "Informatica", 1003, 0));
    listaCursos.push(new Curso(7, 1015, 1, "Tóp. Especiales en Procesamiento Gráfico", 4, 2, 2, 2, "Informatica", 1006, 0));
    listaCursos.push(new Curso(7, 1016, 1, "Laboratorio de Base de Datos", 2, 0, 0, 4, "Informatica", 1004, 0));
    listaCursos.push(new Curso(8, 1017, 2, "Ingeniería de la Información", 4, 2, 2, 2, "Informatica", 1005, 0));
    listaCursos.push(new Curso(8, 1018, 2, "Modelamiento de Sis. con Redes de Petri", 4, 2, 2, 2, "Informatica", 1005, 0));
    listaCursos.push(new Curso(8, 1019, 2, "Especificación Formal de Sistemas", 4, 2, 2, 2, "Informatica", 1011, 0));
    listaCursos.push(new Curso(8, 1020, 2, "Geometría Computacional", 4, 2, 2, 2, "Informatica", 1006, 0));
    listaCursos.push(new Curso(8, 975, 2, "Investigación Operativa I", 4, 2, 2, 2, "Matematicas", 977, 0));
    listaCursos.push(new Curso(8, 1021, 2, "Ética para Profesionales en Informática", 2, 2, 0, 0, "Informatica", 1035, 0));
    listaCursos.push(new Curso(8, 1022, 2, "Tóp. Especiales en Informática Teorica", 4, 2, 2, 2, "Informatica", 1011, 0));
    listaCursos.push(new Curso(8, 1023, 2, "Tóp. Especiales en Redes de Computadoras", 4, 2, 2, 2, "Informatica", 1013, 0));
    listaCursos.push(new Curso(8, 1024, 2, "Laboratorio de Compiladores", 2, 0, 0, 4, "Informatica", 1010, 0));
    listaCursos.push(new Curso(9, 1025, 1, "Sistemas Orientados a Objetos", 4, 2, 2, 2, "Informatica", 1017, 0));
    listaCursos.push(new Curso(9, 1026, 1, "Tóp. Especiales en Ciencias de la Comp I", 4, 2, 2, 2, "Informatica", 0, 0));
    listaCursos.push(new Curso(9, 1027, 1, "Semantica Formal de Lenguajes de Progr.", 4, 2, 2, 2, "Informatica", 1019, 0));
    listaCursos.push(new Curso(9, 1028, 1, "Inteligencia Artificial", 4, 2, 2, 2, "Informatica", 1012, 0));
    listaCursos.push(new Curso(9, 1040, 1, "Investigación Operativa II", 4, 2, 2, 2, "Informatica", 975, 0));
    listaCursos.push(new Curso(9, 971, 1, "Organización, Sistemas y Métodos", 2, 2, 0, 0, "Administracion", 0, 0));
    listaCursos.push(new Curso(9, 1029, 1, "Tóp. Especiales en Procesamiento Paralelo", 4, 2, 2, 2, "Informatica", 977, 0));
    listaCursos.push(new Curso(10, 1030, 2, "Trabajo de Graduación", 4, 2, 2, 2, "Informatica", 1025, 1026));
    listaCursos.push(new Curso(10, 1031, 2, "Tóp. Especiales en Ciencias de la Comp. II", 4, 2, 2, 2, "Informatica", 1026, 0));
    listaCursos.push(new Curso(10, 1032, 2, "Tóp. Especiales en Ciencias de la Comp. III", 4, 2, 2, 2, "Informatica", 1026, 0));
    listaCursos.push(new Curso(10, 1033, 2, "Tóp. Especiales en Ciencias de la Comp. IV", 4, 2, 2, 2, "Informatica", 1026, 0));
    listaCursos.push(new Curso(10, 1034, 2, "Tóp. Especiales en Ciencias de la Comp. V", 4, 2, 2, 2, "Informatica", 1026, 0));

    return listaCursos;
}
