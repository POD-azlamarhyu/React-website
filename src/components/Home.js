import React from 'react';
import './Home.scss';

function Home() {
    return (
        <div>
            <div className="container">
                <h1>
                    Wellcome to our Website!!
                </h1>
                <img src={`${window.location.origin}/p1.jpg`} />
                <p>
                    This company that we manage is teaching IT and finacial literacy.
                </p>
            </div>
        </div>
    )
}

export default Home;
