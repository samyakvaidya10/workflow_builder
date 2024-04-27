const fetch = require("node-fetch");

async function sendPostRequest(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      console.log('Response:', responseData);
     
  
    } catch (error) {
      console.error('Error sending request:', error);
    }
  }
  
  module.exports={sendPostRequest}