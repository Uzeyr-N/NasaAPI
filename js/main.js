//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector(".get").addEventListener('click' , get)
document.querySelector(".hide").addEventListener('click', hide)

function get(){
    const getPic = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=O9ybXf8Bbz3xsjV79wrSgK5C0NCm2cau626nnNVs&date=${getPic}`
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.hdurl 
            document.querySelector('h3').innerText = data.explanation
        
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function hide(){
    const hideAll = document.querySelectorAll('h1,h3,p,input, .get');
        for (let element of hideAll){
            if(element.style.display === "none"){
                element.style.display = element.getAttribute('data-display')
            }else{
                element.style.display = 'none'
            }
        }
    }
