const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      if (error) {
        callback(error, null);
      } else {
        if (data[0] !== undefined) {
          callback(null, data[0]);
        } else {
          callback(error, null);
        }
      }
    },
  );
};


// request(
//   `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
//   (error, response, body) => {
//     if (error) {
//       console.log("error:", error); // Print the error if one occurred
//     } else {
//       console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//       const data = JSON.parse(body);
//       if (data[0] !== undefined) {
//         console.log("body:", data[0]); // Print the HTML for the Google homepage.
//       } else {
//         console.log("breed not found :(");
//       }
//     }
//   },
// );
// https://api.thecatapi.com/v1/images/search?breed_id=Siberian

module.exports = { fetchBreedDescription };
