function input(){

  var arr = document.getElementById('input1').value;
  var size = document.getElementById('input2').value;
  var output = chunkArrayInGroups(arr, size);
  document.getElementById('output').innerHTML= output;
}




function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}