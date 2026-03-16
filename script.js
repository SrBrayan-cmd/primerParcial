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

    recomendaciones.innerHTML = '';

    const rec1 = document.createElement('li');
    const rec2 = document.createElement('li');
    const rec3 = document.createElement('li');

    if (nivel === 'BAJO') {
        rec1.textContent = ' Mantén una dieta balanceada';
        rec2.textContent = ' Ejercicio 3 veces por semana';
        rec3.textContent = ' Chequeo anual';
    } else if (nivel === 'MODERADO') {
        rec1.textContent = ' Reduce el consumo de sal';
        rec2.textContent = ' Camina 30 minutos diarios';
        rec3.textContent = ' Consulta a tu médico en 3 meses';
    } else {
        rec1.textContent = ' Busca atención médica URGENTE';
        rec2.textContent = ' Toma la medicación recetada';
        rec3.textContent = ' Control semanal de presión';
    }
        recomendaciones.append(rec1, rec2, rec3);
        resultado.style.display = 'block';
    }

    function limpiarFormulario() {

        document.getElementById('edad').value = '';
        document.getElementById('presion').value = '';
        document.getElementById('colesterol').value = '';
        document.getElementById('fumador').value = '';
        
        textoResultado.textContent = '';
        nivelRiesgo.textContent = '';
        nivelRiesgo.className = 'nivel';
        recomendaciones.innerHTML = '';
        resultado.style.backgroundColor = '#F5F5F5';
        resultado.style.display = 'none';
        
}

btnCalcular.addEventListener('click', calcularRiesgo);
btnLimpiar.addEventListener('click', limpiarFormulario);