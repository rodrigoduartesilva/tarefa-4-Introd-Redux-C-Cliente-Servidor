import React, { useState } from 'react';
import { TbSquareRoundedMinus, TbSquareRoundedPlus } from 'react-icons/tb';
import { FaCartPlus } from 'react-icons/fa';

const ProdutoInfo = () => {
    const [quantity, setQuantity] = useState(1);

    return (
        <main className='max-w-screen-xl mx-auto px-6 my-16'>
            <div className='flex flex-col justify-start items-center h-screen'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    <div className='order-2 md:order-1 lg:order-1 flex flex-col justify-center'>
                        <h1 className='text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none'>
                            Produto 1
                        </h1>
                        <p className='text-center md:text-left lg:text-left text-sm text-gray-500 leading-relaxed select-none'>
                            Texto de Teste do Produto Pet
                        </p>
                        <div className='flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8'>
                            <h2 className='text-3xl font-bold text-black poppins select-none'>
                                R$ 10
                            </h2>
                            <div className='flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full'>
                                <TbSquareRoundedMinus className='text-2xl w-8 h-8 text-teal-500 hover:scale-105 transform duration-500 cursor-pointer p-1' />
                                <span className='text-lg text-gray-700 poppins select-none'>{quantity}</span>
                                <TbSquareRoundedPlus className='text-2xl w-8 h-8 text-teal-500 hover:scale-105 transform duration-500 cursor-pointer p-1' />
                            </div>
                        </div>
                        <div className='mt-8 flex items-center justify-center md:justify-start lg:justify-start'>
                            <button className='bg-primary flex-direction-row text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105'>
                                <FaCartPlus className='text-xl mr-3' />
                                <span className=''>Adicionar a seu carrinho</span>
                            </button>
                        </div>
                    </div>
                    <div className='order-1 md:order-2 lg:order-2'>
                        <img src='https://placeimg.com/640/400/nature?t=1684884121643' alt='' className='w-3/4 md:w-3/4 lg:w-full mx-auto' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProdutoInfo;