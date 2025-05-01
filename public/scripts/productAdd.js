document.addEventListener("DOMContentLoaded", () => {
    const formLoading = document.getElementById("form_loading");
    const formEdit = document.getElementById("form_edit");
    const option1 = document.getElementById("h2_option1");
    const option2 = document.getElementById("h2_option2");

    // Evento para mostrar/ocultar formularios según el radio seleccionado
    option1.addEventListener("change", () => {
        formLoading.style.display = "grid";
        formEdit.style.display = "none";
    });

    option2.addEventListener("change", () => {
        formLoading.style.display = "none";
        formEdit.style.display = "grid";
    });

    // Configuración inicial: mostrar solo el formulario correspondiente
    if (option1.checked) {
        formLoading.style.display = "grid";
        formEdit.style.display = "none";
    } else if (option2.checked) {
        formLoading.style.display = "none";
        formEdit.style.display = "grid";
    }
});
