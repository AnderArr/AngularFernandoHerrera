/*
    ===== Código de TypeScript =====
*/

//

interface Detalles{
    autor: string;
    anio: number;
}

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: "Mess",
    detalles:{
        autor: "Ed Sheeran",
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

// console.log("El volumen es: ", volumen);
// console.log("El segundo es: ", segundo);
// console.log("La canción es: ", cancion);
// console.log("El autor es: ", autor);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [ , , p3 ] = dbz;

// console.log("Personaje 1:", p1);
// console.log("Personaje 2:", p2);
console.log("Personaje 3:", p3);