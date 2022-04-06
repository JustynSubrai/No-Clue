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
    const response = await fetch('/api/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
    console.log('========loginbtn WORKINGGGGGG==========')
}

document.querySelector('#loginbtn').addEventListener('click', login);

document.querySelector('#itemCreate').addEventListener('click', createCardHandler);