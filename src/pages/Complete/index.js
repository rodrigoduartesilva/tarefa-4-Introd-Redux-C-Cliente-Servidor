import React from 'react';
import happyPet from '../../assets/happy-pet.jpg';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
    const navigate = useNavigate();
    return (
        <main className='h-screen banner'>
            <div className='max-w-screen-xl mx-auto px-6'>
                <div className='flex flex-col items-center justify-center h-3/4'>
                    <div>
                        <h1 className='text-3xl text-center text-primary font-semibold poppins flex space-x-6'>
                            Seu pedido foi realizado com sucesso!
                        </h1>
                        <div className='flex items-center justify-center'>
                            <img src={happyPet} alt='Pets felizes devido a compra realizada' className='w-96 object-contain' />
                        </div>
                        <button onClick={() => navigate('/')} className='w-full px-6 py-3 rounded-lg bg-primary text-white poppins focus:ring-4 transition duration-500 hover:bg-emerald-500'>Voltar para Home</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Complete;