package com.ashwin.orkestra.currencyConverter.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.model.Currency;

/**
 * <p>
 * interface that represents to validate the user of the Associate.
 * </p>
 * <p>
 * copyright & copy; 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi
 */
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public interface CurrencyController {
	/**
	 * Fetches the currency list for the given user Id.
	 * 
	 * @param id of int to fetch the currency.
	 * @throws JSONException if the Currency is {@code null} or empty.
	 * @return returns {#link Currency} list for the given userId.
	 */
	@GetMapping("/get/{id}")
	Currency fetchById(@PathVariable("id") int id);

	/**
	 * updates a new Currency to an existing array of String for the user. This
	 * updates can be of type : insert, modify and delete.
	 * 
	 * @param userData which is of {@link Map} containing userId and currency
	 *                 String.
	 * @throws JSONException if the currency is {@code null} or empty.
	 * @return List of {@Link Currency} after updating.
	 */
	@PostMapping("/update")
	Currency update(@RequestBody Map<String, Object> userData);
}
