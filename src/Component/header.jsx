import React from 'react';

export default function Header({title}) {

    return (
        <div className="flex justify-center">
            <h1 className="text-4xl font-sans font-bold italic antialiased">{title}</h1>
        </div>
    );
}