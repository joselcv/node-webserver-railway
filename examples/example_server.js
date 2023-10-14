const http = require('http');


http.createServer((req,res)=>{

    //  res.writeHead(200,{'Content-Type': 'application/json'});
     res.setHeader('Content-Disposition','attachment; filename=lista.csv');
     res.writeHead(200,{'Content-Type': 'application/csv'});

     
     res.write('id,nombre\n');
     res.write('1,jose\n');
     res.write('2,maria\n');
     res.write('3,pedro\n');
     res.write('4,carlos\n');
     res.end();

}).listen(8080);

console.log("escuchando en el puerto", 8080);