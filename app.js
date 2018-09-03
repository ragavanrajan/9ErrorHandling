const user = { email: 'mikeb@gmail.com' };

try {
    // procedure a Reference error 

    // myFunction();

    // Produce a TypeError 
    // null.myFunction();

    // Will produce syntax error 
    // console.log(eval('2+2'));
    // eval('Hello World');

    //  will produce a URi error  -pass anything doesnt make any sense 
    // decodeURIComponent('%');

    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch (e) {
    console.log(`User Error : ${e.message}`);

    // console.log(e);
    // console.log(`${e.name} : Its Null Stupid`);
    // // Display only the message in console
    // console.log(e.message);
    // // Display only the error name  in console
    // console.log(e.name);
    // // Will return true or false depends on the value 
    // console.log(e instanceof ReferenceError);

} finally {
    console.log(' Finally runs regardless of results');

}

console.log('Program continues....');