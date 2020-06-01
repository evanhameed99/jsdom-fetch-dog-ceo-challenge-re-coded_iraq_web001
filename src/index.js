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

function  fetchDogBreeds(){

  fetch(breedUrl)
  .then(resp=> resp.json())
  .then(json=>{
    let dogBreedUl = document.querySelector('#dog-breeds');
    for (const breed in json['message']){
      let breedLi = document.createElement('li');
      breedLi.innerText = breed;
      dogBreedUl.appendChild(breedLi);

      breedLi.addEventListener('click',()=>{
        breedLi.style.color = 'red';

      })

    }
  }).then(json=>{

    
  })
}



window.addEventListener('DOMContentLoaded', ()=>{

fetchImagesFromApi();
fetchDogBreeds();
})
