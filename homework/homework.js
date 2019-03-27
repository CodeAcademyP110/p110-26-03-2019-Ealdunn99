// // homework n1

// "use strict";

// let cvb = ("yes");



// while(cvb=="yes"|"Yes"|"y"|"Y"){



// let numbers = [];
// let yourimput = +prompt("Array in uzunlugu nece reqemli olsun ?");

// while(isNaN(yourimput) | yourimput==0)
// {
//     alert("1+ eded yaz" )
//     yourimput = +prompt("Array in uzunlugu nece reqemli olsun ?");
// }

//         for (let i = 0; i < yourimput; i++) {
//             numbers.push(+prompt(`${i+1}-ci/cu reqemi daxil edin: `));    
//          }
         
//          let max = numbers[0] ;
//          let min = numbers[0] ;
//          let orta = 0;
//          let cem =0;
//          for (let i = 0; i < numbers.length; i++) {
//            if (numbers[i] > max) {
//                max = numbers[i];
//                }
//            if (numbers[i] < min) {
//                  min = numbers[i];
//                  }
//             cem = cem + numbers[i];
             
               
             
//          }
//           orta = cem/yourimput;
//          alert(" max: " + max + "    min: " + min  + "    orta: " + orta);
            
//          cvb = prompt("tekrar ucun 'yes' yazin");
// }






// // homework n2

// "use strict";

// let cvb = ("yes");



// while(cvb=="yes"|"Yes"|"y"|"Y"){



// let numbers = [];
// let yourimput = +prompt("Array in uzunlugu nece reqemli olsun ?");

// while(isNaN(yourimput) | yourimput==0)
// {
//     alert("1+ eded yaz" )
//     yourimput = +prompt("Array in uzunlugu nece reqemli olsun ?");
// }

//         for (let i = 0; i < yourimput; i++) {
//             numbers.push(+prompt(`${i+1}-ci/cu reqemi daxil edin: `));    
//          }
         
//          let cutsay = 0;
       
//          for (let i = 0; i < numbers.length; i++) {
//            if (numbers[i] %2 == 0) {
//             cutsay++;
//                }
         
           
             
               
             
//          }
         
//          alert(" cut ededlerin sayi: " + cutsay);
            
//          cvb = prompt("tekrar ucun 'yes' yazin");
// }







// // homework n3

// "use strict";

// let cvb = ("yes");



// while(cvb=="yes"|"Yes"|"y"|"Y"){



// let numbers = [];
// let yourimput = +prompt("Array in uzunlugu nece reqemli olsun ?");

// while(isNaN(yourimput) | yourimput==0)
// {
//     alert("1+ eded yaz" )
//     yourimput = +prompt("Array in uzunlugu nece reqemli olsun ?");
// }

//         for (let i = 0; i < yourimput; i++) {
//             numbers.push(+prompt(`${i+1}-ci/cu reqemi daxil edin: `));    
//          }
         
//          let cutsay = 0;
//          let cem = 0;
//          let cutcem = 0;
//          let tekcem = 0;
//          for (let i = 0; i < numbers.length; i++) {
//            if (numbers[i] %2 == 1) {
//             tekcem = tekcem + numbers[i];

            
//                }
//                if (numbers[i] %2 == 0) {
//                 cutcem = cutcem + numbers[i];
    
                
//                    }
//                cem = cem + numbers[i];
         
           
             
               
             
//          }
         
//          alert("cem: " + cem + "   cutcem: " + cutcem +"   tekcem :  " + tekcem) ;
            
//          cvb = prompt("tekrar ucun 'yes' yazin");
// }








// homework n4

"use strict";

let sozler = [];


 for (let i = 0; i <10; i++) {
         
    sozler.push(prompt(`${i+1}-ci/cu sozu daxil edin: `))
}
        
let  soz;
let sozsay =0;
for (let i = 0; i < sozler.length; i++) {
    if (sozler[i].length > sozsay) {
        sozsay = sozler[i].length;
        soz =sozler[i] 
    }
    
}

console.log(sozsay,soz)
