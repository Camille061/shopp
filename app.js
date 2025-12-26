const http = require('http')
const port = 3000 

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.end('home')
  } else if (req.url === '/about') {
    res.end('about')
  } else {
    res.statusCode = 404
    res.end('not found')
  }
})

server.listen(port, () => {
  console.log('Server is running on http://localhost:3000')
})

