import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";
import AvTimerTwoToneIcon from "@mui/icons-material/AvTimerTwoTone";
import { toggleRunning } from "../redux/timerSlice";

const TimerStart = ({ timer }) => {
    const dispatch = useDispatch();
    const isRunning = useSelector((state) => state.timer.runningTime.running);
    const runningId = useSelector((state) => state.timer.runningTime.id);
    const clickHandler = () => {
        dispatch(toggleRunning({ id: timer.id }));
    };
    return (
        <span>
            <IconButton onClick={clickHandler}>
                {isRunning && timer.id === runningId ? (
                    <AvTimerTwoToneIcon color="success" fontSize="md" />
                ) : (
                    <AddAlertRoundedIcon color="primary" fontSize="md" />
                )}
            </IconButton>
        </span>
    );
};

export default TimerStart;
