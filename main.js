
let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function(){
    let val = body.classList.toggle("dark")
    localStorage.setItem("modo",val)
}) 

let valor = localStorage.getItem("modo")

if (valor = "true"){
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}



const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('hret','mailto:cs824454@gmail.com?subject=nombre ${form.get(.name)} correo ${form.get(.email)}&body=${form.get(.message)}')
    $buttonMailto.click()
}