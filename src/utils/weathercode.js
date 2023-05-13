const { error } = require('console')
const request = require('request')
const { json } = require('stream/consumers')

const wetahercode =(address,callback)=>{ 
    url = "http://api.weatherstack.com/current?access_key=4ba9c90e3c6023659b19bbd31ba719db&query="+ address +"&units=m"
    request({url:url,json:true}, (error, response)=>{
   if (error){

    callback("unable to connect to the srrvice",undefined)
   }

   else if(response.body.error){

    callback("search anohther location",undefined)

   }

   else{

    callback({
        currentTemp : response.body.current.temperature,
        feelLikeTemp : response.body.current.feelslike

    // console.log("current temperature is "+ currentTemp + " feels like " + feelLikeTemp)
    },undefined)
   }
    
})

}

module.exports = wetahercode


