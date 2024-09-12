const { extractOscar, extractPokemon, csvToLines, linesToColumns, extractHeader, rowToJSON, extractContent, contentToJsonData, printCSV } = require("./tabela");

//
console.log("teste 1")
console.log(csvToLines("nome;idade\nJoão;28\nMaria;32"))
console.log(csvToLines("produto;preço\nArroz;5.00\nFeijão;7.50"))
console.log(csvToLines("Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta\nParasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M\nGreen Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"))

console.log("teste 2")
console.log(linesToColumns(["nome;idade", "João;28", "Maria;32"]))
console.log(linesToColumns(["produto;preço", "Arroz;5.00", "Feijão;7.50"]))
console.log(linesToColumns(["Filme;Diretor;Ano;Duração;Gênero;País de Origem;Receita Bruta", "Parasita;Bong Joon-ho;2019;132;Drama;Coréia do Sul;258.8M", "Green Book;Peter Farrelly;2018;130;Drama;EUA;321.8M"]))

console.log("teste 3")
console.log(extractHeader([["nome", "idade"], ["João", "28"], ["Maria", "32"]]))
console.log(extractHeader([["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]))
console.log(extractHeader([["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem",
    "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]))

console.log("teste 4")
console.log(extractContent([["nome", "idade"], ["João", "28"], ["Maria", "32"]]))
console.log(extractContent([["produto", "preço"], ["Arroz", "5.00"], ["Feijão", "7.50"]]))
console.log(extractContent([["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]))

console.log("teste 5")
console.log(rowToJSON(["nome", "idade"], ["João", "28"]))
console.log(rowToJSON(["produto", "preço"], ["Arroz", "5.00"]))
console.log(rowToJSON(["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], ["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"]))

console.log("teste 6")
console.log(contentToJsonData(["nome", "idade"], [["João", "28"], ["Maria", "32"]]))
console.log(contentToJsonData(["produto", "preço"], [["Arroz", "5.00"], ["Feijão", "7.50"]]))
console.log(contentToJsonData(["Filme", "Diretor", "Ano", "Duração", "Gênero", "País de Origem", "Receita Bruta"], [["Parasita", "Bong Joon-ho", "2019", "132", "Drama", "Coréia do Sul", "258.8M"], ["Green Book", "Peter Farrelly", "2018", "130", "Drama", "EUA", "321.8M"]]))

console.log("teste 7")
console.table(printCSV(extractOscar(), ";"))
console.table(printCSV(extractPokemon()))