const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');

async function convertFormatNode (uploadedFile){
    let jsonData =await convertCSVtoJSON(uploadedFile.path)
    .then((jsonData) => {
      // CSV successfully converted to JSON
      console.log(jsonData)
      //res.json(jsonData); // Send JSON data as response
    })
    .catch((error) => {
      console.error(error); // Handle parsing errors
      res.status(500).send('Error processing CSV file');
    });
    console.log(jsonData)
    }
    function convertCSVtoJSON(filePath) {
    const jsonData = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => jsonData.push(row))
        .on('end', () => resolve(jsonData))
        .on('error', (error) => reject(error));
    });
    
    }
    
module.exports={convertFormatNode}