const search = function() {
const input = document.querySelector('.search-block > input');
const searchBtn = document.querySelector('.btn-outline-secondary');

input.addEventListener ('input', (e)=> {
console.log( e.target.value);
})

searchBtn.addEventListener('click', ()=> {
  console.log( input.value);
})



}

search();