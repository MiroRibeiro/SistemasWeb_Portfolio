const express = require('express');
const aplicacao = express();
const PORTA = 3000;

aplicacao.use(express.json());

aplicacao.post('/salvar', (req, res)=>{
    res.json({mensagem: 'Dados recebidos com sucesso'});
});

aplicacao.get('/info', (req, res)=>{
    res.json({mensagem: 'Plataforma funcionando perfeitamente'})
});

aplicacao.listen(PORTA, ()=>{
    console.log('Servidor rodando na porta 3000');
})