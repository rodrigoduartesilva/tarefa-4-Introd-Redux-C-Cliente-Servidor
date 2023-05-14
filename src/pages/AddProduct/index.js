import React, { useEffect, useState } from 'react';
import { findAllCategories } from '../../services/categoryService';
import { MultiSelect } from 'react-multi-select-component';
import { addProductAPI } from '../../services/productService';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [productForm, setProductForm] = useState({
        nome: '',
        descricao: '',
        precoUnitario: 0,
        imagem: '',
        codigoBarra: 0,
        categorias: [{ _id: '' }]
    });

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await findAllCategories();
        const categoriesSelect = response.data.map((categoria) => {
            return {
                value: categoria._id,
                label: categoria.nome
            }
        });
        setCategories(categoriesSelect);
    }

    const handleChangeValues = (event) => {
        setProductForm({
            ...productForm,
            [event.target.name]: event.target.value
        });
        console.log(productForm);
    }

    const handleSubmit = async (event) => {
        event.prevetDefault();
        const categoriaId = selected.map(category => {
            return {
                _id: category.value
            }
        });
        const product = {
            ...productForm,
            categorias: categoriaId,
            precoUnitario: parseInt(productForm.precoUnitario),
            codigoBarra: parseInt(productForm.codigoBarra)
        }

        const response = await addProductAPI(product);
        if (response.data) {
            alert(`Produto ${response.data.nome} cadastrado com sucesso!`);
            navigate('/admin');
        }
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-6'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-2xl text-gray-600'>Cadastro de Produtos</h1>
            </div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
                <div className='flex flex-col space-y-4'>
                    <label htmlFor='nome' className='text-gray-500'>Nome</label>
                    <input
                        type='text'
                        id='nome'
                        name='nome'
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    />

                    <label htmlFor='descricao' className='text-gray-500'>Descrição</label>
                    <textarea
                        name='descricao'
                        id='descricao'
                        cols='30'
                        rows='5'
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    ></textarea>

                    <label htmlFor='codigoBarra' className='text-gray-500'>Código de Barras</label>
                    <input
                        type='text'
                        id='codigoBarra'
                        name='codigoBarra'
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    />
                </div>

                <div className='flex flex-col space-y-4'>
                    <label htmlFor='preco' className='text-gray-500'>Preço</label>
                    <input
                        type='text'
                        id='preco'
                        name='precoUnitario'
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    />

                    <label htmlFor='imagem' className='text-gray-500'>Imagem</label>
                    <input
                        type='text'
                        id='imagem'
                        name='imagem'
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    />

                    <label htmlFor='imagem' className='text-gray-500'>Categoria:</label>

                    <MultiSelect
                        options={categories}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                        className='w-full bg-primary mt-6 mb-6 text-gray-500 px-4 py-2 rounded'
                    />

                    <div className='mt-8'>
                        <button className='w-full bg-primary text-white px-8 py-2 rounded transition duration-300 hover:scale-105'>Adicionar</button>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default AddProduct;