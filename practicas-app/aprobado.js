var btnIniciabtnApobado = document.getElementById("btnApobado");
btnApobado.addEventListener("click", () => {
    axios.get("http://localhost:4567/aprobado", {
    })
        .then(function (res) {
            window.location.replace("pasado.html");
        })
        .catch(function (error) {
            console.log(error)
        })
});