function extractPokemon() {
    const fs = require('fs')
    const csvOscar = fs.readFileSync('./pokemon_combined.csv', 'utf-8')
    return csvOscar
}
function extractOscar() {
    const fs = require('fs')
    const csvOscar = fs.readFileSync('./oscar_best_pictures.csv', 'utf-8')
    return csvOscar
}


/**
 * 
 * @param {string} str Uma string contendo o conteúdo de um CSV.
 * @returns Uma lista de strings, onde cada string representa uma linha do CSV
 */
function csvToLines(str) {
    let line = str.trim().split('\r\n')
    return line
}

/**
 * 
 * @param {Array} arr - Uma lista de strings, onde cada string representa uma linha do CSV.
 * @param {String} separator uma string idenficando o separador usado no arquivo CSV
 * @returns  Uma lista de listas, onde cada lista interna contém as colunas de uma linha do CSV
 */
function linesToColumns(arr, separator = ',') {
    let lines = arr;
    let columns = [];
    for (let i = 0; i < lines.length; i++) {
        let column = lines[i].trim().split(separator);
        columns.push(column);
    }
    return columns;
}
/**
 * 
 * @param {Array} arr Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha
do CSV.
 * @returns  Uma lista contendo apenas o cabeçalho (primeira linha).
 */
function extractHeader(arr) {
    let header = arr.shift()
    return header
}
/**
 * 
 * @param {Array} arr Uma lista de listas de strings, onde cada lista interna representa colunas de uma linha
do CSV.

 * @returns  Uma lista de listas, contendo todas as linhas exceto o cabeçalho.
 */
function extractContent(arr) {
    arr.slice(1)
    return arr
}
/**
 * 
 * @param {Array} header lista representa o cabeçalho da tabela.
 * @param {Array} row lista representa uma única linha do conteúdo da tabela
 * @returns - Um objeto JSON onde as chaves são os elementos do cabeçalho e os valores são
os elementos correspondentes da linha do conteúdo.
 */
function rowToJSON(header, row) {
    const obj = {};
    for (let i = 0; i < header.length; i++) {
        let key = header[i]
        let value = row[i]
        obj[key] = value
    }
    return obj
}
/**
 * 
 * @param {Array} header - lista de strings representando o cabeçalho;
 * @param {Array} content - lista de listas representando o conteúdo do CSV.
 * @returns  Uma lista de objetos JSON, onde as chaves são os elementos do cabeçalho e os valores são as colunas correspondentes.
 */

function contentToJsonData(header, content) {
    const list = [];
    for (let i = 0; i < content.length; i++) {
        let row = content[i]
        let obj = rowToJSON(header, row)
        list.push(obj)
    }
    return list
}

/**
 * 
 * @param {String} csvText  Uma string contendo o conteúdo de um arquivo CSV.
 * @returns  Nenhuma. A função deve imprimir no console o objeto JSON convertido a partir do CSV, utilizando console.table().
 */
function printCSV(csvText, separador) {
    const csvL = csvToLines(csvText);
    const lToC = linesToColumns(csvL, separador);
    const exH = extractHeader(lToC);
    const exC = extractContent(lToC);
    const contToJSON = contentToJsonData(exH, exC)
    return contToJSON
}
module.exports = { extractOscar, extractPokemon, csvToLines, linesToColumns, extractHeader, extractContent, rowToJSON, contentToJsonData, printCSV }