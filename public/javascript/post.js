async function post(event) {
    event.preventDefault();
    
    let nameEl = document.getElementById('name-input').value;
    let priceEl = document.getElementById('price-input').value;
    let infoEl = document.getElementById('info-input').value;
    
    let content = {
        context: [
            {
                info: `<div id='item-card' class='card col-2.5 m-3' style='width: 18rem;'>
                <div class='card-body'>
                <h5 class='card-title' id='item-name'>${nameEl}</h5>
                <img class='card-img-top' src='.../100px180/?text=Image cap' alt='Card image cap'>
                </div>

                <ul class='list-group list-group-flush'>
                <li class='list-group-item' id='item-price'>${priceEl}</li>
                <li class='list-group-item' id='item-description'>${infoEl}</li>
                </ul>
                </div>
                `}
        ]
    };

    const name = nameEl.trim();
    const price = priceEl;
    const description = infoEl.trim();

    if (name && price && description) {
        const response = await fetch('/api/items', {
            method: 'post',
            body: JSON.stringify({
                name,
                price,
                description
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/homepage/');
        } else {
            alert(response.statusText);
        }
    }
    let tempEl = Handlebars.compile(document.querySelector('#template'));
    let cardEl = tempEl(content, {
        noEscape: true
    });

    document.querySelector('#card-section').innerHTML = cardEl;

    console.log('=========POST BTN WORKING==========')
};

document.getElementById('post-item').addEventListener('click', post);
