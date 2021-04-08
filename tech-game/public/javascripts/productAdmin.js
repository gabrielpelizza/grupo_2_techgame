window.addEventListener('load', function(){

    let $inputNombre = document.querySelector('#nombre'),
    $nameErrors = document.querySelector('#nameErrors'),
    $inputPrecio = document.querySelector('#precio'),
    $priceErrors = document.querySelector('#priceErrors'),
    $inputSku = document.querySelector('#sku'),
    $skuErrors = document.querySelector('#skuErrors'),
    $inputStock = document.querySelector('#stock'),
    $stockErrors = document.querySelector('#stockErrors'),
    $inputDescuento = document.querySelector('#descuento'),
    $discountErrors = document.querySelector('#discountErrors'),
    $inputFile = document.querySelector('#file'),
    $fileErrors = document.querySelector('#fileErrors'),
    $inputCategoria = document.querySelector('#categoria'),
    $categoryErrors = document.querySelector('#categoryErrors'),
    $inputMarcas = document.querySelector('#marcas'),
    $brandErrors = document.querySelector('#brandErrors'),
    $textareaDescripcion = document.querySelector('#description'),
    $descriptionErrors = document.querySelector('#descriptionErrors'),
    $form = document.querySelector('#form'),
    $submitErrors = document.querySelector('#submitErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExNumeros = /^[0-9]*$/,
    regExDescuento = /^[0-9]{1,2}$/;

    $inputNombre.addEventListener('blur', function(){
        switch (true) {
            case !$inputNombre.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputNombre.classList.add('is-invalid')
                break;
            case $inputNombre.value.length >= 45 :
                $nameErrors.innerHTML = "Debe contener un maximo de 45 caracteres"
                ;break;
           /* case !regExAlpha.test($inputNombre.value):
                $nameErrors.innerHTML = "Debes ingresar un nombre valído"
                $inputNombre.classList.add('is-invalid')
                break;*/
            default:
                $inputNombre.classList.remove('is-invalid')
                $inputNombre.classList.add('is-valid')
                $nameErrors.innerHTML = ''
                break;
        }
    })

    $inputSku.addEventListener('blur', function(){
        switch (true) {
            case !$inputSku.value.trim():
                $skuErrors.innerHTML = "El campo sku es obligatorio"
                $inputSku.classList.add('is-invalid')
                break;
            case !regExNumeros.test($inputSku.value):
                $skuErrors.innerHTML = "Debes ingresar un sku valido"
                $inputSku.classList.add('is-invalid')
                break;
            default:
                $inputSku.classList.remove('is-invalid')
                $inputSku.classList.add('is-valid')
                $skuErrors.innerHTML = ''
                break;
        }
    })

    $inputPrecio.addEventListener('blur', function(){
        switch (true) {
            case !$inputPrecio.value.trim():
                $priceErrors.innerHTML = "El campo precio es obligatorio"
                $inputNombre.classList.add('is-invalid')
                break;
            case !Number($inputPrecio.value.trim()) || $inputPrecio.value.trim() <= 0  : 
                $priceErrors.innerHTML = "Debes ingresar un precio valido"
            ;break;
          /*  case !regExNumeros.test($inputPrecio.value):
                $priceErrors.innerHTML = "Debes ingresar un precio valido"
                $inputNombre.classList.add('is-invalid')
                break;*/
            default:
                $inputPrecio.classList.remove('is-invalid')
                $inputPrecio.classList.add('is-valid')
                $priceErrors.innerHTML = ''
                break;
        }
    })

    $inputStock.addEventListener('blur', function(){
        switch (true) {
            case !$inputStock.value.trim():
                $stockErrors.innerHTML = "El campo stock es obligatorio"
                $inputStock.classList.add('is-invalid')
                break;
            case !regExNumeros.test($inputStock.value):
                $stockErrors.innerHTML = "Debes ingresar un numero de stock"
                $inputStock.classList.add('is-invalid')
                break;
            default:
                $inputStock.classList.remove('is-invalid')
                $inputStock.classList.add('is-valid')
                $stockErrors.innerHTML = ''
                break;
        }
    })

    $inputDescuento.addEventListener('blur', function(){
        switch (true) {
            case !$inputDescuento.value.trim():
                $discountErrors.innerHTML = "El campo descuento es obligatorio"
                $inputDescuento.classList.add('is-invalid')
                break;
            case !regExDescuento.test($inputDescuento.value):
                $discountErrors.innerHTML = "Debes ingresar un descuento valido"
                $inputDescuento.classList.add('is-invalid')
                break;
            default:
                $inputDescuento.classList.remove('is-invalid')
                $inputDescuento.classList.add('is-valid')
                $discountErrors.innerHTML = ''
                break;
        }
    })

    
    $inputCategoria.addEventListener('blur', function(){
        if(!$inputCategoria.value.trim()){
            $categoryErrors.innerHTML = 'Debes seleccionar una categoria'
            $inputCategoria.classList.add('is-invalid')
        } else {
            $inputCategoria.classList.remove('is-invalid')
            $inputCategoria.classList.add('is-valid')
            $categoryErrors.innerHTML = ''
        }
    })

    $inputMarcas.addEventListener('blur', function(){
        if(!$inputMarcas.value.trim()){
            $brandErrors.innerHTML = 'Debes seleccionar una marca'
            $inputMarcas.classList.add('is-invalid')
        } else {
            $inputMarcas.classList.remove('is-invalid')
            $inputMarcas.classList.add('is-valid')
            $brandErrors.innerHTML = ''
        }
    })

    $textareaDescripcion.addEventListener('blur', function(){
        switch (true) {
            case !$textareaDescripcion.value.trim():
                $descriptionErrors.innerHTML = 'El campo descripcion es obligatorio'
                $textareaDescripcion.classList.add('is-invalid')
                break;
            case $textareaDescripcion.value.length > 300  : 
                $descriptionErrors.innerHTML = 'Debes ingresar un maximo de 300 caracteres'    
            ;break;
            default:
                $textareaDescripcion.classList.remove('is-invalid')
                $textareaDescripcion.classList.add('is-valid')
                $descriptionErrors.innerHTML = ''
                break;
        }
    })
    $inputFile.addEventListener('change', 
    function fileValidation(){
        let filePath = $inputFile.value,
        allowExtensions = /(.jpg|.jpeg|.png|.gif)$/i
        if(!allowExtensions.exec(filePath)){
            $fileErrors.innerHTML = 'Carga un archivo de imagen valido'
            $inputFile.value = ''
        } else {
            if($inputFile.files && $inputFile.files[0]){
               $fileErrors.innerHTML = ''
            }
        }
    })


     $form.addEventListener('submit', function(event){
        let error = false;
        event.preventDefault()
        let elementosForm = this.elements
        for (let index = 0; index < elementosForm.length-1; index++) {
            console.log(elementosForm[index].value)

            if((elementosForm[index].value != '' && elementosForm.file.value == '') || (elementosForm[index].value != '' && elementosForm.file.value != '') ){ //Si en cada elemento, tienen valores y el input file  esta vacio, significa que no hay errores. O si en cada elemento hay valores y el input file tiene un valor tampoco hay errores
                error = false
            
            }
            else{ //Si todo esta vacio que muestre esto, que significa que hay error
               // elementosForm[index].classList.add('is-invalid');
                error = true;   
            }
        }
        if(!error){ //si es true el error 
            $form.submit() //envia el form
        } else {
            $submitErrors.innerHTML = 'Todos los campos son obligatorios'
        }
    })
})