package com.ashwin.orkestra.currencyConverter.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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
public interface CurrencyController {
	/**
	 * Validates the UserCredential credentials for the user.
	 * 
	 * @param userData which is of {@link Map} containing emailId and password.
	 * @throws JSONException if the login Credentials is {@code null} or empty.
	 * @return {@code -1} if it is not a valid emailId, {@code 0} if it is invalid
	 *         password and {@code >0} if it is valid login.
	 */

	@GetMapping("/getAll")
	List<Currency> fetchAll();

	@GetMapping("/getById")
	Optional<Currency> findById();
}
