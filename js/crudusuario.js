function insertar() {

    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    var tipo = document.getElementById("tipo");


    usuarioObjeto = new Usuario(usuario.value,
        password.value, tipo.value)

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuarioObjeto);

    localStorage.setItem("usuarios",
        JSON.stringify(usuarios))

    usuario.value = ""
    password.value = ""

    console.log(usuarios)
}
function modificar() { }
function eliminar() { }
function consultar() { }
function loguear() {

    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");

    var encontrado = false

    for (let i = 0; i < usuarios.length && !encontrado;
        i++) {

        if (usuarios[i].usuario == usuario.value &&
            usuarios[i].password == password.value) {

            if (usuarios[i].tipo == "admin")
                location.href = "menuadministrador.html"
            else if (usuarios[i].tipo == "instructor")
                location.href = "menuinstructor.html"
            else if (usuarios[i].tipo == "estudiante")
                location.href = "menuestudiante.html"

            encontrado = true

        }
    }

    if (!encontrado)
        alert('Usuario y/o password errado')
}