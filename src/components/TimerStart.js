import React from "react";
import { IconButton } from "@mui/material";
import AddAlertRoundedIcon from "@mui/icons-material/AddAlertRounded";

const TimerStart = () => {
    return (
        <span>
            <IconButton>
                <AddAlertRoundedIcon color="primary" fontSize="md" />
            </IconButton>
        </span>
    );
};

export default TimerStart;
