import React from 'react';

const Sidebar=({handleSave,id}) => {
  const onDragStart = (event, nodeType,name) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/showName', name);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className='text-lg'>
        <div className="description">You can drag these nodes to the pane on the right.</div>
        <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input','Start')} draggable>
            Start
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Filter Data')} draggable>
            Filter Data
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Wait')} draggable>
            Wait
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Convert Format')} draggable>
            Convert Format
        </div>
        <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default','Send Post Request')} draggable>
            Send Post Request
        </div>
        <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output','End')} draggable>
            End
        </div>
        <div className='mt-10 h-fit'>
            <span> WorkFlow id : {id}</span>
            <button onClick={handleSave} className='w-full bg-red-500 text-white p-1 mt-4 rounded-md' >Save</button>
      </div>
        
  </aside>
  );
};

export default Sidebar 
