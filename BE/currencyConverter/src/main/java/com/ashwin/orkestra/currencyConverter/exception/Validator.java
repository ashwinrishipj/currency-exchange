package com.ashwin.orkestra.currencyConverter.exception;

/**
 * <p>
 * validates on the invalid argument and object.
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
public class Validator {
	/**
	 * Rejects an argument if it is {@code null} or empty by throwing an
	 * {@link IllegalStateException}, otherwise returns that object.
	 *
	 * @param argument the string on which to perform the {@code null} and empty
	 *                 check
	 * @throws IllegalStateException if {@code argument} is {@code null} or empty
	 * @return {@code argument} if it is not {@code null} or empty.
	 */
	public static String validateNotNullOrEmpty(String argument) {
		if (argument == null || argument == "null" || "".equals(argument)) {
			throw new IllegalStateException(argument + "cannot be null or empty");
		}

		return argument;
	}

	/**
	 * Rejects an object if it is {@code null} by throwing an
	 * {@link IllegalStateException}, otherwise returns that object.
	 * 
	 * @param object the object on which to perform a {@code null}
	 * @throws IllegalStateException if the specified {@code object} is
	 *                               {@code null}.
	 * @return {@code object} if it is not {@code null}.
	 */
	public static <T> T validateNotNull(T object) {
		if (object == null) {
			throw new IllegalStateException(object + " cannot be null");
		}

		return object;
	}
}
