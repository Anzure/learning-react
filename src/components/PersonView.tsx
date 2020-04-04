import React from 'react';
import Person from '../interfaces/Person';
import { Link } from "react-router-dom";

export default function PersonView(person: Person) {

    const { firstName, middleName, lastName, cars }: Person = person;

    const fullName: string = firstName + ' ' + (middleName ? middleName + ' ' : '') + lastName;

    // car.brand + "_" + car.model + (car.manufactured ? ("@" + car.manufactured) : '')

    return (
        <div>
            <h3>Heisann, {fullName}!</h3>

            <h2>Du eier disse bilene:</h2>

            {cars && cars.map((car) => (
                <p>
                    <Link to={'/car'}>{car.brand} {car.model}</Link>
                </p>
            ))}

        </div>
    );
}