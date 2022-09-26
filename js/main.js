
// let claseSeleccionada = "defecto";

// let zonaOscura = document.getElementById("zonaOscura");
// let zonaClara = document.getElementById("zonaClara");

// const clickColor = (nuevaClase) => {
//     claseSeleccionada = nuevaClase;

//     console.log(claseSeleccionada);
// };

//Se considera una práctica un tanto desfasada...innerHTML seria preferible
// document.write("<div id='contenedorPadre'/>Hola Lunes</div>");

// let hijos = document.getElementsByClassName("contenedorHijo");

// console.log(hijos);

// let hijo2 = document.getElementById("segundoHijo");

// console.log(hijos[1],hijo2);


//EJEMPLO PRÁCTICO DE MANEJO DEL DOM

// let logico = document.createElement("div");

// document.body.appendChild(logico);

// logico.setAttribute("class","turquesa");

document.addEventListener("mousemove", (ev)=>{
    // console.log(ev.pageX);
    // console.log(ev.pageY);
    console.log(ev);
});