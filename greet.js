function greet(){
  var name = prompt("What is your name?");
  alert("Hello, " + name);
}

greet();

function reverseCharAt(word, index){
  var newIndex = (word.length-1) - index;
  return word.charAt(newIndex)
}

reverseCharAt("hello", 4)

function supply(age, amount){
  var maxLife= 80;
  var restOfLife = maxLife-age;
  console.log(restOfLife*amount*365);
}

supply(25, 3)
