function mostrarInformacionEmpleado() {
    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById("nombreInfo").value;
    let apellido = document.getElementById("apellidoInfo").value;
    let sexo = document.getElementById("sexo").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let fechaIngreso = document.getElementById("fechaIngreso").value;
    let salario = document.getElementById("salario").value;
    let edadEmpleado = document.getElementById("calcEdad").value;
    let antiguedadEmpleado = document.getElementById("calcAntiguedad").value;
    let prestacionesEmpleado = document.getElementById("calcPrestaciones").value;
    let formacionAcademica = document.getElementById("newAcademica").value;
    let experienciaLaboral = document.getElementById("newExperiencia").value;
    let estadoCivil = document.getElementById("newCivil").value;
    let prioridadSugerencia = document.getElementById("newPrioridad").value;
    let correo = document.getElementById("newCorreo").value;
    let idea = document.getElementById("newIdea").value;
  
    // Crear el mensaje con la información obtenida
    let mensaje = "                                   INFORMACIÓN DEL EMPLEADO\n\n";
    mensaje += "Nombre : " + nombre + "\n";
    mensaje += "Apellido : " + apellido + "\n";
    mensaje += "Sexo : " + sexo + "\n";
    mensaje += "Fecha de Nacimiento : " + fechaNacimiento + "\n";
    mensaje += "Fecha de Ingreso : " + fechaIngreso + "\n";
    mensaje += "Salario : $" + salario + "\n";
    mensaje += "Edad : " + edadEmpleado + " años" + "\n";
    mensaje += "Antigüedad : " + antiguedadEmpleado + " años" + "\n";
    mensaje += "Prestaciones : $" + prestacionesEmpleado + "\n";
    mensaje += "Formación Académica : " + formacionAcademica + "\n";   
    mensaje += "Experiencia Laboral : " + experienciaLaboral + "\n"; 
    mensaje += "Estado Civil : " + estadoCivil + "\n";
    mensaje += "Prioridad de Sugerencia : " + prioridadSugerencia + "\n";
    mensaje += "Correo : " + correo + "\n";
    mensaje += "Idea o Sugerencia : " + idea + "\n";
  
    // Mostrar el mensaje en un alert
    alert(mensaje);
}

function modificarSalario() {
    // Mostrar un cuadro de diálogo para ingresar el nuevo salario
    let nuevoSalario = prompt("Ingrese el nuevo salario:");

    // Obtener el campo de entrada del salario por su id
    let salarioInput = document.getElementById("salario");

    // Actualizar el valor del campo de entrada con el nuevo valor
    salarioInput.value = nuevoSalario;
}

// Función para calcular la edad a partir de la fecha de nacimiento
function calcularEdad() {
    // Obtener la fecha de nacimiento del campo de entrada
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
    // Obtener la fecha actual
    let fechaActual = new Date();
  
    // Crear objetos de fecha a partir de las cadenas de fecha
    let fechaNacimientoObj = new Date(fechaNacimiento);
  
    // Calcular la diferencia de tiempo entre las fechas
    let tiempoDiferencia = fechaActual - fechaNacimientoObj;
  
    // Calcular la edad en base a la diferencia de tiempo
    let edad = Math.floor(tiempoDiferencia / (1000 * 60 * 60 * 24 * 365));
  
    // Mostrar la edad en un cuadro de alerta
    alert("La edad del empleado es: " + edad + " años.");

    // Obtener el campo de entrada de la edad por su id
    let edadInput = document.getElementById("calcEdad");
    edadInput.value = edad;
}

// Función para calcular la antigüedad del empleado
function calcularAntiguedad() {
    // Obtener la fecha de ingreso del campo de entrada
    let fechaIngreso = document.getElementById("fechaIngreso").value;
  
    // Obtener la fecha actual
    let fechaActual = new Date();
  
    // Crear objetos de fecha a partir de las cadenas de fecha
    let fechaIngresoObj = new Date(fechaIngreso);
  
    // Calcular la diferencia de tiempo entre las fechas
    let tiempoDiferencia = fechaActual - fechaIngresoObj;
  
    // Calcular la antigüedad en base a la diferencia de tiempo
    let antiguedadEnMilisegundos = tiempoDiferencia;
    let antiguedadEnAnios = antiguedadEnMilisegundos / (1000 * 60 * 60 * 24 * 365);
    let antiguedadRedondeada = Math.floor(antiguedadEnAnios);
  
    // Mostrar la antigüedad en un cuadro de alerta
    alert("La antigüedad del empleado es: " + antiguedadRedondeada + " años.");

    // Obtener el campo de entrada de la antigüedad por su id
    let antiguedadInput = document.getElementById("calcAntiguedad");
    antiguedadInput.value = antiguedadRedondeada;
}

