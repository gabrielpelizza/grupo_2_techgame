window.addEventListener('load', function(){
    let $inputName = document.querySelector('#name'),
    $nameErrors = document.querySelector('#nombreErrors'),
    $inputLastname = document.querySelector('#lastname'),
    $apellidoErrors = document.querySelector('#apellidoErrors'),
    $inputDni = document.querySelector('#dni'),
    $dniErrors = document.querySelector('#dniErrors'),
    $inputPais = document.querySelector('#pais'),
    $paisErrors = document.querySelector('#paisErrors'),
    $form = document.querySelector('#form'),
    $submitErrors = document.querySelector('#submitErrors'),
    regExNumeros = /^[0-9]*$/,
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

    $inputName.addEventListener('blur', function(){
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputName.classList.add('is-invalid')
                break;
           case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Debes ingresar un nombre valído"
                $inputName.classList.add('is-invalid')
                break;
            default:
                $inputName.classList.remove('is-invalid')
                $inputName.classList.add('is-valid')
                $nameErrors.innerHTML = ''
                break;
        }
    })

    $inputLastname.addEventListener('blur', function(){
        switch (true) {
            case !$inputLastname.value.trim():
                $apellidoErrors.innerHTML = 'El campo apellido es obligatorio'
                $inputLastname.classList.add('is-invalid')
                break;
           case !regExAlpha.test($inputLastname.value):
                $apellidoErrors.innerHTML = "Debes ingresar un apellido valído"
                $inputLastname.classList.add('is-invalid')
                break;
            default:
                $inputLastname.classList.remove('is-invalid')
                $inputLastname.classList.add('is-valid')
                $apellidoErrors.innerHTML = ''
                break;
        }
    })

    $inputDni.addEventListener('blur', function() {
        switch (true) {
            case !$inputDni.value.trim():
                $dniErrors.innerHTML = 'El campo DNI es obligatorio';
                $dni.classList.add('is-invalid')
                break;
            case !regExNumeros.test($inputDni.value):
                $dniErrors.innerHTML = 'Debe ingresar un DNI válido';
                $inputDni.classList.add('is-invalid')
                break;
            case $inputDni.value.length > 8 :
                $dniErrors.innerHTML = 'Debe tener un maximo de 8 caracteres'
                $inputDni.classList.add('is-invalid')
                break; 
                case $inputDni.value.length < 8 :
                    $dniErrors.innerHTML = 'El campo debe tener 8 caracteres'
                    $inputDni.classList.add('is-invalid')
                    break;
            default:
                $inputDni.classList.remove('is-invalid');
                $inputDni.classList.add('is-valid');
                $dniErrors.innerHTML = ''
                break;
        }
    })

    $inputPais.addEventListener('blur', function(){
        switch (true) {
            case !$inputPais.value.trim():
                $paisErrors.innerHTML = 'El campo pais es obligatorio'
                $inputPais.classList.add('is-invalid')
                break;
           case !regExAlpha.test($inputPais.value):
                $paisErrors.innerHTML = "Debes ingresar un pais valído"
                $inputPais.classList.add('is-invalid')
                break;
            default:
                $inputPais.classList.remove('is-invalid')
                $inputPais.classList.add('is-valid')
                $paisErrors.innerHTML = ''
                break;
        }
    })
})