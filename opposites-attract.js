// make a function where is true when 2 numbers are one an even number and the other an odd number

function lovefunc(flower1, flower2){
  if (flower1 % 2 == 0 && flower2 % 2 != 0){
    return true;
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0){
    return true;
  } else {
    return false;
  }
}
