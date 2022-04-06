let nameEl = document.getElementById('name-input').value;
let priceEl = document.getElementById('price-input').value;
let infoEl = document.getElementById('info-input').value;
async function post(event) {
    event.preventDefault();
    let data = {
        context: [
            {
                info: `<div id='item-card' class='card col-2.5 m-3' style='width: 18rem;'>
                <div class='card-body'>
                <h5 class='card-title' id='item-name'>{{nameEl}}</h5>
                <img class='card-img-top' src='.../100px180/?text=Image cap' alt='Card image cap'>{{}}</img>
                </div>
                
                <ul class='list-group list-group-flush'>
                <li class='list-group-item' id='item-price'>{{priceEl}}</li>
                <li class='list-group-item' id='item-description'>{{infoEl}}</li>
                </ul>
                </div>
                `}
        ]
    };

    const response = await fetch('/api/items', {
        method: 'post',
        body: JSON.stringify({
            nameEl,
            priceEl,
            infoEl,
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/homepage/');
    } else {
        alert(response.statusText);
    }

    let tempEl = Handlebars.compile(document.querySelector('#template'));
    let cardEl = tempEl(data, {
        noEscape: true
    });

    document.querySelector('#card-section').innerHTML = cardEl;

    console.log('=========POST BTN WORKING==========')
};


document.getElementById('post-item').addEventListener('click', post);