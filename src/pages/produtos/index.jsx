const Produtos = () => {

    // Objeto de produtos da lista
    const pizzas = [
        'Pizza de mussarela',
        'Pizza de calaboca',
        'Pizza de frango c/catupiry',
        'Pizza portuguesa',
        'Pizza de sanduíche de presunto'
    ]
    // Iteração da lista de pizzas
const listaPizzas = pizzas.map(pizza => <li>{pizza}</li>);

    return (
        <div>
            <h3>Listagem de Produtos</h3>

            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
