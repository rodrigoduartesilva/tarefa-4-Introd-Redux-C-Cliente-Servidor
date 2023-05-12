import React from "react";
import { useParams } from "react-router-dom";
import dogBanhoEstilo from '../../assets/dog-banho-estilo.jpg';
import Button from "../Button";

const DogShowerServiceItemInformation = () => {
    const { id } = useParams();

    return (
        <>
            <div className="flex flex-col items-center justify-center m-auto space-y-2 w-10/12 h-96">
                <img className="rounded-full w-64" src={dogBanhoEstilo} alt="Cachorro Banho" />
                <h1 className="text-center text-gray-800">Serviço de banho para seu cão. Temos um Atendimento especial para cães de pequeno e médio porte.</h1>
                <span className="text-sm text-gray-400">Serviço Id: {id}</span>
                <Button>Agendar Horário</Button>
            </div>
        </>
    );
}

export default DogShowerServiceItemInformation;