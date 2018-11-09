var elementG=document.getElementById('green');
var elementR=document.getElementById('red');
var elementY=document.getElementById('yellow');

turnRed();

function turnRed() {
elementG.classList.add('hidden');
elementY.classList.add('hidden');
elementR.classList.remove('hidden');
elementR.classList.add('light');
setTimeout(turnYellowAfterRed,3000);
}

function turnYellowAfterRed() {
elementY.classList.remove('hidden');
elementY.classList.add('light');
setTimeout(turnGreen,2000);
}

function turnGreen() {
elementY.classList.add('hidden');
elementR.classList.add('hidden');
elementG.classList.remove('hidden');
elementG.classList.add('light');
setTimeout(turnYellowAfterGreen,3000);
}

function turnYellowAfterGreen() {
elementG.classList.add('hidden');
elementY.classList.remove('hidden');
elementY.classList.add('light');
setTimeout(turnRed,2000);
}