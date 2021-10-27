package com.ashwin.orkestra.currencyConverter.exception;

/**
 * <p>
 * Argument checker validates the invalid object and argument.
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra.
 * </p>
 * 
 * @author Ashwin Rishi.
 */
public class ArgumentChecker {
	/**
	 * Rejects an argument if it is {@code null} or empty by throwing an
	 * {@link IllegalArgumentException}, otherwise returns that object.
	 * 
	 * @param argument The argument on which to perform a {@code null} or empty.
	 * @throws IllegalArgumentException if the specified {@code argument} is
	 *                                  {@code null} or empty.
	 * @return {@code argument} if it is not {@code null} or empty.
	 */
	public static String rejectIfNullOrEmpty(String argument) {
		if (argument == null || "".equals(argument)) {
			throw new IllegalArgumentException(argument + "cannot be null or empty");
		}

		return argument;
	}

	/**
	 * Rejects an object if it is {@code null} by throwing an
	 * {@link IllegalArgumentException}, otherwise returns that object.
	 * 
	 * @param object the object on which to perform a {@code null}
	 * @return
	 * @throws IllegalArgumentException if the specified {@code argument} is
	 *                                  {@code null}.
	 * @return {@code object} if it is not {@code null}.
	 */
	public static <T> T rejectIfNull(T object) {
		if (object == null) {
			throw new IllegalArgumentException(object + " cannot be null");
		}

		return object;
	}
}
