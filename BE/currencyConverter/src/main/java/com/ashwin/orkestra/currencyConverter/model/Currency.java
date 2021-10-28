package com.ashwin.orkestra.currencyConverter.model;

/**
 * <p>
 * An Interface for the Currency List to retrieve the user currencies.
 * </p>
 * <p>
 * copyright & copy; 2020 orkestra.
 * </p>
 * 
 * @author Ashwin Rishi
 */
public interface Currency {
	/**
	 * @return an userId of int. This value will never be {@code null} or empty.
	 */
	int getUserId();

	/**
	 * @return an currency Id of Int. This value will never be {@code null} or
	 *         empty.
	 */
	int getCurrencyId();

	/**
	 * 
	 * @return List of Strings.This value will never be {@code null} or empty.
	 */
	String[] getCurrencies();

}
