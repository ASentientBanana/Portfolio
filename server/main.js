const express = require('express')
const projectJson = require('./projects.json')
const app = express()
const port = 3333
const path = require('path')



/*
get projects
*/
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
res.send('hi')
})


app.get('/api/projects', (req, res) => {

    res.sendFile(dir)
    console.log(dir);
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

//   id =
//   name =
//   description =
//   tech =
//   git =
//   image =
//   live =
//   created =
//   updated =

  class ProjectModel{
    constructor(id ,name ,description ,tech ,git ,image ,live ,created ,updated){

    }
  }