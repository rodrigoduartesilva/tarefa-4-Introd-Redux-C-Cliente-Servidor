import Button from "../../components/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        senha: ''
    });

    const { loginUser } = useContext(AuthContext);

    const handleChangeValues = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        });
        console.log(inputValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(inputValues);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-96 h-96 mt-1 border border-orange-400 rounded-xl m-auto">
            <h1 className="text-3xl text-gray-700">Realize seu Login</h1>
            <input
                type="email"
                placeholder="Usuário"
                name="email"
                className="bg-primary mt-6 mb-6 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105"
                onChange={handleChangeValues}
            />
            <input
                type="password"
                placeholder="Senha"
                name="senha"
                className="bg-primary mt-6 mb-6 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105"
                onChange={handleChangeValues}
            />

            <Button>Login</Button>
        </form>
    );
}

export default Login;