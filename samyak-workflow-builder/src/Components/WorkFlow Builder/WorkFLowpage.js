import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import nodes from '../../Constants/nodes'
import { useDispatch, useSelector } from 'react-redux'
import { addWorkFlow } from '../../utils/Store/workflowSlice'
import uniqid from 'uniqid';

function WorkFLowpage() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const workflow=useSelector(store => store.workFlow)
    const workFlowId = Object.keys(workflow);
    const [showWorkflow,setShowWorkFlow]=useState(false)

    const createWorkflow=()=>{
    console.log("clicked")
    const uid=uniqid();
    dispatch(addWorkFlow(uid));
    navigate('/work-flow-builder/'+uid)

  }
  return (
    <div>
        <div className='w-3/5 mx-auto mt-16'>
        {/* <span className='block text-4xl'></span> */}
        <span className='block text-4xl pt-10'>Workflow Builder </span>
        <span className='block text-2xl mt-2'>Please choose options from below </span>
        <div className='flex justify-around mt-16'>
        <button className=' w-2/5 bg-sky-50  p-10 text-center rounded-lg hover:scale-125 transition duration-300'
          onClick={()=>{ return createWorkflow()}} 
          > Create a new WorkFlow</button>
        <button className=' w-2/5 bg-orange-200 p-10 text-center rounded-lg hover:scale-125 transition duration-300' 
          onClick={()=>setShowWorkFlow(!showWorkflow)}>Open a WorkFlow</button>
        </div>
        {showWorkflow&&
          <div className='m-10 border-t-2 border-black'>
          <span className='text-lg pt-8'>Saved WorkFlows</span>
          {workFlowId.length>0?
          workFlowId.map((id)=>{
            return <div className='ml-5' key={id}>
              <Link to={'/work-flow-builder/'+id}><h1>🕸️ {id}</h1></Link></div>
          }):
          <span className='block'>No saved workflows </span>}
        </div>
        }
        

      </div >
        
          
        
    </div>
  )
}

export default WorkFLowpage