import api from './api';

const findAllCategories = () =>
    api.get('/categoria/findAll')
        .then((response) => response)
        .catch(err => err)

export { findAllCategories }