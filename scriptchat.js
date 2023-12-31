var chatButton = document.getElementById("chatButton");
var bubble = document.getElementById("chatBubble");

function openForm() {
  document.getElementById("myForm").style.display = "block";
  bubble.style.display = "none"; // Oculta la burbuja cuando se abre el chat
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Mostrar la burbuja de texto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  var bubble = document.getElementById("chatBubble");

  // Mostrar la burbuja de texto al cargar la página
  bubble.style.display = "block";

  // Programar una tarea para ocultar la burbuja después de 5 segundos
  setTimeout(function () {
    bubble.style.opacity = "0"; // Cambiar la opacidad a 0 para que se desvanezca
  }, 2000);

  // Ocultar la burbuja después de 5 segundos y luego restablecer su opacidad
  setTimeout(function () {
    bubble.style.display = "none";
    bubble.style.opacity = "1"; // Restablecer la opacidad a 1
  }, 5000); // Después de 10 segundos (5 segundos de animación + 5 segundos de espera)
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
  bubble.style.display = "none"; // Oculta la burbuja cuando se abre el chat
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function displayAnswer(questionNumber) {
  var questions = [
    "¿Qué servicios ofrece Soft-Brain?",
    "¿Qué implica el Servicio Técnico de Soft-Brain?",
    "¿En qué consiste la Ampliación de RAM?",
    "¿Qué implica el Reemplazo de Disco Duro por SSD?",
    "¿En qué consiste la Limpieza y Mantenimiento de Soft-Brain?",
    "¿Qué significa la Optimización de Software de Soft-Brain?",
    "¿Ofrecen Eliminación de Virus y Malware?",
    "¿Cuáles son los servicios de Configuración de Red de Soft-Brain?",
    "¿Qué incluye el Respaldo de Datos de Soft-Brain?",
    "¿En qué consiste la Reparación de Software de Soft-Brain?",
    "¿Qué estrategias de marketing ofrece Soft-Brain?",
    "¿Qué implica la Publicidad en Redes Sociales de Soft-Brain?",
    "¿Qué servicios de Email Marketing proporciona Soft-Brain?",
    "¿Cuáles son los servicios de SEO y Optimización de Contenido de Soft-Brain?",
    "¿En qué consiste el Marketing de Contenidos de Soft-Brain?",
    "¿Qué servicios de Creación de Páginas Web ofrece Soft-Brain?",
  ];

  var answers = [
    "Soft-Brain ofrece una amplia gama de servicios tecnológicos, incluyendo Servicio Técnico, Estrategias de Marketing y Creación de Páginas Web personalizadas.",
    "Nuestro Servicio Técnico aborda problemas de software y hardware en sus dispositivos. Nuestro equipo de expertos solucionará problemas técnicos y ofrecerá mantenimiento preventivo.",
    "La Ampliación de RAM implica aumentar la cantidad de memoria RAM en sus computadoras. Esto mejora el rendimiento y la capacidad multitarea de sus dispositivos.",
    "El Reemplazo de Disco Duro por SSD implica cambiar discos duros tradicionales por unidades de estado sólido (SSD) de alta velocidad, lo que mejora el rendimiento y la velocidad de inicio de sus dispositivos.",
    "La Limpieza y Mantenimiento incluye la eliminación de polvo y la verificación de la ventilación en sus dispositivos para evitar el sobrecalentamiento y prolongar su vida útil.",
    "La Optimización de Software implica limpiar y optimizar sistemas operativos, eliminando software no deseado y mejorando el rendimiento general de sus dispositivos.",
    "Sí, Soft-Brain ofrece servicios de Eliminación de Virus y Malware para garantizar la seguridad de sus dispositivos y datos.",
    "Nuestros servicios de Configuración de Red optimizan la conectividad de dispositivos, incluyendo la instalación y configuración de routers, switchs y conexiones Wi-Fi.",
    "El Respaldo de Datos de Soft-Brain incluye copias de seguridad regulares de sus datos importantes, garantizando la seguridad y accesibilidad de su información.",
    "La Reparación de Software de Soft-Brain aborda problemas con el sistema operativo, aplicaciones y programas, asegurando el funcionamiento sin interrupciones de sus dispositivos.",
    "Soft-Brain ofrece estrategias de marketing, incluyendo Publicidad en Redes Sociales, Email Marketing, SEO y Optimización de Contenido, y Marketing de Contenidos.",
    "La Publicidad en Redes Sociales implica la creación y gestión de campañas publicitarias efectivas en plataformas de redes sociales para aumentar la visibilidad de su marca.",
    "Nuestros servicios de Email Marketing ayudan a diseñar estrategias efectivas para llegar a sus clientes con contenido relevante y promociones especiales.",
    "Los servicios de SEO y Optimización de Contenido de Soft-Brain mejoran el contenido de su sitio web y su clasificación en los motores de búsqueda para aumentar el tráfico orgánico.",
    "El Marketing de Contenidos se centra en la creación de contenido relevante y valioso para atraer a su audiencia y fortalecer su presencia en línea.",
    "Los servicios de Creación de Páginas Web de Soft-Brain incluyen el Diseño de Sitios Web Personalizados que se adaptan a sus necesidades y reflejan la identidad de su marca.",
  ];

  var msgTextarea = document.getElementById("msg");
  var question = questions[questionNumber - 1]; // Resta 1 al índice
  var answer = answers[questionNumber - 1]; // Resta 1 al índice

  // Borrar el contenido anterior del textarea
  msgTextarea.value = "";

  // Agregar la pregunta y respuesta al textarea
  msgTextarea.value = "Pregunta: " + question + "\n\n";
  msgTextarea.value += "" + answer + "\n\n";

  // Ajustar la altura del textarea para mostrar todo el contenido
  msgTextarea.style.height = "auto";
  msgTextarea.style.height = (msgTextarea.scrollHeight) + "px";
}

window.onscroll = function () {
  var chatButton = document.getElementById("chatButton");
  if (window.scrollY >= 700) {
    chatButton.style.display = "none"; // Ocultar el botón
  } else {
    chatButton.style.display = "block"; // Mostrar el botón
  }
};
window.onscroll = function () {
  var chatButton = document.getElementById("chatButton");
  if (window.scrollY >= 400) {
    chatButton.style.opacity = "0";
  } else {
    chatButton.style.opacity = "1";
  }
};
var questionContainer = document.querySelector(".questions-container");
questionContainer.addEventListener("click", function (event) {
  event.stopPropagation(); // Evitar la propagación del evento al documento
});

document.addEventListener("click", function (event) {
  var chatPopup = document.getElementById("myForm");
  var chatButton = document.getElementById("chatButton");
  if (event.target !== chatPopup && event.target !== chatButton) {
    chatPopup.style.display = "none";
  }
});

var chatPopup = document.getElementById("myForm");
var chatButton = document.getElementById("chatButton");

chatPopup.addEventListener("click", function (event) {
  event.stopPropagation(); // Evitar la propagación del evento al documento
});

document.addEventListener("click", function (event) {
  if (event.target !== chatPopup && event.target !== chatButton) {
    chatPopup.style.display = "none";
  }
});
var questionLinks = document.querySelectorAll(".questions-container a");
questionLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el enlace haga una navegación
    event.stopPropagation(); // Evitar la propagación del evento al documento
  });
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
