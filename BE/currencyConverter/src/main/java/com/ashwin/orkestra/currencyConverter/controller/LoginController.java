package com.ashwin.orkestra.currencyConverter.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.model.UserCredential;

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
public interface LoginController {
	/**
	 * Validates the UserCredential credentials for the user.
	 * 
	 * @param userData which is of {@link Map} containing emailId and password.
	 * @throws JSONException if the login Credentials is {@code null} or empty.
	 * @return {@code -1} if it is not a valid emailId, {@code 0} if it is invalid
	 *         password and {@code >0} if it is valid login.
	 */

	@PostMapping("/validate")
	int validate(@RequestBody Map<String, Object> userData);
}
