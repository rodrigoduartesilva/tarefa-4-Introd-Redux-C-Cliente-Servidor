import React, { useEffect, useState } from 'react';
import { RiDeleteBinFill } from 'react-icons/ri';
import { sendCart, addOrder } from '../../services/OrderService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const frete = 5;
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

    const remove = (id) => {
        const storageCart = JSON.parse(localStorage.getItem('productCart'));
        const filterCart = storageCart.filter((product) => product._id !== id);
        localStorage.setItem('productCart', JSON.stringify(filterCart));
        setProductCart(filterCart);
    }

    const findAddress = async () => {
        const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json`);
        setAddress({
            ...address,
            rua: `${response.data.logradouro}`,
            bairro: ` ${response.data.bairro}`,
            cidade: `${response.data.localidade}`
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

        if (response.data) {
            const order = {
                produtos: response.data.produtos,
                precoTotal: response.data.precoTotal,
                frete: response.data.frete,
                concluido: true,
            }
            const responseOrder = await addOrder(order);
            if (responseOrder.data) {
                localStorage.removeItem('productCart');
                navigate('/complete');
            }
        }
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
                            <h2 className='text-2xl text-center poppins pb-4 text-gray-700'>
                                Adicione seu endereço
                            </h2>
                            <form className='flex items-center justify-center w-full'>
                                <div className='flex flex-col space-y-2'>
                                    <input
                                        type='text'
                                        name='cep'
                                        placeholder='cep'
                                        id='cep'
                                        value={address.cep}
                                        onChange={handleChangeValues}
                                        className='w-full bg-primary mt-6 text-white px-8 py-2 rounded transition duration-300'
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
                                        name='bairro'
                                        placeholder='bairro'
                                        id='bairro'
                                        value={address.bairro}
                                        onChange={handleChangeValues}
                                        onFocus={findAddress}
                                        className='w-full bg-primary mt-6 mb-6 text-white px-8 py-2 rounded transition duration-300'
                                    />
                                    <input
                                        type='text'
                                        name='cidade'
                                        placeholder='cidade'
                                        id='cidade'
                                        value={address.cidade}
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
                                            <h3 className='font-semibold text-lg text-primary poppins'>R$ {(product.precoUnitario).toFixed(2)}</h3>
                                        </div>
                                        <div className='flex items-center px-4 py-2 space-x-3'>
                                            <span className='flex text-lg text-gray-500 select-nome'>
                                                <p>Qtd: {product.quantity}</p>
                                            </span>
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <RiDeleteBinFill onClick={() => remove(product._id)} className='cursor-pointer hover:text-red-700 text-2xl text-red-500' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col space-y-3 my-4'>
                                <div className='flex items-center'>
                                    <span className='flex-grow poppins text-gray-700'>
                                        Total:
                                    </span>
                                    {productCart.map((product) => (
                                        <span className='poppins font-semibold text-black'>
                                            R$ {(product.quantity * totalValue).toFixed(2)}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex-grow poppins text-gray-700'>
                                        Taxa de Entrega:
                                    </span>
                                    <span className='poppins font-semibold text-black'>
                                        R$ {(frete).toFixed(2)}
                                    </span>
                                </div>
                                <div className='flex items-center'>
                                    <span className='flex-grow poppins text-gray-700 text-xl'>
                                        Total + taxa:
                                    </span>
                                    <span className='poppins font-semibold text-black text-xl'>
                                        R$ {(totalValue + frete).toFixed(2)}
                                    </span>
                                </div>
                                <div className='flex flex-col space-y-4 mb-3'>
                                    <p className='poppins text-gray-700'>
                                        Endereço de Entrega
                                    </p>
                                    <span className='font-semibold text-black'>
                                        {address.rua} - {address.bairro} - {address.cidade}
                                    </span>
                                    <span className='font-semibold text-black'>
                                        Número: {address.numero} - complemento: {address.complemento}
                                    </span>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button onClick={sendOrder} className='w-auto px-6 py-3 rounded bg-primary text-white poppins focus:ring-4 transition duration-500 hover:bg-emerald-500'>
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