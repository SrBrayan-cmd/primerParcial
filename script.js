const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');
const resultado = document.getElementById('resultado');
const textoResultado = document.getElementById('textoResultado');
const nivelRiesgo = document.getElementById('nivelRiesgo');
const recomendaciones = document.getElementById('recomendaciones');

function calcularRiesgo() {

    /* Obtener datos */
    const edad = parseFloat(document.getElementById('edad').value);
    const presion = parseFloat(document.getElementById('presion').value);
    const colesterol = parseFloat(document.getElementById('colesterol').value);
    const fumador = document.getElementById('fumador').value;

    /* Validación de entrada */
    if (isNaN(edad) || isNaN(presion) || isNaN(colesterol) || fumador === '') {
        textoResultado.textContent = ' Por favor completa todos los campos';
        resultado.style.backgroundColor = '#F5F5F5';
        nivelRiesgo.className = 'nivel';
        resultado.style.display = 'block';
        nivelRiesgo.textContent = '';
        recomendaciones.innerHTML = '';
        return;
    }

    /* Lógica de puntuación */
    let puntos = 0;

    if (edad >= 35 && edad <= 44) {
        puntos += 1;
    } else if (edad >= 45) {
        puntos += 2;
    }

    if (presion >= 140) {
        puntos += 3;
    } else if (presion >= 120) {
        puntos += 1;
    }

    if (colesterol >= 240) {
        puntos += 3;
    } else if (colesterol >= 200) {
        puntos += 1;
    }

    if (fumador === 'si') {
        puntos += 3;
    }

    let nivel = '';
    let claseNivel = '';
    let mensaje = '';

    if (puntos <= 2) {
        nivel = 'BAJO';
        claseNivel = 'bajo';
        mensaje = ` Riesgo BAJO (${puntos} puntos)`;
    } else if (puntos <= 5) {
        nivel = 'MODERADO';
        claseNivel = 'moderado';
        mensaje = ` Riesgo MODERADO (${puntos} puntos)`;
    } else {
        nivel = 'ALTO';
        claseNivel = 'alto';
        mensaje = ` Riesgo ALTO (${puntos} puntos)`;
    }

    textoResultado.textContent = mensaje;
    resultado.style.backgroundColor = '#F5F5F5';
    nivelRiesgo.className = `nivel ${claseNivel}`;
    nivelRiesgo.textContent = `Nivel: ${nivel}`;


}

btnCalcular.addEventListener('click', calcularRiesgo);
btnLimpiar.addEventListener('click', limpiarFormulario);
resultado.style.display = 'none';