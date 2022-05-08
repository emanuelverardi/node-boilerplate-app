
import Logger from './Logger';
const emanuel = 'MAOEEEE';
const myLog = new Logger();

myLog.info("XUXU");
console.log(`EEEEEmanuel valieble is ${emanuel}`);

const myArr  = [1,2,3,4,5,6,7];

const body = document.querySelector('body');

console.log(body);

for( const val of myArr){
    console.log(val);

    const myHeading = document.createElement('h1');
    myHeading.innerText = 'Maoee 11  Div';
    body.appendChild(myHeading);
}