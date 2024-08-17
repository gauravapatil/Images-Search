let api_key="5XKcA3kTyIkF3MKADtC5s2e6QEPS7k3LoStq3HxlbmGhGUyvai21jo2N";
const apiKey = api_key; 
const endpoint = 'https://api.pexels.com/v1/search';
let searchbox=document.getElementById("searchbox");
console.log(searchbox); 
const perPage = 12; 
async function fetchPhotos() {

    div.innerText="";
    const query = searchbox.value;
        const response = await fetch(`${endpoint}?query=${query}&per_page=${perPage}`, {
            headers: {
                'Authorization': apiKey
            }
        })
    
       
        
        const data = await response.json();
        searchbox.value="";
        
        for(let i=0;i<perPage;i++){
          let img=document.createElement("img");
        img.src=data.photos[i].src.portrait;
        img.style.height="300px";
        img.style.width="300px";
        div.appendChild(img);
        img.style.display="block";
        }
        console.log(data);

}
let div=document.getElementById("display");




let btn=document.getElementById("btn");

btn.addEventListener("click",fetchPhotos);

// fetchPhotos();
