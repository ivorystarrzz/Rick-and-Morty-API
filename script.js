
let url = 'https://rickandmortyapi.com/api/character/'



function rickyAPI(){
return fetch(url)
.then(res => res.json())
.then(data => {
    

    let info = data.results;
    console.log(info);
    

    //Get Name
    let rick = info[0].name; 
    let director = info[8].name;   
    
    //Get Gender
    let rickGender = info[0].gender; 
    let dirGender = info[8].gender;

    //Get Status
    let rickStatus = info[0].status; 
    let dirStatus = info[8].status;


    //Get Species
    let rickSpecies = info[0].species; 
    let dirSpecies = info[8].species;

    
    //Get location
    let pullLocation = info[0].location; 
    let pullLocation2 = info[8].location; 

    let rickLocation = pullLocation.name
    let dirLocation = pullLocation2.name
    



    //Display Data 
    document.getElementById("rickName").innerHTML = 'Name: ' + rick;
    document.getElementById("alanName").innerHTML = 'Name: ' + director;

    document.getElementById("rickGender").innerHTML = 'Gender: ' + rickGender;
    document.getElementById("alanGender").innerHTML = 'Gender: ' + dirGender;

    document.getElementById("rickSpecies").innerHTML = 'Species: ' + rickSpecies;
    document.getElementById("alanSpecies").innerHTML = 'Species: ' + dirSpecies;

    document.getElementById("rickLocation").innerHTML = 'Location: ' + rickLocation;
    document.getElementById("alanLocation").innerHTML = 'Location: ' + dirLocation;

    document.getElementById("rickStat").innerHTML = 'Status: ' + rickStatus;
    document.getElementById("alanStat").innerHTML = 'Status: ' + dirStatus;
    
 

})

}


//Pull Images
fetch("https://rickandmortyapi.com/api/character/avatar/1.jpeg")
.then(res => res.blob())
.then(blob => {

    let pics = document.getElementById('pics');
    pics.src = URL.createObjectURL(blob);
    document.querySelector('').appendChild(pics);
    console.log(blob)
})




fetch("https://rickandmortyapi.com/api/character/avatar/9.jpeg")
.then(res => res.blob())
.then(blob => {

    let pics = document.getElementById('pics2');
    pics.src = URL.createObjectURL(blob);
    document.querySelector('').appendChild(pics);
    console.log(blob)
})



rickyAPI();



