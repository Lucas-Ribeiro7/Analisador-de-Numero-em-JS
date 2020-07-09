var num = document.querySelector('input#num');
var resul = document.querySelector('div#res');
let lista = document.querySelector('select#lista');
var valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true;
    } else {
        return false;
    }
}

function isLista(n , l){
    if (l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar(){
        if(isNumero(num.value) && !isLista(num.value , valores)){
            valores.push(Number(num.value));
            let item = document.createElement('option');
            item.innerHTML = `O Valor ${Number(num.value)} adicionado.`;
            lista.appendChild(item);
            resul.innerHTML = '';
    }else{
        alert("Número inválido ou repetido.");
    }
    num.value = '';
    num.focus();

}

function finalizar(){
    if(valores.length == 0){
        alert("Por favor adicione um valores antes de fincalizar.")
    } else {
        let tot = valores.length;
        var menor = valores[0];
        var maior = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos];
            }
            if (valores[pos] < menor){
                menor = valores[pos];
            }    

            soma += valores[pos];
                
        }

        media = soma / tot;

        resul.innerHTML += '';
        resul.innerHTML += `<p>O total de valores adicionados foram ${tot}.</p>`; 
        resul.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`;
        resul.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>`;
        resul.innerHTML += `<p>A soma dos valores são ${soma}.</p>`;
        resul.innerHTML += `<p>A média dos valores adicionado são ${media}</p>`
        
        


    }
}

