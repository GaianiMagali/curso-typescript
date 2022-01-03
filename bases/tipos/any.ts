(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = "Dr Strange";
    // console.log(avenger.charAt(0));
    // as es para castear el tipo de dato a un valor, si haberselo definido antes
    console.log((avenger as string).charAt(0));

    avenger = 150.2325415;
    // console.log(avenger.toFixed(2));
    //Otro tipo de casteo
    console.log(<number>avenger.toFixed(2));
})();