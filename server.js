import app from './app'

const port = 8080

app().listen(port, () => {
  console.log(`spa listening on port ${port}`)
})
