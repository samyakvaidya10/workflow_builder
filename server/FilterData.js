//convert columns to lowercase
const fs = require('fs');
const csv = require('csv-parser');
function filterData(uploadedFile){
    const tempFile=uploadedFile;
    const filePath=uploadedFile.path;
    
    processAndConvertCSV(filePath)
    .then((lowercaseData) => {
      
        fs.unlink(filePath, (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('File is deleted.');
            }
          });

        fs.writeFile(filePath, lowercaseData, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Data written to file');
          });
      //res.json({ message: 'CSV processed successfully' });
    })
    .catch((error) => {
      console.error(error);
     // res.status(500).send('Error processing CSV file');
    });
    }

    function processAndConvertCSV(filePath) {
    return new Promise((resolve, reject) => {
      const lowercaseData = [];
      const csvStream = fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => lowercaseData.push(row.map((value) => value.toLowerCase())))
        .on('end', () => resolve(lowercaseData))
        .on('error', (error) => reject(error));
    });
    }

    module.exports={filterData}