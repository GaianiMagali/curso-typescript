"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number('55A'); // => NaN es considerado un numero en js por eso habria que considerar la excepcion
    console.log({ avengers });
})();
