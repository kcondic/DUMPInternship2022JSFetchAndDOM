let firstDiv = document.getElementById('first');

console.log(firstDiv);

firstDiv.innerHTML = 'I\'m on the top!';

let blockDivs = document.getElementsByClassName('block');

console.log(blockDivs);

for(let div of blockDivs)
    div.style.backgroundColor = 'yellow';

blockDivs = document.querySelector('.block');

console.log(blockDivs);

blockDivs = document.querySelectorAll('.block');

console.log(blockDivs);

for(let div of blockDivs) 
    div.style.backgroundColor = 'white';

let middleDiv = document.querySelector('.block.middle');

if(middleDiv)
    middleDiv.style.height = '200px';

console.log(document.title);

document.title = 'Test';

console.log(document.body);

middleDiv.remove();

console.log(firstDiv.scrollHeight);
console.log(firstDiv.scrollWidth);
// https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight

console.log(document.cookie);

document.cookie = 'test1=Hello; SameSite=None; Secure';

console.log(document.cookie);

document.cookie = 'G_ENABLED_IDPS=DUMP';

console.log(document.cookie);

fetch('https://dummyapi.io/data/v1/user', {
    headers: {'app-id': '620b9f2b4370b827d3c76d9a'}
}).then(response => response.json())
    .then(json => {
        let firstUser = json.data[0];
        document.body.innerHTML +=
        `
        <div class="user">
            <div class="first-name">${firstUser.firstName}</div>
            <div class="last-name">${firstUser.lastName}</div>
            <img class="email" src="${firstUser.picture}" />
        </div>
        `
    });