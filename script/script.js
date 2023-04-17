import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';
export const validateCardHolder = name => /^[a-zA-Z ]*$/.test(name);
export const validateCardNumber2 = number => /^[0-9 ]*$/.test(number);
export const validateCardNumber3 = number => {
	const regex = /^[0-9 ]*$/;
	if (!regex.test(number)) {
		return false;
	}
	const digitsOnly = number.replace(/\s/g, '');
	if (digitsOnly.length !== 16) {
		return false;
	}
	return true;
};
export const validateCVV4 = cvv => /^[0-9]{3}$/.test(cvv);
export const validateCVV5 = cvv => /^[0-9]{3}$/.test(cvv);

const createCard = () => {
	const inputHolder = el(`input.input input__holder`, {type: `text`});
	const inputNumber = el(`input.input input__number`, {maxlength: '19'});
	const inputDate = el(`input.input input__date`,
		{type: `text`, maxlength: '5'});
	const inputCvv = el(`input.input input__cvv`, {
		type: `text`, maxlength: '3'});
	const holder = el(`div.form__input-wrap form__input-wrap_holder`,
		el(`label.form__label form__holder-label`, `Card Holder`), inputHolder);
	const number = el(`div.form__input-wrap form__input-wrap_holder`,
		el(`label.form__label form__number-label`, `Card Number`), inputNumber);
	const date = el(`div.form__input-wrap form__input-wrap_holder`,
		el(`label.form__label form__date-label`, `Card Expiry`), inputDate);
	const cvv = el(`div.form__input-wrap form__input-wrap_cvv`,
		el(`label.form__label form__cvv-label`, `CVV`), inputCvv);
	const button = el('button.form__button', {type: 'submit'}, 'CHECK OUT');
	const validateMessage = el('h2', {style: 'display: none'});

	const cvvError = el('div.error', {style: 'display: none'}, 'Invalid CVV');
	const cvvRegex = /^[0-9]{3,3}$/;

	const dateError = el('div.error', {style: 'display: none'}, 'Invalid Date');

	inputCvv.addEventListener('input', e => {
		const currentValue = e.target.value;
		if (cvvRegex.test(currentValue)) {
			cvvError.style.display = 'none';
		} else {
			cvvError.style.display = 'block';
		}
	});

	const form = el('form.form#form', {action: '#'}, holder, number,
		date, cvv, button, cvvError, dateError, validateMessage);

	const cardName = el('span.card__name', 'John Doe');
	const cardDate = el('span.card__date', 'MM/YY');
	const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
	const creditCard = el('div.credit-card',
		cardNumber, el('div.card__personal', cardName, cardDate));
	const card = el('div.card',
		el('p.secure', 'Secure Checkout'), creditCard, form);

	const nameRegex = /^[a-zA-Z ]*$/;

	inputHolder.addEventListener('input', e => {
		const currentValue = e.target.value;
		if (nameRegex.test(currentValue)) {
			cardName.textContent = currentValue;
		} else {
			e.target.value = currentValue.slice(0, -1);
		}
	});
	inputNumber.addEventListener('input', e => {
		const currentValue = e.target.value;
		e.target.value = currentValue
			.replace(/\D/g, '')
			.replace(/(.{4})/g, '$1 ')
			.trim();
		cardNumber.textContent = e.target.value;
	});

	// const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

	inputDate.addEventListener('input', e => {
		const currentValue = e.target.value;
		e.target.value = currentValue
			.replace(/\D/g, '')
			.replace(/^(\d{2})(\d)/g, '$1/$2')
			.trim();
		cardDate.textContent = e.target.value;
	});

	inputCvv.addEventListener('input', e => {
		const currentValue = e.target.value;
		e.target.value = currentValue
			.replace(/\D/g, '')
			.trim()
			.slice(0, 3);
	});

	form.addEventListener('submit', e => {
		e.preventDefault();
		const cardHolder = inputHolder.value;
		const cardNumber = inputNumber.value;
		const cvv = inputCvv.value;

		const isCardHolderValid = validateCardHolder(cardHolder);
		const isCardNumberValid = validateCardNumber3(cardNumber);
		const isCVVValid = validateCVV5(cvv);

		const isValid = isCardHolderValid && isCardNumberValid && isCVVValid;

		validateMessage.style.display = 'block';
		validateMessage.textContent = isValid ? 'Valid data' : 'Invalid data';
		validateMessage.style.textAlign = 'center';
		setTimeout(() => {
			validateMessage.style.display = 'none';
		}, 2000);
	});

	return el('div.wrapper', card);
};

setChildren(document.body, createCard());
