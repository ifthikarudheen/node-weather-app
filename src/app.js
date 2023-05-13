const path = require('path')
const express = require('express')
const hbs = require('hbs')

const weathercode = require('./utils/weathercode')

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))
const app =express()


app.set('view engine', 'hbs')
app.set('views',viewsPath )
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('', (req, resp)=>{
    resp.render('index',{
        title:'weather app',
        author:'Mubarak'
    })
})

app.get('/about', (req, resp)=>{
    resp.render('about',{
        title:'About Me',
        author:'Mubarak'
    })
})

app.get('/help', (req, resp)=>{
    resp.render('help',{
        title:'How can I help',
        name:'Mubarak'
        
    })
})

app.get('/products',(req, resp)=>{
    if(!req.query.search){
        return resp.send({
            error: "you must"
        })
    }

    console.log(req.query.search)
    resp.send({
        products:[]
    })
})


app.get('/weather',(req, resp)=>{
    if(!req.query.location){
        return resp.send({
            error: "you must enter address"
        })
    }
    weathercode(req.query.location , (data,error)=>{
        if (error){
         return resp.send({
                error:"error"
            })
        }
        resp.send(data)
    })     
})

app.get('/help/*', (req, resp)=>{
    resp.render('404',{
        title:"help article not found"
    })
})
app.get('*',(req, resp)=>{
    resp.render('404',{
      title:"Page not found"  
    })
})
app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})

