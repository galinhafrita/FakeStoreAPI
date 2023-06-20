fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((produtos) => {
    let tipoProduto = " ";
    const filtro = document.querySelector("#filtro");
    filtro.addEventListener("change", function () {
      tipoProduto = filtro.value;
      prodctCatch(produtos, tipoProduto);
    });
    let lucaldo = "";
    for (let i = 0; i < produtos.length; i++) {
      lucaldo += `
            <div class="carde" >
              <img src="${produtos[i].image}">
              <h2>${produtos[i].title}</h2>
              <p>$${produtos[i].price}</p>
              <a href="detalhes.html?id=${produtos[i].id}">Compre</a>
            </div> 
          `;
    }
    document.getElementById("body").innerHTML = lucaldo;
    function prodctCatch(produtos, tipoProduto) {
      let lucaldo = " ";
      for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].category === tipoProduto) {
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
      document.getElementById("body").innerHTML = lucaldo;
    }
  });
