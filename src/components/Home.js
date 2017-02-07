import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
    render() {
        let divStyle = {
            display:"inline"
        };
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand">StarWars</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to={""}>About StarWars</Link></li>
                                <li><Link to={"/films"}>Films</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid bg-1 text-center">
                    <h3 className="margin">StarWars?</h3>
                    <p>Star Wars is an American Epic space opera franchise, centered on a film series.
                        It depicts the adventures of various characters "a long time ago in a galaxy far, far away." </p>
                </div>

                <div className="container-fluid bg-2 text-center">
                    <h3 className="margin">Films?</h3>
                    <img src="http://raygundaily.com/wp-content/uploads/2015/09/1191171605-91329_full.jpg" className="img-responsive img-circle margin" style={divStyle} alt="MoviesList" width="350" height="350"/>
                    <h3>7 StarWar Movies</h3>
                </div>
            </div>
        );
    }
}
