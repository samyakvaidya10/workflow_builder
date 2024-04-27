import { configureStore } from "@reduxjs/toolkit";
import workflowSlice from "./workflowSlice";

const store=configureStore({
    reducer:{
        workFlow:workflowSlice
    }
})

export default store