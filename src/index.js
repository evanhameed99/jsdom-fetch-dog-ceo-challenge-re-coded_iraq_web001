console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// fetching images from the api
function fetchImagesFromApi(){

fetch(imgUrl)
.then (resp => resp.json())
.then( json => {
    let imgContainer = document.getElementById('dog-image-container');
    for (const imgSrc of json['message']){
      let img =document.createElement('img');
      img.src=imgSrc;
      imgContainer.appendChild(img);
    }
})

}



window.addEventListener('DOMContentLoaded', ()=>{

fetchImagesFromApi();
fetchDogBreeds();
})
