export const cardCount = (cardNumber, currentCard) => {
	if (currentCard == cardNumber - 1) {
		return true
	}
}

export const count = (currentCard, cardNumber) =>
	currentCard + 1 + " / " + cardNumber
