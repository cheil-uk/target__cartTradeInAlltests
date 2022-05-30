// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================

var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {

	'use strict';

	var main = {

		// ==========================================================================
		// Variables and config Properties add below
		// ==========================================================================


		//Init
		init: function () {
			main.doEverythingTimeout();
		},


		// ==========================================================================
		// Checking jQuery
		// ==========================================================================
		doEverythingTimeout: function () {
			var _self = this;

			console.log('XXX - doEverythingTimeout');

			setTimeout(function () {
				if (window.$) {
					console.log('doEverythingTimeout - jQuery loaded');
					main.appendNewStyle();
					main.removeStuff();
					main.addElements();

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 900)
		},


		// ==========================================================================
		// Adding style
		// ==========================================================================
		appendNewStyle: function () {

			/* FYI: the CSS code is in separated file, in SCSS format that generates the CSS file. After, the gulp file finds the [CSS] and replaces with minified code from file */

			//To insert minified inline string uncomment this variable and paste here
			//Else, use default uncommented variable
			// var _css = '';

			var _css = '[[CSS]]';

			//
			// Adding style definitions to DOM
			// --------------------------------------------------------------------------
			var _head = document.head || document.getElementsByTagName('head')[0],
				_style = document.createElement('style');

			_style.type = 'text/css';
			if (_style.styleSheet) { // This is required for IE8 and below.
				_style.styleSheet.cssText = _css;
			} else {
				_style.appendChild(document.createTextNode(_css));
			}
			_head.appendChild(_style);

		},

		removeStuff: function () {

			console.log('removeStuff');

			//Remove Elements
		},



		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		addElements: function () {

			const testCartProducts = [
				'Galaxy Z Flip3',
				'Galaxy Z Fold3 5G',
				'Galaxy S22 Ultra',
				'Galaxy A53 5G',
				'Galaxy A52s 5G',
				'Galaxy S22 5G',
				'Galalxy S22+',
				'Tab S8',
				'Tab S8 Ultra']
			let currentCartItems = []

			const cartItemNames = document.querySelectorAll('.cart-item__name');

			function footerTerms(terms) {
				const footerContainer = document.querySelector('.TermsConditionsSlotContent');
				const termsContainer = document.createElement('div');
				termsContainer.classList.add('tradeInterms');
				termsContainer.innerHTML = `<p>${terms}</p>`
				footerContainer.prepend(termsContainer)
			}

			function tracking(data) {
				s.linkTrackVars="eVar48,events";
				s.events="event48";
				s.eVar48 = data;
				s.tl(this,'o');
			}

			function changeUI(text) {
				const learnMore = document.createElement('p')
				learnMore.classList.add('learnmoreBtn');
				learnMore.innerText = 'Learn more'

				cartItemNames.forEach((cartName) => {
					if (cartName.innerText.includes(text)) {
						const parentCartContainer = cartName.parentElement.parentElement.parentElement
						const tradeInContainer = parentCartContainer.querySelector('div:nth-child(2) > div.service-item__details > div > div');
						const tradeInBtn = parentCartContainer.querySelector('div:nth-child(2) > div.service-item__actions > div > button');
						const discountBtn = tradeInBtn.querySelector('.action-text')

						if (text.includes('Galaxy Z Flip3')) {

								tradeInContainer.innerText = `Trade in your old device for an instant discount of up to £470 off your order`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung Shop Online by 04/05/22. £470 value based on Galaxy S21 Ultra 512GB. Value dependent on model and condition. Charges apply if you do not send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Galaxy Z Fold3 5G')) {

								tradeInContainer.after(learnMore)
								tradeInContainer.innerText = `Trade in your old device for an instant discount of up to £470 off your order`
								footerTerms(`Purchase from Samsung Shop Online by 04/05/22. £470 value based on Galaxy S21 Ultra 512GB. Value dependent on model and condition. Charges apply if you do not send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Galaxy A53 5G')) {

								tradeInContainer.innerText = `Up to £100 off the new Galaxy A53 5G with Trade In`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung.com by  29/04/22. £100 value based on Galaxy A80. Values vary by model and condition . Purchased device will be blocked if you don't send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Galaxy A52s 5G')) {

								tradeInContainer.innerText = `Up to £100 off the new Galaxy A52s 5G with Trade In`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung.com by 29/04/22. £100 value based on Galaxy A80. Values vary by model and condition . Purchased device will be blocked if you don't send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Galaxy S22 5G')) {

								tradeInContainer.innerText = `Enjoy a guaranteed £200 off the Galaxy S22 when you trade in any Android phone in any condition`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung.com by 04/05/22. £200 based on any working or broken Android phone. Purchased phone will be blocked if you don't send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Galaxy S22 Ultra')) {

								tradeInContainer.innerText = `Enjoy a guaranteed £200 off the Galaxy S22 when you trade in any Android phone in any condition`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung.com by 04/05/22. £200 based on any working or broken Android phone. Purchased phone will be blocked if you don't send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Tab S8')) {

								tradeInContainer.innerText = `Trade in your old device for an instant discount of up to £430 off your order`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung Shop Online by <span class="+"tradeinValue__49114"+">05.05.22 - 31.05.22<span>. £450 value based on iPad Pro 5 (2021). Values vary based on model and condition. Purchased tablet will be blocked if you don't send us your trade-in device. T&Cs apply`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else if (text.includes('Tab S8 Ultra')) {

								tradeInContainer.innerText = `Trade in your old device for an instant discount of up to £430 off your order`
								tradeInContainer.after(learnMore)
								footerTerms(`Purchase from Samsung Shop Online by <span class="+"tradeinValue__49114"+">05.05.22 - 31.05.22<span>. £450 value based on iPad Pro 5 (2021). Values vary based on model and condition. Purchased tablet will be blocked if you don't send us your trade-in device. T&Cs apply.`)
								tracking(learnMore)
								discountBtn.innerText = 'Add Discount'
								learnMore.onclick = () => {tradeInBtn.click()}

						} else {
							tradeInContainer.innerText = 'Trade in product'
						}
					}
				})
			}


			cartItemNames.forEach((cartItemName) => {
				currentCartItems.push(cartItemName.innerText)
			})

			testCartProducts.forEach((cartName) => {

				for (const currentCartItem of currentCartItems) {
						if (currentCartItem.includes(cartName)) {
							changeUI(currentCartItem)
						}
				}
			})



		},


		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			console.log('XXX - setEvents: ' + elm);

			switch (elm) {
				case 'modal':
					//code to open modal;
					break;
				case 'financePopup':
				//code to open something else;
				default:
					break;
			}



		},

		resizeWindow: function () {
			// as new elements added to panel we need to resize window to activate amend height of Product Panels
			setTimeout(function () {
				$(window).resize();
				console.log('window resized');
			}, 100);
		}


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

