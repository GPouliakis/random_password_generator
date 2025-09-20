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
  let password = "";

  allowedChars += includeLowerCase ? lowerCaseChars : "";
  allowedChars += includeUpperCase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numbersChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  console.log(allowedChars);

  if (length <= 6) {
    return `(passowrd length must be at least 6)`;
  }
  if (allowedChars === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
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
