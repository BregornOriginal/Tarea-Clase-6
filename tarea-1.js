/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

// según la respuesta que reciba del prompt voy a tener que crear tantos nodos inputs y labels.
// colocar en el input la edad.
// tengo que crear un botón para calcular.
// ese botón me tiene que mostrar en un elemento <em> u otro a elección la persona de mayor edad,
// de menor edad y el promedio de edad del grupo familiar.
// también puedo crear un botón que al utilizarlo me limpie los inputs ya creados.

// Se entregó la tarea con los 4 botones, en este código se encuentra activo solo el botón
// mayor edad que cumple con todos los cálculos solicitados.

const $formulariosGrupoFamiliar = document.querySelector(
  "#formularios-grupo-familiar"
);


const $labelcalcularMayorEdad = document.createElement("label");
$labelcalcularMayorEdad.className = "label-clase";
$labelcalcularMayorEdad.innerText = "Calcular";

const $botonEnviar = document.createElement("button");
$botonEnviar.setAttribute("id", "enviar-datos");
$botonEnviar.setAttribute("type", SubmitEvent);
$botonEnviar.className = "label-clase";
$botonEnviar.innerText = "Enviar";
$formulariosGrupoFamiliar.appendChild($botonEnviar);

const $calcularMayorEdad = document.createElement("button");
$calcularMayorEdad.appendChild($labelcalcularMayorEdad);
$calcularMayorEdad.setAttribute("id", "mayor-edad");
$calcularMayorEdad.setAttribute("type", SubmitEvent);
$formulariosGrupoFamiliar.appendChild($calcularMayorEdad);

const $recargarFormulario = document.createElement("button");
$recargarFormulario.setAttribute("id", "reload");
$recargarFormulario.className = "label-clase";
$recargarFormulario.innerText = "Resetear";
$formulariosGrupoFamiliar.appendChild($recargarFormulario);

function crearInput($formulariosGrupoFamiliar, textoLabel) {
  const $nuevoForm = document.createElement("form");
  const $nuevoInput = document.createElement("input");
  const $nuevoLabel = document.createElement("label");
  const $orderList = document.createElement("ol");
  $nuevoForm.appendChild($nuevoInput);
  $nuevoInput.setAttribute("type", "number");
  $nuevoInput.setAttribute("id", "valores");
  $nuevoInput.setAttribute("placeholder", "Edad");
  $nuevoInput.className = "input-clase";
  $nuevoLabel.innerText = textoLabel;
  $nuevoLabel.appendChild($nuevoInput);
  $nuevoLabel.appendChild($orderList);
  $formulariosGrupoFamiliar.appendChild($nuevoLabel);
}

$botonEnviar.onclick = function() {
  const $boxIntegrantes = document.querySelector("#cantidad-integrantes");
  cantidadDePersonas = Number($boxIntegrantes.value);
  if (cantidadDePersonas > 0) {
  } else {
    alert("Por favor ingrese un número mayor a 0");
    return;
  }
  for (let i = 1; i <= cantidadDePersonas; i++) {
    crearInput($formulariosGrupoFamiliar, `Integrante ${i}`);
  }
  return false;
};


document.querySelector("#mayor-edad").onclick = function () {
  let arrayEdad = [];
  let edadInputs = document.querySelectorAll("#valores");
  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(Number(edadInputs[i].value));
  }
  let valorMaximo = arrayEdad[0];
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] > valorMaximo) {
      valorMaximo = arrayEdad[i];
    }
    const $mayorEdad = document.querySelector("#mayor");

    $mayorEdad.innerText = `El integrante con mayor edad tiene ${valorMaximo} años.`;
  }

  // Lo que sigue a continuación es el código para que calcule mínimo y promedio de edad.

  let valorMinimo = arrayEdad[0];
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] < valorMinimo) {
      valorMinimo = arrayEdad[i];
    }
    const $menorEdad = document.querySelector("#menor");
    $menorEdad.innerText = `El integrante con menor edad tiene ${valorMinimo} años.`;
  }
  let promedioEdad = 0;
  let resultado = 0;
  for (i = 0; i < arrayEdad.length; i++) {
    resultado += +arrayEdad[i];
    promedioEdad = resultado / arrayEdad.length;
  }
  const $mayorEdad = document.querySelector("#promedio");
  $mayorEdad.innerText = `El promedio de edad es de ${promedioEdad} años.`;

  return false;
};

document.querySelector("#reload").onclick = function () {
  location.reload();
};

///////////a continuación están las funciones para agregar los botones de cálculo por separado

/*
document.querySelector("#menor-edad").onclick = function () {
  let arrayEdad = [];
  let edadInputs = document.querySelectorAll("#valores");
  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(Number(edadInputs[i].value));
  }
  let valorMinimo = arrayEdad[0];
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] < valorMinimo) {
      valorMinimo = arrayEdad[i];
    }
    const $menorEdad = document.querySelector("#menor");
    $menorEdad.innerText = `El integrante con menor edad tiene ${valorMinimo} años.`;
  }

  return false;
};

document.querySelector("#promedio-edad").onclick = function () {
  let arrayEdad = [];
  let promedioEdad = 0;
  let resultado = 0;
  let edadInputs = document.querySelectorAll("#valores");
  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(Number(edadInputs[i].value));
  }
  for (i = 0; i < arrayEdad.length; i++) {
    resultado += + arrayEdad[i];
    promedioEdad = resultado / arrayEdad.length
    console.log(resultado)
  }
  const $mayorEdad = document.querySelector("#promedio");
  $mayorEdad.innerText = `El promedio de edad es de ${promedioEdad} años.`;

  return false;
};

*/
