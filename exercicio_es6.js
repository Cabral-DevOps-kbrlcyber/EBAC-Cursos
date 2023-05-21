"use strict";

var listaDealunos = [{
  nome: 'Pedro',
  nota: 8.5
}, {
  nome: 'Maria',
  nota: 6.5
}, {
  nome: 'João',
  nota: 4.0
}, {
  nome: 'Paulo',
  nota: 5.5
}, {
  nome: 'Cabral',
  nota: 9.5
}];
function alunosAprovados(listaDealunos) {
  return listaDealunos = listaDealunos.nota >= 6;
}
var aprovados = listaDealunos.filter(alunosAprovados);
console.log(aprovados);