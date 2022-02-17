const request = require('request');

const args = process.argv;
const breed = args.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data);
  if(!data[0]){
    console.log("No such breed");
  }
  if(error){
    console.log(`error: ${error}`);
  }
  else{
    console.log(data[0].description); 
  }
});
