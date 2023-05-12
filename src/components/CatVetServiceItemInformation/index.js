import React from "react";
import { useParams } from "react-router-dom";
import gatoVetEstilo from '../../assets/vet_gatos_1.jpg';
import Button from "../Button";

const CatVetServiceItemInformation = () => {
    const { id } = useParams();

    return (
        <>
            <div className="flex flex-col items-center justify-center m-auto space-y-2 w-10/12 h-96">
                <img className="rounded-full w-64" src={gatoVetEstilo} alt="Gato Limpo" />
                <h1 className="text-center text-gray-800">Disponibilizamos os melhores veterinários da cidade para atender seu felino.</h1>
                <span className="text-sm text-gray-400">Serviço Id: {id}</span>
                <Button>Agendar Horário</Button>
            </div>
        </>
    );
}

export default CatVetServiceItemInformation;