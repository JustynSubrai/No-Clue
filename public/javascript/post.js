async function post(event) {
    event.preventDefault();
    
    let nameEl = document.getElementById('name-input').value;
    let priceEl = document.getElementById('price-input').value;
    let infoEl = document.getElementById('info-input').value;
    

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
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

    console.log('=========POST BTN WORKING==========')
};

document.getElementById('post-item').addEventListener('click', post);
