// var book = [
//
//     {name: "Prince111", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP999", author: "Miha Japan", price: 5.00, 'user login': 'test'}
// ];
//
//
// var str= JSON.stringify(book);
// // console.log(book);


// $.getJSON("data.json", function(data){
// console.log(data);

// });
// ///////////////////////////////////////////////////FOR TEST
//
// // var i;
// // for (i = 0; i < one.length; i++){
// //     console.log(typeof one[i]);
// //     console.log(one[i]);
// // }
// ///////////////////////////////////////////////////FOR_IN
// // var one = [1,'232',true,{name:'Nestor'}];
// // for(var test in one) {
// //     console.log(one[test])
// // }
// //
// // var objj = {
// //     age: 22,
// //     name: 'nestor',
// //     dev: 'Front',
// //     ololo: true
// // };
// // for(test in objj){
// //     console.log(test + ':' + objj[test]);
// // }
// // ///////////////////////////////////
// var objj = {
//     age: 22,
//     name: 'nestor',
//     dev: 'Front',
//     ololo: true
// };
// var masiv = [];
// var i = 0;
// for(masiv[i++] in objj){
//
// };
//
// console.log(masiv);

// ///////////////////////////////////////////////
// var objj = {};
// var masiv = [1,'232',true,{name:'Nestor'}];
// var i = 0;
// for(objj[i++] in masiv){
//
// };
//
// console.log(objj );
// //
// //////////////////////////////////////////////////////////
//
// //////////////////////////////////////////////////////////// PIZDEC //////////////////////////
// var obj = {};
// var obj2 = {};
// var arr = ["12", "fqfqwf", 14214, 10, 34, {name: 'nestor'},true];
// var arr2 = [ 102, {name: 'nestor2'}];
// var arr3 = ["124", 103, {name: 'nestor3'}, true , null];
// var book = [
//     {name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00}
// ];
//
// add(arr);
//
//
// function add(test) {
//     for( let i = 0 ; i < test.length ; i++){
//         // obj = test[i];
//         if( typeof test[i] === 'number'){
//
//             if (obj.number === undefined){
//                 obj.number = [];
//             }
//             obj.number.push(test[i]);
//
//
//         }
//         else if ( typeof test[i] === 'string'){
//
//             if (obj.string === undefined){
//                 obj.string = [];
//             }
//             obj.string.push(test[i]);
//
//         }else if ( typeof test[i] === 'object'){
//
//                 if (obj.object === undefined){
//                 obj.object = [];
//                 }
//                 obj.object.push(test[i]);
//
//         }else if (typeof test[i] === 'boolean ' ) {
//
//             if (obj.boolean === undefined){
//                 obj.boolean = [];
//             }
//             obj.object.push(test[i]);
//         }else{}
//
//     }
// }
// console.log(obj);
// //

