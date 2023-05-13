import api from './api';

const loginUserApi = (userValues) =>
    api.post('/auth/login', userValues)
        .then((response) => response)
        .catch((err) => console.error('Erro na chamada', err));


export { loginUserApi }