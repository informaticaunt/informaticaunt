
export default function iniModalManual()
{
    let modal = document.getElementById('modal');
    let btn = document.getElementById("btn-manual");
    let spanCerrar = document.getElementById("cerrar-modal");

    btn.onclick = function () {
        modal.style.display = "block";
    };
    spanCerrar.onclick = function () {
        modal.style.display = "none";
    };
    modal.onclick = function () {
        modal.style.display = "none";
    };

    window.onkeydown = function (event) {
        if (event.keyCode === 27 && modal.style.display === "block") {
            modal.style.display = "none";
        }
    };
}