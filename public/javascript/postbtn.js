async function postDir(event) {
    event.preventDefault();
        document.location.replace('/post');
        console.log('========postbtn WORKINGGGGGG==========')
}

document.querySelector('#itemCreate').addEventListener('click', postDir);