//! Ejercicio 2 prueba unitaria



//requisitos para juntar agua en MTY
const tengoAgua = (hayAgua,haypresionTinaco,boteDisponible,estoyEnCasa) => {
    if ((hayAgua&&boteDisponible&&estoyEnCasa)||haypresionTinaco){
        return seJuntoAgua = true;
    }else{
        return seJuntoAgua = false;
    }
}

const operaciones ={
    tengoAgua,
}

module.exports = operaciones;