console.log('Funcionando al 100 👌')
//frontend
const frutas = []
const pintarElementosCarrito = document.getElementById('pintarElementosCarrito')

document.addEventListener('click', e => {
    //console.log(e.target.dataset.bsTarget === '#exampleModal');
    if(e.target.dataset.bsTarget === '#exampleModal'){
        //console.log('diste Click al Boton... ahora agrega el producto')
        frutas.push(e.target.dataset.fruta)
        e.target.classList.add('disabled')
        pintarElementosEnHTML()
    }
})

const pintarElementosEnHTML = () => {
    pintarElementosCarrito.innerHTML = ''
    frutas.forEach(item => {
        pintarElementosCarrito.innerHTML += `
        <li>${item}</li>
        `
    })
}