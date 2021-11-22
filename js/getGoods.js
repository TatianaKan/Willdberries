const getGoods = () => {

  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://willb-c3a40-default-rtdb.firebaseio.com/db.json').then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  }

  links.forEach(function (link) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      getData();

    })
  })


  // localStorage.setItem('goods', JSON.stringify({name: 'all'}));
  // const goods = JSON.parse(localStorage.getItem('goods'));
  // console.log(goods);
}

getGoods();