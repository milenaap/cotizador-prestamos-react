const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(valor)
}


export {
    formatearDinero
}