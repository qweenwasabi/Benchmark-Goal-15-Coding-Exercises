function stringIndices(stringArr,index){
var space = " ";
var newArr = stringArr.split(" ");



for(var i = 0; i < newArr[i].length; i++){
   if(index > 0 && index < stringArr.length){
      indexArr = newArr.slice(index - 1);
        return indexArr[i];
    }
  }


}

console.log(stringIndices("Cat And The Hat Green", 5));
