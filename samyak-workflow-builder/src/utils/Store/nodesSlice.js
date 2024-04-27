import { createSlice } from "@reduxjs/toolkit";

const nodesSlice=createSlice({
    name:'nodesSlice',
    initialState:[],
    reducers:{
        addNodes:(state,action)=>{
            console.log('node added')
        }
    }
})

export const {addNodes} =nodesSlice.actions
export default nodesSlice.reducer;