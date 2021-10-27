package com.ashwin.orkestra.currencyConverter.model;

/**
 * <p>
 * UserCredentialBuilder.
 * </p>
 * <p>
 * copyright & copy: 2020 Orkestra.
 * </p>
 * 
 * @author Ashwin Rishi.
 */
public interface UserCredentialBuilder {
	/**
	 * Initializes the EmailId from the parameter.
	 * 
	 * @param emailId and this cannot be {@code null} or empty.
	 * @return the object UserCredentialBuilder for emailId defined.
	 */
	UserCredentialBuilder emailId(String emailId);

	/**
	 * Initializes the Password from the parameter.
	 * 
	 * @param password and this cannot be {@code null} or empty
	 * @returns the UserCredentialBuilder object for the password defined.
	 */
	UserCredentialBuilder password(String password);

	/**
	 * Constructs a new {@link UserCredential} instance from the values set on this builder.
	 * 
	 * @throws IllegalStateException
	 *                               <ul>
	 *                               <li>if {@link #emailId(String)} was not
	 *                               called.</li>
	 *                               <li>if {@link #password(String)} was not
	 *                               called.</li>
	 *                               </ul>
	 * @return an instance of the UserCredential object.
	 */
	UserCredential build();
}
