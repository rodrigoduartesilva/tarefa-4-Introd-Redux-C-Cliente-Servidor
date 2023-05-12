import React from "react";
import Welcome from "../../components/Welcome";

const Home = () => {
    return (
        <>
            <section className="home-banner w-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-800">O lugar perfeito para cuidar do seu melhor amigo!</h1>
                </div>
            </section>
            <Welcome />
        </>
    );
}

export default Home;