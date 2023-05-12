import React from "react";
import dogTosa from '../../assets/dog-grooming.svg';
import Button from "../Button";
import { Link } from "react-router-dom";

const DogGroomingServiceItem = () => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">

            <img className="w-64 h-64 rounded-full mx-auto transform transition duration-300 hover:scale-105" src={dogTosa} alt="Cachorro na tosa" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">Tosa</h1>
                <p className="text-gray-500 text-sm text-center">Tosa total e higiênica para seu cão. Atendimento direcionado a cães de pequeno e médio porte.</p>
                <h2 className="text-gray-900 text-2xl font-bold">R$ 120,00</h2>
                <Button><Link to='/dogmenu_/dog_service_2'>Mais Informações</Link></Button>
            </div>
        </div>
    );
}

export default DogGroomingServiceItem;