import React, { useState } from 'react'

function WorkFlowDropDown({workFlowIds,setSelectedWorkFLow,}) {
  const [showDropDown,setShowDropDown]=useState(false)
  const [dropDownText,setDropDownText]=useState('Select WorkFlow')
  const handleClick=(id)=>{
    setSelectedWorkFLow(id);
    setShowDropDown(false)
    setDropDownText(id)
  }
  return (
    <div className='mt-5  w-1/4 bg-gray-400 rounded-md'>
        <button className='text-base py-2 w-full px-5  '
          onClick={()=>{setShowDropDown(!showDropDown)}}>{dropDownText}</button>
        
        {showDropDown&&
        <div className=''>{workFlowIds.map((id)=>{
             return <button key={id} className='block p-1 border-t-2 border-black w-full'
              onClick={()=>handleClick(id)}>{id}</button>
        })}
        </div>}
    </div>
  )
}

export default WorkFlowDropDown