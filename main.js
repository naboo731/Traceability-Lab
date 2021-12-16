const colorForm = document.querySelector('#color-form')
const colorInput = document.querySelector('#color-input')
const nameForm = document.querySelector('#name-form')
const nameInput = document.querySelector('#name-input')
const birthdayForm = document.querySelector('#birthday-form')
const birthdayInput = document.querySelector('#birthday-input')
const factForm = document.querySelector('#fact-form')
const factInput = document.querySelector('#fact-input')


function submitHandler(e){
    e.preventDefault()
    axios.post('/api/name', {name: nameInput.value})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
addForm.addEventListener('submit', submitHandler)

function submitHandler(e){
    e.preventDefault()
    axios.post('/api/birthday', {birthday: birthdayInput.value})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
addForm.addEventListener('submit', submitHandler)

function submitHandler(e){
    e.preventDefault()
    axios.post('/api/color', {color: colorInput.value})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
addForm.addEventListener('submit', submitHandler)

function submitHandler(e){
    e.preventDefault()
    axios.post('/api/funfact', {funFact: funFactInput.value})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
addForm.addEventListener('submit', submitHandler)