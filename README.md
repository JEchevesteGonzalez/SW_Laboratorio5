# Gestor de misiones RPG — plantilla de inicio

Esta plantilla incluye la interfaz y los eventos para empezar la fase 1.
La gestión de misiones y localStorage queda por implementar en public/main.js
siguiendo el enunciado del laboratorio. Todavía no añade ni borra misiones.

## Cómo empezar

Abre public/index.html para ver la interfaz. Para trabajar con localStorage
de forma consistente, sirve public/ con un servidor local, por ejemplo con
Live Server de tu editor, y usa siempre la misma dirección y puerto.

La recompensa se deja como texto para admitir monedas, objetos o experiencia.
Las dificultades son opciones iniciales que puedes adaptar.

## Continuación en la fase 2

data/quests.json ya incluye tres misiones de ejemplo para probar la fase 2.
La fase 1 no lee este archivo: sigue utilizando únicamente localStorage.
El enunciado pide que el JSON esté vacío al inicio; si necesitas seguir ese
punto literalmente, sustituye los ejemplos por [].

Conserva los tres archivos de public/. Añade el servidor fuera:

```text
lab05/
├── public/
│   ├── index.html
│   ├── main.js
│   └── style.css
├── app.js
├── data/
│   └── quests.json
└── package.json
```

Express servirá public/ mediante express.static('public'). main.js seguirá
ejecutándose en el navegador; app.js se ejecutará con Node.js. El archivo
data/quests.json debe quedar fuera de public/.

Activa los botones del servidor y conecta PUT para subir todas las misiones
y GET para descargarlas. Después de descargar, actualiza el array,
localStorage y la vista. Mantén separadas las funciones de vista,
almacenamiento local y comunicación HTTP para reutilizar la fase 1.

Al pasar a Express, localStorage no se transfiere automáticamente si cambia
el origen (protocolo, host o puerto) desde el que abres la aplicación.
