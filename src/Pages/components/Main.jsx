import React from 'react';
import './css/main.css';

const Main = ({ sections }) => {
    return (
        <main>
            {sections.map((section, index) => (
                <section key={index} className="section" id={section.id}>
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                </section>
            ))}
        </main>
    );
};

export default Main;
