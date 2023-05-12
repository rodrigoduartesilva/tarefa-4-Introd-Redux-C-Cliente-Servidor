import React from "react";
import dogVet from '../../assets/dog-vet.jpg';
import Button from "../Button";
import { Link } from "react-router-dom";

const DogVetServiceItem = () => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">

            <img className="w-64 h-64 rounded-full mx-auto transform transition duration-300 hover:scale-105" src={dogVet} alt="Cachorro no veterinário" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">Veterinário</h1>
                <p className="text-gray-500 text-sm text-center">Serviço veterinário para seu cão. Atendimento direcionado a cães de pequeno e médio porte.</p>
                <h2 className="text-gray-900 text-2xl font-bold">R$ 250,00</h2>
                <Button><Link to='/dogmenu_i/dog_service_3'>Mais Informações</Link></Button>
            </div>
        </div>
    );
}

export default DogVetServiceItem;