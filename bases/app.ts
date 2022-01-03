(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  parejaHeroes[0] = "Mujer Maravilla";
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];


  // Arreglos
  const aliados: Array<string> = ['Mujer Maravilla', 'Aquaman', 'San', 'Flash'];


  //Enumeraciones

  enum Fuerza {
    aquaman = 0,
    batman = 1,
    flash = 5,
    superman = 100
  }

  const fuerzaFlash: Fuerza = Fuerza.flash;
  const fuerzaSuperman: Fuerza = Fuerza.superman;
  const fuerzaBatman: Fuerza = Fuerza.batman;
  const fuerzaAquaman: Fuerza = Fuerza.aquaman;

  console.log({ fuerzaFlash });

  // // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }


  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log({ largoDelPoder });

})()

