const express = require('express')

const aluno = express.Router({mergeParams: true})

// Parser JSON para o body
aluno.use(express.json());
aluno.use(express.urlencoded({ extended: true }));

//const controllerAluno = require('../controles/aluno_controle');


// consuta 1 aluno pelo parâmetro id
aluno.get('/aluno/:id', function (req, res) { // :parametro diz que oq vai receber é um parâmetro
    
    let matricula = req.params.id;
    console.log("recebida requisição get para aluno com matrícula: "+matricula);
    res.send("recebida requisição get para aluno com matrícula: "+matricula);
  
/*    controllerAluno.getAluno(matricula)
      .then(resultado => {
            res.send(resultado)
        })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
*/      
});
  

// consulta todos os alunos
aluno
  .get('/aluno/', function (req, res) {
    console.log("recebida requisição get todos alunos ");
    /*controllerAluno.getTodosAlunos()
    .then(resultado => {
        res.send(resultado)
    })
    .catch(erro => {
        console.log("Promise rejeitada (aluno): " + erro);
        res.send(erro);
    })
    */

})
    
  .post('/aluno', function (req, res) {
    console.log("recebida requisição create aluno");
    /*
    controllerAluno.createAluno(req.body)
    .then(resultado => {
      res.send("Aluno inserido com sucesso")
    })
    .catch(erro => {
      console.log(erro);
      res.send(erro);
    })
    */
  })
  
  // deleta
  .delete('/aluno/:id', function (req, res) {
    console.log("recebida requisição delete aluno :ID="+req.body.id);
    
    /*
    controllerAluno.deleteAluno(req.body.id)
    .then(resultado => {
      res.send("Aluno removido com sucesso")
    })
    .catch(erro => {
      console.log(erro);
      res.send(erro);
    }) */
  })  

  // altera aluno
  .put('/aluno', function (req, res) {
    console.log("recebida requisição alterar aluno");
    
    /*
    controllerAluno.updateAluno(req.body)
    .then(resultado => {
      res.send("Aluno atualizado com sucesso")
    })
    .catch(erro => {
      console.log(erro);
      res.send(erro);
    }) */
    
  });  
  

module.exports = aluno