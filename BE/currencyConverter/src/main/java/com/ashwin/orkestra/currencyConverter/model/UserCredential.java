package com.ashwin.orkestra.currencyConverter.model;

/**
 * <p>
 * An Interface for the UserCredential build to retrieve the user credentials.
 * </p>
 * <p>
 * copyright & copy; 2020 orkestra.
 * </p>
 * 
 * @author Ashwin Rishi
 */
public interface UserCredential {
	/**
	 * @return an EmailId of String. This value will never be {@code null} or empty.
	 */
	String getEmailId();

	/**
	 * @return an password of String. This value will never be {@code null} or
	 *         empty.
	 */
	String getPassword();
}
