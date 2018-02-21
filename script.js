const apiPath = 'https://jsonplaceholder.typicode.com/';

const postList = document.getElementById('postList');

window.addEventListener("load", ev => {
    fnGetPost();

    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('sw.js');
            console.info("SW Registered!");
        } catch (error) {
            console.error(error);
        }
    }
});

async function fnGetPost() {

    fetch(`${apiPath}posts`)
        .then(response => response.json())
        .then(json => {
            json.forEach(post => {
                postList.innerHTML += `
                <div class="card">
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                </div>
            `;
            });

        });
}

function newPost() {
    const pTitle = document.getElementById('txtTitle');
    const pBody = document.getElementById('txtBody');

    fetch(`${apiPath}posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: pTitle.value,
            body: pBody.value,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            postList.innerHTML += `
            <div class="card">
                <h4>${json.title}</h4>
                <p>${json.body}</p>
            </div>
            `;
            pTitle.value = '';
            pBody.value = '';
            alert('added successfully!');
            postList.scrollTop = postList.scrollHeight;
        });

    return false;
}