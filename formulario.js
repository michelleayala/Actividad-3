var datosbasicos = [];
var arrayconvertido = [];

var leerinformacion = function(){
    var arrayconvertido  = JSON.parse(localStorage.getItem('datosbasicos')) 
    if (arrayconvertido ) {
        datosbasicos = arrayconvertido
        document.getElementById('resultado').innerHTML =""
    
        for (let a = 0; a < arrayconvertido.length; a++){
            document.getElementById('resultado').innerHTML += '<tr><td>' + arrayconvertido [a].nombre +'</td><td>' +
            arrayconvertido [a].apellido +'</td><td>' +
            arrayconvertido [a].direccion +'</td><td onclick="eliminar('+ a +')">Eliminar</td></tr>' 
            
        }
    }
}

var guardar = function(){
    var dato = document.getElementById('nombre').value 
    var dato1 = document.getElementById('apellido').value 
    var dato2 = document.getElementById('direccion').value 
    datosbasicos.push({'nombre':dato,'apellido':dato1,'direccion':dato2})
    localStorage.setItem('datosbasicos', JSON.stringify(datosbasicos))
    leerinformacion()
}

var eliminar = function(indice){
    datosbasicos.splice(indice,1)
    localStorage.setItem('datosbasicos', JSON.stringify(datosbasicos))
    leerinformacion()


}
leerinformacion()

