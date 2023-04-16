import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { updateMin, updateSec } from "../redux/timerSlice";

const Input = ({ timer }) => {
    const dispatch = useDispatch();
    const minState = useSelector((state) => state.timer.min);
    const secState = useSelector((state) => state.timer.sec);
    const changeHandler = (e) => {
        if (e.target.name === "min") {
            dispatch(updateMin({ id: timer.id, min: e.target.value }));
        } else {
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