////////////////////////////////////////////////////////////////////////////////////////////////
// var i;
// var data = {};
// var book = [
//     {name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00}
// ];
// add(book);
// function add(test) {
//     for(let i = 0; i < test.length ; i++){
//         console.log( test[i]);
//         if (typeof  test[i] === 'object'){
//             if(data.object === undefined){
//                 data.object = [];
//             }
//             data.object.push(test[i]);
//         }
//     }
// }
// dataArr(data);
// function dataArr(testOne) {
//     for (let i = 0; i < testOne.length; i++) {
//        console.log(testOne[i]);
//         if(typeof testOne[i] === 'object' ){
//            if (data.name === undefined){
//                data.name = [];
//            }
//            data.name.push(testOne[i]);
//         }
//         data.name = [];
//         data.author =[];
//         data.price = [];
//
//     }
// }
//
// console.log(data);
// //var i;
// var data = {};
// var book = [
//     {name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00}
// ];
// add(book);
// function add(test) {
//     for(let i = 0; i < test.length ; i++){
//         console.log( test[i]);
//         if (typeof  test[i] === 'object'){
//             if(data.object === undefined){
//                 data.object = [];
//             }
//             data.object.push(test[i]);
//         }
//     }
// }
// dataArr(data);
// function dataArr(testOne) {
//     for (let i = 0; i < testOne.length; i++) {
//        console.log(testOne[i]);
//         if(typeof testOne[i] === 'object' ){
//            if (data.name === undefined){
//                data.name = [];
//            }
//            data.name.push(testOne[i]);
//         }
//         data.name = [];
//         data.author =[];
//         data.price = [];
//
//     }
// }
//
// console.log(data);
// //
// console.log(book[0].name);
// console.log(book[1].name);
// console.log(book[2].name);
// console.log(book[3].name);
///////////////////////////////////////////////////////////////////////////////////////////////////////
//
// var i;
// var data = {};
// var book = [
//     {name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00},
//     {name: "PHP5", author: "Miha Japan", price: 5.00},
//     {name: "PHP4", author: "Miha Japan", price: 5.00},{name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00},
//     {name: "PHP5", author: "Miha Japan", price: 5.00},
//     {name: "PHP4", author: "Miha Japan", price: 5.00},{name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00},
//     {name: "PHP5", author: "Miha Japan", price: 5.00},
//     {name: "PHP4", author: "Miha Japan", price: 5.00},{name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00},
//     {name: "PHP5", author: "Miha Japan", price: 5.00},
//     {name: "PHP4", author: "Miha Japan", price: 5.00},{name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00},
//     {name: "PHP5", author: "Miha Japan", price: 5.00},
//     {name: "PHP4", author: "Miha Japan", price: 5.00},{name: "Prince", author: "John Vaso", price: 12.00},
//     {name: "Wild world", author: "K. Ford", price: 17.50},
//     {name: "Cute love", author: "Mary Jane", price: 20.30},
//     {name: "PHP7", author: "Miha Japan", price: 5.00},
//     {name: "PHP5", author: "Miha Japan", price: 5.00},
//     {name: "PHP4", author: "Miha Japan", price: 5.00},
//     {name: "PHP2", author: "Miha Japan", price: 5.00}
// ];
// add(book);
// function add(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (typeof  test[i] === 'object') {
//             if (data.name === undefined) {
//                 data.name = [];
//             }
//             data.name.push(test[i].name);
//         }
//     }
// }
// add1(book);
// function add1(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (typeof  test[i] === 'object') {
//             if (data.author === undefined) {
//                 data.author = [];
//
//             }
//             data.author.push(test[i].author);
//         }
//
//     }
//
// }
// add2(book);
// function add2(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (typeof  test[i] === 'object') {
//             if (data.price === undefined) {
//                 data.price = [];
//             }
//             data.price.push(test[i].price);
//         }
//     }
// }
// console.log(data);

////////////////////////////////////////////////////////////////////////////////////////////////////!!!!!
// var i;
// var data = {};
// var book = [
//     {name: "Prince111", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP999", author: "Miha Japan", price: 5.00, 'user login': 'test'}
// ];
// //

// add(book);
//
// function add(test) {
//     // var  aaa = [];
//     for (let i = 0; i < test.length; i++) {
//         for (var final in test[i]) {
//             // console.log([final] + ' : ' + test[i][final]);
//             if ([final] === 'object'){
//                 if([final] === undefined){
//                     [final] = [];
//                 }
//             }
//             // aaa[final].push(test[i][final] );
//             // aaa.test = aaa.test || {};
//             // aaa.push(test[i][final]);
//             // data.push(test[i][final]);
//         }
//
//     }
//     }
//     console.log(data);
//     // console.log(book);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// add(book);
// function add(test) {
//     for (let i = 0; i < test.length; i++) {
//
//         if (typeof  test[i] === 'object') {
//             if (data.name === undefined) {
//                 data.name = [];
//             }
//             data.name.push(test[i].name);
//         }
//     }
// }
// add1(book);
// function add1(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (typeof  test[i] === 'object') {
//             if (data.author === undefined) {
//                 data.author = [];
//
//             }
//             data.author.push(test[i].author);
//         }
//
//     }
//
// }
// add2(book);
// function add2(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (typeof  test[i] === 'object') {
//             if (data.price === undefined) {
//                 data.price = [];
//             }
//             data.price.push(test[i].price);
//         }
//     }
// }
//
// console.log(data);
// console.log(book);
//


