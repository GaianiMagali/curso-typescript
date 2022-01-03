"use strict";
(() => {
    //Never significa que la funcion no termina de manera exitosa
    const error = (message) => {
        throw new Error(message);
    };
    error("Auxilio"); //Aca se corta el codigo, no se ejecuta mas lo de abajo.
})();
