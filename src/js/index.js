// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
function SimpleCounter(props){
    return (
        <div className="bigCounter">
            <div className="calendar">⏱️</div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;


const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(function() {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);

    counter++;

    root.render(
        <SimpleCounter 
            digitOne={one % 10} 
            digitTwo={two % 10} 
            digitThree={three % 10} 
            digitFour={four % 10} 
        />
    );
}, 1000);

