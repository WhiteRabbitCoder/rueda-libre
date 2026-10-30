// El navegador comprueba las restricciones HTML antes de emitir submit.
// Este apoyo de demostración permite observar el resultado en la misma página.
const formulario = document.querySelector("#formulario form");
const resultado = document.querySelector("#resultado-validacion");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  resultado.textContent = "Los campos cumplen las reglas HTML: los valores obligatorios, formatos y límites son válidos.";
});

formulario.addEventListener("input", () => {
  resultado.textContent = "";
});
