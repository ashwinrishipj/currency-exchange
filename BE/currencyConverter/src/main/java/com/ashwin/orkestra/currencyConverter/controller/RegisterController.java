package com.ashwin.orkestra.currencyConverter.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ashwin.orkestra.currencyConverter.model.UserCredential;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public interface RegisterController {
	/**
	 * Registers a new User with the given UserCredential credentials.
	 * 
	 * @param userData which is of {@link Map} containing emailId and password.
	 * @throws JSONException if the user Credentials is {@code null} or empty.
	 * @return {@code >=1} if the user is registered {@code 0} if there is an active
	 *         user with the {@link UserCredential} of emailId.
	 */

	@PostMapping("/register")
	int registerUser(@RequestBody Map<String, Object> userData);
}
