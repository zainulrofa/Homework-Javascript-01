const mtk = 100
const bind = 80
const bing = 85
const ipa = 95
let jumlahNilai = (mtk + bind + bing + ipa)
rataNilai = jumlahNilai/4 

function nilaiAkhir(){
    if (mtk != "" && bind != "" && bing != "" && ipa != "")
    if (rataNilai >= 90 && rataNilai < 100) { return "Grade: A" } else
    if (rataNilai >= 80 && rataNilai <= 89) { return "Grade: B" } else
    if (rataNilai >= 70 && rataNilai <= 79) { return "Grade: C" } else
    if (rataNilai >= 60 && rataNilai <= 69) { return "Grade: B" } else { return "Grade E" }
}

console.log("Rata-Rata: "+rataNilai)
console.log(nilaiAkhir())
