function userLogin(email:string,passWord:number):string | number; // overload1
function userLogin(email:string,password?:string):string // overload2 having optional password

function userLogin(email:any,password:any): any{ // main function
    return `The user email is ${email} and password is ${password}.`
}

// the above function will take user email and password or it can be executed with only user 
// email as listed below

console.log(userLogin("amjad@abc.com","abc123")); 
console.log(userLogin("amjad@123.com"));