
// Aula 29
// detalhe que precisamos mudar no
// nosso código, que gerará um
// problema

// posso acessar em qualquer outra
// máquina
// os dados da nossa api não estão
// sendo mostrados nessa página

// ver o ip na hora para modificar
// em script.js

// blocked por cors policy
// cross origin resorch sharing
// compartilhamento de recursos
// atraves de origens cruzadas
// só posso pedir fetch se eu
// tiver no mesmo dominio, se não
// o node trava a nossa requisição

// uma maneira de proteger, ou seja,
// não pode ser de qualquer página
// da web aleatória

// como resolvo isso
// instalar npm módulo chamado cors

// modificar em api

// posso também criar uma white list
// ver no site do cors



document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts(){

    // fetch(url, options).then()

    // let promise = fetch("http://localhost:3000/api/all").then(res => {
    //     return res.json()
    // })

    // promise.then(json => {
    //     console.log(json);
    // })

    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        // console.log(json);

        let postElements = '';

        let posts = JSON.parse(json);
        // console.log(posts);

        posts.forEach((post) => {
            let postElement = `<div id=${post.id} class="card mb-4 color-background">
                                    <div class="card-header">
                                        <h5 class="card-title">${post.title}</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>
                                </div>`
            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;

    })

}

function newPost(){

    // console.log("new post")
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    // console.log(title, description)

    let post = { title, description };

    const options = { method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => {
        console.log(res);
        updatePosts();
        document.getElementById("title").value = '';
        document.getElementById("desc").value = '';
    })

}

