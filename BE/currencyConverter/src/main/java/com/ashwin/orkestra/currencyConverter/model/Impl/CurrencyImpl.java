package com.ashwin.orkestra.currencyConverter.model.Impl;

import java.util.Objects;

import com.ashwin.orkestra.currencyConverter.exception.ArgumentChecker;
import com.ashwin.orkestra.currencyConverter.exception.Validator;
import com.ashwin.orkestra.currencyConverter.model.Currency;
import com.ashwin.orkestra.currencyConverter.model.CurrencyBuilder;

/**
 * <p>
 * Implementation class of {@link Currency}
 * </p>
 * <p>
 * copyright & copy : 2021 Orkestra
 * </p>
 * 
 * @author Ashwin Rishi.
 */
public class CurrencyImpl implements Currency {

	private int currencyId;
	private int userId;
	private String[] currencies;

	public CurrencyImpl(Builder builder) {
		super();
		this.currencyId = builder.currencyId;
		this.userId = builder.userId;
		this.currencies = builder.currencies;
	}

	public int getCurrencyId() {
		return currencyId;
	}

	public int getUserId() {
		return userId;
	}

	public String[] getCurrencies() {
		return currencies;
	}

	@Override
	public int hashCode() {
		return Objects.hash(currencies, currencyId, userId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof CurrencyImpl)) {
			return false;
		}
		CurrencyImpl other = (CurrencyImpl) obj;
		return Objects.equals(currencies, other.currencies) && currencyId == other.currencyId && userId == other.userId;
	}

	/**
	 * <p>
	 * Builder class Implementation of {@link CurrencyBuilder}
	 * </p>
	 * <p>
	 * copyright & copy : 2021 Orkestra
	 * </p>
	 * 
	 * @author Ashwin Rishi
	 */

	public static class Builder implements CurrencyBuilder {

		private int userId;
		private int currencyId;
		private String[] currencies;

		@Override
		public CurrencyBuilder userId(int userId) {
			this.userId = ArgumentChecker.rejectIfNull(userId);
			return this;
		}

		@Override
		public CurrencyBuilder currencyId(int currencyId) {
			this.currencyId = ArgumentChecker.rejectIfNull(currencyId);
			return this;
		}

		@Override
		public CurrencyBuilder currencies(String[] currencies) {
			this.currencies = ArgumentChecker.rejectIfNull(currencies);
			return this;
		}

		@Override
		public Currency build() {
			Validator.validateNotNull(userId);
			Validator.validateNotNull(currencyId);
			return new CurrencyImpl(this);
		}
	}
}
