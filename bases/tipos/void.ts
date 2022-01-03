(() => {

    //void indica que no retorna nada 
    function callBatman(): void {
        return; // este return va a ser interpretado como void, no regresa nada.
    }

    const a = callBatman();
    console.log(a);
})()