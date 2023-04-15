import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { updateMin, updateSec } from "../redux/timerSlice";

const Input = ({ timer }) => {
    const dispatch = useDispatch();
    const [minState, updateMinState] = useState("");
    const [secState, updateSecState] = useState("");
    const changeHandler = (e) => {
        if (e.target.name === "min") {
            updateMinState(e.target.value);
            dispatch(updateMin({ id: timer.id, min: e.target.value }));
        } else {
            updateSecState(e.target.value);
            dispatch(updateSec({ id: timer.id, sec: e.target.value }));
        }
    };
    return (
        <span>
            <span className="input-group">
                <span className="input-group-text">時間</span>
                <input
                    value={minState}
                    placeholder="分"
                    className="form-control"
                    name="min"
                    onChange={changeHandler}
                ></input>
                <input
                    value={secState}
                    placeholder="秒"
                    className="form-control"
                    name="sec"
                    onChange={changeHandler}
                ></input>
            </span>
        </span>
    );
};

export default Input;
