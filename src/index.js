console.log('%c HI', 'color: firebrick');




function task1(){

fetch("https://dog.ceo/api/breeds/image/random/4")
.then( resp => resp.json() )
.then(function (json){
 imgContainer = document.getElementById('dog-image-container');
for ( const imgSrc of json['message']){

   img = document.createElement('img')
  img.src= imgSrc;
  imgContainer.appendChild(img)

}
})

}

function task2(){

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => {
    let dogBreedContainer = document.getElementById('dog-breeds');
    for (const breed in json['message']){

      let li = document.createElement('li');
      li.innerText =breed;
      dogBreedContainer.appendChild(li);
    }
} )
.then(function (){

  function task3(){
    li.style.color=red;
  }

  li.addEventListener('click',function(){
    task3();
  })
})
}


document.addEventListener("DOMContentLoaded", function() {
  task1();
  task2();

});
