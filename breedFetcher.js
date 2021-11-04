const request = require("request");
const args = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args}`,
  (error, response, body) => {
    if (error) {
      console.log("error:", error); // Print the error if one occurred
    } else {
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      const data = JSON.parse(body);
      if (data[0] !== undefined) {
        console.log("body:", data[0]); // Print the HTML for the Google homepage.
      } else {
        console.log("breed not found :(");
      }
    }
  },
);

// https://api.thecatapi.com/v1/images/search?breed_id=Siberian
