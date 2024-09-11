/*function extract(arc) {
    const fs = require('fs')
    const csvOscar = fs.readFileSync(arc, 'utf-8')
    return csvOscar
}*/
function extract() {
    const fs = require('fs')
    const csvOscar = fs.readFileSync('./oscar_best_pictures.csv', 'utf-8')
    return csvOscar
}



function csvToLines(str) {
    let line = str.trim().split('\r\n')
    return line
}


function linesToColumns(arr, separator = ',') {
    let lines = arr;
    let columns = [];
    for (let i = 0; i < lines.length; i++) {
        let column = lines[i].trim().split(separator);
        columns.push(column);
    }
    return columns;
}

function extractHeader(arr) {
    let header = arr.shift()
    return header
}

function extractContent(arr) {
    arr.slice(1)
    return arr
}

function rowToJSON(header, row) {
    const obj = {};
    for (let i = 0; i < header.length; i++) {
        let key = header[i]
        let value = row[i]
        obj[key] = value
    }
    return obj
}


function contentToJsonData(header, content) {
    const list = [];
    for (let i = 0; i < content.length; i++) {
        let row = content[i]
        let obj = rowToJSON(header, row)
        list.push(obj)
    }
    return list
}


function printCSV(csvText) {
    const csvL = csvToLines(csvText);
    const lToC = linesToColumns(csvL, ';');
    const exH = extractHeader(lToC);
    const exC = extractContent(lToC);
    const contToJSON = contentToJsonData(exH, exC)
    return contToJSON
}
module.exports = { extract, csvToLines, linesToColumns, extractHeader, extractContent, rowToJSON, contentToJsonData, printCSV }