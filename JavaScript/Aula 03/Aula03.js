1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
   e essa função imprima no console o valor de cada elemento da lista;

   var lista = [1, 'Olá', undefined, 99999, 'Texto qualquer']
   function funcaoLista(lista) {
    return console.log(lista);
  }
  funcaoLista(lista)

2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
   e todos caracteres em maiúsculo;

   var texto = "   str"
   function retornoStr(texto) {
     return texto.trim().toUpperCase();
   }
   retornoStr(texto)


3) Crie função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma função de Callback que seja 
   chamada caso algum dos números informados seja inválido.

   Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';

  var n1 = 3
  var n2 = 4

   function somatorio(n1,n2) {
       return console.log (n1+n2);
   }
   somatorio(n1,n2)