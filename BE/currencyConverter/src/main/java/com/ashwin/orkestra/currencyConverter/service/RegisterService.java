package com.ashwin.orkestra.currencyConverter.service;

import com.ashwin.orkestra.currencyConverter.model.UserCredential;

public interface RegisterService {
	/**
	 * Insert operation that inserts the userCredential in the database.
	 * 
	 * @param userCredential The user UserCredential Credentials of
	 *                       {@link UserCredential} to insert.
	 * @return {@code >0} of the userId if registered {@code 0} if the emailId is
	 *         already registered.
	 */
	int registerUser(UserCredential userCredential);

	/**
	 * performs an PostGre Email Search for the given {@link UserCredential} and
	 * saves the value {@code}
	 * 
	 * @param userCredential The user UserCredential Credentials of
	 *                       {@link UserCredential} to {@link executeQueryStatement}
	 *                       for the emailid.
	 * @return {@code 0} if the emailId is not in the database else {@code 1} if
	 *         there is an active user with the {@link UserCredential} emailId
	 */
	public int validateEmail(UserCredential userCredential);
}
