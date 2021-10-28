package com.ashwin.orkestra.currencyConverter.service;

import org.springframework.stereotype.Service;
import com.ashwin.orkestra.currencyConverter.model.Currency;

@Service
public interface CurrencyFetchService {
	/**
	 * Fetches the currency list for the given user Id.
	 * 
	 * @param id of int to fetch the currency.
	 * @throws JSONException if the Currency is {@code null} or empty.
	 * @return returns {#link Currency} list for the given userId.
	 */
	Currency findById(int id);
}
