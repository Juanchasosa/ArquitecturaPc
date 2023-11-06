let listaComponentes = document.querySelector("#componentes");
let botones = document.querySelectorAll(".btn")

let URL = "./data/componentes.json";

fetch(URL)
    .then((response) => response.json())
    .then(data => {
        data.forEach(element => {
            mostrarComponente(element);
        });

        botones.forEach(boton => {
            boton.addEventListener("click", (event) => {

                const botonId = event.currentTarget.id;
                if (botonId === "ver-todos") {
                    listaComponentes.innerHTML = "";
                    data.forEach(element => {
                        mostrarComponente(element);
                    });
                } else {
                    const componenteEspecifico = data.find(element => element.id === botonId);
                    if (componenteEspecifico) {
                        listaComponentes.innerHTML = "";
                        mostrarComponente(componenteEspecifico);
                    } else {
                        console.log("Componente no encontrado para el botón con ID: " + botonId);
                    }
                }
            });
        });
    });



function mostrarComponente(data) {
    const div = document.createElement("div");
    div.classList.add("componente", "card", "w-full", "bg-base-100", "shadow-xl");
    div.innerHTML = `
        <figure class="px-10 pt-10">
        <img src=${data.img} alt=${data.name} class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${data.name}</h2>
            <p>${data.description}</p>
        </div>
    `;
    listaComponentes.append(div);
}








