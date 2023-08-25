// 22) callBack hell example usin setTimeOut method.
let a22 = 10;
let b22 = 20;
let sum22;

let callBackHellFunction = () => {
    setTimeout(()=>{
        sum22 = a22 + b22;
        console.log("I am first function callback");
        setTimeout(()=>{
            console.log("I am second function callback");
            console.log(`sum is ${sum22}`);
            setTimeout(()=>{
                console.log("I am third function callback");
                console.log(`If we add 10 to sum result is ${sum22 + 10}`);
            },1000)
        },2000)
    },3000);
}

callBackHellFunction();

// above example is very hard to understand so we will do same example with promise;

let promise = new Promise((resolve,reject) => {
    if(a22 == 10 && b22 == 20){
        setTimeout(()=>{
            resolve("ready to do calculation");
        },9000);
        
    }
    else{
        reject("values are undefined");
    }
});

promise.then(res=> {
    sum22 = a22 + b22;
    console.log("I am first function promise");
}).then(res=> {
    console.log("I am second function promise");
    console.log(`sum is ${sum22}`);
}).then(res =>{
    console.log("I am third function promise");
    console.log(`If we add 10 to sum result is ${sum22 + 10}`);
}).catch(res => {
    console.log("Error");
});
