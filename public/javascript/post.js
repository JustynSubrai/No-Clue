const source = document.getElementById('card-section').innerHTML;
// let cardEl = document.getElementById('card-section');
let nameEl = document.getElementById('name-input').value;
let priceEl = document.getElementById('price-input').value;
let infoEl = document.getElementById('info-input').value;
let imgEl = document.getElementById('img-input').value;
// let userEl = document.getElementById('username').value;
let cardEl = Handlebars.compile(source);


async function post(event) {
    console.log('post btn working')
    event.preventDefault();
    const response = await fetch('/post', {
        method: 'post',
        body: JSON.stringify({
            nameEl,
            priceEl,
            infoEl,
            imgEl
            // userEl
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/homepage/');
    } else {
        alert(response.statusText);
    }

    const content = `
        <div id='item-card' class="card col-2.5 m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title" id="item-name">${nameEl}</h5>
            <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
        </div>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="item-price">${priceEl}</li>
            <li class="list-group-item" id="item-description">${infoEl}</li>
        </ul>
        </div>
        `;
let html = cardEl(content)
};


document.querySelector('#post-item').addEventListener('click', post);