function nilaiAkhir(mtk, bind, bing, ipa) {
    if (typeof mtk !== "number" || mtk === undefined ||
        typeof bind !== "number" || bind === undefined ||
        typeof bing !== "number" || bing === undefined ||
        typeof ipa !== "number" || ipa === undefined) {
        return "Data Harus Number"
    }
    let rataNilai = (mtk + bind + bing + ipa) / 4
    console.log("Rata-Rata: " + rataNilai)
    if (rataNilai >= 90 && rataNilai <= 100) {
        return "Grade: A"
    } else
    if (rataNilai >= 80 && rataNilai < 90) {
        return "Grade: B"
    } else
    if (rataNilai >= 70 && rataNilai < 80) {
        return "Grade: C"
    } else
    if (rataNilai >= 60 && rataNilai < 70) {
        return "Grade: D"
    } else {
        return "Grade E"
    }
}

console.log(nilaiAkhir(100, 80, 85, 90))
