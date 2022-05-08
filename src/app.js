
import Logger from './Logger';
const myName = 'My Name is X';
const myLog = new Logger();
const myArr  = [1,2,3,4,5,6,7];
const body = typeof document !== 'undefined' ? document.querySelector('body') : null;

myLog.info("This is a Logger");
console.log(`The bot name is ${myName}`);

for( const val of myArr){
    console.log(val);
    if(typeof document !== 'undefined'){
        const myHeading = document.createElement('h1');
        myHeading.innerHTML = `Heading Sample <span style="color: red"> custom </span> with Id: ${val}`;
        body.appendChild(myHeading);
    }
}