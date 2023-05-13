import React, { useState } from "react";
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

const Cadastro = () => {
    const [inputValues, setInputValues] = useState({
        nome: '',
        email: '',
        senha: '',
        imagem: ''
    });

    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
        console.log(inputValues);
    }

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await registerUser(inputValues);

        if (response.data) {
            alert(`Usuário ${response.data.nome} cadastrado com sucesso!`);
            navigate('/sucessoCad');
        }
    }

    return (
        <div className="flex items-start justify-center w-7/12 m-auto">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-96 h-full mt-1 border border-orange-400 rounded-xl m-auto">
                <h1 className="text-3xl text-gray-700 mt-4">Cadastro de Usuário</h1>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    className="bg-primary mt-6 mb-1 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105"
                    onChange={handleChangeValues}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="bg-primary mt-6 mb-1 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105"
                    onChange={handleChangeValues}
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    className="bg-primary mt-6 mb-1 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105"
                    onChange={handleChangeValues}
                />
                <input
                    type="text"
                    name="imagem"
                    placeholder="URL da imagem do avatar"
                    className="bg-primary mt-6 mb-1 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105"
                    onChange={handleChangeValues}
                />
                <div className="flex flex-row items-center justify-center mt-4 mb-4 m-auto">
                    <Button>Cadastrar</Button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;