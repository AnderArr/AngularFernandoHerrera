/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
  }

@classDecorator
class MiSuperClase {
    public miProiedad: string = "ABC123";
    
    imprimir(){
        console.log("Hola Mundo");
    }
}
console.log('MiSuperClase: ', MiSuperClase);

const miClase = new MiSuperClase();
console.log('miClase: ', miClase.miProiedad);
