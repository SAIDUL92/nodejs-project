const fs = require('fs');

const routes = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter your message</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="post"><input type="text" name="message"/> <button type="Submit">submit</button> </form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()

    }


    if (url === '/message' && method === 'POST') {
        const data = []

        req.on('data', (chank) => {
            data.push(chank)
        })

        req.on('end', (test) => {
            const parsedData = Buffer.concat(data).toString();
            const message = parsedData.split('=')[0];
            console.log(message);

            fs.writeFileSync('message.txt', message, err => {

                res.statusCode = 302;
                res.setHeader("Location", '/');
                return res.end()
            });

        })
    }




    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title> my title </title></head>')
    res.write('<body>')
    res.write('<h1>Hello from node js!</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()

}

module.exports = routes