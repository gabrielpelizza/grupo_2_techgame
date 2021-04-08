console.log('ssiii')
window.addEventListener('load',function(){
let $inputEmail = document.querySelector('#email'),
    $inputPass = document.querySelector('#pass'),
    $emailErrors = document.querySelector('#emailErrors'),
    $passErrors = document.querySelector('#passErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
    $inputRecordar = document.querySelector('#recordar'),
    $recordarErrors = document.querySelector('#recordarErrors'),
    $form = document.querySelector('#form_login'),
    $formErrors = document.querySelector('#formErrors');

    $inputEmail.addEventListener('blur',function(){
         switch (true) {
             case !$inputEmail.value.trim():
            $inputEmail.classList.add('is-invalid')
            $emailErrors.innerHTML = 'El campo email está vacío.'
            ;break;
            case !regExEmail.test($inputEmail.value):
            $emailErrors.innerHTML = 'Debe ingresar uemail válido';
            $inputEmail.classList.add('is-invalid')
            ;break;
             default:
                $inputEmail.classList.remove('is-invalid')
                $inputEmail.classList.add('is-valid')
                $emailErrors.innerHTML = ''
                 break;
         }
    })

    $inputPass.addEventListener('blur',function(){
        switch (true) {
            case !$inputPass.value.trim():
           $inputPass.classList.add('is-invalid')
           $passErrors.innerHTML = 'El campo contraseña está vacía.'
            ;break;
             case !regExPass.test($inputPass.value):
            $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.';
            $inputPass.classList.add('is-invalid')
            ;break;
         default:
               $inputPass.classList.remove('is-invalid')
               $inputPass.classList.add('is-valid')
               $passErrors.innerHTML = ''
            ;break;
        }
   })

   $inputRecordar.addEventListener('click',function(){
       $recordarErrors.innerHTML = '';
   })
   $form.addEventListener('submit', function(){
       let error = false;
       event.preventDefault();
       let elementosForm = this.elements
       console.log(elementosForm)

       for (let index = 0; index < elementosForm.length-1; index++) {
        if(elementosForm[index].value == ""){
            elementosForm[index].classList.add('is-invalid');
            $formErrors.innerHTML = "Los campos señalados son obligatorios";
            if(!$inputRecordar.checked){
                $recordarErrors.innerHTML = '¿Seguro que no quieres recordar la cuenta?'
            }
            error =true
        }
        }
    
        if(!error){
            $form.submit()
        }
   })


})