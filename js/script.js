document.getElementById("crearTarea").addEventListener("click", function() {
    let tareaTexto = document.getElementById("nuevaTarea").value;

    if (tareaTexto !== "") {
        let nuevaTarea = document.createElement("div");
        nuevaTarea.classList.add("tarea");

        let pTarea = document.createElement("p");
        pTarea.textContent = tareaTexto;

        let btnRealizada = document.createElement("button");
        btnRealizada.textContent = "L";
        btnRealizada.classList.add("butto");
        btnRealizada.addEventListener("click", function() {
            nuevaTarea.classList.toggle("tareaRealizada");
        });

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.classList.add("butto");
        btnEliminar.addEventListener("click", function() {
            nuevaTarea.style.display = "none";
        });

        nuevaTarea.appendChild(pTarea);
        nuevaTarea.appendChild(btnRealizada);
        nuevaTarea.appendChild(btnEliminar);

        document.getElementById("listaTareas").appendChild(nuevaTarea);

        document.getElementById("nuevaTarea").value = "";
    }
});
