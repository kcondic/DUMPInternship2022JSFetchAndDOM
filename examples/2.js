const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let seconds = new Date().getSeconds();

        if(seconds % 2 === 0)
            resolve(seconds);
        
        reject(seconds);
    }, 100);
});

// myPromise.then(data => console.log('resolve', data), data => console.log('reject', data));

myPromise.then(data => console.log('resolve', data)).catch(data => console.log('reject', data));

const myPromise2 = new Promise((resolve) => resolve()); // resolve and reject don't need to have a value

myPromise2.then(() => {
    throw 'error';
}).catch(() => {
    console.log('in catch');
});

myPromise
.then(value => { return value + ' a'; })
.then(value => { return value + ' b'; })
.then(value => { return value + ' c'; })
.then(value => { return value + ' d'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) });

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

const race1 = new Promise((resolve) => {
    setTimeout(resolve, 500, 'one');
});

const race2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([race1, race2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});