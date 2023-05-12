import React from "react";

const InputText = ({ children }) => {
    return (
        <textarea placeholder={children} required minlength="20" maxlength="250" rows="9" cols="25" className="bg-primary mt-6 mb-6 text-white px-8 py-2 rounded-xl transition duration-300 hover:scale-105" name="mensagem" type="text" />
    );
}

export default InputText;