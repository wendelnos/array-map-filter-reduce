//funcao
/*
const maca ={value :2, }
const laranja = {value: 3,}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    },thisArg); 
}

const nums = [1,2];
const nums2 = [2,4,36,8,10];
const nums3 = [10,9,8,7,6,5];

function mapSemThis(arr){
    return arr.map( function (item){ 
                    return item * 2 
                    });

}
*/
//Filter e retorne todos os numeros pares de um array
/*
function FilterPares(arr){
    return arr.filter( function (item){ 
                        return item % 2 == 0 ;
                    });

}
*/
/*
Reduce
1. some todos os números do array
2. crie uma função que recebe uma lista de preços
 representando o saldo disponível. Calcule qual será 
 o saldo final após subtrair todos os 
 preços da lista enviada;
*/



function somaNumeros(arr){
    return arr.reduce(
            function (prev, current){
                console.log({prev});
                console.log({current});
                return prev + current;
            }
        )
}
const nums4 = [1, 2];

const listProdutos = [{
    nome: 'sabao em po',
    preco: 20   
},
{
    nome: 'cereal', 
    preco: 12,
},
{
    nome: 'toalha',
    preco: 15.00,
    
}]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (ant, corrente, indice){
        console.log('Rodada: ', indice + 1);
        console.log({ant});
        console.log({corrente});
        return ant - corrente.preco;
    },saldoDisponivel);
}



/*
console.log('this -> maça ', mapComThis(nums,maca));
console.log('this -> laranja ', mapComThis(nums,laranja));
console.log('mapSemThis ', mapSemThis(nums2));
console.log('array nums2 ', nums2);
console.log('filterpares ', FilterPares(nums3));

console.log(somaNumeros(nums4));
*/
console.log(calculaSaldo(saldoDisponivel, listProdutos));