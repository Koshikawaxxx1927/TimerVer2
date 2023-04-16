import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useTimer } from "react-timing-hooks";
import { useEffect } from "react";

let st_time = 0;

const Timer = () => {
    const times = useSelector((state) => state.timer.times);
    const runningId = useSelector((state) => state.timer.runningTime.id);
    const isRunning = useSelector((state) => state.timer.runningTime.running);
    const { min, sec } = times.filter((time) => runningId === time.id)[0] ?? {
        min: "",
        sec: "",
    };
    const minute = !isNaN(min) ? Number(min) : 0;
    const second = !isNaN(sec) ? Number(sec) : 0;
    const duration = minute * 60 + second;
    const [time, timer] = useTimer(0);
    let cur_time;

    useEffect(() => {
        if (isRunning) {
            timer.start();
            st_time = time;
            cur_time = time;
        } else if (!isRunning) {
            st_time = time;
            timer.stop();
        }
    }, [isRunning]);
    cur_time = time;
    const elapsedTime = cur_time - st_time;
    const meter = (100 / duration) * elapsedTime;
    return (
        <div>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={25}>
                    <CircularProgress
                        size={200}
                        variant="determinate"
                        value={meter}
                    ></CircularProgress>
                </Grid>
            </Grid>
        </div>
    );
};

export default Timer;
