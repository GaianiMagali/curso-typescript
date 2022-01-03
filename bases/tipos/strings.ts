(() => {
    //Para poder usar un apostrofo dentro de comillas simples debemos usar la barra invertida
    const batman : string = 'Bat\'man';
    const linternaVerde : string  = "Linterna verde";
    const flash : string = `Héreo: flash`; 


    console.log(batman.toUpperCase());
    console.log(`Héreo: ${linternaVerde}`);

    console.log(batman[10]?.toUpperCase() || 'No esta presente');

    //Strings multilinea en ts
    let string = `1.
    2.
    3.
    4.
    5.
    6.`;
    console.log(string);

})();