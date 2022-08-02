// node js library used for sending and receiving http requests.
const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;


var server = http.createServer(function(req, res) {
    // get url and parse it
    let parsedUrl = url.parse(req.url, true);

    // get the path from the url
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g, '')
    
    // get http method
    let method = req.method.toLocaleLowerCase();
    
    // send response
    res.end("Hello World\n");

    // get headers
    let headers = req.headers;

    // get query param
    let queryParameter = parsedUrl.query;

    // Get request body 
    let decoder = new stringDecoder('utf-8');
    let buffer = "";
    req.on('data', function(data) {
        buffer += decoder.write(data);
    });

    req.on('end', function() {
        buffer += decoder.end();

        // const chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] ? handlers.notFound:

        let data = {
            trimmedPath : trimmedPath,
            'queryStringObject' : queryStringObject, 
            'method': method,
            'headers': headers,
            'payload': buffer
        };
        res.end("Hello world");
        console.log("Request received with this payload: ", buffer);
        console.log(buffer['last_name']);
    });


    // log what path the person was asking for
    // console.log('Request is received on this path: ' + trimmedPath + '\nMethod received on this request is: ' + method + '\nWith Query param: ', queryParameter);
});

server.listen(3000, function() {
    console.log("Server is listening on port 3000...")
});

let handlers = {};

handlers.sample = (data, callback) => {
    // Callback http status-code, and payload which should be an object
    callback(406, {'name': 'sample handler'})
};

handlers.notFound = (data, callback) => {
    callback(404)
};

const router = {
    'sample': handlers.sample,
};