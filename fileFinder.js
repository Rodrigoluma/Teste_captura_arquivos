
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views')


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

/* app.get('/', (request, response) => {
    response.render('pages/home', {title: 'teste'});
}); */


import fs from 'fs';
function listarArquivosEPastasDeUmDiretorio(diretorio, arquivos) {
    
    if(!arquivos)
        arquivos = [];

    let listaDeArquivos = fs.readdirSync(diretorio);
    for(let k in listaDeArquivos) {
        let stat = fs.statSync(diretorio + '/' + listaDeArquivos[k]);
        if(stat.isDirectory())
            listarArquivosEPastasDeUmDiretorio(diretorio + '/' + listaDeArquivos[k], arquivos);
        else
            arquivos.push(diretorio + '/' + listaDeArquivos[k]);
    }
    
    return arquivos;

}

let lista = listarArquivosEPastasDeUmDiretorio('./teste');

console.log(lista);
console.log(typeof lista);

//let nomeArquivo = lista[0].replace(".jpg", "");
//nomeArquivo = nomeArquivo.replace(".jpg", "");

app.get('/', (request, response) => {
    response.render('pages/home', {listatudo: lista[0]});
});

