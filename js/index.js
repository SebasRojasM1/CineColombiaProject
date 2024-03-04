
const titulo = document.querySelector('title')
titulo.textContent="Cine Colombia"


const cineLogo = document.querySelector('.logo');
cineLogo.src = "img/cc.jpg"


const imgPeliculas = document.querySelector('.peliculas');
imgPeliculas.children[0].children[0].src = "img/gato.jpg";
imgPeliculas.children[1].children[0].src = "img/ballena.jpg"
imgPeliculas.children[2].children[0].src = "img/houston.jpg"
imgPeliculas.children[3].children[0].src = "img/conejo.jpg"


const namePeliculas = document.querySelector('.peliculas')
namePeliculas.children[0].children[1].textContent = "Gato con botas";
namePeliculas.children[1].children[1].textContent = "La Ballena"
namePeliculas.children[2].children[1].textContent = "Whitney Houston"
namePeliculas.children[3].children[1].textContent = "Academia de conejos"


const tituloCartelera = document.querySelector('.container');
tituloCartelera.children[0].textContent="Cine Colombia - Peliculas"


const navbar = document.querySelector('nav')
navbar.innerHTML = `<a href="#">Cartelera</a> 
                    <a href="#">Pronto</a> 
                    <a href="#">Cineco Alternatico</a> 
                    <a href="#">Comidas</a>`

const ubicacion = document.querySelector('.ciudad');
ubicacion.textContent="Medellin"


const busqueda = document.querySelector('form');
busqueda.children[0].placeholder="Buscar Pelicula"



// AGREGAR PELICULA
//pelicula1
const seccion1 = document.createElement("section");
seccion1.classList.add("pelicula_detalle")

const imgMovie = document.createElement("img")
imgMovie.src= "/img/wonka.jpg";
imgMovie.style.width = "250px"

const nameMovie = document.createElement("p")
nameMovie.textContent="Willy Wonka"

seccion1.appendChild(imgMovie)
seccion1.appendChild(nameMovie)


const nuevaPelicula = document.querySelector(".peliculas");
nuevaPelicula.appendChild(seccion1);



//pelicula2
const seccion2 = document.createElement("section");
seccion2.classList.add("pelicula_detalle");

const imgMovie2 = document.createElement("img");
imgMovie2.src= "/img/napoleon.jpg";
imgMovie2.style.width = "250px";

const nameMovie2 = document.createElement("p");
nameMovie2.textContent="Napoleon";

seccion2.appendChild(imgMovie2);
seccion2.appendChild(nameMovie2);

nuevaPelicula.appendChild(seccion2);
