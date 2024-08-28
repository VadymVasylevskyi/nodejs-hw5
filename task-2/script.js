import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    try {
        throw new Error('Error server')
        console.log(res)
    }
    catch (err) {
        fs.appendFile('./errors.log', `Error: ${err.message}`, (err) => {
            if (err) {
                console.log('Ошибка записи логов', err)
            }
        } )

        res.statusCode = 500;
        res.setHeader('Content-type', 'text/plain');
        res.end('Internal server error')
    }
})

server.listen(3010, 'localhost', ()=>{
    console.log('Сервер запущен по адресу http://localhost:3010')
})