const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  if(!breedName){
    return callback("Must enter a breed Name")
  }
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    console.log("url",`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);

    if (data[0]) {
      console.log("data description",data[0].description)
      return callback(null,data[0].description);
    }
    else {
      return callback("The requested breed was not found");
    }
  });
};
module.exports = { fetchBreedDescription };