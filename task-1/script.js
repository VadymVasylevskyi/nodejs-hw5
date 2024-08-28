import http from 'http';

const server = http.createServer((req, res) => {
    if (!req.headers['authorization']) {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Unauthorized');
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Authorization header received');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Сервер запущен по адресу: http://localhost:3000');
});