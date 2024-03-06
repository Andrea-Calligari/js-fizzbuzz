//Scrivi un programma che stampi inumeri da 1 a 100 in console.
let n = 100;
for (let i = 0; i < n; i++) {
    let num = i + 1;
    //  console.log(num)

    //i numeri multipli di 3 vanno sostituiti dalla stampa "Fizz"
    const restoTre = num % 3; //number

    //i numeri multipli di 5 vanno sostituiti dalla stampa "Buzz"
    const restoCinque = num % 5;//number


    //  console.log('resto:',restoTre)

    if (restoTre === 0 && restoCinque === 0) {

        console.log('Fizz-Buzz')

    } else if (restoTre === 0) {

        console.log('Fizz');

        //i numeri multipli di 3 e 5 vanno sostituiti dalla stampa "Fizz Buzz"

    } else if (restoCinque === 0) {

        console.log('Buzz')

    } else {
        console.log(num)
    }

    /*let result = '';
    if(restoTre === 0){
        
        //console.log('Fizz')
            result += 'Fizz';
        }
        
        if(restoCinque === 0){
            
            //console.log('Buzz')
            result += 'Buzz';
            
        }
        console.log(result);*/

     const numeriElement = document.querySelector('.numeri');// Object || null
     const liString = `<li>${num}</li>`;//string
     numeriElement.innerHTML += liString
    
    const liElement = document.createElement('li');
    console.dir(liElement)
    liElement.classList.add('item')
    
    
    console.log(liElement, typeof liElement);

    //  liElement.innerHTML = num

    // console.log(containerDOMElement)







}







