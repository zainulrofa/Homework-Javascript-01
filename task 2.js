const mtk = 100
const bind = 80
const bing = 85
const ipa = 95
let jumlahNilai = (mtk + bind + bing + ipa)
rataNilai = jumlahNilai/4 

console.log ("Rata-Rata:"+rataNilai)

59 >= rataNilai > 0 ? console.log ("Grade:E"):
69 >= rataNilai >= 60 ? console.log ("Grade:D"):
79 >= rataNilai >= 70 ? console.log ("Grade:C"):
89 >= rataNilai >= 80 ? console.log ("Grade:B"): 
console.log ("Grade:A")