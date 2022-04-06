async function createCardHandler(event) {
    event.preventDefault();
        document.location.replace('/post');
        console.log('========postbtn WORKINGGGGGG==========')
}


async function login() {

    document.location.replace('/login');
    console.log('========loginbtn WORKINGGGGGG==========')
}

document.querySelector('#loginbtn').addEventListener('click', login);

document.querySelector('#itemCreate').addEventListener('click', createCardHandler);