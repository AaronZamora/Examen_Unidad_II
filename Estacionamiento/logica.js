$(document).ready(function () {
    var matricula=["null"];
    var marca=["marca"];
    var confirmacion=false;
    var costo=[0];
    var recivo;

    $("#enviar").click(function () { 

        let aux1=$("#matricula").val();
        let aux2=$("#marca").val();
        matricula.push(aux1);
        marca.push(aux2);
        console.log(marca,matricula);

        //alerta
        Swal.fire('Registrada Matricula: ',aux1)
    });

    //dos
    $("#enviar2").click(function () { 
        
        var tiempo=$("#horas").val();
        var carroFuera=$("#matricula2").val();
        
    for (let index = 0; index < matricula.length; index++) {
            
        if(carroFuera==matricula[index]){
        
            if(tiempo==1){
                costo.push(100);
                
            
                Swal.fire('Costo: $100 pesos ')
                
            }

            if(tiempo==2){
                costo.push(200);
                
                
                Swal.fire('Costo: $200 pesos ')
            }

            if(tiempo==3){
                costo.push(500);
                
            
                Swal.fire('Costo: $500 pesos ')
            }

            confirmacion=true;
        }
    }
        
        if(confirmacion==false){
        

            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'Auto no encontrado o inexistente!',
                footer: '<a href="">vuelve a intentarlo !!</a>'
              })

        }
        
           //tres
        $("#enviar3").click(function () { 
            
            for (let index = 0; index < matricula.length; index++) {
                
                if(matricula[index]==carroFuera){
                    $("#Monto").html("costo:"+costo);
                    recivo=$("#recivido").val();
                    var aux3=parseInt(recivo);
                    var total=aux3-costo[index];
                    console.log(costo[index]);
                    console.log(recivo);
                    console.log(total);
                    if(total==0){

                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Pago saldado hasta pronto !!',
                            showConfirmButton: false,
                            timer: 1500
                          })

                        //se elimina el elemento seleccionado
                        costo.splice(index);
                        marca.splice(index);
                        matricula.splice(index);

                    }
                    if(total>0){
                        total=total-costo[index];
                      

                        Swal.fire({
                            icon: 'error',
                            title: 'Falta: ',total,
                            text: 'liquidar el faltante!',
                          })

                    }
                    if(total<0){
                        costo[index]=costo[index]-total;
                        Swal.fire('su cambio es de:',costo[index])
                    }
                }
           }
        
        });

        $("#buscar").click(function () { 

        var matri=$("#matri").val(); 
           if(matri==""){ 
                for (let index = 0; index < matricula.length; index++) {
                    
                   
                    Swal.fire(
                        'se encuentran !!',
                        'autos',index+1,
                        'question'
                      )

                    
                    
                }
            }
            for (let index = 0; index < matricula.length; index++) {
                if(matri==matricula[index]){
                    Swal.fire(
                        'Encontrado!',
                        'Su auto esta ubicado en la parte 7-A del Estacionamiento:',matri,
                        'success'
                      )
                 }
                
            }
            
        });
         
        
    });

    


});

