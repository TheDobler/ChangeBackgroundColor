const color = ['red', 'yellow', 'green', 'blue', 'pink', 'purple', 'black'];


var r = document.querySelector(':root');

function myFunction_get() {
    var rs = getComputedStyle(r);
    alert("The value of --blue is: " + rs.getPropertyValue('--colors'));
  }

function colorchange(){
    
    var x = parseInt(Math.random()*color.length);
      r.style.setProperty('--colors', color[x]);
    console.log(x)
}
