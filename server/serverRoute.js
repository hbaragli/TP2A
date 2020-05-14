const http = require("http");

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

http.createServer((request, response) => {
    if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('Hola mundo cliente servidor!');
        response.end();
    } else if (request.url === '/api'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(inventors));
        response.end();
    } else {
        response.writeHead(404);
        response.end();
    }

    
}).listen(3000, '127.0.0.1');