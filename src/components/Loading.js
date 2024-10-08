import React from "react";

import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
        <div className="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
        </div>
    </div>
    );
};

export default Loading;