//Scrivi un programma che stampi inumeri da 1 a 100 in console.
let n = 100;
for(let i = 0; i < n; i++){
    let num = i + 1;
    //  console.log(num)
     
     //i numeri multipli di 3 vanno sostituiti dalla stampa "Fizz"
     const restoTre = num % 3; //number
     
     //i numeri multipli di 5 vanno sostituiti dalla stampa "Buzz"
     const restoCinque = num % 5;//number


     //  console.log('resto:',restoTre)
     
     if(restoTre === 0){
         
         console.log('Fizz')
         
     }else if( restoCinque === 0){

         console.log('Buzz');

            //i numeri multipli di 3 e 5 vanno sostituiti dalla stampa "Fizz Buzz"

    }else
     
     console.log(num);
     
     
     if(restoTre === 0 && restoCinque === 0){
        
        console.log('Fizz-Buzz')
 
     }
    }
    
     
    
   
    
   

