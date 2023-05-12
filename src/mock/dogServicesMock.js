import banhoDog from '../assets/dog-banho.png';
import tosaDog from '../assets/dog-grooming.svg';
import vetDog from '../assets/dog-vet.jpg';

const dogServicesMock = [
    {
        _id: '1',
        nome: 'Banho',
        descricao: 'Serviço de banho para seu cão. Atendimento direcionado a cães de pequeno e médio porte.',
        precoUnitario: (60.00).toFixed(2),
        imagem: banhoDog
    },
    {
        _id: '2',
        nome: 'Tosa',
        descricao: 'Tosa total e higiênica para seu cão. Atendimento direcionado a cães de pequeno e médio porte.',
        precoUnitario: (120).toFixed(2),
        imagem: tosaDog
    },
    {
        _id: '3',
        nome: 'Veterinário',
        descricao: 'Serviço veterinário para seu cão. Atendimento direcionado a cães de pequeno e médio porte.',
        precoUnitario: (250).toFixed(2),
        imagem: vetDog
    }
];

export default dogServicesMock;