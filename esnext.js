function promisingOperation() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if( Math.round(Math.random()) ){
                resolve('Success!');
            }
            else{
                reject('Failure!');
            }
        }, 1000);
    });
}

async function test() {
    var message = await promisingOperation();
    console.log(message);
}

test();