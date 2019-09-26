const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (err, res, body) => {
    if (err) {
      // return console.log(err);
      return callback(err);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback(null);
    } else {
      callback(null, data[0].description);
    }
  }
  );
};
// fetchBreedDescription(breedName);


module.exports = { fetchBreedDescription };
// request(inputRequest[0], (error, response, body) => {
//   const byteTotal = fs.statSync(inputRequest[1]);
//   const fileSize = byteTotal.size;
//   fs.writeFile(inputRequest[1], body, (err) => {
//     if (err) {
//       throw err;
//     }


//     console.log(`Downloaded and saved ${fileSize} bytes to ${inputRequest[1]}`);
//   });
// });