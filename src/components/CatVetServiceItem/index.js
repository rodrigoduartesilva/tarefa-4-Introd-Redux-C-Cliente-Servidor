import React from "react";
import gatoVet from '../../assets/cat-vet.png';
import Button from "../Button";
import { Link } from "react-router-dom";

const CatVetServiceItem = () => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <img className="w-64 h-64 rounded-full mx-auto transform transition duration-300 hover:scale-105" src={gatoVet} alt="Gato no veterinário" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">Veterinário</h1>
                <p className="text-gray-500 text-sm text-center">Serviço veterinário para seu felino. Atendimento direcionado a gatos domésticos.</p>
                <h2 className="text-gray-900 text-2xl font-bold">R$ 200,00</h2>
                <Button><Link to='/gatomenu_/gato_service_3'>Mais Informações</Link></Button>
            </div>
        </div>
    );
}

export default CatVetServiceItem;