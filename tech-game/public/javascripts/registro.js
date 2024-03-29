let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', function(){

    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastName'),
    $lastnameErrors = qs('#lastNameErrors'),
    $form = qs('#form'),
    $provinciaSelect = qs('#country'),
    $dni = qs('#dni'),
    $dniErrors = qs('#dniErrors'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    $pass2 = qs('#pass2'),
    $pass2Errors = qs('#pass2Errors'),
    $submitErrors= qs('#submitErrors'),
    $opcion = qs('#opcion')
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



    $inputName.addEventListener('blur', function(){
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputName.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputName.classList.add('is-invalid')  
                break; 
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = ''
                break;
        }
    })

    $inputLastname.addEventListener('blur', function(){
        console.log($inputLastname.value.trim())
        switch (true) {
            case !$inputLastname.value.trim():
                $lastnameErrors.innerHTML = 'El campo apellido es obligatorio'
                $inputLastname.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = 'Debes ingresar un apellido válido'
                $inputLastname.classList.add('is-invalid')  
                break; 
            default:
                $inputLastname.classList.remove('is-invalid');
                $inputLastname.classList.add('is-valid');
                $lastnameErrors.innerHTML = ''
                break;
        }
    })

    $dni.addEventListener('blur', function() {
        switch (true) {
            case !$dni.value.trim():
                $dniErrors.innerHTML = 'El campo DNI es obligatorio';
                $dni.classList.add('is-invalid')
                break;
            case !regExDNI.test($dni.value):
                $dniErrors.innerHTML = 'Debe ingresar un dni válido';
                $dni.classList.add('is-invalid')
                break;
            default:
                $dni.classList.remove('is-invalid');
                $dni.classList.add('is-valid');
                $dniErrors.innerHTML = ''
                break;
        }
    })

    $email.addEventListener('blur', function() {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio';
                $email.classList.add('is-invalid')
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido';
                $email.classList.add('is-invalid')
                break;
            default:
                $email.classList.remove('is-invalid');
                $email.classList.add('is-valid');
                $emailErrors.innerHTML = ''
                break;
        }
    })

    $provinciaSelect.addEventListener('focus',() => {
        fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(response =>  response.json(response))
        .then(result => {
            result.provincias.sort((prev,next)=>{
                return prev.nombre > next.nombre
            })
            result.provincias.forEach(provincia => {
                $provinciaSelect.innerHTML += `<option value='${provincia.nombre}'>${provincia.nombre}</option>`
            });
        })
    })
    $provinciaSelect.addEventListener('change',function(){
            switch (true) {
                case !$provinciaSelect.value:
                     $provinciaSelect.classList.add('is-invalid')
                    break;
            
                default:
                    $provinciaSelect.classList.remove('is-invalid');
                    break;
            }
        
    })

    $pass.addEventListener('blur', function() {
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break;
            default:
                $pass.classList.remove('is-invalid');
                $pass.classList.add('is-valid');
                $passErrors.innerHTML = '';
                break;
        }
    })

    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
                $pass2.classList.add('is-invalid')
                ;break;
            case $pass2.value != $pass.value:
                pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                ;break;
            default:
                $pass2.classList.remove('is-invalid');
                $pass2.classList.add('is-valid');
                $pass2Errors.innerHTML = ''
                break;
        }
    })

    $form.addEventListener('submit',function(event){
        console.log($provinciaSelect.value)
        let error = false
        event.preventDefault()
        let elementosForm = this.elements
        
        let contadorErrors = 0;
       
            for (let index = 0; index < elementosForm.length-1; index++) {
               
                 if(elementosForm[index].value == ""){
                    elementosForm[index].classList.add('is-invalid');
                    $submitErrors.innerHTML = "Los campos señalados son obligatorios";
                    error =true
                }
                let variable = elementosForm[index].classList.contains('is-invalid')
                 if (variable){
                    contadorErrors++;
                }
                
            }
            
            if(contadorErrors > 0){
                error = true;
            }
            if(contadorErrors == 0){ //si no hay errores
                $form.submit() //envia el form
            }else {
                $submitErrors.innerHTML = 'Todos los campos son obligatorios2 '
                
            }
        
    
        
    })

})



    