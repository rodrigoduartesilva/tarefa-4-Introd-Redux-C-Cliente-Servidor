import banhoGato from '../assets/gatinho-banho.png';
import tosaGato from '../assets/cat-grooming.svg';
import vetGato from '../assets/cat-vet.png';

const catServicesMock = [
    {
        _id: '1',
        nome: 'Banho',
        descricao: 'Serviço de banho para seu felino. Atendimento direcionado a gatos domésticos.',
        precoUnitario: (50).toFixed(2),
        imagem: banhoGato
    },
    {
        _id: '2',
        nome: 'Tosa',
        descricao: 'Tosa total e higiênica para seu felino. Atendimento direcionado a gatos domésticos.',
        precoUnitario: (100).toFixed(2),
        imagem: tosaGato
    },
    {
        _id: '3',
        nome: 'Veterinário',
        descricao: 'Serviço veterinário para seu felino. Atendimento direcionado a gatos domésticos.',
        precoUnitario: (200).toFixed(2),
        imagem: vetGato
    }
];

export default catServicesMock;