// Instructions
//
// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus
//
// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

var http = require("http");

var nicePORT=7000;
// Here we create a generic function to handle requests and responses
function niceRequest(request, response) {
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Nice thing");
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var niceServer = http.createServer(niceRequest);
// Here we start our server so that it can begin listening to client requests.
niceServer.listen(nicePORT, function() {
  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", nicePORT);
});



var meanPORT=7500;
// Here we create a generic function to handle requests and responses
function meanRequest(request, response) {
  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Mean thing");
}
// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var meanServer = http.createServer(meanRequest);
// Here we start our server so that it can begin listening to client requests.
meanServer.listen(meanPORT, function() {
  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", meanPORT);
});
