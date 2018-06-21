let x;
let y;
console.log("CYCA BLYAT")



window.onload = function(){

	document.addEventListener("mousemove", function listen(event) {
		document.getElementById('text').innerHTML = "X Position: " + x + "<br>" + " Y Position: " + y
			x = event.clientX; 	
			y = event.clientY;
	})

	function create() {
	let newDiv = document.createElement('div');
	newDiv.style.backgroundColor = "green";
	newDiv.style.height = Math.round((Math.random() * 20) + 5) + "px";
	newDiv.style.width = Math.round((Math.random() * 20) + 5) + "px";
	newDiv.style.left = x + "px";
	newDiv.style.top =y + 'px';
	newDiv.style.position = "absolute";
	newDiv.className += " booterflies";
	container.appendChild(newDiv);
	}
	let interval = setInterval(create, 30);

}
