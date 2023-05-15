import React, { useEffect, useState } from "react";
import ProdutosServiceItem from "../ProdutosServiceItem";
import { findAllProducts } from "../../services/productService";

const ProdutosMenu = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        const response = await findAllProducts();
        setServices(response.data)
    }

    return (
        <>
            {services.map(service => (
                <ProdutosServiceItem key={service._id} service={service} />
            ))}
        </>
    );
}

export default ProdutosMenu;