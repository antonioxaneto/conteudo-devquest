function greet(name: string) {
    console.log (`Olá, ${name}!`);
}

greet('Neto');

function doubleNumber(number: number): number {
    return number * 2
}

const resultado = doubleNumber(3);
console.log(resultado)