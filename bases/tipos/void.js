"use strict";
(() => {
    //void indica que no retorna nada 
    function callBatman() {
        return; // este return va a ser interpretado como void, no regresa nada.
    }
    const a = callBatman();
    console.log(a);
})();
