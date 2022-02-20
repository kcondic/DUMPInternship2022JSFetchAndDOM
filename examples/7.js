console.log(history);

// history.pushState({page: 1}, "title 1", "?page=1")

// history.back();

console.log(location.href);

console.log(innerHeight);
console.log(innerWidth);

console.log(scrollX);
console.log(scrollY);

let middleDiv = document.querySelector('.block.middle');

middleDiv.style.height = '1000px';

window.addEventListener('scroll', function(e) {
    console.log(scrollY);
});

window.open("https://dump.hr");
window.open("https://dump.hr", null, 'popup');