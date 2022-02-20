fetch('https://dummyapi.io/data/v1/user').then(response => console.log('then', response)).catch(error => console.log('catch', error));

fetch('https://dummyapi.io/data/v1/user').then(response => {
    if(!response.ok)
        throw 'not OK status';

    console.log('then', response);
}).catch(error => console.log('catch', error));

fetch('https://dummyapi.io/data/v1/user', {
    headers: {'app-id': '620b9f2b4370b827d3c76d9a'}
}).then(response => response.json())
    .then(json => console.log(json));

fetch('https://dummyapi.io/data/v1/user/create', {
    method: 'POST',
    headers: {'app-id': '620b9f2b4370b827d3c76d9a', 'Content-Type': 'application/json'},
    body: JSON.stringify({
        firstName: 'test',
        lastName: 'testis',
        email: 'ivan@ivan.com'
    })
    }).then(response => response.json())
        .then(json => {
            console.log(json);
            if(json.id)
                fetch(`https://dummyapi.io/data/v1/user/${json.id}`, {
                    headers: {'app-id': '620b9f2b4370b827d3c76d9a', 'Content-Type': 'application/json'},
                }).then(user => user.json())
                    .then(user => console.log(user));
        })
        .catch(error => console.log(error));