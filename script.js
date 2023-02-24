function alertPop() {
    alert("Loading weather report....")
}

function acceptCookie() {
    // console.log(document.querySelector('.lowerContainer'));
    document.querySelector('.lowerContainer').remove();
}

// console.log(document.querySelectorAll('.highTemp'));
// console.log(document.querySelectorAll('.lowTemp'));

var highTempElementCArr = document.querySelectorAll('.highTemp');
var lowTempElementCArr = document.querySelectorAll('.lowTemp');

var highTempIntCArr = [];
var lowTempIntCArr = [];

// console.log(highTempElementCArr);
// console.log(lowTempElementCArr);

// highTempElementCArr.forEach(e => console.log(e.innerHTML));
// lowTempElementCArr.forEach(e => console.log(e.innerHTML));

highTempElementCArr.forEach(e => highTempIntCArr.push(parseInt(e.innerHTML.substring(0, e.innerHTML.length-1))));
lowTempElementCArr.forEach(e => lowTempIntCArr.push(parseInt(e.innerHTML.substring(0, e.innerHTML.length-1))));
// console.log(highTempIntCArr);
// console.log(lowTempIntCArr);

function tempConvert(selectMenu) {
    var value = selectMenu.value;
    // console.log(value);
    if (value == 'F°') {
        for (var i = 0; i < highTempIntCArr.length; i++) {
            highTempIntCArr[i] = Math.round((highTempIntCArr[i] * 1.8) + 32);
            // console.log(highTempIntCArr[i]);
            highTempElementCArr[i].innerHTML = highTempIntCArr[i] + '°';
            // console.log(highTempElementCArr[i]);

            lowTempIntCArr[i] = Math.round((lowTempIntCArr[i] * 1.8) + 32);
            // console.log(lowTempIntCArr[i]);
            lowTempElementCArr[i].innerHTML = lowTempIntCArr[i] + '°';
            // console.log(lowTempElementCArr[i]);
        }
    }
    else {
        for (var i = 0 ; i < highTempElementCArr.length; i++) {
            highTempIntCArr[i] = Math.round((highTempIntCArr[i] - 32) * .5556);
            // console.log(highTempIntCArr[i]);
            highTempElementCArr[i].innerHTML = highTempIntCArr[i] + '°';
            // console.log(highTempElementCArr[i]);

            lowTempIntCArr[i] = Math.round((lowTempIntCArr[i] -32) * .5556);
            // console.log(lowTempIntCArr[i]);
            lowTempElementCArr[i].innerHTML = lowTempIntCArr[i] + '°';
            // console.log(lowTempElementCArr[i]);
        }
    }
}