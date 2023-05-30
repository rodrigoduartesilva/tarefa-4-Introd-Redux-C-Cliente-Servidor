import React, { useEffect, useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { sendCart } from '../../services/OrderService';
import axios from 'axios';

const Cart = () => {
    const [productCart, setProductCart] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [address, setAddress] = useState({
        rua: '',
        numero: '',
        complemento: '',
        cep: ''
    });

    useEffect(() => {
        const storageCart = JSON.parse(localStorage.getItem('productCart'));
        setProductCart(storageCart);
        const total = productCart.reduce((valor, product) => {
            return valor + product.precoUnitario;
        }, 0);
        setTotalValue(total);
    }, []);

    const findAddress = async () => {
        const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json`);
        setAddress({
            ...address,
            rua: `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}`,
        })
    }

    const sendOrder = async () => {
        const productOrder = productCart.map((product) => {
            return {
                _id: product._id,
                quantidade: product.quantity
            }
        });
        const cartInfo = {
            produtos: productOrder,
            precoTotal: totalValue,
            frete: 5
        }

        const response = await sendCart(cartInfo);
    }

    const handleChangeValues = (event) => {
        setAddress({
            ...address,
            [event.target.name]: event.target.value
        })
    }


    return (
        <main className='h-screen banner'>
            <div className='max-w-screen-xl py-20 mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                    <div className='col-span-1'>
                        <div className='flex flex-col mt-20'>
                            <h2 className='text-2xl poppins pb-4 text-gray-700'>
                                Adicione seu endereço
                            </h2>
                            <form className='my-4'>
                                <div className='flex flex-col space-y-3'>
                                    <input
                                        type='text'
                                        name='cep'
                                        placeholder='cep'
                                        id='cep'
                                        value={address.cep}
                                        onChange={handleChangeValues}
                                        className='w-full bg-primary mt-6 mb-6 text-white px-8 py-2 rounded transition duration-300'
                                    />
                                    <input
                                        type='text'
                                        name='rua'
                                        placeholder='rua'
                                        id='rua'
                                        value={address.rua}
                                        onChange={handleChangeValues}
                                        onFocus={findAddress}
                                        className='w-full bg-primary mt-6 mb-6 text-white px-8 py-2 rounded transition duration-300'
                                    />
                                    <input
                                        type='text'
                                        name='numero'
                                        placeholder='número'
                                        id='numero'
                                        value={address.numero}
                                        onChange={handleChangeValues}
                                        className='w-full bg-primary mt-6 mb-6 text-white px-8 py-2 rounded transition duration-300'
                                    />
                                    <input
                                        type='text'
                                        name='complemento'
                                        placeholder='complemento'
                                        id='complemento'
                                        value={address.complemento}
                                        onChange={handleChangeValues}
                                        className='w-full bg-primary mt-6 mb-6 text-white px-8 py-2 rounded transition duration-300'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='glass p-6 box-border rounded-lg'>
                            <div className='flex flex-col space-y-3'>
                                {productCart.map((product) => (
                                    <div key={product._id} className='rounded-lg p-4 flex space-x-3'>
                                        <div className='flex'>
                                            <img className='w-24 object-contain' src={product.imagem} alt={product.nome} />
                                        </div>
                                        <div className='flex flex-col space-y-3 flex-grow'>
                                            <h5 className='text-base poppins text-gray-700'>{product.nome}</h5>
                                            <h3 className='font-semibold text-lg text-primary poppins'>R$ {product.precoUnitario}</h3>
                                        </div>
                                        <div className='flex items-center px-4 py-2 space-x-3'>
                                            <span className='text-lg text-gray-500 select-nome'>
                                                {product.quantity} unidades
                                            </span>
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <RiDeleteBinFill className='cursor-pointer hover:text-red-700 text-2xl text-red-500' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col space-y-3 my-4'>
                                <div className='flex items-center'>
                                    <span className='flex-grow poppins text-gray-700'>
                                        Total:
                                    </span>
                                    <span className='poppins font-semibold text-black'>
                                        R$ {totalValue}
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex-grow poppins text-gray-700'>
                                        Taxa de Entrega:
                                    </span>
                                    <span className='poppins font-semibold text-black'>
                                        R$ 5
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex-grow poppins text-gray-700 text-xl'>
                                        Total + taxa:
                                    </span>
                                    <span className='poppins font-semibold text-black text-xl'>
                                        R$ {totalValue + 5}
                                    </span>
                                </div>
                                <div className='flex flex-col space-y-4 mb-3'>
                                    <p className='poppins text-gray-700'>
                                        Endereço de Entrega
                                    </p>
                                    <span className='font-semibold text-black'>
                                        {address.rua}
                                    </span>
                                    <span className='font-semibold text-black'>
                                        Número: {address.numero} - complemento: {address.complemento}
                                    </span>
                                </div>
                                <div>
                                    <button onClick={sendOrder} className='w-full px-6 py-3 rounded-lg bg-primary text-white poppins focus:ring-4 transition duration-500'>
                                        Fazer Pedido
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart;