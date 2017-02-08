function fibo(int) {
  if (int === 0){
    return 0;
  }
  else if (int === 1) {
    return 1;
  }
  else {
    return fibo(int-1) + fibo(int-2);
  }
}
console.log(fibo(8).toString(2));
