import React from "react";

const Button = ({ children }) => {
    return (
        <button className="bg-primary text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105">{children}</button>
    );
}

export default Button;