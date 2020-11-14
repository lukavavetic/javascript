'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriverLicense) console.log('I can drive!');

//without use strict it does not show any errors
//with use strict it shows hasDriversLicense is not defined

//with strict: Uncaught SyntaxError: Unexpected strict mode reserved word
//without: no error
const interface = 'Audio';
