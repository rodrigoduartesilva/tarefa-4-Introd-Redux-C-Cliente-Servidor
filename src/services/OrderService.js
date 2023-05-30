import api from './api';

const sendCart = (cartInfo) =>
    api.post('/carrinho/create/', cartInfo)
        .then(response => response)
        .catch((err) => console.log(err))

export { sendCart };