////////////////////////////////////////////////////////////////////////////////////////////////VARIANTI
//
// var i;
// var data = {};
// var newArray = [];
// var book = [
//     {name: "Prince111", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP999", author: "Miha Japan", price: 5.00, 'user login': 'test'}
// ];
//
// // // var data = {};
// // // var newArray = [];
// // //
// // //  data = book.map(function(elem){
// // //    return{
// // //        price: elem.price,
// // //        name: elem.name
// // //    };
// // // });
// // // //
// // //
// // // // var getName = function(elem){
// // // //     newArray.push(elem.name)
// // // // }
// // // // book.forEach(getName);
// // // //
// // // //
// // //
// // //
// // // // console.log(newArray);
// // //
// // //
// // //
// // add(book);
// // var data = {};
//
// function add(test) {
// //
//     for (let i = 0; i < test.length; i++) {
//         for (var final in test[i]) {
//             data[final] =  data[final] || {};
//             data = test[i][final];
//         }
//     }
// }
// add(book);
// function add(test) {
//     for (let i = 0; i < test.length; i++) {
//         for (var final in test[i]) {
//             data[final] = data[final] || {};
//             data[final] += ' ' + test[i][final];
//         }
//     }
// }
//

// //
// // console.log(newArray);
// console.log(data);
// // console.log(data.name);
//
//
// add(book);
//
// function add(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (Object.prototype.toString.call(test[i]) === '[object Object]') {
//             for (var final in test[i]){
//
//                 console.log(Object.prototype.toString.call(test[i]));
//                 if (data[final] === undefined){
//                     data[final] = [];
//                 }
//                 data[final].push(test[i][final]);
//             }
//
//         }
//     }
// }


// var one =1 ;
// for(let i=3 ; i< 10 ;i+2){
//     // if(i%2==1)
//     // {
//     one *= i;
//     // }
// }
// console.log(one);
// var one=1 ;
// for(i=0 ; i< 10 ;i++){
//     if(i%2==1)
//     {
//         var one = i * one
//     }
// }
// console.log(one);
//
//
//
////////////////////////////////////////////////////////////////////////////////////
// data = {};
// var book = [
//     12321321321,
//     true,
//     "testset",
//     ['qwfqwfqwf', 111],
//     23123213,
//     3423,
//     true,
//     'ererere',
//     {name: "Prince111", author: "John Vaso", price: 12.00, 'user login': 'tes1t'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 't1est'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'tes1t'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'tes1t'},
//     {name: "PHP7", },
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "PHP7", author: "Miha Japan", price: 5.00,},
// ];
// console.log(data);
//
// add(book);
// var arr2 = Array.from(new Set(data.name));
// function add(test)
// {
//     for (let i = 0; i < test.length; i++)
//     {
//         if (Object.prototype.toString.call(test[i]) === '[object Object]')
//         {
//             for (var final in test[i])
//             {
//                 if (data[final] === undefined)
//                 {
//                     data[final] = [];
//                 }console.log(data[final]);
//                 data[final].push(test[i][final]);
//             }
//         }
//     }
// }
//
//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// var arr = ["John Vaso", "K. Ford", "Mary Jane", "Miha Japan", "Mary Jane", "Mary Jane", "Miha Japan"];
//
// console.log(arr);
//
// var arr2 = Array.from(new Set(arr));
//
//
// console.log(arr2);

//
//
// var filter = function(arr){
//     var newArr = [];
//     var i = arr.length - 1;
//     var tmp = {};
//
//     for(; i >= 0; i--){
//         if (arr[i] in tmp) continue;
//         newArr.push(arr[i]);
//         tmp[arr[i]] = 1;
//     }
//
//     return newArr;
// };
// var arr = ["John Vaso", "K. Ford", "Mary Jane", "Miha Japan", "Mary Jane", "Mary Jane", "Miha Japan"];
// console.log(filter(arr));
//





///////////////////////////////////////////////////////////////////////////////////////////////////////////

