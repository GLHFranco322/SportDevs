document.addEventListener("DOMContentLoaded", () => {
    const formLoading = document.getElementById("form_loading");
    const formEdit = document.getElementById("form_edit");
    const radioOption1 = document.getElementById("h2_option1");
    const radioOption2 = document.getElementById("h2_option2");

    // Función para alternar formularios
    function toggleForms() {
        if (radioOption1.checked) {
            formLoading.style.display = "block";
            formEdit.style.display = "none";
        } else if (radioOption2.checked) {
            formLoading.style.display = "none";
            formEdit.style.display = "block";
        }
    }

    // Agregar eventos a los radios
    radioOption1.addEventListener("change", toggleForms);
    radioOption2.addEventListener("change", toggleForms);

    // Estado inicial
    toggleForms();
});
