import React, { Component } from 'react';
import Car from '../interfaces/Car';

export default class CarView extends Component<Car> {
    render() {
        
        const { brand, model, manufactured }: Car = this.props;

        const manufactureYear: string | number = manufactured && manufactured.getFullYear() || 'unknown';

        return (
            <div>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Manufactured: {manufactureYear}</p>
            </div>
        );
    }
}