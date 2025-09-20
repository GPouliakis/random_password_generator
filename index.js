function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersChars = "1234567890";
  const symbolsChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  return "";
}

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
