import React from "react";

function HelloBootstrap() {
    return (
        <div className="container">
            <nav class="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            </nav>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Breakfast Foods</h1>
                <p className="lead">Egg Scramble, Bagle, Waffles!</p>
            </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                <h3>Palces to eat in SF</h3>
                </div>
                <div className="card-body">
                <p className="card-text">
                    <ul>
                        <li></li>
                    </ul>
                </p>
                </div>
            </div>
        </div>
        );
    };

    export default HelloBootstrap;
