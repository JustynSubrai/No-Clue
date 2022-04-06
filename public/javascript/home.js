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


async function login() {

    document.location.replace('/login');
    console.log('========loginbtn WORKINGGGGGG==========')
}

document.querySelector('#loginbtn').addEventListener('click', login);

document.querySelector('#itemCreate').addEventListener('click', createCardHandler);