const express = require('express');
const joi = require('joi');

const aplicacao = express();
const PORTA = 3000;

const caminho = require('path');

aplicacao.use(express.json());
aplicacao.use(express.urlencoded({extended:true}));

const formEsquema = joi.object({
    nome: joi.string().required(),
    email: joi.string().email(),
    mensagem: joi.string().required(),
});
aplicacao.get('/',(req, res)=>{
    res.sendFile(caminho.join(__dirname, '../aplicacao/index.html'));
});
aplicacao.post('/salvar', (req, res)=>{
    const { error, value } = formEsquema.validate(req.body);
    if(error){
        return res.status(400).json({erro:error.details[0].message})
    }
    res.json({mensagem: 'Dados recebidos com sucesso', dados: value });
});

aplicacao.get('/info', (req, res)=>{
    res.json({mensagem: 'Plataforma funcionando perfeitamente'})
});

aplicacao.listen(PORTA, ()=>{
    console.log('Servidor rodando na porta 3000');
})