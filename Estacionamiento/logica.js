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
    });

    //dos
    $("#enviar2").click(function () { 
        
        var tiempo=$("#horas").val();
        var carroFuera=$("#matricula2").val();
        
    for (let index = 0; index < matricula.length; index++) {
            
        if(carroFuera==matricula[index]){
        
            if(tiempo==1){
                costo.push(100);
                
                alert(costo[index]);
            }

            if(tiempo==2){
                costo.push(200);
                
                alert(costo[index]);
            }

            if(tiempo==3){
                costo.push(500);
                
                alert(costo[index]);
            }

            confirmacion=true;
        }
    }
        
        if(confirmacion==false){
            alert(`automovil matricula: ${carroFuera}`);
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

                        alert("deuda saldada hasta pronto");

                        //se elimina el elemento seleccionado
                        costo.splice(index);
                        marca.splice(index);
                        matricula.splice(index);

                    }
                    if(total>0){
                        total=total-costo[index];
                        alert(`usted debe: ${total}`);
                    }
                    if(total<0){
                        costo[index]=costo[index]-total;
                        alert(`su cambio es  de: ${costo[index]}`);
                    }
                }
           }
        
        });

        $("#buscar").click(function () { 

        var matri=$("#matri").val(); 
           if(matri==""){ 
                for (let index = 0; index < matricula.length; index++) {
                    alert(`hay: ${index+1}`);
                   

                    
                    
                }
            }
            for (let index = 0; index < matricula.length; index++) {
                if(matri==matricula){
                    alert(`se encuentra en almacen`);
                 }
                
            }
            
        });
         
        
    });

    


});