function calcularPrestaciones() {
    let salario = document.getElementById("salario").value;
    let fechaIngreso = document.getElementById("fechaIngreso").value;
  
    // Obtener la fecha actual
    let fechaActual = new Date();
  
    // Crear objetos de fecha a partir de las cadenas de fecha
    let fechaIngresoObj = new Date(fechaIngreso);
  
    // Calcular la diferencia de tiempo entre las fechas
    let tiempoDiferencia = fechaActual - fechaIngresoObj;
  
    // Calcular la antigüedad en base a la diferencia de tiempo
    let antiguedadEnMilisegundos = tiempoDiferencia;
    let antiguedadEnAnios = antiguedadEnMilisegundos / (1000 * 60 * 60 * 24 * 365);
  
    // Calcular las prestaciones
    let prestaciones = (antiguedadEnAnios * salario) / 12;
  
    // Mostrar las prestaciones en un cuadro de alerta
    alert("Las prestaciones a las que tiene derecho el empleado son: $" + prestaciones.toFixed(2));

    // Obtener el campo de entrada de las prestaciones por su id
    let prestacionesInput = document.getElementById("calcPrestaciones");
    prestacionesInput.value = prestaciones.toFixed(2);
}

// Opción1
let informacionComplementaria = [];

function verInfoComplementaria() {
  const nivelFormacion = document.getElementById("nivelFormacion").value;
  const experienciaLaboral = document.getElementById("message-text").value;
  const estadoCivil = document.getElementById("estadoCivil").value;

  const informacion = {
    nivelFormacion,
    experienciaLaboral,
    estadoCivil
  };

  informacionComplementaria.push(informacion);

  let mensaje = "                                   Información Complementaria\n\n";
  mensaje += "Nivel de formación: " + nivelFormacion + "\n";
  mensaje += "Experiencia laboral: " + experienciaLaboral + "\n";
  mensaje += "Estado civil: " + estadoCivil;

  alert(mensaje);

  let nuevaAcademica = document.getElementById("newAcademica");
  let nuevaExperiencia = document.getElementById("newExperiencia");
  let nuevaCivil = document.getElementById("newCivil");
  nuevaAcademica.value = nivelFormacion;
  nuevaExperiencia.value = experienciaLaboral;
  nuevaCivil.value = estadoCivil;  

  reiniciarFormulario();
}

function reiniciarFormulario() {
    informacionComplementaria = [];
}

function closeModal1() {
    document.getElementById("nivelFormacion").selectedIndex = 0;
    document.getElementById("message-text").value = "";
    document.getElementById("estadoCivil").selectedIndex = 0;
}

// Opción2
function verSugerencia() {
    const prioridad = document.getElementById("prioridad").value;
    const correo = document.getElementById("typeEmail").value;
    const idea = document.getElementById("idea").value;
  
    let mensaje = "                                   Información de la Sugerencia\n\n";
    mensaje += "Nombre: " + prioridad + "\n";
    mensaje += "Correo: " + correo + "\n";
    mensaje += "Idea o Sugerencia: " + idea;
  
    alert(mensaje);
    
    let nuevaPrioridad = document.getElementById("newPrioridad");
    let nuevoCorreo = document.getElementById("newCorreo");
    let nuevaIdea = document.getElementById("newIdea");
    nuevaPrioridad.value = prioridad;
    nuevoCorreo.value = correo;
    nuevaIdea.value = idea;
}

function closeModal2() {
    document.getElementById("prioridad").selectedIndex = 0;
    document.getElementById("typeEmail").value = "";
    document.getElementById("idea").value = "";
}

// Obtener referencia al input de carga de foto
const fotoInput = document.getElementById('fotoInput');
// Obtener referencia a la imagen de previsualización
const fotoPreview = document.getElementById('fotoPreview');

// Escuchar el evento de cambio en el input de carga de foto
fotoInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado por el usuario

    if (file) {
        const reader = new FileReader(); // Crear un objeto FileReader

        // Configurar el evento load del FileReader para mostrar la foto seleccionada
        reader.addEventListener('load', function() {
        fotoPreview.src = reader.result; // Mostrar la foto cargada en el elemento <img>
        });

        reader.readAsDataURL(file); // Leer el contenido del archivo como una URL de datos
    }
});

function reiniciarFormularioGeneral() {
    // Restablecer los valores de los campos del formulario
    document.getElementById("nombreInfo").value = "";
    document.getElementById("apellidoInfo").value = "";
    document.getElementById("sexo").selectedIndex = 0;
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("fotoPreview").src = "";
    document.getElementById("fotoInput").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("calcEdad").value = "";
    document.getElementById("calcAntiguedad").value = "";
    document.getElementById("calcPrestaciones").value = "";
    document.getElementById("nivelFormacion").selectedIndex = 0;
    document.getElementById("message-text").value = "";
    document.getElementById("estadoCivil").selectedIndex = 0;
    document.getElementById("prioridad").selectedIndex = 0;
    document.getElementById("typeEmail").value = "";
    document.getElementById("idea").value = "";
  
    // Restablecer los valores ocultos
    document.getElementById("newAcademica").value = "";
    document.getElementById("newExperiencia").value = "";
    document.getElementById("newCivil").value = "";
    document.getElementById("newPrioridad").value = "";
    document.getElementById("newCorreo").value = "";
    document.getElementById("newIdea").value = "";
}  