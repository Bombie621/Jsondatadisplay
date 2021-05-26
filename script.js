function displayData(type,num){
    //console.log('test')
    fetch(`https://jsonplaceholder.typicode.com/${type}/${num}`)
    .then(response => response.json())
    .then(json => {
        for(let key in json)
        display.innerHTML +=json[key]})
}   

let trainees = [{name:"Kobi", Gender:"male", weight:70},
                {name:"Bar", Gender: "female", weight:55},
                {name:"lauren", Gender:"female", weight:60}]
trainees.push({name:"Rotem", Gender:"male", weight: 87})
//console.log(trainees) 
for(let key in trainees){
    display.innerHTML = trainees[0].name + " weighs " + trainees[0].weight + " and " + trainees[1].name + " weighs " + trainees[1].weight
}