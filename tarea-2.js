/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar)
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $cuerpoHtml = document.querySelector("body");
const $form = document.querySelector("form");

document.querySelector("#add-member").onclick = function () {
  const $newInput = document.createElement("input");
  $newInput.setAttribute("type", "number");
  $newInput.setAttribute("id", "members-annual-salary");
  $newInput.setAttribute("placeholder", "Annual salary");
  $form.appendChild($newInput);
  const $newLabel = document.createElement("label");
  $newLabel.className = "label-class";
  $newLabel.setAttribute("text", "annual salary");
  $newInput.appendChild($newLabel);
  return false;
};

const $buttonRemoveMember = document.getElementById("remove-member");

$buttonRemoveMember.onclick = function () {
  let $dad = document.getElementById("members-salary");
  let $children = document.getElementById("members-annual-salary");
  let deleteChildren = $dad.removeChild($children);
};
