function printSegitiga(num){
  if (typeof num !== "number") return "Data Harus Number"
  let printHingga = num
  for(x = num; x >= 1; x--){
    let print = ""
    for(y = 1; y <= printHingga; y++){
      print = print +' '+ y
    }
  console.log(print)
  printHingga = printHingga - 1
  }
}
console.log (printSegitiga(5))
