function createNode(element){
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

const ul = document.getElementById('gallery');

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    let gallery = data;

    return gallery.map(function(person){
        let li = createNode('li');
            span = createNode('span');

        li.innerHTMl = person.name;
        span.innerHTMl = person.email;

        append(li, span);
        append(ul, li);
    });
})