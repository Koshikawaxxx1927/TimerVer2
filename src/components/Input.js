import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Input = () => {
    return (
        <span>
            <span className="input-group">
                <span className="input-group-text">時間</span>
                <input placeholder="分" className="form-control"></input>
                <input placeholder="秒" className="form-control"></input>
            </span>
        </span>
    );
};

export default Input;
