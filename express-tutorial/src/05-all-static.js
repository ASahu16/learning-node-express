const express = require('express')
// const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./src/public'))

/**
 * We need not require to read the index.html file manually and send it to response.
 * We directly serve the index.html from the public folder,
 * This happens because its a static required and by default index.html 
 * is served as default page "/"
 * 
 */
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})