let numProducts = 70;
let products = [];

function getCards() {
    fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(res => res.json())
        .then(json => {
            products = json;
            let html = ``;
            for (let i = 0; i < numProducts && i < products.length; i++) {
                html += `
                    <div class="col">
                        <div class="card h-100">
                        <a href="./pages/details.html?id=${products[i].reference_image_id}"><img src="${products[i].reference_image_id}" class="card-img-top imgCards"></a>
                            <div class="card-body">
                                <h5 class="card-title">${products[i].name}</h5>
                                <p class="card-text">${products[i].description}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
            document.getElementById('cards').innerHTML = html;
        });
}
    getCards();
