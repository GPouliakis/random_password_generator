const passwordLength = 12;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
);

console.log(`Your Password is: ${password}`);
