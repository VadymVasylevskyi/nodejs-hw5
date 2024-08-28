import http from 'http';

const server = http.createServer((req, res) => {
    if (req.method === 'PUT') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('PUT - запрос обработан')
    } else if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('DELETE - запрос обработан')
    } else {
        res.statusCode = 405;
        res.setHeader('Content-type', 'text/plain');
        res.end('Method not allowed')
    }
})

server.listen(3030, 'localhost', ()=>{
    console.log('Сервер запущен по адресу http://localhost:3030')
})