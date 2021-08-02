

const countriesContainer = document.querySelector('.cards-container');
const searchBox = document.querySelector("#searchBox");
const getDataBtn = document.querySelector("#getDataBtn");



////////////////////////////////////////////////////////


//  Function for displaying the data and requesting the
function countryData(coutryName){

    const request = new XMLHttpRequest();
    
    request.open('GET',`https://restcountries.eu/rest/v2/name/${coutryName}`);
    
    request.send();
    
    request.addEventListener("load",function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
    
    
        const html = `
                    <div class="card">
                    <div class="img-contanier">
                        <img src="${data.flag}">
                    </div>
        
                    <div class="country-heading">
                        <h2>${data.name}</h2>
                        <h3>${data.region}</h3>
                    </div>
        
                    <div class="info">
                        <p class="people"><img src="./Images/teamwork.png"> ${(+data.population / 1000000).toFixed(1)}M people</p>
                        <p class="language"><img src="./Images/speaking.png">${data.languages[0].name}</p>
                        <p class="currency"><img src="./Images/salary.png">${data.currencies[0].name}</p>
                    </div>
                    </div>
                    `;

                
    
        countriesContainer.insertAdjacentHTML('afterbegin',html);
        
    })
}


coutryName = 'china';
countryData(coutryName);

coutryName = 'usa';
countryData(coutryName);


coutryName = 'bharat';
countryData(coutryName);


// Displaying the data by clicking the Get Data button 
getDataBtn.addEventListener("click",()=>{

    if(searchBox.value == "")
    {
     alert("Enter coutry name !")   
    }
    else{
        const coutryName = searchBox.value;
        countryData(coutryName);
        searchBox.value="";
    }
})



// Displaying the data by clicking the Enter
window.addEventListener("keydown",(event)=>{

    if(event.key == "Enter"){
        const coutryName = searchBox.value;
        countryData(coutryName);
        searchBox.value="";
    }
})

