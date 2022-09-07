// --- Escuchar Eventos ---
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const button= document.querySelector('#btnCalcular');
const p= document.querySelector('.resultado');

form.addEventListener('submit', btnOnClick);


function btnOnClick(event) {
    console.log(event);
    event.preventDefault(); // Se coloca para que no se recargue la página y modifique la URL.
    let resultado = '';
    if(input1.value == '' && input2.value == '') {
        alert('No se detectaron dígitos, favor ingrese alguno');
    } else {
        console.log(`El primer valor es igual a: ${input1.value}`);
        console.log(`El segundo valor es igual a: ${input2.value}`);
        resultado = parseInt(input1.value) + parseInt(input2.value);
        console.log(`La suma de los dos valores es igual a: ${resultado}`);
    }
    p.innerHTML = `El resultado es igual a: <b>${resultado}</b>`;
}





// --- Clase de Escribiendo desde el HTML  ---
// // Imprimimos el valor que tiene cada variable.
// // console.log({
// //     h1,
// //     p,
// //     parrafito,
// //     pid,
// //     input,
// // });

// // Escribiendo HTML desde JavaScript

// // h1.innerHTML = 'Esto es una prueba <br> del cambio de titulo';
// h1.innerText = 'Esto es una prueba <br> del cambio de titulo';
// // h1.getAttribute('pantalla');
// // console.log(h1.getAttribute('pantalla'));
// //h1.setAttribute('pantalla','ROJO');
// // console.log(h1.getAttribute('pantalla'));

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('naranja');
// h1.classList.contains('verde'); // devuelve true o false, dependiendo si existe la clase.


// // input.value = "456";
// input.placeholder = "Testing";


// // Crear un elemento desde cero.
// const img = document.createElement('img');
// img.setAttribute('src', 'https://ramenparados.com/wp-content/uploads/2021/11/Yofukashi-no-Uta-poster.jpg');
// // img.width = '500px';
// img.height = "200";
// pid.innerText = '';
// pid.append(img);

