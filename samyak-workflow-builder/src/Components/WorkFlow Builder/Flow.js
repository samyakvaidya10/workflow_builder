import { useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import nodes from '../../Constants/nodes';

const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];


function Flow() {
   
    
  return (
    <div style={{ height: '100%' ,width:'100%'}}>
        
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
