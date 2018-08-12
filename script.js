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

function changeColor(x) {
	x.style.color = "green";
}

function changeColorBack(x) {
	x.style.color = "purple";
}


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

function replaceWordBack(){
	let y = document.getElementById('third').innerHTML;
	let x = y.replace(/banana/gi, 'taco');
	document.getElementById('third').innerHTML = x;
}