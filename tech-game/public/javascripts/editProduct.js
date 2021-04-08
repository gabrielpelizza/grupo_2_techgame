console.log('vinculado')
window.addEventListener('load', function(){

    let $inputNombre = document.querySelector('#product_name'),
    $nombreErrors = document.querySelector('#nombreErrors'),
    $inputPrecio = document.querySelector('#price'),
    $precioErrors = document.querySelector('#priceErrors'),
    $inputSku = document.querySelector('#sku'),
    $skuErrors = document.querySelector('#skuErrors'),
    $inputStock = document.querySelector('#stock'),
    $stockErrors = document.querySelector('#stockErrors'),
    $inputDescuento = document.querySelector('#discount'),
    $descuentoErrors = document.querySelector('#discountErrors'),
    $inputFile = document.querySelector('#file'),
    $fileErrors = document.querySelector('#fileErrors'),
    $inputCategorias = document.querySelector('#categorias'),
    $categoriasErrors = document.querySelector('#categoriasErrors'),
    $inputMarcas = document.querySelector('#marcas'),
    $marcasErrors = document.querySelector('#marcasErrors'),
    $textareaDescripcion = document.querySelector('#description'),
    $descripcionErrors = document.querySelector('#descripcionErrors'),
    $form = document.querySelector('#form'),
    $submitErrors = document.querySelector('#submitErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;


    $inputNombre.addEventListener('blur',function(){
        switch(true){
            case !$inputNombre.value.trim() : 
            console.log($inputNombre)
            $nombreErrors.innerHTML = "El campo nombre es obligatorio."
            $inputNombre.classList.add('is-invalid');break;
            default:
                $inputNombre.classList.remove('is-invalid')
                $inputNombre.classList.add('is-valid')
                $nombreErrors.innerHTML = ''
                break;
        }
    })
    $inputSku.addEventListener('blur',function(){
        switch (true) {
            case !$inputSku.value.trim():
                console.log($inputSku)
                $skuErrors.innerHTML = 'El campo sku es obligatorio.';
                $inputSku.classList.add('is-invalid')
                break;
            case (!Number($inputSku.value.trim()) && $inputSku.value != 0) ||  $inputSku.value.trim() < 0  : 
                $skuErrors.innerHTML = 'El campo sku, es numero invalido.';
                $inputSku.classList.add('is-invalid')
                break;
            default :
                $skuErrors.innerHTML = '';
                $inputSku.classList.remove('is-invalid')
                $inputSku.classList.add('is-valid')
                break;
        }
    })

    $inputPrecio.addEventListener('blur',function(){
        switch(true){
            case !$inputPrecio.value.trim():
                $precioErrors.innerHTML = 'El campo precio es obligatorio.';
                $inputPrecio.classList.add('is-invalid');
                break;
            case !Number($inputPrecio.value.trim()) ||  $inputPrecio.value.trim() < 0  : 
                $precioErrors.innerHTML = 'El campo precio, es numero invalido.'; 
                $inputPrecio.classList.add('is-invalid')
                break;
            default : 
                $precioErrors.innerHTML = '';
                $inputPrecio.classList.remove('is-invalid')
                $inputPrecio.classList.add('is-valid')
                break;
        }
    })

    $inputStock.addEventListener('blur',function(){
        switch(true){
            case !$inputStock.value.trim(): 
                $stockErrors.innerHTML = 'El campo stock, es obligatorio.';
                $inputStock.classList.add('is-invalid')
                break;
            case (!Number($inputStock.value.trim()) && $inputStock.value != 0 ) || $inputStock.value.trim()< 0 :
                $inputStock.classList.remove('is-invalid')
                $stockErrors.innerHTML = 'El campo stock, es numero invalido.'; 
                break;
            default : 
                $inputStock.classList.remove('is-invalid')
                $inputStock.classList.add('is-valid')
                $stockErrors.innerHTML = ''; 
                break;
        }
    })

    $inputDescuento.addEventListener('blur',function(){
        switch(true){
            case !$inputDescuento.value.trim() :
                $descuentoErrors.innerHTML = 'El campo descuento, es obligatorio.';
                $inputDescuento.classList.add('is-invalid')
                break;
            case !regExDescuento.test($inputDescuento.value):
                $descuentoErrors.innerHTML = 'El campo descuento, debe ser valido.' ;
                $inputDescuento.classList.add('is-invalid')
                break;
            default : 
                $descuentoErrors.innerHTML = '';
                $inputDescuento.classList.remove('is-invalid')
                $inputDescuento.classList.add('is-valid')
                break;
            
        }
    })
    $textareaDescripcion.addEventListener('blur',()=>{
        if(!$textareaDescripcion.value.trim()){
            $descripcionErrors.innerHTML = 'El campo descripcion, es obligatorio.'
            $textareaDescripcion.classList.add('is-invalid')
        }else if( $textareaDescripcion.value.length >= 300 ){
            $descripcionErrors.innerHTML = 'El campo descripcion, tiene un maximo de 300 caracteres.'
            $textareaDescripcion.classList.add('is-valid')
        }else{
            $descripcionErrors.innerHTML = '';
            $textareaDescripcion.classList.remove('is-invalid')
            $textareaDescripcion.classList.add('is-valid')
        }
    })

/*     $inputFile.addEventListener('change', 
    function fileValidation(){
        let filePath = $inputFile.value,
        allowExtensions = /(.jpg|.jpeg|.png|.gif)$/i
        if(!allowExtensions.exec(filePath)){
            $fileErrors.innerHTML = 'El campo de imagen, deber ser .jpg, .peg, .png, o .gif';
            $inputFile.value = ''
        } else {
            if($inputFile.files && $inputFile.files[0]){
               $fileErrors.innerHTML = ''
            }
        }
    }) */

    
    $form.addEventListener('submit',function(event){
        let error = false
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('is-invalid');
                $submitErrors.innerHTML = "Los campos señalados son obligatorios";
                error =true
            }
        }
        if(!error){
            swal({
                title: "estas seguro?",
                text: "Estas a punto de modificar un producto",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((modificar) => {
            if (modificar) {
                swal("El producto a sido modificado exitosamente", {
                icon: "success",
                }).then((value)=>{
                    if (value) {
                        $form.submit()
                    }
                });
                
                
            } else {
                swal("Your imaginary file is safe!");
            }
            })
              
        } 
        
    })
    $inputFile.addEventListener('change', 
    function fileValidation(){
        let filePath = $inputFile.value,
        allowExtensions = /(.jpg|.jpeg|.png|.gif)$/i
        if(!allowExtensions.exec(filePath)){
            $fileErrors.innerHTML = 'El campo de imagen, deber ser .jpg, .peg, .png, o .gif';
            $inputFile.value = ''
        } else {
            if($inputFile.files && $inputFile.files[0]){
               $fileErrors.innerHTML = ''
            }
        }
    })




    
});