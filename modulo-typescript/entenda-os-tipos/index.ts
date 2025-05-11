const nome = "Neto";
let nome: string = "Neto";

let idade = 28;
let idade: number = 28;

const mandouEmail = true;
let mandouEmail: boolean = true;

let idades: number[] = [18, 10, 28];
let nomes: string[] = ['Antonio', 'Neto', 'Antonio Neto'];
let idades: Array<number> = [18, 10, 28];

let obj: any = {x:0};

function imprimirCoordenadas(pt: { x: number; y: number }) {
 console.log("The coordinate's x value is " + pt.x);
 console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });