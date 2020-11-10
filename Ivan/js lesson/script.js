//let a = 2;
//let b = 4;

//if (a == 3 && b == 4 || ) {
//    console.log('a=3 and b=4');
//} else {
//    console.log('else value');
//}
let count = 20;
//for (let i = 1; i <= count; i++) {
//    console.log(i);
//}
//let i = 1;
//while (i <= count) {
//    console.log(i);
//    i++;
//}
//let str = '';
//let arr = ['Hello ', 'World. ', 'Its me'];
//for (let i = 0; i < arr.length; i++) {
//    str += arr[i];
//}
//console.log(str);
//
//function Factorial(a) {
//    let fact = 1;
//    for (let i = 1; i <= a; i++) {
//        fact *= i;
//    }
//    return fact;
//}
//let b = Factorial(10);
//console.log(b);
//
//function Power(a, b) {
//    let res = 1;
//    for (i = 0; i < b; i++) {
//        res *= a;
//    }
//    return res;
//}
//b = Power(3, 4);
//console.log(b);

function MyArray(a) {
    let arr1 = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 == 0) {
            if (typeof (a[i]) === 'number') {
                arr1.push(a[i]);
            }
        }
    }
    return arr1;
}
//let b = MyArray([4, 7, 20, 15, 17, 22]);
console.log(MyArray([4, 7, 20, 15, 17, 22]));
