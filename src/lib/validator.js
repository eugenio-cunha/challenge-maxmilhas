'use strict';

/**
 * ESTE VALIDADOR NÃO É DE MINHA AUTORIA
 *
 * @author Jean Carlo Nascimento <jnascimento@gmail.com>
 *
 * https://gist.github.com/suissa
 */

const mod11 = num => num % 11;
const NOT = x => !x;
const isEqual = a => b => b === a;
const mergeDigits = (num1, num2) => `${num1}${num2}`;
const getTwoLastDigits = cpf => `${cpf[9]}${cpf[10]}`;
const getCpfToCheckInArray = cpf => cpf.substr(0, 9).split('');
const generateArray = length => Array.from({ length }, (v, k) => k);

const isIn = list => value => list.findIndex(v => value === v) >= 0;

const isSameDigitsCPF = cpfFull => isIn(generateArray(10).map(generateStringSequence(11)))(cpfFull);

const generateStringSequence = times => char => `${char}`.repeat(times);

const toSumOfMultiplication = total => (result, num) => result + num * total--;

const getSumOfMultiplication = (list, total) => list.reduce(toSumOfMultiplication(total), 0);

const getValidationDigit = total => cpf => getDigit(mod11(getSumOfMultiplication(cpf, total)));

const getDigit = num => (num > 1 ? 11 - num : 0);

const isValid = cpfFull => {
  const cpf = getCpfToCheckInArray(cpfFull);
  const firstDigit = getValidationDigit(10)(cpf);
  const secondDigit = getValidationDigit(11)(cpf.concat(firstDigit));

  return isEqual(getTwoLastDigits(cpfFull))(mergeDigits(firstDigit, secondDigit));
};

exports.isValidCPF = CPF => NOT(isSameDigitsCPF(CPF)) && isValid(CPF);
