package com.ashwin.orkestra.currencyConverter.model;

/**
 * <p>
 * CurrencyBuilder.
 * </p>
 * <p>
 * copyright & copy: 2020 Orkestra.
 * </p>
 * 
 * @author Ashwin Rishi.
 */
public interface CurrencyBuilder {
	/**
	 * Initializes the userId from the parameter.
	 * 
	 * @param userId and this cannot be {@code null} or empty.
	 * @return the object Currency for userId defined.
	 */
	CurrencyBuilder userId(int userId);

	/**
	 * Initializes the currencyId from the parameter.
	 * 
	 * @param currencyId and this cannot be {@code null} or empty
	 * @returns the Currency object for the currencyId defined.
	 */
	CurrencyBuilder currencyId(int currencyId);

	/**
	 * Initializes the currencies from the parameter.
	 * 
	 * @param List of Currencies and this cannot be {@code null} or empty
	 * @returns the Currency object for the currencies defined.
	 */
	CurrencyBuilder currencies(String[] currencies);

	/**
	 * Constructs a new {@link Currency} instance from the values set on this
	 * builder.
	 * 
	 * @throws IllegalStateException
	 *                               <ul>
	 *                               <li>if {@link #userId(int)} was not
	 *                               called.</li>
	 *                               <li>if {@link #currencyId(int)} was not
	 *                               called.</li>
	 *                               <li>if {@link #currencies(List<String>)} was
	 *                               not called.</li>
	 *                               </ul>
	 * @return an instance of the Currency object.
	 */
	Currency build();
}
