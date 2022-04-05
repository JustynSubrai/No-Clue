async function createCardHandler(event) {
    event.preventDefault();

    const response = await fetch('/post', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage/');
    } else {
        alert(response.statusText);
    }

}
document.querySelector('#itemCreate').addEventListener('click', createCardHandler);
