const request = require('request');

const input = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + input[0],
  (err, res, body) => {
    // err = "Could not find website"
    if (err) { return console.log(err); }
    const data = JSON.parse(body);
    // console.log(typeof body);
    // console.log(data);
    // console.log(typeof data);
    if (data[0] === undefined) {
      console.log("Breed not found!");
    } else {
      console.log(data[0].description);
    };
  });






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
