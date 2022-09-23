const mtk = 100
const bind = 80
const bing = 85
const ipa = 95
let rataNilai = (mtk + bind + bing + ipa) / 4

function nilaiAkhir() {
    if (typeof mtk !== "number" || typeof bind !== "number" || typeof bing !== "number" || typeof ipa !== "number") return "Data Harus Number"
    if (rataNilai >= 90 && rataNilai <= 100) {
        return "Grade: A"
    } else
    if (rataNilai >= 80 && rataNilai <= 89) {
        return "Grade: B"
    } else
    if (rataNilai >= 70 && rataNilai <= 79) {
        return "Grade: C"
    } else
    if (rataNilai >= 60 && rataNilai <= 69) {
        return "Grade: D"
    } else {
        return "Grade E"
    }
}

console.log("Rata-Rata: " + rataNilai)
console.log(nilaiAkhir())