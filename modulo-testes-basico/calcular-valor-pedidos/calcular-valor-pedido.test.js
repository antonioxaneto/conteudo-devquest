const calcularValorPedido = require('./calcular-valor-pedido')

it('nao deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(2000)
});

it('deve cobrar valor de frete quando valor dos produtos for menor que 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(150);
});

it('deve cobrar valor de frete caso valor dos produtos seja EXATAMENTE 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600)
});

/* CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA */
it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
    estado: 'RS',
    itens: [
        { nome: 'Sanduiche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
const resultado = calcularValorPedido(pedidoComEstadoRS);

expect(resultado).toBe(620);
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
    estado: 'SC',
    itens: [
        { nome: 'Sanduiche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
const resultado = calcularValorPedido(pedidoComEstadoSC);

expect(resultado).toBe(620);
})

it('nao deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
    estado: 'SP',
    itens: [
        { nome: 'Sanduiche bem caro', valor: 500 },
        { nome: 'Entrega', valor: 100, entrega: true }
    ]
};
const resultado = calcularValorPedido(pedidoComEstadoSP);

expect(resultado).toBe(600);
})
