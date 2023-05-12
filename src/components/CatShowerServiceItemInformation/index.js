import React from "react";
import { useParams } from "react-router-dom";
import gatoBanhoEstilo from '../../assets/gato-banho-estilo.jpg';
import Button from "../Button";

const CatShowerServiceItemInformation = () => {
    const { id } = useParams();

    return (
        <>
            <div className="flex flex-col items-center justify-center m-auto space-y-2 w-10/12 h-96">
                <img className="rounded-full w-64" src={gatoBanhoEstilo} alt="Gato Limpo" />
                <h1 className="text-center text-gray-800">Dar um bom banho de gato nos felinos não costuma ser uma tarefa fácil. Por isso, aqui na Carinho Pet dispomos de um espaço totalmente confortável para que seu amiguinho consiga aproveitar o máximo um bom banho.</h1>
                <span className="text-sm text-gray-400">Serviço Id: {id}</span>
                <Button>Agendar Horário</Button>
            </div>
        </>
    );
}

export default CatShowerServiceItemInformation;