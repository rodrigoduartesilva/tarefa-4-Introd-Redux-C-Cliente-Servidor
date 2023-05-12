import React from "react";
import Button from "../../components/Button"
import InputSpace from "../../components/InputSpace";
import InputText from "../../components/InputText";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/sucessoContact');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-start justify-center w-7/12 m-auto">
                <div className="flex flex-col items-center justify-center w-96 h-96 mt-1 border border-orange-400 rounded-xl m-auto">
                    <h1 className="text-3xl text-gray-700">Seus Dados</h1>
                    <InputSpace>Nome</InputSpace>
                    <InputSpace>Telefone</InputSpace>
                    <InputSpace>Nome do seu Pet</InputSpace>
                </div>
                <div className="flex flex-col items-center justify-center w-96 h-96 mt-1 border border-orange-400 rounded-xl m-auto">
                    <h1 className="text-3xl text-gray-700">Mensagem</h1>
                    <InputText>Digite sua mensagem</InputText>

                </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-4 m-auto">
                <Button>Enviar Mensagem</Button>
            </div>
        </form>
    );
}

export default Cadastro;