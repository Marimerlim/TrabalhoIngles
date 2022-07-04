//Crie 3 variáveis, cada uma com um array:
// - Comedy
// -Action
// -Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 


//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 


const Comedy = [
    {
       title: 'Grown Ups',
       director: 'Dennis Dugan',
       year: 2010
    }
] 
console.log(Comedy)



console.log('========================================')


const Action = [
    {
       title: 'Pacifc Rim',
       director: 'Guillermo del Toro',
       year: 2013
    }
]
console.log(Action)



console.log('========================================')



let Fantasy = [
    {
       title: 'Rise of the Guardians',
       director: 'Peter Ramsey',
       year: 2012
    }
]
console.log(Fantasy)

if (Fantasy.title === 'Rise of the Guardians'){
    console.log('MY FAVORIT MOVIE IS...')
}else{
    console.log('NOT EVEN 5 STARS...')
}


document.body.style.backgroundImage = "purple";