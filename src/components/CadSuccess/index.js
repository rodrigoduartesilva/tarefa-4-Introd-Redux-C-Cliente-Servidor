import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import happyPet from '../../assets/happy-pet.jpg';

const CadSuccess = ({ children }) => {
    return (
        <section className="flex flex-col items-center justify-center w-full m-auto mt-10">
            <div className="flex flex-col items-center justify-center text-3xl">
                <h1>{children}</h1>
                <img className="w-72" src={happyPet} alt="" />
            </div>
            <div className="mt-6">
                <Button><Link to='/'>Home</Link></Button>
            </div>
        </section>
    );
}

export default CadSuccess;