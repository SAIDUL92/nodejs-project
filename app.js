const http = require('http');
const { text } = require('stream/consumers');
const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter your message</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="post"><input type="text" name="name"/> <button type="Submit">submit</button> </form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title> my title </title></head>')
    res.write('<body>')
    res.write('<h1>Hello from node js!</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)
