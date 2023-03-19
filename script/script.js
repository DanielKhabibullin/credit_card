import {el, setChildren} from '../node_modules/redom/dist/redom.es.js';

const createCard = () => {
	const inputHolder = el(`input.input input__holder`, {type: `text`});
	const inputNumber = el(`input.input input__number`, {maxlength: '19'});
	const inputDate = el(`input.input input__date`,
		{type: `text`, maxlength: '5'});
	const inputCvv = el(`input.input input__cvv`, {type: `text`});
	const holder = el(`div.form__input-wrap form__input-wrap_holder`,
		el(`label.form__label form__holder-label`, `Card Holder`), inputHolder);
	const number = el(`div.form__input-wrap form__input-wrap_holder`,
		el(`label.form__label form__number-label`, `Card Number`), inputNumber);
	const date = el(`div.form__input-wrap form__input-wrap_holder`,
		el(`label.form__label form__date-label`, `Card Expiry`), inputDate);
	const cvv = el(`div.form__input-wrap form__input-wrap_cvv`,
		el(`label.form__label form__cvv-label`, `CVV`), inputCvv);
	const button = el('button.form__button', 'CHECK OUT');
	const form = el('form.form#form', {action: '#'}, holder, number,
		date, cvv, button);

	const cardName = el('span.card__name', 'John Doe');
	const cardDate = el('span.card__date', 'MM/YY');
	const cardNumber = el('span.card__number', 'xxxx xxxx xxxx xxxx');
	const creditCard = el('div.credit-card',
		cardNumber, el('div.card__personal', cardName, cardDate));
	const card = el('div.card',
		el('p.secure', 'Secure Checkout'), creditCard, form);

	inputHolder.addEventListener('input', e => {
		cardName.textContent = e.target.value;
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

	return el('div.wrapper', card);
};

setChildren(document.body, createCard());
