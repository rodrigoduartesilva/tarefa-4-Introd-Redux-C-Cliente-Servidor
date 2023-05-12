import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import notFoundImage from '../../assets/notfound404.png';

const NotFound = () => {
    return (
        <section className="flex flex-col justify-center align-center w-3/12 m-auto">
            <div>
                <h1 className="text-center text-3xl mb-6">404 - NotFound</h1>
                <img className="rounded-full" src={notFoundImage} alt="" />
            </div>
            <div className="text-center mt-6">
                <Button><Link to='/'>Home</Link></Button>
            </div>
        </section>
    );
}

export default NotFound;