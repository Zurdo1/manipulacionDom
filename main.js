let link = "https://scontent.fpaz1-1.fna.fbcdn.net/v/t1.0-9/144926970_1725790530925757_1333249529588660204_n.jpg?_nc_cat=110&ccb=3&_nc_sid=09cbfe&_nc_ohc=OZ_-dE_2digAX80FGu9&_nc_ht=scontent.fpaz1-1.fna&oh=00c3695c3199e45f0772d0471af06f1a&oe=605908A7"

let img = document.querySelector('img') // con querySelector vamos a poder seleccionar como con CSS
img.src = link
img.width = 300 //con el punto entro a los atributos (es una llave) de img y puedo modificarlos

//1.- Seleccionar 

let p = document.querySelector('#game')

//2.- optener el dato 

let texto = p.innerText // si no le ponemos un dato no cambia nada solo optiene el dato, lo concerva, lo almacena ;) 

//3.- modificamos 

p.innerText = texto + " y use windows 98"

//listener 

let boton = document.querySelector('button')

boton.addEventListener('click', cambiarTexto) //entregarle una funcion a otra funcion se le llama callback

function cambiarTexto() { 
    boton.innerText = "I'am Hacker 👾"
}

//crear elemento en el DOM 

let a = document.createElement('a')

a.href = "https://github.com/Zurdo1"

a.innerText = "My Github"

//seleccionar el padre y meter el hijo 

let section = document.querySelector('section')

section.appendChild(a)