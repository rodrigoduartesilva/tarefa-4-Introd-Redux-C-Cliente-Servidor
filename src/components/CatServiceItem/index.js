import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const CatServiceItem = ({ service }) => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <img className="w-64 h-64 rounded-full mx-auto transform transition duration-300 hover:scale-105" src={service.imagem} alt="Gato no banho" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg">{service.nome}</h1>
                <p className="text-gray-500 text-sm text-center">{service.descricao}</p>
                <h2 className="text-gray-900 text-2xl font-bold">R$ {service.precoUnitario}</h2>
                <Button><Link to='/gatomenu/gato_service_1'>Mais Informações</Link></Button>
            </div>
        </div>
    );
}

export default CatServiceItem;