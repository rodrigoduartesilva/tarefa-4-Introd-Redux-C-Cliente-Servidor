import React, { useState } from "react";
import DogShowerServiceItem from "../DogServiceItem";
import dogServicesMock from "../../mock/dogServicesMock";

const DogMenu = () => {
    const [services, setServices] = useState(dogServicesMock);

    return (
        <>
            {services.map(service => (
                <DogShowerServiceItem key={service._id} service={service} />
            ))}
        </>
    );
}

export default DogMenu;