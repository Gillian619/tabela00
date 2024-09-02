/*function extract(arc) {
    const fs = require('fs')
    const csvOscar = fs.readFileSync(arc, 'utf-8')
    return csvOscar
}*/
function extract() {
    const fs = require('fs')
    const csvOscar = fs.readFileSync('oscar_best_pictures.csv', 'utf-8')
    return csvOscar
}
console.log(extract())
function quebra() {
    let line = extract().split('/n')
    return line
}
console.log(quebra())
function separa() {
    let forma = quebra().split(';')
    return forma
}
console.log(separa())
function format() {

}