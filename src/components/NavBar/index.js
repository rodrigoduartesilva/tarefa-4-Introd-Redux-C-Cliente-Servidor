import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import Button from "../Button";
import { AuthContext } from "../../context/AuthContext";
import { MdPets } from 'react-icons/md';
import { HiOutlineLogout } from 'react-icons/hi';

const NavBar = () => {
    const { userLogged, logOutUser } = useContext(AuthContext);

    return (
        <header className="bg-transparent z-50 w-full">
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                <div className="flex flex-grow items-center">
                    <Link to='/'><img src={logo} alt="Logo" className="w-36 cursor-pointer" /></Link>
                    <h1 className="text-center text-3xl font-semibold text-gray-700">Carinho Pet</h1>
                </div>
                {userLogged ? (
                    <div className="flex items-center justify-end space-x-4">
                        <div className="relative flex cursor-pointer transition duration-300 hover:scale-110">
                            <span className="bg-primary w-4 h-4 rounded-full p-1 flex items-center justify-center text-white absolute -right-2 -top-2">2</span>
                            <MdPets className="w-6 h-6 text-color-login cursor-pointer" />
                        </div>
                        <img src="" alt="" />
                        <p className="text-gray-700">Bem-vindo, nome</p>
                        <HiOutlineLogout onClick={logOutUser} className="w-6 h-6 cursor-pointer transition duration-300 hover:scale-110 text-red-800" />
                    </div>
                ) : (
                    <div className="flex items-center justify-end space-x-6">
                        <Button><Link to='/login'>Login</Link></Button>
                        <Button><Link to='/cadastro'>Cadastro</Link></Button>
                        <Button><Link to='/contato'>Contato</Link></Button>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default NavBar;