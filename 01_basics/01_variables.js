const accountId = 144553
let accountEmail = "avan@google.com"
var accountPassword = "12345"
accountCity = "mau"
let accountState;

// accountId = 2 // not allowed


accountEmail = "avnish@.com"
accountPassword = "21212121"
accountCity = "chandigarh"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])