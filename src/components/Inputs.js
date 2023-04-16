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
                    <React.Fragment key={timer.id}>
                        <Grid item xs={6}>
                            <Input timer={timer} />
                        </Grid>
                        <Grid item xs={1}>
                            <TimerStart timer={timer} />
                        </Grid>
                        <Grid item xs={1}>
                            <DeleteButton timer={timer} />
                        </Grid>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
};

export default Inputs;
