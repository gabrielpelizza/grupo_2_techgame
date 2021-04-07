
const $form = document.querySelectorAll(".formDelete");

for (let i = 0; i < $form.length; i++) {

console.log("vinculado")


    window.addEventListener('load', function(){
        $form[i].addEventListener('submit',function(event){
            event.preventDefault()
            swal({
                title: "estas seguro?",
                text: "Estas a punto de eliminar un producto",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((modificar) => {
                if (modificar) {
                    swal("El producto a sido eliminado exitosamente", {
                    icon: "success",
                    }).then((value)=>{
                        if (value) {
                            $form.submit()
                        }
                    }); 
                } else {
                    swal("no se a eliminado el producto");
                }
            })

        })
    })

}