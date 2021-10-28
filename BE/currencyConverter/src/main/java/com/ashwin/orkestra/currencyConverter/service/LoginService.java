package com.ashwin.orkestra.currencyConverter.service;

import org.springframework.stereotype.Service;

import com.ashwin.orkestra.currencyConverter.model.UserCredential;

@Service
public interface LoginService {
	/**
	 * Search operation that validates the loginCredentials by finding in the
	 * database.
	 * 
	 * @param userCredential The user UserCredential Credentials of
	 *                       {@link UserCredential} to validate.
	 * @return {@code -1} if it is not a valid emailId, {@code 0} if it is invalid
	 *         password and {@code >0} if it is valid login.
	 */
	int validateCredentials(UserCredential userCredential);

	/**
	 * performs an PostGre Email Search for the given {@link UserCredential} and
	 * saves the value {@code}
	 * 
	 * @param userCredential The user UserCredential Credentials of
	 *                       {@link UserCredential} to {@link executeQueryStatement}
	 *                       for the emailid.
	 */
	public void validateEmail(UserCredential userCredential);

	/**
	 * executes the current prepared statement and saves the value {@code}.
	 * 
	 */
	public void executeQuery();
}
