var n1 = "0";
var operação = null;
var n2 = '';

function digito(numero){

    if(operação !== null){
        n2 = n2 + numero;
        display(n2);
    }else{
        if(n1 === "0"){
        n1 = numero;
        } else{
            n1 += numero;
        }
        display(n1)
    }
}

function calcular(){
    var nCalculado = 0
    var _n1 = parseFloat(n1);
    var _n2 = parseFloat(n2);


    switch(operação){
        case '+':
            nCalculado = _n1 + _n2;
            break;
        case '-':
            nCalculado = _n1 - _n2;
            break;
        case '*':
            nCalculado = _n1 * _n2;
            break;
        case '/':
            nCalculado = _n1 / _n2;
            break;
    }
    return nCalculado;
}

function incluirCalculo(simbolo){
    
    if(operação === null || n2 === ''){
        operação = simbolo;
    } else {
        var resultado = calcular();
        n1 = resultado;
        operação = simbolo;
        n2 =  '';
        display(n1);
    }

    console.log(n1, operação, n2);
}

function limpar() {
    var limpa = '';
        display(limpa);
}

function display(valor){
    document.querySelector('#display').innerHTML= valor
}

