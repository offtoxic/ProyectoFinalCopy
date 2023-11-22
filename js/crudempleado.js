function insertar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");


    empleado = new Empleado(cedula.value,
        nombres.value, apellidos.value)

    var empleados = JSON.parse(
        localStorage.getItem("empleados") || "[]");
    empleados.push(empleado);

    localStorage.setItem("empleados",
        JSON.stringify(empleados))


}