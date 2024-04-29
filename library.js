let numProducts = 70;
let products = [];
let cats;

function getCards() {
    fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(res => res.json())
        .then(json => {
        cats=json;    
        populateCards(json);
        });
}

function searchCats() {
    let searchQuery=document.getElementById("search").value
    let filteredCats = cats.filter(cat=>cat.name===searchQuery)
    populateCards(filteredCats)
    //console.log(filteredCats);
}

    getCards();
    function populateCards(JSON) {
        products = JSON;
        let html = ``;
        for (let i = 0; i < numProducts && i < products.length; i++) {
            html += `
                <div class="col">
                    <div class="card h-100">
                    <a href="./pages/details.html?id=${products[i].reference_image_id}"><img src="https://cdn2.thecatapi.com/images/${products[i].reference_image_id}.jpg" class="card-img-top imgCards" height="300"></a>
                        <div class="card-body">
                            <h5 class="card-title">${products[i].name}</h5>
                            
                            <p class="card-text">Known for being: ${products[i].temperament}.</p><p class="card-text">${products[i].description}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        document.getElementById('cards').innerHTML = html;
    }

