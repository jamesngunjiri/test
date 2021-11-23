const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end(`<h1>HOME PAGE</h1>`)
    }else if(req.url === '/about'){
        res.end(`<h1>ABOUT PAGE</h1>`)
    }else{
        res.end(`
    <h1>OOPS!!!</h1>
    <p>No page found</p>
    <a href="/">Home</a>`)
    }
})

server.listen(5000)