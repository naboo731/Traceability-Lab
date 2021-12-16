const form = document.querySelector('#color-form')
const colorInput = document.querySelector('#color-input')

function submitHandler(e){
    e.preventDefault()
    axios.post('/api/color', {color: colorInput.value})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

addForm.addEventListener('submit', submitHandler)