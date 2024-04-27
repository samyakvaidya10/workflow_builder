import React, { useState } from 'react'
import FileUploadComp from './FileUploadComp'
import WorkFlowDropDown from './WorkFlowDropDown';
import { useSelector } from 'react-redux';

function WorkFLowExecution() {
  const [file,setFile]=useState(null)
  const [selectedWorkflow,setSelectedWorkFLow]=useState("")
  const workflow=useSelector(store => store.workFlow)
  const workFlowIds = Object.keys(workflow);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    console.log(file)
    if(file===undefined||file===null){
      alert("please upload the file first")
      return
    }
    if(selectedWorkflow===''){
      alert("please select the workflow")
      return
    }
    const formData=new FormData();
    formData.append('file',file[0]);
    formData.append('objectData', JSON.stringify(workflow[selectedWorkflow]));
    try{
        const response= await fetch('http://localhost:5000/work-flow-execution',{
            method:'POST',
            body:formData,
            //body:JSON.stringify({ title: 'React POST Request Example' })
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          alert("WorkFLow and File submitted successfully")
          const data = await response.json();
          console.log('Success:', data);
          // Handle successful response here (e.g., show success message)
        
    }catch (error){
        console.error('Error:', error);
    }
}
  return (
    <div className='w-3/5 mt-5 mx-auto'>
        <span className='text-xl'>Execute WorkFlow </span>
          {selectedWorkflow!==""&&
            <span className='block'>You have selected <span className='text-red-600'>{selectedWorkflow}</span> for execution</span>}
          <FileUploadComp  setFile={setFile} file={file}/>
          <div className='flex justify-around'>
          <WorkFlowDropDown workFlowIds={workFlowIds} setSelectedWorkFLow={setSelectedWorkFLow}/>
          <button className='bg-red-600 text-white w-1/4 block h-fit  py-2 rounded-md mt-5 ' onClick={handleSubmit}>Submit</button>
          </div>
    </div>
  )
}

export default WorkFLowExecution