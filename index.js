function relogio() {
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    var horas = h + ":" + m + ":" + s;

    document.getElementById("rel").value = horas;
}
var tempo = setInterval(relogio, 1000);