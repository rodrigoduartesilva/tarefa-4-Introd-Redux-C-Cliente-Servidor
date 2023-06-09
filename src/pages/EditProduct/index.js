import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MultiSelect } from 'react-multi-select-component';
import { useNavigate } from 'react-router-dom';
import { findAllCategories } from '../../services/categoryService';
import { findProductById, updateProductById } from '../../services/productService';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [productForm, setProductForm] = useState({

        nome: '',
        descricao: '',
        precoUnitario: 0,
        imagem: '',
        codigoBarra: 0

    });

    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        getCategories();
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await findProductById(id);
        setProductForm(response.data);
    }

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
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await updateProductById(id, productForm);

        console.log(productForm);

        if (response) {
            alert(`Produto editado com sucesso!`);
            navigate('/admin');
        }
    }

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-6'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-2xl text-gray-600'>Editar Produtos</h1>
            </div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6'>
                <div className='flex flex-col space-y-4'>
                    <label htmlFor='nome' className='text-gray-500'>Nome</label>
                    <input
                        type='text'
                        id='nome'
                        name='nome'
                        value={productForm.nome}
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
                        value={productForm.descricao}
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    ></textarea>

                    <label htmlFor='codigoBarra' className='text-gray-500'>Código de Barras</label>
                    <input
                        type='text'
                        id='codigoBarra'
                        name='codigoBarra'
                        value={productForm.codigoBarra}
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
                        value={productForm.precoUnitario}
                        required
                        onChange={handleChangeValues}
                        className='w-full bg-primary mt-6 mb-6 text-white px-4 py-2 rounded'
                    />

                    <label htmlFor='imagem' className='text-gray-500'>Imagem</label>
                    <input
                        type='text'
                        id='imagem'
                        name='imagem'
                        value={productForm.imagem}
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

                    <div className='mt-8 flex items-center justify-center'>
                        <button type='submit' className='flex items-center justify-center bg-primary text-white mt-10 px-8 py-2 rounded transition duration-300 hover:bg-emerald-500'>Editar Produto</button>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default EditProduct;