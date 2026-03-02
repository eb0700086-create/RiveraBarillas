function generarPDF() {

    const nombre = document.getElementById("nombre").value;
    const profesion = document.getElementById("profesion").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const perfil = document.getElementById("perfil").value;
    const experiencia = document.getElementById("experiencia").value;
    const educacion = document.getElementById("educacion").value;

    const contenido = `
        <div style="font-family: Arial; padding: 20px;">
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

    const elemento = document.createElement("div");
    elemento.innerHTML = contenido;

    html2pdf()
        .from(elemento)
        .save("Mi_Curriculum.pdf");
}