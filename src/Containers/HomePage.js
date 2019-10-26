import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Styles/HomePage.css'
import NavBar from '../Components/NavBar/NavBar'


export default class Homepage extends Component {
    render() {
        return (
            <div className='App'>
                <NavBar />
                <div class="home-image">
                    <div class="home-text">
                        <h1> WELLCOME TO FIGELLO </h1>
                        <h4>START YOUR PERSONAL TEAMWORK EXPERIENCE</h4>
                        {this.renderButton()}
                    </div>
                </div>
            </div>

        )
    }

    renderButton () {
        return (
            <div className="home-button">
                <button>
                    <Link to='/login'>
                        GET STARTED
                    </Link>

                </button>
            </div>
        )
    }
}

