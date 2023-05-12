import React from "react";
import { useParams } from "react-router-dom";
import gatoGroomingEstilo from '../../assets/gato-tosa.jpg';
import Button from "../Button";

const CatGroomingServiceItemInformation = () => {
    const { id } = useParams();

    return (
        <>
            <div className="flex flex-col items-center justify-center m-auto space-y-2 w-10/12 h-96">
                <img className="rounded-full w-64" src={gatoGroomingEstilo} alt="Gato Tosa" />
                <h1 className="text-center text-gray-800">Serviço de tosa total e higiênica para seu felino.</h1>
                <span className="text-sm text-gray-400">Serviço Id: {id}</span>
                <Button>Agendar Horário</Button>
            </div>
        </>
    );
}

export default CatGroomingServiceItemInformation;