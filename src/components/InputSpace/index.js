import React from "react";

const InputSpace = ({ children }) => {
    return (
        <input name='email' placeholder={children} required className="bg-primary mt-6 mb-6 text-white px-8 py-2 rounded-full transition duration-300 hover:scale-105" />
    );
}

export default InputSpace;