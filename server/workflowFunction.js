const {filterData}= require('./FilterData.js')
const {waitNodeFun}=require('./wait.js')
const {convertFormatNode}=require ('./convertFormatNode.js')
const {sendPostRequest}=require('./sendPostReq.js')
//workflow functions
function workflowFunctions (workFlowObj,uploadedFile){


  const {nodes,edges}=workFlowObj

    let flow=[]
  nodes.forEach((node)=>{
      flow.push(node.data.label)
  })
  console.log(flow)
  flow.forEach((flow)=>{
      if(flow==='Start'){
          console.log('process started')
         
      }
      if(flow === 'End'){
          console.log('Process End')
      }
      if(flow === 'Filter Data'){
          console.log('Filtering Data')
          filterData(uploadedFile)
      }
      if(flow === 'Wait'){
          console.log('Wait')
          waitNodeFun()
      }
      if(flow === 'Convert Format'){
          console.log('Converting')
          convertFormatNode(uploadedFile)
      }
      if(flow === "Send Post Request"){
          console.log('sending request')
          const myData = { "name": 'Samyak', "age": 23 };
          const targetUrl = 'https://samyak.requestcatcher.com/test'; 
          sendPostRequest(targetUrl,myData)
      }
  })
  //need to create 3 functions 

}



// Replace with your actual URL

//   sendPostRequest(targetUrl, myData)
//     .then(() => console.log('POST request sent successfully'))
//     .catch(error => console.error('Error:', error));


//workflowFunctions()
/*

*/

module.exports={workflowFunctions}

