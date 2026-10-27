

// Referencias a los elementos de la interfaz.
const formulario = document.querySelector("#formulario-mision");
const campoTitulo = document.querySelector("#titulo");
const campoDescripcion = document.querySelector("#descripcion");
const campoDificultad = document.querySelector("#dificultad");
const campoRecompensa = document.querySelector("#recompensa");
const lista = document.querySelector("#lista-misiones");
const listaVacia = document.querySelector("#lista-vacia");
const mensaje = document.querySelector("#mensaje");
const botonBorrar = document.querySelector("#borrar-todo");
const botonSubir = document.querySelector("#subir-servidor");
const botonBajar = document.querySelector("#bajar-servidor");
let misiones = [];
let cQuest=0;
let questSave = [];


formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que el formulario recargue la página.
  agregarMision();
});

botonBorrar.addEventListener("click", borrarTodo);

function agregarMision() {
  let mision = {titulo: campoTitulo.value, descripcion: campoDescripcion.value, dificultad: campoDificultad.value, recompensa: campoRecompensa.value};
  misiones.push(mision);
  mostrarMisiones();
}

function mostrarMisiones() {
  lista.innerHTML = "";
  if (misiones.length === 0) {
    listaVacia.textContent = "Todavía no hay misiones.";
  } else {
    listaVacia.textContent = "";
    misiones.forEach(mision => mostrarMision(mision));
    }
  }

function mostrarMision(mision) {
  const elemento = document.createElement("li");

  const titulo = document.createElement("h3");
  titulo.textContent = mision.titulo;

  const descripcion = document.createElement("p");
  descripcion.textContent = mision.descripcion;

  const dificultad = document.createElement("p");
  dificultad.className = "datos-mision";
  dificultad.textContent = "Dificultad: " + mision.dificultad;

  const recompensa = document.createElement("p");
  recompensa.className = "datos-mision";
  recompensa.textContent = "Recompensa: " + mision.recompensa;

  elemento.appendChild(titulo);
  elemento.appendChild(descripcion);
  elemento.appendChild(dificultad);
  elemento.appendChild(recompensa);
  lista.appendChild(elemento);
}

function guardarMisiones() {
  let save = JSON.stringify(misiones);
  localStorage.setItem("QuestSaved"+cQuest, save);
  cQuest++;
}

function cargarMisiones() {
  if (localStorage.length>0){
      questSave = JSON.parse(localStorage.getItem("QuestSaved"+(cQuest-1)));
      misiones = questSave;
  }
}

function borrarTodo() {
  guardarMisiones();
  localStorage.clear('clear');
  lista.innerHTML = "";
  listaVacia.textContent = "Todavía no hay misiones.";
  misiones=[];
}

cargarMisiones();
mostrarMisiones();