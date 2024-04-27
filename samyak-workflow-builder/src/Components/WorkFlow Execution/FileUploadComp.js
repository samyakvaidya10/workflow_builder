import React, { useRef, useState } from 'react'

function FileUploadComp({setFile,file}) {
    // const [file,setFile]=useState(null)
    const inputRef=useRef()
   
    const handleDragOver=(event)=>{
        event.preventDefault();

    }
    const handleDrop =(event)=>{
        event.preventDefault();
        //console.log(event.dataTransfer.files)
        setFile(event.dataTransfer.files)
    }
    
    // if(file){
    //     return(
    //         <div>
    //             {file[0].name}
    //         </div>
    //     )
    // }
  return (
    <div className=' border-black border-2 mt-2 text-center '>
        
        {
             !file?
            <div>
            <div className='drop-zone border-dotted border-2 z-0 border-black m-10 p-10 '
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                
                <span className='text-xl'>Drag and drop file here</span>
                <input type='file' onChange={(event )=>setFile(event.target.files)}
                    ref={inputRef}
                    hidden/>
            </div>
                <span className='text-xl '>or </span>
                <button
                    className='block bg-gray-400 px-5 py-1 mx-auto mb-3 rounded-md'
                 onClick={()=> inputRef.current.click()}>Select File</button>
            </div>
            :<><span className='block text-left ml-5'>Uploaded file :</span>
            <span className='block text-left ml-5'>
                {file[0].name}
                </span></>
        }
        
       
    </div>
  )
}

export default FileUploadComp