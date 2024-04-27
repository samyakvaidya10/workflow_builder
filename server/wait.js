async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function waitNodeFun() {
    await delay(2000); 
  }

module.exports={waitNodeFun}