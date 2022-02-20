(async () => {
    try {
        let response = await fetch('https://dummyapi.io/data/v1/user');
        console.log('then', response);
    } catch(error) {
        console.log('catch alternative', error);
    }

    try {
        let response = await fetch('https://dummyapi.io/data/v1/user');

        if(!response.ok)
            throw 'not OK status';

        console.log('then alternative', response);
    } catch(error) {
        console.log('catch alternative', error);
    }

    try {
        let response = await fetch('https://dummyapi.io/data/v1/user', {
            headers: {'app-id': '620b9f2b4370b827d3c76d9a'}
        }).then(response => response.json()); // avoid mixing then with async await
    
        console.log(response);
    } catch(error) {
        console.log('User fetch not successful: ', error);
    }

    try {
        let response = await fetch('https://dummyapi.io/data/v1/user', {
            headers: {'app-id': '620b9f2b4370b827d3c76d9a'}
        });

        console.log(response);

        let responseJson = await response.json();

        console.log(responseJson);
    } catch(error) {
        console.log('User fetch not successful: ', error);
    }

    try {
        let createUserResponse = await fetch('https://dummyapi.io/data/v1/user/create', {
            method: 'POST',
            headers: {'app-id': '620b9f2b4370b827d3c76d9a', 'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: 'test',
                lastName: 'testis',
                email: 'josip3@ivan.com'
            })
        });

        console.log(createUserResponse);
            
        let createUserResponseJson = await createUserResponse.json();

        console.log(createUserResponseJson);

        if(createUserResponseJson.id) {
            let fetchUserResponse = await fetch(`https://dummyapi.io/data/v1/user/${createUserResponseJson.id}`, {
                headers: {'app-id': '620b9f2b4370b827d3c76d9a', 'Content-Type': 'application/json'},
            });

            let fetchUserResponseJson = await fetchUserResponse.json();

            console.log(fetchUserResponseJson);
        }
    } catch(error) {
        console.log('Something went wrong!', error);
    }
})();