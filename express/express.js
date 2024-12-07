const express = require('express');
const data = require("./data.js");
const data2 =require("./data2.js");

const server = express();


server.get( '/', (req,res) => {
    res.send("expressten merhaba");
} );


server.get('/urunler', (req, res) => {
    console.log(data);
    res.status(200).json(data);
} );


server.get('/ogrenciler',(req, res) => {
    res.status(200).json(data2);
})


server.get('/ogrenciler/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    if (isNaN(id)) {
        return res.status(400).send("Geçersiz ID formatı.");
    }

    const ogrenci = data2.find((ogrenci) => ogrenci.id === id);

    if (ogrenci) {
        res.status(200).json(ogrenci);
    } else {
        res.status(404).send("Aradığınız öğrenci bulunamadı...");
    }
});



server.listen( 8080, () => {
    console.log("console icine yazi yazildimi?");
} );