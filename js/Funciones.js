

function modificarSalario() {
    // Mostrar un cuadro de diálogo para ingresar el nuevo salario
    let nuevoSalario = prompt("Ingrese el nuevo salario:");

    // Obtener el campo de entrada del salario por su id
    let salarioInput = document.getElementById("salario");

    // Actualizar el valor del campo de entrada con el nuevo valor
    salarioInput.value = nuevoSalario;
}

