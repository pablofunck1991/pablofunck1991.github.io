
// // signo peso es selector, cuando mji pagina web este ready va a ejecutar la funcion anonima de ahi va a usar la
//  funcion sumar cuando hagan un click en el 

$(document).ready(function(){
    $("#sumar").click(
        
        
         function(){
            $("#sumar").hide(1500);
             var num1 = parseInt($("#num1").val());
             var num2 = parseInt($("#num2").val());
                var suma = num1+num2
            
           $("#resultado").val(suma)
        }


    );
}
);
