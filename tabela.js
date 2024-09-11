/*function extract(arc) {
    const fs = require('fs')
    const csvOscar = fs.readFileSync(arc, 'utf-8')
    return csvOscar
}*/
/*function extract() {
    const fs = require('fs')
    const csvOscar = fs.readFileSync('oscar_best_pictures.csv', 'utf-8')
    return csvOscar
}
console.log(extract())
*/

function csvToLines(str) {
    let line = str.split('\r\n')
    return line
}

console.log(csvToLines("nome;idade\nJoão;28\nMaria;32"))
console.log(csvToLines("produto;preço\nArroz;5.00\nFeijão;7.50"))
console.log(csvToLines("Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta\nParasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M\nGreen Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"))

function linesToColumns(arr) {
    let lines = arr;
    let columns = [];
    for (let i = 0; i < lines.length; i++) {
        let column = lines[i].split(',');
        columns.push(column);
    }
    return columns;
}
console.log(linesToColumns(["nome;idade", "João;28", "Maria;32"]))
console.log(linesToColumns(["produto;preço", "Arroz;5.00", "Feijão;7.50"]))
console.log(linesToColumns(["Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta", "Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M", "Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"]))
function extractHeader(arr) {
    let header = arr.shift()
    return header
}
console.log(extractHeader([["nome", "idade"], ["João", "28"], ["Maria", "32"]]))
console.log(extractHeader([["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]))
console.log(extractHeader([["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem",
    "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]))
function extractContent(arr) {
    arr.slice(1)
    return arr
}
console.log(extractContent([["nome", "idade"], ["João", "28"], ["Maria", "32"]]))
console.log(extractContent([["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]))
console.log(extractContent([["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]))

function rowToJSON(header, content) {
    const obj = {};
    for (let i = 0; i < header.length; i++) {
        let key = header[i]
        let value = content[i]
        obj[key] = value
    }
    return obj
}
console.log(rowToJSON(["nome", "idade"], ["João", "28"]))
console.log(rowToJSON(["produto", "preço"], ["Arroz", "5.00"]))
console.log(rowToJSON(["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"]))

function contentToJsonData() {

}