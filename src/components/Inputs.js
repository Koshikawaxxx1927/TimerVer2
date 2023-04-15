import React from "react";
import Input from "./Input";
import DeleteButton from "./DeleteButton";
import { Stack } from "@mui/material";

const Inputs = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Input />
            <DeleteButton />
        </Stack>
    );
};

export default Inputs;
