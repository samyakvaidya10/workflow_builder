import { createSlice } from "@reduxjs/toolkit";

const workflowSlice=createSlice({
    name:'workflowSlice',
    initialState:{
        
    },
    reducers:{
        addWorkFlow:(state,action)=>{
            let prevState={...state};
            console.log(prevState)
            console.log(action.payload)
            prevState[action.payload]={nodes:[],
              edges:[]}
            return prevState
            
            
        },
        saveWorkflow:(state,action)=>{
            const {id,nodes,edges}=action.payload
            console.log(state[action.payload.id])
            console.log(action.payload)
            let prevState={...state};

            console.log(prevState)
            prevState[id]={nodes,edges}
            alert("WorkFlow Saved Successfully")
            return prevState
            
            
        }
    }
})

export const {addWorkFlow,saveWorkflow} =workflowSlice.actions;
export default workflowSlice.reducer