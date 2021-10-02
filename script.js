const createNode = (elem) => {
    return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
    parent.appendChild(elem);
}

// List Element
const ul = document.querySelector('#users');

// GitHub API URL
const url = 'https://api.github.com/users';

// make the API call
fetch(url)
    .then(res => res.json())
    .then(data => {
        // iterate over users
        data.map((user) => {
            // create the elements
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = user.avatar_url;
            span.innerText = user.login;
            // append all elements
            appendNode(li, img);
            appendNode(li, span);
            appendNode(ul, li);
        });
    }).catch(err => {
        console.error('Error: ', err);
    });