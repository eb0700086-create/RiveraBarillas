function generarPDF() {

    const nombre = document.getElementById("nombre").value.trim();
    const profesion = document.getElementById("profesion").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const perfil = document.getElementById("perfil").value.trim();
    const experiencia = document.getElementById("experiencia").value.trim();
    const educacion = document.getElementById("educacion").value.trim();

    if (!nombre || !profesion || !correo || !telefono) {
        alert("Completa los datos obligatorios.");
        return;
    }

    // Obtener el contenedor oculto
    const areaPDF = document.getElementById("areaPDF");

    // Insertar contenido dentro del contenedor fijo
    areaPDF.innerHTML = `
        <div style="font-family: Arial; padding: 40px;">
            <h1>${nombre}</h1>
            <h3>${profesion}</h3>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <hr>
            <h3>Perfil Profesional</h3>
            <p>${perfil || "No especificado"}</p>
            <h3>Experiencia</h3>
            <p>${experiencia || "No especificado"}</p>
            <h3>Educación</h3>
            <p>${educacion || "No especificado"}</p>
        </div>
    `;

    const opciones = {
        margin: 10,
        filename: "Mi_Curriculum.pdf",
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 3,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    // Pequeño delay para asegurar render en móvil
    setTimeout(() => {
        html2pdf()
            .set(opciones)
            .from(areaPDF)
            .save();
    }, 300);
}
