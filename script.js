function generarPDF() {

    const nombre = document.getElementById("nombre").value.trim();
    const profesion = document.getElementById("profesion").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const perfil = document.getElementById("perfil").value.trim();
    const experiencia = document.getElementById("experiencia").value.trim();
    const educacion = document.getElementById("educacion").value.trim();

    if(!nombre || !profesion || !correo || !telefono){
        alert("Completa los datos obligatorios.");
        return;
    }

    const contenido = document.createElement("div");

    contenido.innerHTML = `
        <div style="font-family: Arial; padding: 30px;">
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

    document.body.appendChild(contenido);

    const opciones = {
        margin: 10,
        filename: "Mi_Curriculum.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
        .set(opciones)
        .from(contenido)
        .save()
        .then(() => {
            document.body.removeChild(contenido);
        });
}
