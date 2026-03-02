function generarPDF() {

    const nombre = document.getElementById("nombre").value;
    const profesion = document.getElementById("profesion").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const perfil = document.getElementById("perfil").value;
    const experiencia = document.getElementById("experiencia").value;
    const educacion = document.getElementById("educacion").value;

    if(!nombre || !profesion || !correo || !telefono){
        alert("Por favor completa los datos obligatorios.");
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
            <p>${perfil}</p>
            <h3>Experiencia</h3>
            <p>${experiencia}</p>
            <h3>Educación</h3>
            <p>${educacion}</p>
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