// data = {};
// dataFiles={};
// var book = [
//     12321321321,
//     true,
//     "testset",
//     ['qwfqwfqwf', 111],
//     23123213,
//     3423,
//     true,
//     'ererere',
//     {name: "Prince111", author: "John Vaso", price: 12.00, 'user login': 'tes1t'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 't1est'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'tes1t'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test1'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'tes1t'},
//     {name: "PHP7" },
//     {name: "Cute love", author: "Mary Jane", },
//
//     {name: "Cute love", author: "Mary Jane",price: 5.00 , price: 20.30},
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "Cute love", author: "Mary Jane", },
//     {name: "PHP7", author: "Miha Japan", price: 5.00 },
//     {name: "PHP7", author: "Miha Japan", price: 5.00 },
//     {name: "PHP7", author: "Miha Japan", price: 5.00 },
//     {name: "PHP7", author: "Miha Japan", price: 5.00 },
//     {name: "PHP7", author: "Miha Japan", price: 5.00 },
//     {name: "PHP7", author: "Miha Japan", price: 5.00 },
//     {name: "Prince111", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "Prince", author: "John Vaso", price: 12.00, 'user login': 'test'},
//     {name: "Wild world", author: "K. Ford", price: 17.50, 'user login': 'test'},
//     {name: "Cute love", author: "Mary Jane", price: 20.30, 'user login': 'test'},
//     {name: "PHP7", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP5", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP4", author: "Miha Japan", price: 5.00, 'user login': 'test'},
//     {name: "PHP999", author: "Miha Japan", price: 5.00, 'user login': 'test'}
// ];
// // console.log(data);
// // console.log(dataFiles);
//
//
//
// add(book);
// var arr2 = Array.from(new Set(data.name));
// function add(test) {
//     for (let i = 0; i < test.length; i++) {
//         if (Object.prototype.toString.call(test[i]) === '[object Object]') {
//             for (var final in test[i]) {
//                 var arr = test[i][final];
//                 if (data[final] === undefined) {
//                     data[final] = [];
//                 }                                                 /////ЦИКЛ ВЫПОЛНИЛСЯ ПОЛУЧИЛИ ДАННЫЕ DATA[FINAL]
//                 var arr2 = Array.from(new Set(data[final]));
//                 data[final] = arr2;
//                 arr2.push(arr);
//             }
//         }
//     }
// }
// var str= JSON.stringify(data);
//
// console.log(str);
////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////JSON

//
// function clickMe() {
//     $.getJSON("data.tmp", function (data) {
//         var empol_data = '';
//         $.each(data, function (key, value) {
//             if (typeof value === 'object') {
//                 if( value.price === undefined ){
//                     value.price = " ";
//                 }
//                 if( value.author === undefined ){
//                     value.author = " ";
//                 }
//                 if( value.author === undefined ){
//                     value.author = " ";
//                 }
//                 if( value.name === undefined ){
//                     value.name = " ";
//                 }
//                 if( value["user login"] === undefined ){
//                     value["user login"] = " ";
//                 }
//                 empol_data += '<tr>'
//                 empol_data += '<td>' + value.name;
//                 empol_data += '<td>' + value.author;
//                 empol_data += '<td>' + value.price;
//                 empol_data += '<td>' + value["user login"];
//
//             }
//         });
//         $('#empol_data').append(empol_data);
//     });
// }
///////////////////////////////////////////////////////////////////GET JSON
// $.getJSON("data.tmp", function (data) {
//     //            var empol_data = '';
//     let table = $('#empol_data tbody');
//     table.empty();
//     $.each(data, function (key, value) {
//         //                if (typeof value === 'object') {
//         //                    if (value.price === undefined) {
//         //                        value.price = "";
//         //
//         //                    }
//         //                    if (value.author === undefined) {
//         //                        value.author = "";
//         //                    }
//         //                    if (value.name === undefined) {
//         //                        value.name = "";
//         //                    }
//         //                    if (value["user login"] === undefined) {
//         //                        value["user login"] = "";
//         //                    }
//
//         if (value.author || value.name || value["user login"] || value.price) {
//             table.append('<tr><td>' + (value.name || '' ) + '</td><td>' + (value.author || '' ) + '</td><td>' + (value.price || '')  + '</td><td>' + (value["user login"] || '') + '</td></tr>');
//         }
//
//     });
//
// })
//     .fail(function () {
//         alert("ОШИБКА В JSON ");
//     })
//     .done(function () {
//         console.log("ВСЕ ЧЁТКО");
//     });
//
// //        $("#empol_data").show()
// }
//


