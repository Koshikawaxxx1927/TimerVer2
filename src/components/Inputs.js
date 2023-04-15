import React from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Input from "./Input";
import DeleteButton from "./DeleteButton";
import TimerStart from "./TimerStart";

const Inputs = () => {
    const timers = useSelector((state) => state.timer.times);
    return (
        <Grid container spacing={1}>
            {timers.map((timer) => {
                return (
                    <>
                        <Grid key={`${timer.id}-1`} item xs={6}>
                            <Input timer={timer} />
                        </Grid>
                        <Grid key={`${timer.id}-2`} item xs={1}>
                            <TimerStart timer={timer} />
                        </Grid>
                        <Grid key={`${timer.id}-3`} item xs={1}>
                            <DeleteButton timer={timer} />
                        </Grid>
                    </>
                );
            })}
        </Grid>
    );
};

export default Inputs;
