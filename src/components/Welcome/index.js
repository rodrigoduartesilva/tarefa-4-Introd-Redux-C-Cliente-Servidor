import React from "react";
import allPets from "../../assets/beautiful-pets.jpg";
import Button from "../Button";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="w-10/12 h-full m-auto flex flex-col items-center justify-center">
            <h2 className="text-center mb-10 mt-10 text-3xl font-semibold text-gray-800">Bem-vindos a Carinho Pet</h2>
            <p className="text-center mb-8 text-gray-800">Só quem é apaixonado por animais sabe: a relação de amor e cumplicidade que temos com nossos bichinhos de estimação é um vínculo único! Por essa razão, não medimos esforços para oferecer o que há de melhor para trazer ainda mais alegria e qualidade de vida.</p>
            <Button><Link to='/servicelist'>Contrate nossos serviços</Link></Button>
            <img className="rounded border mt-8 bg-white p-1" src={allPets} alt="Lindos Pets" />
        </div>
    );
}

export default Welcome;