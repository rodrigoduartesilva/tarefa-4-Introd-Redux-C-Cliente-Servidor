import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const UserData = () => {
    const { userFull } = useContext(AuthContext);
    console.log(userFull);

    return (
        <div>
            <h2 className='text-center text-gray-600 text-2xl'>Dados do Usuário</h2>
            <div className='flex items-center justify-center'>
                <div>
                    <img src={userFull.imagem} alt={userFull.nome} className='w-60' />
                </div>
                <div className='flex flex-col items-start'>
                    <span className="w-96 bg-primary mt-6 text-white px-8 py-2 rounded">Id: {userFull._id}</span>
                    <span className="w-96 bg-primary mt-6 text-white px-8 py-2 rounded">Nome: {userFull.nome}</span>
                    <span className="w-96 bg-primary mt-6 text-white px-8 py-2 rounded">E-mail: {userFull.email}</span>
                </div>
            </div>
        </div>
    )
}

export default UserData;