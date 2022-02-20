function changeText(e) {
    console.log(e);
    e.target.innerHTML = 'changed text!';
}

let middleDiv = document.querySelector('.block.middle');

middleDiv.addEventListener('click', function(e) {
    this.innerHTML = 'ch ch ch ch changes!';
    console.log(e);
});

// document.getElementById('text-input').onchange = function(e) {
//     console.log(e);
//     console.log(this.value);
// };

let textInput = document.getElementById('text-input');

textInput.addEventListener('change', function(e) {
    console.log(e);
    console.log(this.value);
});

middleDiv.innerHTML = 'first line <br/><br/><br/><br/><br/><br/><br/> last line';
middleDiv.style.height = '100px';
middleDiv.style.overflowY = 'scroll';

middleDiv.addEventListener('scroll', function(e) {
    console.log('scroll');
});

document.addEventListener('keypress', logKey);

function logKey(e) {
  console.log(e.code);
}

textInput.addEventListener('focus', function() {
    this.style.background = 'pink';
});
  
textInput.addEventListener('blur', function() {
    this.style.background = ''; // we keep changing the style directly, but usually it is better to manipulate with classList on element
});

textInput.addEventListener('keypress', checkName, false);

function checkName(evt) {
    let charCode = evt.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {
            evt.preventDefault();
            alert(
                'Please use lowercase letters only.'
                + '\n' + 'charCode: ' + charCode + '\n'
            );
        }
    }
}
  
// https://javascript.info/bubbling-and-capturing