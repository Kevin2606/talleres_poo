import Empleado from './Empleado.js'
import Gerente from './Gerente.js'


const form_empleado = document.getElementById('form_empleado')
const form_gerente = document.getElementById('form_gerente')

form_empleado.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target));
    const empleado1 = new Empleado(data)
    const form_response = document.querySelector('#form_response')
    form_response.innerHTML = '';
    form_response.insertAdjacentHTML('beforeend', `<p>El empleado ${empleado1.nombre} con id: ${empleado1.id}</p>`)
    form_response.insertAdjacentHTML('beforeend', `<p>tiene un salario anual de: ${new Intl.NumberFormat().format(empleado1.calcularSalarioAnual())} $ </p>`)
    document.querySelector('#form_container2').style.display = 'block';
})

form_gerente.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target));
    const gerente1 = new Gerente(data)
    const form_response = document.querySelector('#form_response')
    form_response.innerHTML = '';
    form_response.insertAdjacentHTML('beforeend', `<p>El gerente ${gerente1.nombre} tiene un salario anual de: ${new Intl.NumberFormat().format(gerente1.calcularSalarioAnual())} $ </p>`)
    document.querySelector('#form_container2').style.display = 'block';
})
