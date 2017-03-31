function isIdValid (str){
  return str.length >= 6 && (!str.includes("!") && !str.includes("#") && !str.includes("$"))
}

function isPasswordValid(str){
  return str != "password" && str.length >= 6 && (str.includes("!") || str.includes("#") || str.includes("$")) && (str.includes("1") || str.includes("2") || str.includes("3") || str.includes("4") || str.includes("5") || str.includes("6") || str.includes("7") || str.includes("8") || str.includes("9") || str.includes("0")) && hasUpper(str) && hasLower(str)
}

function checker(user, pass){
  return isIdValid(user) && isPasswordValid(pass)
}

function main(){
  var username = prompt("Enter User Name")
  var password = prompt("Enter Password")

  alert("Credentials valid? " + checker(username, password))
}

function hasLower(str){
  return str.toUpperCase() !== str;
}

function hasUpper(str){
  return str.toLowerCase() !== str;
}