//	btnclick.onmousedown = function () {

// this.onclick=null;
/////////////////////////////////////////////////////////////////////////////AJAX JSON


// var btnclick = document.getElementById('btn');
//
//
// btnclick.onclick = function() {
//     $.ajax(
//         {
//             url: "data.tmp",
//             dataType: 'json',
//             type: 'GET',
//             success: function (data) {
// // //                    let data = JSON.parse(data_resp);
//                 let table = $('#empol_data tbody');
//                 table.empty();
//                 for(let value of data){
//
// // //                    $.each(data, function (key, value) {
//                     if (value.author || value.name || value["user login"] || value.price) {
//                         table.append('<tr><td>' + (value.name || '' ) + '</td><td>' + (value.author || '' ) + '</td><td>' + (value.price || '')  + '</td><td>' + (value["user login"] || '') + '</td></tr>');
//                     }
// // //                    });
//                 }
//
//             },
//             error: function (err) {
//                 console.log(err);
//             }
//
//         }
// //     );
// /*
// ////////////////////////////////////////////////////////////////////////////

// var clickMe = document.getElementById('btn');
//
//clickMe.onclick = function(){
//    $.ajax(
//        {
//			url: "data.json",
//			dataType: "json",
//			type: "GET",
//			success: function (data){
//			let table = $('#empol_data tbody');
//			table.empty();
//			for (let value of data){
//				if (value.author || value.name || value["user login"] || value.price ){
//                    table.append('<tr><td>' + (value.name || '' ) + '</td><td>' + (value.author || '' ) + '</td><td>' + (value.price || '')  + '</td><td>' + (value["user login"] || '') + '</td></tr>');
//
//					}
//				}
//			},
//			error: function(err){
//			    console.log(err);
//            }
//        }
//	)}

//clickMe.onclick = function(){
//    $.getJSON("data.json", function(data){
//        let table = $('#empol_data tbody');
//        table.empty();
//        for(let value of data) {
//            if (value.author || value.name || value["user login"] || value.price) {
//                table.append('<tr><td>' + (value.name || '' ) + '</td><td>' + (value.author || '' ) + '</td><td>' + (value.price || '') + '</td><td>' + (value["user login"] || '') + '</td></tr>');
//
//            }
//
//        }
//
//    }
//    )};
/////////////////////////////////////////////////////////////////////////////////////////
//JS NATIVE JSON

// var clickMe = document.getElementById('btn');
//
// clickMe.onclick = function get(url, callback) {
//     var request = new XMLHttpRequest();
//     request.open("GET", "data.json", true + (new Date()));
//     request.onreadystatechange = function () {
//         if (request.readyState === 4 && request.status === 200) {
//             var type = request.getResponseHeader("Content-Type");
//             if (type === "data.json") {
//                 callback(JSON.parse(request.responseText));
//             }
//             for (var value of JSON.parse(request.responseText)) {
//                 if (value.author || value.name || value["user login"] || value.price) {
//
//                     var tr = document.createElement("tr");
//                     document.getElementById("tdBody").appendChild(tr);
//                     var tdName = document.createElement("td");
//                     var name = document.createTextNode(value.name || '');
//                     tdName.appendChild(name);
//                     tr.appendChild(tdName);
//
//                     var tdPrise = document.createElement("td");
//                     var prise = document.createTextNode(value.price || '');
//                     tdPrise.appendChild(prise);
//                     tr.appendChild(tdPrise);
//
//                     var tdAuthor = document.createElement("td");
//                     var author = document.createTextNode(value.author || '');
//                     tdAuthor.appendChild(author);
//                     tr.appendChild(tdAuthor);
//
//                     var tdUser = document.createElement("td");
//                     var user = document.createTextNode(value["user login"] || '');
//                     tdUser.appendChild(user);
//                     tr.appendChild(tdUser);
//
//                 }
//             }
//         }
//     };
//     request.send();
// };
//


//
// var test_1 = "/index.php?post=15&viev=post";
// var test_2 = "/index.php?post=20&viev=pic";
//
// console.log(test_1);
//
// // /post/15
// // /pic/20


