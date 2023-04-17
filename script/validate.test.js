/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
import {validateCardHolder, validateCardNumber2, validateCardNumber3,
	validateCVV4, validateCVV5} from './script.js';

describe('validateCardHolder', () => {
	it('should return true for a valid name with one word', () => {
		expect(validateCardHolder('John')).toBe(true);
	});

	it('should return true for a valid name with two words separated by a space',
		() => {
			expect(validateCardHolder('John Doe')).toBe(true);
		});

	it('should return false for a name with non-latin characters', () => {
		expect(validateCardHolder('Иван Иванов')).toBe(false);
	});

	it('should return false for a name with digits', () => {
		expect(validateCardHolder('John Doe 123')).toBe(false);
	});
});

describe('validateCardNumber', () => {
	it('should return true for a valid card number', () => {
		expect(validateCardNumber2('1234 5678 9012 3456')).toBe(true);
	});

	it('should return false for a card number with non-numeric characters',
		() => {
			expect(validateCardNumber2('1234 5678 9012 ABCD')).toBe(false);
		});

	it('should return false for a card number with punctuation', () => {
		expect(validateCardNumber2('1234-5678-9012-3456')).toBe(false);
	});

	it('should return false for a card number with letters', () => {
		expect(validateCardNumber2('1234 5678 9012 abcd')).toBe(false);
	});
});

describe('validateCardNumber', () => {
	it('should return true for a valid card number', () => {
		expect(validateCardNumber3('1234 5678 9012 3456')).toBe(true);
	});

	it('should return false for a card number with less than 16 digits', () => {
		expect(validateCardNumber3('1234 5678 9012')).toBe(false);
	});

	it('should return false for a card number with more than 16 digits', () => {
		expect(validateCardNumber3('1234 5678 9012 3456 7890')).toBe(false);
	});
});

describe('validateCVV', () => {
	it('should return true for a valid CVV with 3 digits', () => {
		expect(validateCVV4('123')).toBe(true);
	});

	it('should return false for a CVV with 1 digit', () => {
		expect(validateCVV4('1')).toBe(false);
	});

	it('should return false for a CVV with 2 digits', () => {
		expect(validateCVV4('12')).toBe(false);
	});

	it('should return false for a CVV with 4 digits', () => {
		expect(validateCVV4('1234')).toBe(false);
	});
});

describe('validateCVV', () => {
	it('should return true for a valid CVV with 3 digits', () => {
		expect(validateCVV5('123')).toBe(true);
	});

	it('should return false for a CVV with letters', () => {
		expect(validateCVV5('ABC')).toBe(false);
	});

	it('should return false for a CVV with punctuation', () => {
		expect(validateCVV5('1-2-3')).toBe(false);
	});

	it('should return false for a CVV with non-numeric characters', () => {
		expect(validateCVV5('12a')).toBe(false);
	});
});
