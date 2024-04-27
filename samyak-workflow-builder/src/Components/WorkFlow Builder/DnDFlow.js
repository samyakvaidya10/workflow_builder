import React, { useState, useRef, useCallback } from 'react';

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './Sidebar';

import './DnDFlow.css';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkFlow, saveWorkflow } from '../../utils/Store/workflowSlice';
import { Link, useParams } from 'react-router-dom';


let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const {id}=useParams()
  const workflow=useSelector(store => store.workFlow)
  console.log(workflow)
  let initialNodes=[]
  let initialEgdes=[]
  if(workflow[id]!==undefined){
     initialNodes=workflow[id].nodes
     initialEgdes=workflow[id].edges
  }
  

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEgdes);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const dispatch=useDispatch()
 

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const name = event.dataTransfer.getData('application/showName')

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: name },
    };
    
    setNodes((nds) => nds.concat(newNode));
},
[reactFlowInstance],
);

if(Object.keys(workflow).length === 0){
  return<div>
    <div className='w-3/5 mt-16 mx-auto'>
        
        <span className='block text-4xl'>WorkFlow with id:<span className='border-spacing-2'>{id}</span> does not exits</span>
        <span className='block text-2xl'>Create a new workFlow from </span>
        <div className='flex justify-around mt-16'>
        <Link className=' w-2/5 bg-sky-50  p-10 text-center rounded-lg hover:scale-125 transition duration-300' to='/work-flow-builder'> Build WorkFlow</Link>
        </div>
        
      </div>
    
  </div>
}

const handleSave=()=>{
  console.log(edges)
    dispatch(saveWorkflow({id,nodes,edges}))

  }

  return (
    <div className="dndflow bg-sky-200">
        
      <ReactFlowProvider>
      <Sidebar  handleSave={handleSave} id={id}/>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        
        
      </ReactFlowProvider>

      
    </div>
  );
};

export default DnDFlow;
