"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    parejaHeroes[0] = "Mujer Maravilla";
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Aquaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAquaman = Fuerza.aquaman;
    console.log({ fuerzaFlash });
    // // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log({ largoDelPoder });
})();
