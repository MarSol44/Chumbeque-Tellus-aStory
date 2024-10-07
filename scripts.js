const pages = [
    {
        title: "Capítulo 1: El Comienzo",
        text: "{nombre}, eres un pescador que heredó la vida en el mar de su padre y abuelo.",
        image: "imagenes/imagen1.jpg"
    },
    {
        title: "Capítulo 2: El Viaje",
        text: "Pero últimamente las olas que antes te traían sustento ahora parecían volverse en tu contra.",
        image: "imagenes/imagen2.jpg"
    },
    {
        title: "Capítulo 3: El Conflicto",
        text: "El conflicto principal se desarrolla aquí, {nombre}.",
        image: "imagenes/imagen3.jpg"
    },
    {
        title: "Capítulo 4: La Resolución",
        text: "Y aquí es donde todo se resuelve, {nombre}.",
        image: "imagenes/imagen4.jpg"
    },
    {
        title: "Capítulo 5: El Epílogo",
        text: "Reflexiones finales sobre la aventura vivida, {nombre}.",
        image: "imagenes/imagen5.jpg"
    }
];

let currentPage = 0;
let userName = ""; // Variable para almacenar el nombre del usuario

// Función para mostrar la página actual
function showPage(pageIndex) {
    const titleElement = document.getElementById("title");
    const textElement = document.getElementById("text");
    const imageElement = document.getElementById("image");

    titleElement.textContent = pages[pageIndex].title; // Establecer el título
    textElement.textContent = pages[pageIndex].text.replace("{nombre}", userName); // Personaliza el texto para incluir el nombre del usuario
    imageElement.src = pages[pageIndex].image; // Establecer la imagen

    // Deshabilitar botones según la página actual
    document.getElementById("prev").disabled = pageIndex === 0;
    document.getElementById("next").disabled = pageIndex === pages.length - 1;
}

// Función para enviar el nombre
function submitName() {
    const nameInput = document.getElementById("username").value; // Obtener el nombre ingresado
    userName = nameInput; // Guardar el nombre en la variable
    showPage(currentPage); // Mostrar la página actual (ya incluye el nombre)
    document.querySelector(".name-input").style.display = "none"; // Ocultar el campo de nombre
}

// Función para avanzar a la siguiente página
function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

// Función para retroceder a la página anterior
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

// Mostrar la primera página al cargar
showPage(currentPage);
