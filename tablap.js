let titulosarray=["Ingles","Español","Significado"];
let ingles = [
    "Chair",
    "Supermarket",
    "Gym",
    "Plane",
    "T-Shirt",
    "Movie",
    "Fire",
    "Cinema",
    "Water",
    "Genre",
    "Acting",
    "Theater",
    "Express",
    "Camera",
    "Character",
    "Characters",
    "Morning",
    "Night",
    "Happy",
    "Strong"
];

let español = [
    "Silla",
    "Supermercado",
    "Gimnasio",
    "Avión",
    "Camiseta",
    "Película",
    "Fuego",
    "Cine",
    "Agua",
    "Género",
    "Actuación",
    "Teatro",
    "Expresar",
    "Cámara",
    "Carácter",
    "Personajes",
    "Mañana",
    "Noche",
    "Feliz",
    "Fuerte"
];

let significado = [
    "Asiento para una persona.",
    "Lugar donde se compran los alimentos y otros productos.",
    "Lugar para hacer ejercicio.",
    "Medio de transporte aéreo.",
    "Prenda de vestir para el cuerpo.",
    "Obra de actuación que se proyecta en el cine.",
    "Combustión que produce luz y calor.",
    "Lugar donde se proyectan películas.",
    "Bebida esencial para la vida.",
    "Categoría de una obra de arte o película.",
    "Representación de personajes en una obra.",
    "Lugar donde se representan obras de teatro.",
    "Expresar sentimientos o ideas.",
    "Dispositivo para tomar fotos o grabar videos.",
    "Parte de una obra de arte o literatura.",
    "Figuras que aparecen en una obra de arte o literatura.",
    "Primera parte del día.",
    "Parte oscura del día.",
    "Estado de alegría.",
    "Con mucha fuerza o resistencia."
];

let ingles1 = [
    "Friend",
    "School",
    "Teacher",
    "Student",
    "Book",
    "Notebook",
    "Pencil",
    "Eraser",
    "OperativeSystem",
    "Windows",
    "Computer",
    "Keyboard",
    "Mouse",
    "Phone",
    "HardDisk",
    "Charger",
    "Pixels",
    "Optical Fiber",
    "Website",
    "Program Codes"
];

let español1 = [
    "Amigo",
    "Escuela",
    "Profesor",
    "Estudiante",
    "Libro",
    "Cuaderno",
    "Lápiz",
    "Goma",
    "Sistema Operativo",
    "Ventanas",
    "Computador",
    "Teclado",
    "Ratón",
    "Teléfono",
    "Disco Duro",
    "Cargador",
    "Píxeles",
    "Fibra Óptica",
    "Sitio Web",
    "Códigos de Programa"
];

let significado1 = [
    "Persona cercana o compañera.",
    "Lugar donde se estudia.",
    "Persona que enseña.",
    "Persona que aprende.",
    "Material para leer y estudiar.",
    "Se usa para escribir apuntes.",
    "Instrumento para escribir.",
    "Sirve para borrar.",
    "Software que gestiona el hardware de una computadora.",
    "Abertura que deja entrar luz.",
    "Máquina para trabajar y aprender.",
    "Permite escribir en el computador.",
    "Controla el cursor.",
    "Dispositivo para comunicarse.",
    "Almacenamiento de datos en una computadora.",
    "Dispositivo para cargar baterías.",
    "Unidades mínimas de imagen en una pantalla.",
    "Medio para transmitir datos mediante luz.",
    "Conjunto de páginas web accesibles a través de internet.",
    "Instrucciones que le indican a una computadora qué hacer."
];

const a=document.querySelector("#titulos");
const b=document.querySelector("#ingles0");
const c=document.querySelector("#español0");
const d=document.querySelector("#significado0");

const e=document.querySelector("#titulos1");
const f=document.querySelector("#ingles1");
const g=document.querySelector("#español1");
const h=document.querySelector("#significado1");

for(let valor of titulosarray){
    a.innerHTML+=`<th>${valor}</th>`;
}
for(let valor of ingles){
    b.innerHTML+=`<div>${valor}</div>`;
}
for(let valor of español){
    c.innerHTML+=`<div>${valor}</div>`;
}
for(let valor of significado){
    d.innerHTML+=`<div>${valor}</div>`;
}

for(let valor of titulosarray){
    e.innerHTML+=`<th>${valor}</th>`;
}
for(let valor of ingles1){
    f.innerHTML+=`<div>${valor}</div>`;
}
for(let valor of español1){
    g.innerHTML+=`<div>${valor}</div>`;
}
for(let valor of significado1){
    h.innerHTML+=`<div>${valor}</div>`;
}