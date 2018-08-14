
// this will make panels widen and more text appear
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open')
}

function toggleActive(e) {
	if (e.propertyName.includes('flex'))
		this.classList.toggle('open-active')
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
//this will change the text color
function changeColor(x) {
	x.style.color = "green";
}

function changeColorBack(x) {
	x.style.color = "purple";
}

// this will be the highlight feature
function highlightOn(x) {
	x.style.backgroundColor = "yellow";
	}

	function highlightOff(x) {
	x.style.backgroundColor = "white";
	}

	function replaceWord(){
	let y = document.getElementById('third').innerHTML;
	let x = y.replace(/taco/gi, 'banana');
	document.getElementById('third').innerHTML = x;
}
//this will replace the words
function replaceWordBack(){
	let y = document.getElementById('third').innerHTML;
	let x = y.replace(/banana/gi, 'taco');
	document.getElementById('third').innerHTML = x;
}
// this will allow for drag n drop effect
function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

// another replace word but only for one word rather than paragraph
function replaceNewWord(){
	let y = document.getElementById('jumble').innerHTML;
	let x = y.replace(/taco/gi, 'banana');
	document.getElementById('jumble').innerHTML = x;
}

function replaceNewWordBack(){
	let y = document.getElementById('jumble').innerHTML;
	let x = y.replace(/banana/gi, 'taco');
	document.getElementById('jumble').innerHTML = x;
}