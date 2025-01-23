function calcularTiempoDesde(fechaInicio) {

    const fechaInicial = new Date(fechaInicio);
    const fechaActual = new Date();

    let anios = fechaActual.getFullYear() - fechaInicial.getFullYear();
    let meses = fechaActual.getMonth() - fechaInicial.getMonth();
    let diads = fechaActual.getDate() - fechaInicial.getDate();

    if (meses < 0) {
        anios--;
        meses += 12;
    }

    if (diads < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth(),
            0
        ).getDate();
        diads += ultimoDiaMesAnterior;
    }
    const mesesTotales = anios * 12 + meses;
    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
    const díasTotales = Math.floor((fechaActual - fechaInicial) / unDiaEnMilisegundos);

    let ani = document.getElementById('anioss');
    ani.innerText = anios;
    let mesotes = document.getElementById('mesotes');
    mesotes.innerText = mesesTotales;
    let diasos = document.getElementById('diasos');
    diasos.innerText = díasTotales;
    /* let mesotes = document.getElementById('mesotes');
    mesotes.innerText = meses;
    let diasos = document.getElementById('diasos');
    diasos.innerText = diads;
 */
}


const fecha = "2023-10-10"; //YYYY-MM-DD
calcularTiempoDesde(fecha);


function obtenerFechaActualEnEspañol() {
    const fechaActual = new Date();

    const diasSemana = [
        "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"
    ];

    const mesesAño = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const diaSemana = diasSemana[fechaActual.getDay()];
    const diaMes = fechaActual.getDate();
    const mes = mesesAño[fechaActual.getMonth()];
    const año = fechaActual.getFullYear();


    let mes_calendario = document.getElementById('mes_calendario');
    mes_calendario.innerText = mes;
    let anio_calendario = document.getElementById('anio_calendario');
    anio_calendario.innerText = año;
    let diadion = document.getElementById('diadion');
    diadion.innerText = diaSemana;
    let Nodiadio = document.getElementById('Nodiadio');
    Nodiadio.innerText = diaMes;

}

obtenerFechaActualEnEspañol();



