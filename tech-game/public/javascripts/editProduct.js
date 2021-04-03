console.log('vinculado')
window.addEventListener('load', function(){

    let $inputNombre = document.querySelector('#nombre'),
    $nombreErrors = document.querySelector('#nombreErrors'),
    $inputPrecio = document.querySelector('#precio'),
    $precioErrors = document.querySelector('#precioErrors'),
    $inputSku = document.querySelector('#sku'),
    $skuErrors = document.querySelector('#skuErrors'),
    $inputStock = document.querySelector('#stock'),
    $stockErrors = document.querySelector('#stockErrors'),
    $inputDescuento = document.querySelector('#descuento'),
    $descuentoErrors = document.querySelector('#descuentoErrors'),
    $inputFile = document.querySelector('#file'),
    $fileErrors = document.querySelector('#fileErrors'),
    $inputCategorias = document.querySelector('#categorias'),
    $categoriasErrors = document.querySelector('#categoriasErrors'),
    $inputMarcas = document.querySelector('#marcas'),
    $marcasErrors = document.querySelector('#marcasErrors'),
    $textareaDescripcion = document.querySelector('#descripcion'),
    $descripcionErrors = document.querySelector('#descripcionErrors'),
    $form = document.querySelector('#formEdit'),
    $submitErrors = document.querySelector('#submitErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDescuento = /^[0-9]{1,2}$/;

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
                break;
            case (!Number($inputSku.value.trim()) && $inputSku.value != 0) ||  $inputSku.value.trim() < 0  : 
                $skuErrors.innerHTML = 'El campo sku, es numero invalido.';break;
            default :
                $skuErrors.innerHTML = '';
                break;
        }
    })

    $inputPrecio.addEventListener('blur',function(){
        switch(true){
            case !$inputPrecio.value.trim():
                $precioErrors.innerHTML = 'El campo precio es obligatorio.';break;
            case (!Number($inputPrecio.value.trim()) && $inputPrecio.value != 0) ||  $inputPrecio.value.trim() < 0  : 
                $precioErrors.innerHTML = 'El campo precio, es numero invalido.'; break;
            default : $precioErrors.innerHTML = '';break;
        }
    })

    $inputStock.addEventListener('blur',()=>{
        switch(true){
            case !$inputStock.value.trim(): 
            $stockErrors.innerHTML = 'El campo stock, es obligatorio.'; break;
            case (!Number($inputStock.value.trim()) && $inputStock.value != 0 ) || $inputStock.value.trim()< 0 :
            $stockErrors.innerHTML = 'El campo stock, es numero invalido.'; break;
            default : 
             $stockErrors.innerHTML = ''; break;
        }
    })

    $inputDescuento.addEventListener('blur',()=>{
        switch(true){
            case !$inputDescuento.value.trim() :
                $descuentoErrors.innerHTML = 'El campo descuento, es obligatorio.';break;
            case !regExDescuento.test($inputDescuento.value):
                $descuentoErrors.innerHTML = 'El campo descuento, debe ser valido.' ; break;
            default : 
            $descuentoErrors.innerHTML = '';
        }
    })
    $textareaDescripcion.addEventListener('blur',()=>{
        if(!$textareaDescripcion.value.trim()){
            $descripcionErrors.innerHTML = 'El campo descripcion, es obligatorio.'
        }else if( $textareaDescripcion.value.length >= 300 ){
            $descripcionErrors.innerHTML = 'El campo descripcion, tiene un maximo de 300 caracteres.'
        }else{
            $descripcionErrors.innerHTML = '';
        }
    })
    
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
            $form.submit()
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