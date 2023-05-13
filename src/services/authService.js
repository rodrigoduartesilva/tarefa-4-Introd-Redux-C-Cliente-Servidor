import api from './api';

const loginUserApi = (userValues) =>
    api.post('/auth/login', userValues)
        .then((response) => response)
        .catch((err) => console.error('Erro na chamada', err));

const registerUser = (addUserValues) =>
    api.post('/usuario/create', addUserValues)
        .then((response) => response)
        .catch((err) => console.error('Erro na chamada', err));



export { loginUserApi, registerUser }