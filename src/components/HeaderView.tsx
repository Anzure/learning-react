import React from 'react';
import { Link } from 'react-router-dom';

export default function NavView() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}