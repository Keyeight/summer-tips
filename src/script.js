//imput de dados ferias//

let inputValue;

const input = document.querySelector("input");

function getValue(input) {
    inputValue = input.target.value;
}

input.addEventListener("input", getValue);

// array para guardar os dados dos tipos de lugares//

const summerTips = [ // summerTips é um objeto né ? // SIM !!! Uma array é o vector em JS e é um tipo de objeto 
    {
        imageUrl:"https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/praias-brasil-sancho-820x547.jpg",
        nameLocal: "Praia da Ilha do Campeche, SC"
    },
    {
        imageUrl:"https://www.melhoresdestinos.com.br/wp-content/uploads/2017/12/ponta-do-muta-820x547.jpg",
        nameLocal: "Praia da Ponta do Mutá, BA"
    },
    {
        imageUrl:"https://www.melhoresdestinos.com.br/wp-content/uploads/2020/05/por-do-sol-arpoador-820x547.jpg",
        nameLocal: "Praia de Ipanema, RJ"
    }
]

//verifica o input e se está conforme os dados do array para imprimir//

function getSummetTips(nameLocal) { // -> aqui eu entro no objeto ? //

    // for (var i = 0; i < summerTips.length; i++) {
    //     if (summerTips[i].nameLocal == nameLocal) {
    //         return summerTips[i];
    //     }
    //     console.log("Not Found!")
    // }
   
    const result = summerTips.filter((summerTips) => { //find -> é como se fosse o for que procura na array o dado//
        if (nameLocal === summerTips.nameLocal) {
            return summerTips;
        }
    });

    return result;
}

/* <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-brasil-820x547.jpg">
            <div class="text">
                <h1>Praia da Baía do Sancho, PE</h1>
            </div> */
            
function renderSummerTips(summerTips) {
    return summerTips.map(summerTips=>{
        return `
        <img src=${summerTips.imageUrl}>
        <p class="text">${summerTips.nameLocal}</p>
            `
    })
}

let summerTipsContainer = document.querySelector(".container-image")
    summerTipsContainer.innerHTML = renderSummerTips(summerTips);

//ação de click do buttom//
const button = document.querySelector("button");

function clickButton() {
    const summerTipsResult = getSummetTips(inputValue);
    if (inputValue === ""){
        summerTipsContainer.innerHTML = renderSummerTips(summerTips);
        return;
    }
        if (summerTipsResult.length === 0) {
            window.alert("Praia não encontrada! :C ")
            return;
        } 
        summerTipsContainer.innerHTML = renderSummerTips(summerTipsResult);
}

button.addEventListener("click", clickButton);

