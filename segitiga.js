function printSegitiga(num) {
  if (typeof num !== "number") return "Data Harus Number"
  for (x = num; x >= 1; x--) {
    let print = ""
    for (y = 1; y <= x; y++) {
      print = print + ' ' + y
    }
    console.log(print)
  }
}
console.log(printSegitiga(5))