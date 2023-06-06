import React, { useState } from "react";
import CatMenu from "../CatMenu";
import DogMenu from "../DogMenu";
import ProdutosMenu from "../ProdutosMenu";
import { FaCat, FaDog } from 'react-icons/fa';
import { MdProductionQuantityLimits } from 'react-icons/md';

const ServiceList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Gato');

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-3">
            <div className="flex items-center justify-center space-x-6">
                <p id="categoria-selection" className={categoriaTab === 'Gato' ? 'active-menu-tab bg-primary flex items-center justify-center' : 'menu-tab flex items-center justify-center'} onClick={() => setCategoriaTab('Gato')}><FaCat className="mr-3 w-4 h-4" />Cats</p>
                <p id="categoria-selection" className={categoriaTab === 'Cachorro' ? 'active-menu-tab bg-primary flex items-center justify-center' : 'menu-tab flex items-center justify-center'} onClick={() => setCategoriaTab('Cachorro')}><FaDog className="mr-3 w-4 h-4" />Dogs</p>
                <p id="categoria-selection" className={categoriaTab === 'Produtos' ? 'active-menu-tab bg-primary flex items-center justify-center' : 'menu-tab flex items-center justify-center'} onClick={() => setCategoriaTab('Produtos')}><MdProductionQuantityLimits className="mr-3 w-4 h-4" />Compra</p>
            </div>

            <div>
                <p className="mt-6 text-xs text-gray-400">*Clique no logo para voltar ao inicio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {categoriaTab === 'Gato' ? <CatMenu /> : null}
                {categoriaTab === 'Cachorro' ? <DogMenu /> : null}
                {categoriaTab === 'Produtos' ? <ProdutosMenu /> : null}
            </div>
        </section>
    );
}

export default ServiceList;