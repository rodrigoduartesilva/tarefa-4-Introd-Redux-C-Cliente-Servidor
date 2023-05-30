import api from './api';

const sendCart = (cartInfo) =>
    api.post('/carrinho/create/', cartInfo)
        .then(response => response)
        .catch((err) => console.log(err))

const addOrder = (order) =>
    api.post('/pedido/create/', order)
        .then(response => response)
        .catch((err) => console.log(err))

export { sendCart, addOrder };