function generarPDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

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

    let y = 20;

    doc.setFontSize(18);
    doc.text(nombre, 20, y);
    y += 10;

    doc.setFontSize(14);
    doc.text(profesion, 20, y);
    y += 10;

    doc.setFontSize(12);
    doc.text("Correo: " + correo, 20, y);
    y += 8;

    doc.text("Teléfono: " + telefono, 20, y);
    y += 12;

    doc.text("Perfil Profesional:", 20, y);
    y += 8;
    doc.text(perfil || "No especificado", 20, y, { maxWidth: 170 });
    y += 15;

    doc.text("Experiencia:", 20, y);
    y += 8;
    doc.text(experiencia || "No especificado", 20, y, { maxWidth: 170 });
    y += 15;

    doc.text("Educación:", 20, y);
    y += 8;
    doc.text(educacion || "No especificado", 20, y, { maxWidth: 170 });

    // 🔥 Esto es lo que hace que funcione en celular
    const pdfBlob = doc.output('blob');
    const pdfURL = URL.createObjectURL(pdfBlob);
    window.open(pdfURL, '_blank');
}
