package com.ashwin.orkestra.currencyConverter.service;

import java.util.Map;

import com.ashwin.orkestra.currencyConverter.model.Currency;

public interface CurrencyUpdateService {
	/**
	 * updates a new Currency to an existing array of String for the user. This
	 * updates can be of type : insert, modify and delete.
	 * 
	 * @param userData which is of {@link Map} containing userId and currency
	 *                 String.
	 * @throws JSONException if the currency is {@code null} or empty.
	 * @return List of {@Link Currency} after updating.
	 */
	Currency insert(Map<String, Object> userData);
}
