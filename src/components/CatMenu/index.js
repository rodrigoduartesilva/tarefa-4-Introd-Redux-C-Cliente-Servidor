import React, { useState } from "react";
import CatServiceItem from "../CatServiceItem";
import catServicesMock from "../../mock/catServicesMock";

const CatMenu = () => {
    const [services, setServices] = useState(catServicesMock);

    return (
        <>
            {services.map(service => (
                <CatServiceItem key={service._id} service={service} />
            ))}
        </>
    );
}

export default CatMenu;