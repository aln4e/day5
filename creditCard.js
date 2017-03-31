function creditNumberCheck (str) {
  var lastDigit = str.charAt(15);
  var newStr = str.slice(0,15);
  newStr = newStr.split("").reverse().join("");
  var newNum = "";
  for (var i = 0; i < newStr.length; i++){
    var num;
    if (i % 2 == 0){
      num = parseInt(newStr.charAt(i)) * 2;
      if (num > 9){
        num = num - 9;
      }
      newNum = newNum + num;
    }
    else {
      newNum = newNum + newStr.charAt(i);
    }
  }
  var sum = 0;
  for (var j = 0; j < newNum.length; j++){
    sum = sum + parseInt(newNum.charAt(j));
  }
  return (sum + parseInt(lastDigit)) % 10 === 0;
}

function reverse(string){
  var sum =
  (parseInt(string.charAt(14)*2+((parseInt(string.charAt(14) * 2) > 9)*(-9))) +
  parseInt(string.charAt(13)) +
  parseInt(string.charAt(12)*2+((parseInt(string.charAt(12) * 2) > 9)*(-9))) +
  parseInt(string.charAt(11)) +
  parseInt(string.charAt(10)*2+((parseInt(string.charAt(10) * 2) > 9)*(-9))) +
  parseInt(string.charAt(9)) +
  parseInt(string.charAt(8)*2+((parseInt(string.charAt(8) * 2) > 9)*(-9))) +
  parseInt(string.charAt(7)) +
  parseInt(string.charAt(6)*2+((parseInt(string.charAt(6) * 2) > 9)*(-9))) +
  parseInt(string.charAt(5)) +
  parseInt(string.charAt(4)*2+((parseInt(string.charAt(4) * 2) > 9)*(-9))) +
  parseInt(string.charAt(3)) +
  parseInt(string.charAt(2)*2+((parseInt(string.charAt(2) * 2) > 9)*(-9))) +
  parseInt(string.charAt(1)) +
  parseInt(string.charAt(0)*2+((parseInt(string.charAt(0) * 2) > 9)*(-9))) +
  parseInt(string.charAt(15)));
  return sum % 10 === 0
  console.log(sum);
}
