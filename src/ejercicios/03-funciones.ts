/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b:number): number{
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base:number = 2): number{
    return numero*base;
}

interface PersonajeLOR {
    nombre: string;
    pV: number;
    //Forma corta
    mostrarHP: () => void;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pV: 50,
    mostrarHP(){
        console.log('MostrarHP: ', this.pV);
    }
} 


function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pV += curarX;
    console.log('Personaje: ', personaje);
}


curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarHP();

// const resultado = multiplicar(5, 0, 10);
// console.log('resultado: ', resultado);
