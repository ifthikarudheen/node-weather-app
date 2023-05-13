console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const abc = search.value
    console.log("abc=",abc)

    
    fetch('http://localhost:3000/weather?location=' +abc).then((response) => {
        response.json().then((data) => {
            
            console.log(data)
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})