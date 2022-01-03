"use strict";
(() => {
    var _a;
    //Para poder usar un apostrofo dentro de comillas simples debemos usar la barra invertida
    const batman = 'Bat\'man';
    const linternaVerde = "Linterna verde";
    const flash = `Héreo: flash`;
    console.log(batman.toUpperCase());
    console.log(`Héreo: ${linternaVerde}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
    //Strings multilinea en ts
    let string = `1.
    2.
    3.
    4.
    5.
    6.`;
    console.log(string);
})();
