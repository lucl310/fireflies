window.onload = function() {
  let container = document.getElementById("container");
  let coordinates = document.getElementById("text");
  let fireflies = document.getElementsByClassName('fireflies');
  let array = [];
  let x;
  let y;
  let frequency = 100;
  let interval = setInterval(create, frequency);

  document.addEventListener('mousemove', function() {
    x = event.clientX;
    y = event.clientY;
    coordinates.innerHTML ="x: " + x + " " + "y: " + y;
  })

  function create() {
    let newDiv = document.createElement('div');
    let random = (Math.round(Math.random()*50)).toString() + 'px';
    newDiv.style.height = random;
    newDiv.style.width = random;
    newDiv.style.backgroundColor = "pink";
    newDiv.style.position = 'absolute';
    newDiv.style.left = x + 'px';
    newDiv.style.top = y + 'px';
    newDiv.className += " fireflies";

    container.appendChild(newDiv);
    array.push(newDiv);

    if (array.length > 10) {
      console.log(array[0]);
      fireflies[0].parentNode.removeChild(fireflies[0]);
    }
  }
}
