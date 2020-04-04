import React from 'react';
import Car from '../interfaces/Car';

export default function CarView(car: Car) {

    const { brand, model, manufactured }: Car = car;

    const manufactureYear: string | number = manufactured ? manufactured.getFullYear() : 'unknown';

    return (
        <div>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Manufactured: {manufactureYear}</p>
        </div>
    );
}