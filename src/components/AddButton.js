import React from "react";
import { useDispatch } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { addTimer } from "../redux/timerSlice";

const AddButton = () => {
    const dispatch = useDispatch();
    const addHandler = () => {
        dispatch(addTimer());
    };
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary ms-3"
                onClick={addHandler}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
        </div>
    );
};

export default AddButton;
