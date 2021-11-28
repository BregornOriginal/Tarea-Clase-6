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

const $formulariosGrupoFamiliar = document.querySelector(
  "#formularios-grupo-familiar"
);


const $labelcalcularMayorEdad = document.createElement("label");
$labelcalcularMayorEdad.className = "label-clase";
$labelcalcularMayorEdad.innerText = "Mayor de edad";

const $labelcalcularMenorEdad = document.createElement("label");
$labelcalcularMenorEdad.className = "label-clase";
$labelcalcularMenorEdad.innerText = "Menor de edad";

const $labelcalcularPromedioEdad = document.createElement("label");
$labelcalcularPromedioEdad.className = "label-clase";
$labelcalcularPromedioEdad.innerText = "Promedio de edad";

/*
const $labelLimpiarFormulario = document.createElement("label");
$limpiarFormulario.className = "label-clase";
$limpiarFormulario.innerText = "Limpiar";
const $limpiarFormulario = document.createElement("button");
$limpiarFormulario.appendChild($labelLimpiarFormulario);
$limpiarFormulario.setAttribute("type", "Limpiar");
$formulariosGrupoFamiliar.appendChild($limpiarFormulario);
*/

const $calcularMayorEdad = document.createElement("button");
$calcularMayorEdad.appendChild($labelcalcularMayorEdad);
$calcularMayorEdad.setAttribute("type", SubmitEvent);
$calcularMayorEdad.setAttribute("id", "mayor-edad");
$formulariosGrupoFamiliar.appendChild($calcularMayorEdad);

const $calcularMenorEdad = document.createElement("button");
$calcularMenorEdad.appendChild($labelcalcularMenorEdad);
$calcularMenorEdad.setAttribute("id", "menor-edad");
$calcularMenorEdad.setAttribute("type", SubmitEvent);
$formulariosGrupoFamiliar.appendChild($calcularMenorEdad);

const $calcularPromedioEdad = document.createElement("button");
$calcularPromedioEdad.appendChild($labelcalcularPromedioEdad);
$calcularPromedioEdad.setAttribute("id", "promedio-edad");
$calcularPromedioEdad.setAttribute("type", SubmitEvent);
$formulariosGrupoFamiliar.appendChild($calcularPromedioEdad);

function crearInput($formulariosGrupoFamiliar, textoLabel) {
  const $nuevoInput = document.createElement("input");
  const $nuevoLabel = document.createElement("label");
  const $orderList = document.createElement("ol");
  $nuevoInput.setAttribute("type", "number");
  $nuevoInput.setAttribute("id", "valores");
  $nuevoInput.setAttribute("placeholder", "Edad");
  $nuevoInput.className = "input-clase";
  $nuevoInput.setAttribute("type", "number");
  $nuevoInput.setAttribute("placeholder", "Edad");
  $nuevoLabel.className = "label-clase";
  $nuevoLabel.innerText = textoLabel;
  $nuevoLabel.appendChild($nuevoInput);
  $nuevoLabel.appendChild($orderList);
  $formulariosGrupoFamiliar.appendChild($nuevoLabel);
}

function contarGrupoFamiliar() {
  let cantidadDePersonas = Number(
    prompt("De cuantas personas está compuesta tu grupo familiar?")
  );
  for (let i = 0; i < cantidadDePersonas; i++) {
    crearInput($formulariosGrupoFamiliar, `Integrante ${i}`);
  }
}

document.querySelector("#mayor-edad").onclick = function () {
  let arrayEdad = [];
  let valorMaximo = 0;
  let edadInputs = document.querySelectorAll("#valores");
  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(edadInputs[i].value);
  }
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] > valorMaximo) {
      valorMaximo = arrayEdad[i];
    }
    const $mayorEdad = document.querySelector("em");
    $mayorEdad.innerText = `El integrante con mayor edad tiene ${valorMaximo} años.`;
  }
  return false;
};

document.querySelector("#menor-edad").onclick = function () {
  let arrayEdad = [];
  let valorMinimo = 0;
  let edadInputs = document.querySelectorAll("#valores");
  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(edadInputs[i].value);
  }
  for (i = 0; i < arrayEdad.length; i++) {
    if (arrayEdad[i] < valorMinimo) {
      valorMinimo = arrayEdad[i];
    }
    const $menorEdad = document.querySelector("em");
  $menorEdad.innerText = `El integrante con menor edad tiene ${valorMinimo} años.`;
  }
  
  return false;
};

document.querySelector("#promedio-edad").onclick = function () {
  let arrayEdad = [];
  let valorPromedio = 0;
  let edadInputs = document.querySelectorAll("#valores");
  for (let i = 0; i < edadInputs.length; i++) {
    arrayEdad.push(edadInputs[i].value);
  }
  for (i = 0; i < arrayEdad.length; i++) {
    let promedioEdad = 0;
    resultado = arrayEdad[i] + arrayEdad[i + 1];
    promedioEdad = resultado / arrayEdad.length;
  }
  const $mayorEdad = document.querySelector("em");
  $mayorEdad.innerText = `El promedio de edad es de ${valorPromedio} años.`;
  return false;
};

contarGrupoFamiliar();
