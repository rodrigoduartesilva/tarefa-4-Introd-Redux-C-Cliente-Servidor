import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const ProdutosServiceItem = ({ service }) => {
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <img className="w-64 h-64 rounded-full mx-auto transform transition duration-300 hover:scale-105" src={service.imagem} alt={service.nome} />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 text-lg text-center">{service.nome}</h1>
                <h2 className="text-gray-900 text-2xl font-bold">R$ {(service.precoUnitario).toFixed(2)}</h2>
                <Button><Link to={`/produto/${service._id}`}>Mais Informações do Produto</Link></Button>
            </div>
        </div>
    );
}

export default ProdutosServiceItem;