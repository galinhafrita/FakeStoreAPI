fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((produtos) => {

    let link = new URLSearchParams(window.location.search)
    let valor = parseInt(link.get('id'))
    let lucaldo = " ";
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === valor) {
          lucaldo += `
            <div class="carde" >
              <img src="${produtos[i].image}">
              <h2>${produtos[i].title}</h2>
              <p>$${produtos[i].price}</p>
              <a href="detalhes.html?id=${produtos[i].id}">Compre</a>
            </div> 
          `;
        }
      }
      document.getElementById("paginaInfo").innerHTML = lucaldo;

  });