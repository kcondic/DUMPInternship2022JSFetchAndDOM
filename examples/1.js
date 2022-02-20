function myDisplayer(sum) {
    console.log(sum);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

for(let i = 0; i < 100; i++) {
    console.log(Math.pow(i, 2));
}

console.log('test');

setTimeout(() => {
    for(let i = 0; i < 100; i++) {
        console.log(Math.pow(i, 2));
    }
    console.log('KRAJ');
}, 1000);

console.log('test2');

let startTime = performance.now();
setTimeout(() => {
    let endTime = performance.now(); // notice delay because of synchronous CPU intensive function below, even though delay in setTimeout is 0
    console.log('elapsed: ', endTime - startTime);
    for(let i = 0; i < 100; i++) {
        console.log(Math.pow(i, 2));
    }
    console.log('KRAJ2');
}, 0);

console.log('test3');

function mySlowFunction(baseNumber) {
	console.time('mySlowFunction');
	let result = 0;	
	for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
	console.timeEnd('mySlowFunction');
}

mySlowFunction(12);

let intervalId = setInterval(() => {
    let today = new Date();
    console.log(`Current time is: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);

// http://callbackhell.com/